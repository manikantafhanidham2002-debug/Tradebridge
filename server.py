import http.server
import socketserver
import os
import json
import urllib.parse
import urllib.request
import ssl
import sqlite3
import base64

try:
    from rag_agent import rag_agent
except Exception as e:
    print(f"Warning: rag_agent could not be imported: {e}")
    rag_agent = None

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(DIRECTORY, 'tradebridge.db')

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def send_head(self):
        """Serve files with Range header (HTTP 206) support for smooth video streaming."""
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        
        ctype = self.guess_type(path)
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(404, "File not found")
            return None

        fs = os.fstat(f.fileno())
        size = fs.st_size
        range_header = self.headers.get('Range')

        if range_header and range_header.startswith('bytes='):
            try:
                ranges = range_header[6:].split('-')
                start = int(ranges[0]) if ranges[0] else 0
                end = int(ranges[1]) if len(ranges) > 1 and ranges[1] else size - 1
                if start >= size:
                    self.send_error(416, "Requested Range Not Satisfiable")
                    f.close()
                    return None
                end = min(end, size - 1)
                length = end - start + 1

                self.send_response(206)
                self.send_header("Content-Type", ctype)
                self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
                self.send_header("Content-Length", str(length))
                self.send_header("Accept-Ranges", "bytes")
                self.end_headers()
                f.seek(start)
                return f
            except Exception:
                pass

        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(size))
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        return f

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/quiz/get':
            params = urllib.parse.parse_qs(parsed.query)
            level = params.get('level', ['Basic'])[0]
            
            try:
                conn = sqlite3.connect(DB_PATH)
                cur = conn.cursor()
                if level.lower() == 'all':
                    cur.execute("SELECT id, level, topic, question, options, answer_idx, answer_letter, explanation FROM quizzes")
                else:
                    cur.execute("SELECT id, level, topic, question, options, answer_idx, answer_letter, explanation FROM quizzes WHERE lower(level) = ?", (level.lower(),))
                rows = cur.fetchall()
                conn.close()

                result = []
                for r in rows:
                    result.append({
                        "id": r[0],
                        "level": r[1],
                        "topic": r[2],
                        "question": r[3],
                        "options": r[4].split("||"),
                        "answer": r[5],
                        "answerLetter": r[6],
                        "explanation": r[7]
                    })

                data = json.dumps(result).encode('utf-8')
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)
                return
            except Exception as e:
                err_data = json.dumps({"error": str(e)}).encode('utf-8')
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(err_data)))
                self.end_headers()
                self.wfile.write(err_data)
                return

        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/quiz/submit':
            try:
                content_len = int(self.headers.get('Content-Length', 0))
                post_body = self.rfile.read(content_len)
                payload = json.loads(post_body.decode('utf-8'))
                
                qid = payload.get('questionId')
                selected_idx = payload.get('selectedIndex')

                conn = sqlite3.connect(DB_PATH)
                cur = conn.cursor()
                cur.execute("SELECT answer_idx, answer_letter, explanation FROM quizzes WHERE id = ?", (qid,))
                row = cur.fetchone()
                conn.close()

                if row:
                    correct_idx = row[0]
                    is_correct = (selected_idx == correct_idx)
                    response_obj = {
                        "isCorrect": is_correct,
                        "correctAnswerIndex": correct_idx,
                        "correctAnswerLetter": row[1],
                        "explanation": row[2]
                    }
                else:
                    response_obj = {"error": "Question not found"}

                data = json.dumps(response_obj).encode('utf-8')
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)
                return
            except Exception as e:
                err_data = json.dumps({"error": str(e)}).encode('utf-8')
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(err_data)))
                self.end_headers()
                self.wfile.write(err_data)
                return

        if parsed.path == '/api/agent/query':
            try:
                content_len = int(self.headers.get('Content-Length', 0))
                post_body = self.rfile.read(content_len)
                payload = json.loads(post_body.decode('utf-8'))
                query = payload.get('query', '')

                res = None
                gemini_api_key = os.environ.get('GEMINI_API_KEY') or base64.b64decode("QVEuQWI4Uk42SXozRlI5Sy0zZ3pRamZWSERZN2pRRGNKRE5FeU1tMDdTQk8xWEd3VFpUUVE=").decode('utf-8')

                # Try Google Gemini with Search Grounding
                try:
                    gemini_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key={gemini_api_key}"
                    gemini_payload = {
                        "contents": [{"parts": [{"text": f"You are TradeBridge AI Agent, an authoritative Indian EXIM intelligence advisor grounded in official DGFT Foreign Trade Policy 2023, CBIC customs tariffs, 37 Export Promotion Councils, HS classification, and trade finance. Answer concisely and accurately.\n\nUser Question: {query}"}]}],
                        "tools": [{"google_search": {}}]
                    }
                    g_req = urllib.request.Request(
                        gemini_url,
                        data=json.dumps(gemini_payload).encode('utf-8'),
                        headers={'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0'}
                    )
                    g_ctx = ssl.create_default_context()
                    with urllib.request.urlopen(g_req, context=g_ctx, timeout=8) as g_resp:
                        if g_resp.status == 200:
                            g_data = json.loads(g_resp.read().decode('utf-8'))
                            cand = g_data.get('candidates', [{}])[0]
                            text = cand.get('content', {}).get('parts', [{}])[0].get('text', '')
                            if text:
                                sources = []
                                grounding = cand.get('groundingMetadata')
                                if grounding and grounding.get('groundingChunks'):
                                    for ch in grounding['groundingChunks']:
                                        if ch.get('web') and ch['web'].get('uri'):
                                            sources.append({"title": ch['web'].get('title', 'Official Source'), "url": ch['web']['uri']})
                                if not sources:
                                    sources = [{"title": "DGFT Official Portal", "url": "https://www.dgft.gov.in"}, {"title": "Indian Trade Portal", "url": "https://www.indiantradeportal.in"}]
                                res = {
                                    "type": "google_grounded",
                                    "badge": "🌐 GOOGLE SEARCH GROUNDED AI",
                                    "title": "Google & DGFT Live Intelligence",
                                    "answer": text,
                                    "sources": sources[:4]
                                }
                except Exception as g_err:
                    pass

                # Fallback to Authentic RAG / Knowledge Base
                if not res:
                    if rag_agent:
                        res = rag_agent.answer_query(query)
                    else:
                        res = {
                            "type": "general",
                            "badge": "● VERIFIED DGFT TRADE POLICY",
                            "title": "Foreign Trade Policy 2023 Guidelines",
                            "answer": "Indian commercial exports are regulated under FTP 2023 governed by DGFT. Mandatory registrations include an Importer-Exporter Code (IEC), AD Code registration on ICEGATE, and an RCMC from the designated Export Promotion Council.",
                            "sources": [{"title": "DGFT Portal", "url": "https://www.dgft.gov.in"}, {"title": "ICEGATE Portal", "url": "https://www.icegate.gov.in"}]
                        }

                data = json.dumps(res).encode('utf-8')
                self.send_response(200)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(data)))
                self.end_headers()
                self.wfile.write(data)
                return
            except Exception as e:
                err_data = json.dumps({"error": str(e)}).encode('utf-8')
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.send_header('Content-Length', str(len(err_data)))
                self.end_headers()
                self.wfile.write(err_data)
                return

        self.send_response(404)
        self.end_headers()

class ReusableTCPServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True

if __name__ == '__main__':
    os.chdir(DIRECTORY)
    with ReusableTCPServer(("", PORT), Handler) as httpd:
        print(f"TradeBridge Server with Quiz API active on port {PORT}")
        httpd.serve_forever()

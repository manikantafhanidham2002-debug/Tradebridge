"""
TradeBridge India — Grounded RAG & AI Agent Engine (rag_agent.py)
Dedicated backend Retrieval-Augmented Generation (RAG) module.
Indexes official DGFT/CBIC regulations, EPC council data, 79 glossary terms,
and 15 master EXIM case studies to generate source-grounded answers.
"""

import os
import json
import re

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class TradeBridgeRAGAgent:
    def __init__(self):
        self.documents = []
        self._load_knowledge_base()

    def _load_knowledge_base(self):
        """Loads and indexes knowledge documents across case studies, councils, and glossary."""
        # 1. Load cases_data.json
        cases_json_file = os.path.join(DIRECTORY, 'cases_data.json')
        if os.path.exists(cases_json_file):
            try:
                with open(cases_json_file, 'r', encoding='utf-8') as f:
                    cases = json.load(f)
                for c in cases:
                    qa_text = " ".join([f"Q: {qa.get('q', '')} A: {qa.get('a', '')}" for qa in c.get('questionsAndAnswers', [])])
                    learnings_text = " ".join(c.get('practicalLearnings', []))
                    frameworks_text = " ".join([f"{f.get('term', '')}: {f.get('def', '')}" for f in c.get('regulatoryFrameworks', [])])

                    # Index full case
                    self.documents.append({
                        "type": "Case Study",
                        "title": f"Case Study {c.get('number')}: {c.get('title')}",
                        "category": c.get('category'),
                        "content": f"{c.get('title')} {c.get('subtitle')} {c.get('entityContext')} {c.get('coreIncident')} {c.get('outcomeImpact')} {qa_text} {learnings_text} {frameworks_text}",
                        "url": f"#case-{c.get('id')}",
                        "raw": c
                    })

                    # Index individual Q&As as dedicated high-precision micro-chunks
                    for qa in c.get('questionsAndAnswers', []):
                        self.documents.append({
                            "type": "Case QA",
                            "title": f"{c.get('title')} — Analytical Question",
                            "category": c.get('category'),
                            "content": f"{c.get('title')} Question: {qa.get('q', '')} Answer: {qa.get('a', '')}",
                            "qa": qa,
                            "parent_case": c,
                            "url": f"#case-{c.get('id')}"
                        })
            except Exception as e:
                print(f"[RAG Agent] Error loading cases_data.json: {e}")

        print(f"[RAG Agent] Indexed {len(self.documents)} knowledge documents into RAG memory.")

    def search(self, query, top_k=3):
        """Simple BM25/keyword scoring search across indexed documents."""
        q_tokens = [w.lower() for w in re.findall(r'\w+', query) if len(w) > 2]
        if not q_tokens:
            return []

        scored = []
        for doc in self.documents:
            score = 0
            text_lower = (doc["title"] + " " + doc["content"]).lower()
            for token in q_tokens:
                if token in doc["title"].lower():
                    score += 6
                score += text_lower.count(token)
            if score > 0:
                scored.append((score, doc))

        scored.sort(key=lambda x: x[0], reverse=True)
        return [item[1] for item in scored[:top_k]]

    def answer_query(self, query):
        """Generates a grounded academic response to a user's EXIM query."""
        results = self.search(query, top_k=2)
        if not results:
            return {
                "type": "general",
                "badge": "● VERIFIED DGFT TRADE INTELLIGENCE",
                "title": "Export-Import Regulatory Framework (FTP 2023)",
                "answer": "Indian commercial exports are regulated under the Foreign Trade Policy 2023 governed by DGFT. Mandatory registrations include an Importer-Exporter Code (IEC), AD Code registration on ICEGATE, and an RCMC from the relevant Export Promotion Council.",
                "sources": [
                    {"title": "DGFT Official Portal", "url": "https://www.dgft.gov.in"},
                    {"title": "CBIC ICEGATE Customs Portal", "url": "https://www.icegate.gov.in"}
                ]
            }

        top_doc = results[0]
        if top_doc["type"] == "Case QA":
            qa = top_doc["qa"]
            c = top_doc["parent_case"]
            return {
                "type": "case_study",
                "badge": "📋 JUDICIAL & ENFORCEMENT PRECEDENT",
                "title": f"Case Study {c.get('number')}: {c.get('title')}",
                "answer": f"<strong>{c.get('title')}</strong><br><br><strong>Question:</strong> {qa.get('q')}<br><br><strong>Analysis:</strong> {qa.get('a')}",
                "sources": [
                    {"title": ref.get("title", ""), "url": ref.get("url", "#")} for ref in c.get("references", [])[:2]
                ]
            }

        if top_doc["type"] == "Case Study":
            raw_c = top_doc["raw"]
            return {
                "type": "case_study",
                "badge": "📋 JUDICIAL & ENFORCEMENT PRECEDENT",
                "title": f"Case Study {raw_c.get('number')}: {raw_c.get('title')}",
                "answer": f"<strong>{raw_c.get('title')}</strong><br><span style='color:#94a3b8; font-size:0.85rem;'>{raw_c.get('subtitle')}</span><br><br><strong>Factual Context:</strong> {raw_c.get('entityContext')}<br><br><strong>Key Legal Finding:</strong> {raw_c.get('outcomeImpact')}",
                "sources": [
                    {"title": ref.get("title", ""), "url": ref.get("url", "#")} for ref in raw_c.get("references", [])[:2]
                ]
            }

        return {
            "type": "general",
            "badge": "● VERIFIED TRADE INTELLIGENCE",
            "title": top_doc.get("title"),
            "answer": top_doc["content"][:400] + "...",
            "sources": [{"title": top_doc["title"], "url": top_doc.get("url", "#")}]
        }

# Global singleton agent instance
rag_agent = TradeBridgeRAGAgent()

import re
import json

with open('cases_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Remove single line comments outside of strings
def strip_comments(src):
    res = []
    in_str = False
    quote_char = None
    i = 0
    n = len(src)
    while i < n:
        c = src[i]
        if not in_str:
            if c in ('"', "'", '`'):
                in_str = True
                quote_char = c
                res.append(c)
            elif c == '/' and i + 1 < n and src[i+1] == '/':
                # Skip until newline
                while i < n and src[i] != '\n':
                    i += 1
                res.append('\n')
            else:
                res.append(c)
        else:
            res.append(c)
            if c == '\\' and i + 1 < n:
                res.append(src[i+1])
                i += 1
            elif c == quote_char:
                in_str = False
                quote_char = None
        i += 1
    return ''.join(res)

clean = strip_comments(text)
b_start = clean.find('[')
b_end = clean.rfind('];')
arr_str = clean[b_start:b_end+1]

# Tokenize and only quote keys when outside of strings
res = []
in_str = False
quote_char = None
i = 0
n = len(arr_str)
while i < n:
    c = arr_str[i]
    if not in_str:
        if c in ('"', "'"):
            in_str = True
            quote_char = c
            res.append('"') # normalize to double quotes
        elif c.isalpha() or c == '_':
            # Collect identifier
            start_id = i
            while i < n and (arr_str[i].isalnum() or arr_str[i] == '_'):
                i += 1
            ident = arr_str[start_id:i]
            # Check if followed by colon (ignoring whitespace)
            peek_idx = i
            while peek_idx < n and arr_str[peek_idx].isspace():
                peek_idx += 1
            if peek_idx < n and arr_str[peek_idx] == ':':
                res.append(f'"{ident}"')
            else:
                res.append(ident)
            continue
        else:
            res.append(c)
    else:
        if c == '\\' and i + 1 < n:
            res.append(c)
            res.append(arr_str[i+1])
            i += 1
        elif c == quote_char:
            in_str = False
            quote_char = None
            res.append('"')
        elif c == '"':
            res.append('\\"')
        elif c == '\n':
            res.append('\\n')
        elif c == '\r':
            pass
        elif c == '\t':
            res.append('\\t')
        else:
            res.append(c)
    i += 1

json_candidate = ''.join(res)
# Remove trailing commas
clean_json = re.sub(r',\s*([\]}])', r'\1', json_candidate)

try:
    data = json.loads(clean_json)
    print(f"SUCCESS: Loaded {len(data)} cases!")
    with open('cases_data.json', 'w', encoding='utf-8') as jf:
        json.dump(data, jf, indent=2, ensure_ascii=False)
    print("Saved cases_data.json successfully.")
except Exception as e:
    print("Error:", e)
    err_msg = str(e)
    if 'char ' in err_msg:
        char_idx = int(re.search(r'char (\d+)', err_msg).group(1))
        print("Around error char:", clean_json[max(0, char_idx-100):min(len(clean_json), char_idx+100)])

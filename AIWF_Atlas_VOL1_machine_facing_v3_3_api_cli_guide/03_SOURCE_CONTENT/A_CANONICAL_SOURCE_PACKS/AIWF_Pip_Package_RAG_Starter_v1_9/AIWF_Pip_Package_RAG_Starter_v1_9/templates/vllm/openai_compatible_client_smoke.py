from openai import OpenAI

client = OpenAI(api_key='EMPTY', base_url='http://127.0.0.1:8000/v1')
print(client.models.list())
resp = client.chat.completions.create(
    model='Qwen/Qwen2.5-1.5B-Instruct',
    messages=[{'role': 'user', 'content': 'Reply with exactly: AIWF OK'}],
    temperature=0,
    max_tokens=16,
)
print(resp.choices[0].message.content)

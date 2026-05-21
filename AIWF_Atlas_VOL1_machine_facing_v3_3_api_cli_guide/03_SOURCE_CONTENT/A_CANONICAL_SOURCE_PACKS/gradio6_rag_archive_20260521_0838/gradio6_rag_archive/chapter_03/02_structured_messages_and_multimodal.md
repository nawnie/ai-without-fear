# Structured Messages and Multimodal Support

In Gradio 6, chatbot messages should use a structured format:

```python
messages = [
    {"role": "user", "content": "Hello!"},
    {"role": "assistant", "content": "Hi there! How can I help you today?"}
]
```

Multimodal support (images, audio, video) is handled more cleanly through content blocks. This makes it easier to build rich chat experiences compared to Gradio 5.
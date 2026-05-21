# Event Chaining and Progress Tracking

Gradio 6 encourages chaining events for complex flows:

```python
btn.click(fn=step1, inputs=..., outputs=...)
   .then(fn=step2, inputs=..., outputs=...)
   .then(fn=step3, inputs=..., outputs=...)
```

You can also use `gr.Progress()` to show progress bars during long-running operations, which greatly improves user experience.
# Your First Gradio 6 App

Here’s a simple example using the modern `launch()` pattern:

```python
import gradio as gr

def greet(name):
    return f"Hello {name}!"

demo = gr.Interface(fn=greet, inputs="text", outputs="text")
demo.launch(ssr=True)
```

Key changes from Gradio 5:
- Settings like `theme` and `css` are now passed to `launch()` instead of `gr.Blocks()`.
- `ssr=True` is recommended for better performance.
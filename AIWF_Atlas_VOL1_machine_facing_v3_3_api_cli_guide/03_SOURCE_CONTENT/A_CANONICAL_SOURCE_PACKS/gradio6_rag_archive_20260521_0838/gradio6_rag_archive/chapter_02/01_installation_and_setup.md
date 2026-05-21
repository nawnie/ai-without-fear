# Installation and Environment Setup

Gradio 6 requires Python 3.10 or higher. It is recommended to use a virtual environment.

```bash
python -m venv venv
source venv/bin/activate     # On Windows: venv\Scripts\activate
pip install --upgrade gradio
```

Verify your installation:

```bash
python -c "import gradio as gr; print(gr.__version__)"
```
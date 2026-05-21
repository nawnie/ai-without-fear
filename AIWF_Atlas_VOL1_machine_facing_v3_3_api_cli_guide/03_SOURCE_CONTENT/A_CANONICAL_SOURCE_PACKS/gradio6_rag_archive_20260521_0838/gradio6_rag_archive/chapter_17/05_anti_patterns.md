# Common Anti-Patterns

Frequent issues in Gradio apps include storing large objects in `gr.State()`, overusing `queue=True`, exposing raw errors, ignoring cost tracking, and hardcoding secrets. Avoid these for better maintainability.
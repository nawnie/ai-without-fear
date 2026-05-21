# Best Practices for Events and Blocks

- Use `gr.on()` for complex multi-event logic
- Set appropriate `concurrency_limit` on expensive functions
- Prefer `queue=False` for instant UI feedback actions
- Always enable `ssr=True` in production for better performance
- Use `gr.Progress()` for long-running tasks
- Keep event chains readable — avoid overly deep nesting when possible
# Key launch() Parameters in Gradio 6

Important parameters you should know:

- `ssr=True` — Enables Server-Side Rendering for faster initial loads
- `share=True` — Creates a public link (useful for quick sharing)
- `debug=True` — Shows more detailed errors during development
- `delete_cache=(age, free)` — Automatically cleans old cached files
- `max_file_size` — Limits uploaded file size (good for security and cost control)
- `concurrency_limit` — Controls how many requests can run at once

These parameters give you more control over performance and resource usage compared to Gradio 5.
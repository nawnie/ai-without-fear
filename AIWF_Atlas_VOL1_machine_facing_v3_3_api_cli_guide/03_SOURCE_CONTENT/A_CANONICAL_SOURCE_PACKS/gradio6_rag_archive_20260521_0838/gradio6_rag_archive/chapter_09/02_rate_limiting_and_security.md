# Rate Limiting and Security

Always set `max_file_size` in production. Use `gr.Request` to log and rate-limit users. Consider `api_visibility="private"` for sensitive endpoints.
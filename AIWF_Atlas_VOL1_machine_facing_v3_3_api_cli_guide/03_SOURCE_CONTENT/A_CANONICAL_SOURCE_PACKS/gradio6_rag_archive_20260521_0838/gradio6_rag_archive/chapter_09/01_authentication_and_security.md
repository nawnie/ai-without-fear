# Authentication and Security Best Practices

Gradio 6 has a clearer security model with `api_visibility` options ("public", "undocumented", "private") and better use of `gr.Request` for context.

Always secure production apps with authentication, rate limiting, and proper input validation.
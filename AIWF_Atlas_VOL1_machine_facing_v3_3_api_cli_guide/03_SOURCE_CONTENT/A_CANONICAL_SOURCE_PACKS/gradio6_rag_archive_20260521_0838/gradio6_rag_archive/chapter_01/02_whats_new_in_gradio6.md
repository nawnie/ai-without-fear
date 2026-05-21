# What’s New in Gradio 6

Gradio 6 introduces several major improvements:

- **Svelte 5 frontend** — Significantly faster rendering and better reactivity
- **Server-Side Rendering (SSR)** — Faster initial page loads
- **Improved event system** — Cleaner chaining with `.then()`, `.success()`, `.failure()`
- **Built-in caching** — `@gr.cache` decorator and `gr.Cache` class
- **Better security model** — Clearer `api_visibility` options and `gr.Request` context
- **gr.Server()** — Ability to bring your own frontend while keeping the Gradio backend
- **Stronger integration** with lakeFS for versioning data, prompts, and models

These changes make Gradio much more suitable for production use cases.
# Session Management at Scale

For multi-replica deployments, move important state out of `gr.State()` into Redis or a database. Use `gr.BrowserState()` for lightweight client-side preferences.
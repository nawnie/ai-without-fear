# Error Handling for Generation

Generation can fail for many reasons (rate limits, OOM, model errors). Use `gr.Error()` with clear messages and consider offering retry options or fallback models when possible.
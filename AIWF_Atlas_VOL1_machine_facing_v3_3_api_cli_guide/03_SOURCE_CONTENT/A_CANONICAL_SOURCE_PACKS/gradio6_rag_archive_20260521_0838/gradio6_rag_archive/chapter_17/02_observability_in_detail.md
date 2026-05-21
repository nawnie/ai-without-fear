# Observability in Detail

For production Gradio apps, track at minimum:

- Latency percentiles (p50, p95, p99)
- Error rates
- Queue depth and wait times
- Cost per request (especially for LLM calls)
- Cache hit/miss rates

Tools like LangSmith, Phoenix, and Langfuse are particularly well suited for LLM-powered Gradio applications.
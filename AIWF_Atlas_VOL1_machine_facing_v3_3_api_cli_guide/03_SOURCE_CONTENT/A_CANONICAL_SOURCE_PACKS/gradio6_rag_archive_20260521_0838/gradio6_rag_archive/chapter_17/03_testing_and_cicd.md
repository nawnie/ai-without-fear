# Testing and CI/CD for Production

Gradio apps should follow standard software engineering practices:

- Write unit tests for core logic
- Use `gradio_client` for integration testing of endpoints
- Set up CI pipelines that run tests before deployment
- Consider preview deployments when possible

This reduces risk when shipping updates to production.
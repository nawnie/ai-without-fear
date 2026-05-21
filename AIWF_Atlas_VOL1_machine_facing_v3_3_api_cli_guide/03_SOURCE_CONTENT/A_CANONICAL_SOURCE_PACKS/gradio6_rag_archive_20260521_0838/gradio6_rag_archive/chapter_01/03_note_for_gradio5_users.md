# A Note for Gradio 5 Developers

If you’re coming from Gradio 5, migration effort depends on how customized your app is:

- **Simple apps** (mostly `gr.Interface` or basic Blocks): Usually 1–3 days
- **Apps with several custom components**: Expect 1–2 weeks
- **Complex event logic**: The new event system is cleaner but requires updates

**Recommended migration strategy**:
1. Upgrade to Gradio 5.50 first to see deprecation warnings
2. Migrate incrementally (one feature/tab at a time)
3. Keep your Gradio 5 version running in parallel during transition
4. Move custom components last

You can get 60–70% of the value with relatively small changes (SSR, caching, launch parameters).
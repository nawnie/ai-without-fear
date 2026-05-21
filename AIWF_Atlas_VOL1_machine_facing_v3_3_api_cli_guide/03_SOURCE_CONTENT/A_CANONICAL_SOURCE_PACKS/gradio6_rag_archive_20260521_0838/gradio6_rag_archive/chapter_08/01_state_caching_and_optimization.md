# State, Caching and Optimization

Gradio 6 introduces the `@gr.cache` decorator and `gr.Cache` class for easy and powerful caching. State management has also improved with automatic cleanup.

For best performance, avoid storing large objects in `gr.State()` and prefer caching expensive operations.
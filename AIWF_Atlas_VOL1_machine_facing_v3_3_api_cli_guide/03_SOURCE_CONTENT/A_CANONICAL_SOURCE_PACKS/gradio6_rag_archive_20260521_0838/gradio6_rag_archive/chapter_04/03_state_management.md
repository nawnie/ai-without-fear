# State Management in Blocks

`gr.State()` allows you to persist data across events. In Gradio 6, it includes automatic cleanup after disconnection.

For client-side persistence, use `gr.BrowserState()`. For large or shared data, it is recommended to store references (IDs/paths) and load from lakeFS or a database instead of keeping everything in memory.
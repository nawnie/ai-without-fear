# Common Migration Issues from Gradio 5

Frequent issues when upgrading:

- Chatbot messages must use the new structured format
- Video return values changed to object format
- App-level settings moved from `gr.Blocks()` to `launch()`
- Some event patterns require updates to the new chaining system
- Custom components generally need to be rewritten in Svelte 5

Most issues are mechanical and can be fixed incrementally.
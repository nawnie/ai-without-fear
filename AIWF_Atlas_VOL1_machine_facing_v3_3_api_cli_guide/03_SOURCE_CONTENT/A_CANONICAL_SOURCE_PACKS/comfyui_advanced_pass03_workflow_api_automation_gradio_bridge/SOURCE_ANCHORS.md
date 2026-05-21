# ComfyUI Advanced Pass 03 Source Anchors

This source pack verifies the machine-facing lane for ComfyUI Workflow API automation and Gradio bridge design.

The lane should prefer official ComfyUI documentation and official Gradio documentation before blogs, tutorials, forum posts, or older scripts. Third-party guides may be useful as examples, but they must not override official route behavior or API-format rules.

| Source ID | Source | Status | Use |
|---|---|---|---|
| COMFY-PASS03-DOC-001 | [ComfyUI Server Routes official documentation](https://docs.comfy.org/development/comfyui-server/comms_routes) | official_docs_verified | Local server route list; /prompt validation and queue behavior; /history, /queue, /view, /upload/image, /system_stats, /object_info. |
| COMFY-PASS03-DOC-002 | [ComfyUI Workflow JSON schema official specification](https://docs.comfy.org/specs/workflow_json) | official_docs_verified | Distinguishing UI workflow JSON schema from API prompt format and preserving workflow graph semantics. |
| COMFY-PASS03-DOC-003 | [ComfyUI basic_api_example.py official script example](https://github.com/Comfy-Org/ComfyUI/blob/master/script_examples/basic_api_example.py) | official_repo_verified | Minimal local Python API example: API prompt format, node IDs as keys, class_type, inputs, editing prompt and seed, POST to 127.0.0.1:8188/prompt. |
| COMFY-PASS03-DOC-004 | [ComfyUI Cloud API Overview official documentation](https://docs.comfy.org/development/cloud/overview) | official_docs_verified | Cloud API concepts: workflows are API-format JSON objects; jobs are asynchronous; submit, monitor via WebSocket or poll, retrieve outputs. |
| COMFY-PASS03-DOC-005 | [Gradio Blocks official documentation](https://www.gradio.app/docs/gradio/blocks) | official_docs_verified | Blocks layout, queue enabling, queue max size, default concurrency limits, and web app construction around long-running inference calls. |
| COMFY-PASS03-DOC-006 | [Gradio Queuing guide official documentation](https://www.gradio.app/guides/queuing) | official_docs_verified | Concurrent event handling, per-event queues, concurrency_limit, and shared concurrency_id for resource-limited GPU tasks. |
| COMFY-PASS03-DOC-007 | [Gradio State in Blocks official guide](https://www.gradio.app/guides/state-in-blocks) | official_docs_verified | Global, session, and browser state in Gradio apps; preserving session-specific ComfyUI job IDs and UI state. |
| COMFY-PASS03-DOC-008 | [Gradio File component official documentation](https://www.gradio.app/docs/gradio/file) | official_docs_verified | File upload event listeners and file input handling for Gradio-to-ComfyUI bridges. |


## Canonical source rules

- Use `COMFY-PASS03-DOC-001` for local route names and execution queue behavior.
- Use `COMFY-PASS03-DOC-002` when discussing workflow JSON as saved UI graph data.
- Use `COMFY-PASS03-DOC-003` when showing local API prompt-format payloads or Python examples.
- Use `COMFY-PASS03-DOC-004` only when discussing ComfyUI Cloud API concepts; do not mix local `/prompt` with cloud `/api/prompt` without stating the difference.
- Use `COMFY-PASS03-DOC-005` and `COMFY-PASS03-DOC-006` when designing Gradio queues around long GPU tasks.
- Use `COMFY-PASS03-DOC-007` when deciding whether job state belongs in global, session, or browser state.
- Use `COMFY-PASS03-DOC-008` when handling Gradio file upload events before passing files to ComfyUI.

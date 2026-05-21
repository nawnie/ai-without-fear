# Ollama Modelfile and Storage Boundary

Ollama has three different support layers: the service/runtime, the model store, and the Python/client/API layer. The `ollama` Python package alone does not install the model runtime.

## Modelfile concepts
A Modelfile can define `FROM`, `PARAMETER`, `TEMPLATE`, `SYSTEM`, `ADAPTER`, `LICENSE`, and `MESSAGE`. It can build from existing Ollama models, GGUF files, Safetensors models, and adapters.

## Support checklist
- Verify `ollama serve` or app service is running.
- Check `ollama list` and `ollama show` output.
- For imports, inspect the Modelfile.
- Confirm GGUF/adapters paths are absolute or resolvable.
- Capture model name/tag used by the client.

Sources: https://docs.ollama.com/modelfile | https://docs.ollama.com/import

# AIWF Pip Package RAG Starter v1.9

This archive is a package-level RAG seed for AI Without Fear local AI support, ComfyUI support, custom-node triage, local wheelhouse builds, native CUDA/cuDNN troubleshooting, TensorRT inference support, Triton serving/deployment diagnostics, and OpenAI-compatible local LLM serving.

## Current status

- **Release:** v1.9
- **Tracked packages:** 238
- **Full package cards:** 238
- **Stub/research cards:** 0
- **Focus added in v1.9:** source provenance layer, source registry, package-to-source joins, chat source review, source refresh queue, and RAG source quality policy.

## Start here

1. Read `START_HERE.md` for loader flow.
2. Use `PACKAGE_INDEX.md` or `package_cards_index.csv` to navigate package cards.
3. Use `maps/package_cluster_index.md` for dependency-family reasoning.
4. For CUDA/native issues, read `toolchains/` and `recipes/native_cuda/`.
5. For cuDNN-specific support, start with `toolchains/cudnn_backend_frontend_deep_reference.md`.
6. For TensorRT inference-stack issues, start with `toolchains/tensorrt_inference_stack_deep_reference.md`.
7. For Triton serving issues, start with `toolchains/triton_inference_server_serving_deep_reference.md`.
8. For OpenAI-compatible local LLM serving, start with:
   - `toolchains/vllm_openai_compatible_serving_deep_reference.md`
   - `toolchains/vllm_scheduler_kv_cache_attention_backends.md`
   - `toolchains/llm_serving_engine_boundaries_vllm_sglang_tgi_litellm.md`
   - `toolchains/structured_outputs_guided_decoding_deep_reference.md`
   - `maps/llm_serving_failure_signatures.md`
   - `recipes/serving/VLLM_OPENAI_COMPATIBLE_LOCAL_SERVER_PLAYBOOK.md`

## AIWF install philosophy

Beginners should not compile native AI packages by default. Build once, test in a clean venv, store the wheel with a manifest, then install from the local wheelhouse. For cutting-edge AI packages, local wheel compilation is sometimes unavoidable, but the support system must record the full ABI/toolchain context: Python version, wheel tag, MSVC version, CUDA Toolkit, CUDA component wheels, cuDNN source/version, PyTorch CUDA build, and GPU architecture target.

## LLM serving philosophy

OpenAI-compatible local serving is a boundary, not a guarantee that every engine behaves the same. Separate the client, gateway, serving engine, model loader, attention backend, quantization format, tokenizer/chat template, streaming protocol, and metrics endpoint before giving install advice.


## Source provenance

v1.9 adds a dedicated `sources/` layer so package guidance can trace back to external references.

- Unique source URLs: **407**
- Source domains: **114**
- Package-to-source links: **557**

Start with `sources/SOURCES.md`, then use `sources/source_registry.csv` and `sources/package_to_sources.csv` for machine loading.


## v1.9 addition

v1.9 adds the LLM model-file and loader-boundary research layer: GGUF, EXL2, safetensors shards, tokenizer/chat templates, generation config, RoPE/context handling, Ollama Modelfiles, LM Studio, KoboldCpp, llama.cpp server, and TabbyAPI/ExLlamaV2. This is intentionally deeper than pip imports because AI support systems need to identify whether the failure is package, model artifact, loader runtime, server, client, or settings.


## v1.9 addition: diffusion model-file/layout support

This release adds a dedicated model-layout support layer for ComfyUI and diffusion workflows: model folder maps, `extra_model_paths.yaml`, checkpoint vs Diffusers folder boundaries, companion assets such as LoRA/VAE/ControlNet/IP-Adapter, and PowerShell probes for exporting a model-layout support bundle.

---

## Consolidated near-duplicate retained material

This section was added during AIWF near-duplicate consolidation. The canonical file was kept, and only unique non-matching chunks from older/alternate copies were appended below so the duplicate copy could be removed without cutting information.

### Unique retained material from `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/README.md`

# AIWF Pip Package RAG Starter v1.5
This archive is a package-level RAG seed for AI Without Fear local AI support, ComfyUI support, custom-node triage, local wheelhouse builds, native CUDA/cuDNN troubleshooting, TensorRT inference support, and Triton serving/deployment diagnostics.
- **Release:** v1.5
- **Tracked packages:** 211
- **Full package cards:** 211
- **Stub/research cards:** 0
- **Focus added in v1.5:** Triton Inference Server serving layer, model repository/config support, client/server boundary, Python backend, metrics, and deployment diagnostics.
1. Read `START_HERE.md` for loader flow.
2. Use `PACKAGE_INDEX.md` or `package_cards_index.csv` to navigate package cards.
3. Use `maps/package_cluster_index.md` for dependency-family reasoning.
4. For CUDA/native issues, read `toolchains/` and `recipes/native_cuda/`.
5. For cuDNN-specific support, start with `toolchains/cudnn_backend_frontend_deep_reference.md`.
6. For TensorRT inference-stack issues, start with `toolchains/tensorrt_inference_stack_deep_reference.md`.
7. For Triton serving issues, start with:
   - `toolchains/triton_inference_server_serving_deep_reference.md`
   - `toolchains/triton_model_repository_and_config_pbtxt.md`
   - `toolchains/triton_python_backend_and_custom_runtime.md`
   - `toolchains/triton_observability_health_metrics_deep_reference.md`
   - `maps/triton_failure_signatures.md`
   - `recipes/serving/TRITON_LOCAL_SERVING_PLAYBOOK.md`
## Triton support philosophy
Triton is not just a pip dependency. Treat it as a service boundary: server runtime, client package, model repository, backend, `config.pbtxt`, endpoint health, metrics, and support-bundle evidence all matter. `tritonclient` can be installed perfectly while the server/model/backend is broken.

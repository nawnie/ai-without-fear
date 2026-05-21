# START HERE — AIWF Pip Package RAG

This archive is the Python dependency reference pack for AI Without Fear tooling, ComfyUI workflows, Gradio apps, RAG systems, training experiments, video/audio pipelines, Windows install triage, native CUDA wheel builds, and local LLM serving support.

## Current status

- Release: **v1.6**
- Tracked packages: **238**
- Full package cards: **238**
- Stub/research cards: **0**
- Card path coverage: **238 of 238**

## Best ingestion order

1. `README.md`
2. `START_HERE.md`
3. `pip_package_inventory.csv`
4. `PACKAGE_INDEX.md`
5. `maps/dependency_clusters.md`
6. `maps/package_cluster_index.md`
7. `packages/*.md`
8. `toolchains/*.md`
9. `maps/*.md`
10. `research_passes/*.md`
11. `scripts/*.ps1`

## Operating rule

Do not diagnose AI package failures one package at a time. Most real breakage happens at cluster boundaries: Python version, torch/CUDA ABI, torchvision/xformers compatibility, ONNX providers, FFmpeg backends, vector DB persistence, tokenizer/model mismatch, external binaries that pip does not install, native CUDA kernels, and API server boundaries.

## For local wheel builds

Read these in order:

1. `maps/v1_0_local_wheelhouse_foundation.md`
2. `maps/wheelhouse_install_policy.md`
3. `toolchains/windows_msvc_cuda_toolchain.md`
4. `maps/v1_1_native_cuda_wheel_build_notes.md`
5. `toolchains/cpp_native_build_mental_model.md`
6. `toolchains/nvidia_cuda_windows_deep_reference.md`
7. `toolchains/cudnn_backend_frontend_deep_reference.md`
8. `wheelhouse/wheel_build_candidates.csv`

## For serving systems

- TensorRT: `toolchains/tensorrt_inference_stack_deep_reference.md`
- Triton: `toolchains/triton_inference_server_serving_deep_reference.md`
- vLLM/OpenAI-compatible serving: `toolchains/vllm_openai_compatible_serving_deep_reference.md`
- Structured output/tool calling: `toolchains/structured_outputs_guided_decoding_deep_reference.md`

## Source layer

For citation/provenance loading, read `sources/SOURCES.md`, `sources/source_registry.csv`, and `sources/package_to_sources.csv`. Use `sources/source_refresh_queue.md` before giving hard advice on fast-moving CUDA/cuDNN/TensorRT/vLLM/ComfyUI packages.


## For local LLM model-load failures
Start with `model_formats/`, then check `maps/model_loader_failure_signatures.md`. Do not change packages until the artifact family is identified: HF safetensors folder, GGUF, EXL2, Ollama model, or app-managed model.


## v1.9: When the problem is model placement, not pip

Start with:

1. `model_layouts/comfyui_model_folder_map.md`
2. `model_layouts/extra_model_paths_yaml_deep_reference.md`
3. `model_layouts/single_file_checkpoint_vs_diffusers_folder.md`
4. `scripts/Test-AIWF-DiffusionModelLayout.ps1`

Use this path when a user reports empty dropdowns, missing checkpoints, IP-Adapter models not showing, LoRAs doing nothing, or Diffusers local-folder loading errors.

---

## Consolidated near-duplicate retained material

This section was added during AIWF near-duplicate consolidation. The canonical file was kept, and only unique non-matching chunks from older/alternate copies were appended below so the duplicate copy could be removed without cutting information.

### Unique retained material from `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/START_HERE.md`

This archive is the Python dependency reference pack for AI Without Fear tooling, ComfyUI workflows, Gradio apps, RAG systems, training experiments, video/audio pipelines, and Windows install triage.
## What changed in v0.9
v0.9 is a polish/release-quality pass, not a broad new research pass.
- Corrected release labeling and stale status counts.
- Added `PACKAGE_INDEX.md` and `package_cards_index.csv` for fast lookup.
- Added `maps/unresolved_package_queue.md` so incomplete packages are visible.
- Added stub cards for every previously missing package-card path.
- Added RAG loading guidance and environment-audit workflow guidance.
- Added validation/audit notes so future passes know what was checked.
- Tracked packages: **118**
- Full package cards: **103**
- Stub/research cards: **15**
- Card path coverage: **118 of 118**
1. `README.md`
2. `START_HERE.md`
3. `pip_package_inventory.csv`
4. `PACKAGE_INDEX.md`
5. `maps/dependency_clusters.md`
6. `maps/package_cluster_index.md`
7. `maps/unresolved_package_queue.md`
8. `packages/*.md`
9. `research_passes/*.md`
10. `scripts/*.ps1`
Do not diagnose AI package failures one package at a time. Most real breakage happens at cluster boundaries: Python version, torch/CUDA ABI, torchvision/xformers compatibility, ONNX providers, FFmpeg backends, vector DB persistence, tokenizer/model mismatch, and external binaries that pip does not install.
v0.9 adds custom-node/training/web dependency cards and resolves the prior stub/research queue. Use `maps/v0_9_custom_node_training_web_dependency_notes.md` before mixing training packages into ComfyUI runtime environments.
## TensorRT inference-stack support
Use `toolchains/tensorrt_inference_stack_deep_reference.md` first, then use `maps/tensorrt_package_family_map.md` to identify whether the issue involves standard TensorRT, lean runtime, TensorRT-RTX, TensorRT-LLM, Torch-TensorRT, or ONNX graph surgery tools.
## Triton serving layer
For Triton issues, load the serving docs after TensorRT/cuDNN docs. Triton failures often live at the model repository, endpoint, backend, or client/server boundary rather than in pip itself.

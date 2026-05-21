# Changelog

## 2026-05-19

- Added v0.2 package-card pass for 16 core packages.
- Added dependency cluster map for torch/CUDA, Hugging Face, and UI/API stacks.
- Added package source index CSV.
- Added PowerShell pip inventory collector for local ComfyUI/venv audits.
- Updated inventory CSV/JSON/Markdown with doc_file, doc_batch, and source_urls fields.


## 2026-05-19 — v0.3

- Added 17 package cards for image I/O, restoration/upscaling, face identity, ONNX runtime, segmentation, and diagnostics.
- Updated CSV/JSON/Markdown package inventory with doc paths and source URLs.
- Added `maps/v0_3_compatibility_notes.md`.
- Expanded dependency clusters for image-array, legacy restoration, ONNX face identity, and detection/segmentation stacks.
- Added v0.3 research pass summary.
## 2026-05-19 — v0.4

- Documented 16 RAG/OCR/tokenization/LLM-client package cards.
- Added 7 new inventory entries: `faiss-cpu`, `openai`, `tiktoken`, `spacy`, `pytesseract`, `easyocr`, `onnxruntime-directml`.
- Added `maps/v0_4_rag_ocr_llm_dependency_notes.md`.
- Added `research_passes/v0_4_rag_ocr_llm_client_summary.md`.
- Added `scripts/Test-AIWF-RAGOCRPackageSmoke.ps1` for import/provider/runtime boundary checks.
- Regenerated CSV, JSON, markdown inventory, package source index, README, and research queue.



## 2026-05-19 — v0.5

- Added training/data/config/dev-tooling and local LLM framework package-card batch.
- Documented 17 packages: datasets, bitsandbytes, omegaconf, pandas, regex, scipy, ftfy, tqdm, requests, einops, kornia, timm, sentencepiece, open-webui, llama-cpp-python, llama-index, langchain.
- Added dependency map for HF training, compiled numeric, text cleanup/tokenization, Torch vision utility, local LLM app, and RAG framework clusters.
- Added PowerShell smoke test for v0.5 package imports.
- Updated CSV, JSON, markdown inventory, and package source index.

## 2026-05-19 — v0.6

- Added media/video/audio/CLI/native-build package-card batch.
- Documented 19 packages: av, imageio, imageio-ffmpeg, moviepy, decord, librosa, soundfile, ffmpeg-python, matplotlib, rich, typer, click, GitPython, packaging, setuptools, wheel, ninja, cmake, pybind11.
- Added 9 new inventory rows for packages not already present in v0.5.
- Added dependency map for FFmpeg/media backend boundaries, audio codec/libsndfile boundaries, CLI UX packages, and Windows native build tooling.
- Added PowerShell smoke test for v0.6 package imports plus external ffmpeg/git/cmake/ninja command checks.
- Regenerated CSV, JSON, markdown inventory, and package source index.


## 2026-05-19 — v0.7

- Added ComfyUI runtime grounding package cards from upstream `requirements.txt` and `manager_requirements.txt`.
- Added ComfyUI-specific runtime categories for frontend assets, workflow templates, embedded docs, async web server dependencies, database migration/state packages, model architecture loaders, and OpenGL/windowing support.
- Added PowerShell scripts to find requirement files, normalize package specs, and collect environment ground truth from real ComfyUI installs.
- Updated inventory CSV/JSON/Markdown and source index.

## 2026-05-19 — v0.8 polish release

- Fixed stale README version/counts from v0.7.
- Added `START_HERE.md`, `PACKAGE_INDEX.md`, `package_cards_index.csv`, `RAG_LOADER_NOTES.md`, and `ENVIRONMENT_AUDIT_GUIDE.md`.
- Added `maps/package_cluster_index.md` and `maps/unresolved_package_queue.md`.
- Added package-card stubs for all previously missing inventory entries.
- Added `doc_quality` to the inventory so RAG loaders can distinguish full cards from stub/research cards.
- Added core and all-known package smoke-test scripts.


## 2026-05-19 — v0.9

- Promoted all remaining v0.8 stub/research cards to full package cards.
- Added 15 custom-node/training/web dependency package cards.
- Added GroundingDINO install decision tree.
- Added custom-node/training/web dependency map.
- Added PowerShell smoke test for the new package batch.
- Regenerated package inventory, source index, package index, and release manifest.


## 2026-05-19 — v1.1 local wheelhouse/native build branch
- Added v1.0 local wheelhouse foundation docs and scripts.
- Added v1.1 native/CUDA wheel build notes, Windows toolchain card, wheel tag/ABI card, and build templates.
- Added package cards for build, pyproject-hooks, scikit-build-core, meson-python, maturin, setuptools-scm, cibuildwheel, auditwheel, delvewheel, pip-tools, pipdeptree, and uv.
- Added wheelhouse manifest schema example and wheel build candidate list.


## 2026-05-19 — v1.2 deep C++/NVIDIA/CUDA native wheel build pass

- Added deep Windows C++/MSVC native build mental model.
- Added NVIDIA CUDA Windows deep reference.
- Added PyTorch C++/CUDA extension reference.
- Added wheel tag/ABI deep reference.
- Added CUDA component wheel map and native build failure signatures.
- Added 21 NVIDIA/CUDA package cards.
- Added PowerShell scripts for C++/CUDA build environment testing and wheelhouse manifest generation.


## 2026-05-19 — v1.3

- Added deep cuDNN backend/frontend/toolkit support branch.
- Added package cards for NVIDIA cuDNN frontend/JIT/meta/legacy lanes and CUDA Python/toolkit discovery packages.
- Added cuDNN Windows DLL loading and PATH reference.
- Added PyTorch/ONNX Runtime cuDNN compatibility reference.
- Added cuDNN failure-signature map and Windows install/verify playbook.
- Added PowerShell probes for cuDNN environment and NVIDIA DLL visibility.

## 2026-05-19 — v1.4 TensorRT / ONNX inference depth

- Added TensorRT, TensorRT CUDA-family, lean runtime, RTX, TensorRT-LLM, Torch-TensorRT, ONNX GraphSurgeon, Polygraphy, onnxslim, model optimization, and Triton client package cards.
- Added deep TensorRT inference stack references and engine lifecycle documentation.
- Added TensorRT failure signatures and ONNX graph surgery debugging notes.
- Added TensorRT support-bundle and environment-probe PowerShell scripts.


## 2026-05-19 — v1.5
- Added deep Triton Inference Server serving/deployment support branch.
- Added model repository and `config.pbtxt` reference docs.
- Added Python backend/custom runtime reference docs.
- Added health/readiness/metrics and performance-analysis docs.
- Added Triton serving failure signatures and package family map.
- Added local serving playbook and model repository templates.
- Added Triton serving support bundle and environment probe scripts.


## 2026-05-19 — v1.6
- Added vLLM/SGLang/TGI/OpenAI-compatible local LLM serving support branch.
- Added package cards for serving engines, guided decoding backends, quantization/compression tools, attention kernel packages, LiteLLM/Ray serving layers, and API streaming dependencies.
- Added vLLM OpenAI-compatible serving deep reference, scheduler/KV-cache/attention backend notes, engine boundary map, and structured output reference.
- Added LLM serving failure signatures and vLLM local server playbook.
- Added PowerShell probes and support bundle scripts for local LLM serving.

## 2026-05-19 — v1.7

- Added dedicated `sources/` provenance layer.
- Added source registry CSV/JSON with 407 unique source URLs across 114 domains.
- Added package-to-source and source-to-package join tables.
- Added chat source review file for sources surfaced during the package RAG build conversation.
- Added source quality policy, source usage map, source refresh queue, and source family guides.
- Updated README, START_HERE, RAG loader notes, and release manifest for source-aware loading.


## 2026-05-19 — v1.8

- Added LLM model-file and loader-boundary research pass.
- Added package/runtime cards for gguf, exllamav2, lmstudio, tabbyAPI, llama.cpp runtime, koboldcpp, jinja2, and hf-transfer.
- Upgraded existing llama-cpp-python, safetensors, transformers, ollama, and huggingface_hub cards with model-loader support notes.
- Added `model_formats/` deep-reference docs for GGUF, safetensors shards, chat templates, generation config, multimodal processors, RoPE/context, EXL2, Ollama, LM Studio, llama.cpp server, and KoboldCpp.
- Added LLM model-file support scripts and launch/client templates.
- Updated source registry with loader/model-format sources.


## 2026-05-19 — v1.9 diffusion model-file/layout pass

- Added ComfyUI model-folder map and `extra_model_paths.yaml` deep reference.
- Added checkpoint vs Diffusers folder support guide.
- Added companion asset guide for LoRA, VAE, ControlNet, and IP-Adapter.
- Added modern diffusion asset boundary notes for Flux/SD3/Wan/LTX/Qwen-style workflows.
- Added diffusion model layout failure signatures.
- Added PowerShell probes and templates for model-layout support bundles.
- Added source-family documentation for diffusion model layout references.

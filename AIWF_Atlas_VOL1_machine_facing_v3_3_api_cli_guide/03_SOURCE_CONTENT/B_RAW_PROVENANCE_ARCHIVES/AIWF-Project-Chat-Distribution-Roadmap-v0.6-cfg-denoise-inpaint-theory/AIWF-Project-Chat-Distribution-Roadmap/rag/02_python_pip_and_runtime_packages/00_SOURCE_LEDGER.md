# Python Pip and Runtime Packages — Source Ledger

Purpose: track package families that matter to AIWF installs, ComfyUI stability, Gradio app modularity, EnvPack diagnostics, and future one-click installers.

Standing rule: do not treat any package as safe just because it installed once. Record the source, risk, and AIWF decision. Keep exact pins in install profiles, not in general teaching notes, unless the pin has been tested in an AIWF environment.

## PyTorch Local Install Matrix

- Source type: Official docs
- URL or local file: https://pytorch.org/get-started/locally/
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages
- Stability: Fast-moving
- AIWF decision: DOCUMENT
- Why it matters: Torch, torchvision, and torchaudio define the CUDA/Python base for ComfyUI, Diffusers, model training tools, and many custom nodes.
- Claims we can safely use:
  - Use the official PyTorch selector / wheel index for CUDA wheels.
  - Latest stable PyTorch requires Python 3.10 or later according to the page checked.
  - CUDA wheel choice must match the runtime plan; do not let random dependency installs replace torch accidentally.
- Claims that need retesting:
  - Exact best torch/CUDA version for a given AIWF install profile.
  - xformers/SageAttention/FlashAttention compatibility for Windows per profile.
- Related AIWF repo: AIWF-EnvPack, AIWF-Workflow-Packs, AIWF-ComfyUI-Nodes
- Source quality: A

## ComfyUI Official Changelog / Docs Index

- Source type: Official docs
- URL or local file: https://docs.comfy.org/changelog
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages / ComfyUI nodes and workflows
- Stability: Fast-moving
- AIWF decision: DOCUMENT
- Why it matters: ComfyUI core now changes quickly enough that runtime advice must be version-aware.
- Claims we can safely use:
  - ComfyUI has an official changelog and docs index.
  - Recent changes include frontend, model support, workflow templates, native nodes, and runtime stability fixes.
- Claims that need retesting:
  - Any workflow built on a specific node schema should be loaded and validated against the target ComfyUI version.
- Related AIWF repo: AIWF-Workflow-Packs, AIWF-EnvPack
- Source quality: A

## Hugging Face Diffusers Installation

- Source type: Official docs
- URL or local file: https://huggingface.co/docs/diffusers/en/installation
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages
- Stability: Moderate / fast-moving
- AIWF decision: DOCUMENT
- Why it matters: Diffusers is the clean Python reference stack for image/video/audio generation pipelines outside ComfyUI.
- Claims we can safely use:
  - Diffusers should be installed inside a virtual environment to avoid dependency conflicts.
  - Diffusers depends on a correctly installed PyTorch stack for the user's system.
- Claims that need retesting:
  - Current model-specific extras for Flux, SD3/3.5, Sana, video pipelines, and quantized inference.
- Related AIWF repo: AI-Field-Manual-2026, AIWF-Labs, AIWF-Workflow-Packs
- Source quality: A

## Hugging Face Transformers Installation

- Source type: Official docs
- URL or local file: https://huggingface.co/docs/transformers/en/installation
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages
- Stability: Moderate / fast-moving
- AIWF decision: DOCUMENT
- Why it matters: Transformers underpins local LLM/VLM work, Qwen/QwenVL pipelines, Grounding DINO via Transformers, and many captioning/VQA tools.
- Claims we can safely use:
  - Transformers works with PyTorch and is tested on Python 3.10+ and PyTorch 2.4+ according to the page checked.
  - The docs recommend virtual environments / uv-style isolation to avoid dependency conflicts.
- Claims that need retesting:
  - Exact CUDA memory behavior for each VLM or local captioner model.
- Related AIWF repo: AIWF-Knowledge-Pack, AIWF-EnvPack, AIWF-ComfyUI-Nodes
- Source quality: A

## Hugging Face Accelerate

- Source type: Official docs
- URL or local file: https://huggingface.co/docs/accelerate/en/index
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages / ML theory and training
- Stability: Moderate
- AIWF decision: DOCUMENT
- Why it matters: Accelerate is common in training/inference scripts and is frequently pulled in by Diffusers/Transformers workflows.
- Claims we can safely use:
  - Accelerate abstracts device placement/distributed/fp16 boilerplate for PyTorch code.
- Claims that need retesting:
  - Whether a given beginner tool actually needs Accelerate or only inherited it through a template.
- Related AIWF repo: AI-Field-Manual-2026, AIWF-Labs
- Source quality: A

## ONNX Runtime Install and CUDA Execution Provider

- Source type: Official docs
- URL or local file: https://onnxruntime.ai/docs/install/ and https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages
- Stability: Fast-moving
- AIWF decision: DOCUMENT
- Why it matters: ReActor, insightface-era tools, face analysis, and some VQA/CV tools depend on ONNX Runtime GPU behavior.
- Claims we can safely use:
  - onnxruntime-gpu needs a compatible CUDA/cuDNN path or compatible PyTorch DLL loading path.
  - ONNX Runtime CUDA builds are sensitive to CUDA/cuDNN major versions.
  - Installing both CPU and GPU ONNX Runtime packages in one env can create confusing provider behavior and should be avoided unless tested.
- Claims that need retesting:
  - Exact ORT version to pair with each AIWF torch profile.
- Related AIWF repo: AIWF-EnvPack, AIWF-ComfyUI-Nodes
- Source quality: A

## Gradio

- Source type: Official GitHub / docs
- URL or local file: https://github.com/gradio-app/gradio
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages / agents and local apps
- Stability: Moderate / fast-moving
- AIWF decision: WRAP
- Why it matters: Gradio is a strong candidate for beginner-facing AIWF apps because it gives Python functions a local browser UI and can share a local app remotely when enabled.
- Claims we can safely use:
  - Gradio is an open-source Python package for building demos/apps around ML models, APIs, or arbitrary Python functions.
  - Gradio requires Python 3.10+ according to the checked README.
  - Gradio launch can serve locally and optionally create a share link.
- Claims that need retesting:
  - Best pattern for one Gradio shell controlling multiple backend venv scripts.
- Related AIWF repo: AIWF-Labs, AIWF-Workflow-Packs, AIWF-Knowledge-Pack
- Source quality: A

## Ultralytics YOLO

- Source type: Official docs
- URL or local file: https://docs.ultralytics.com/quickstart
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages / ComfyUI workflows
- Stability: Fast-moving
- AIWF decision: DOCUMENT
- Why it matters: YOLO models show up in face detection, bbox detection, segmentation, pose, and some ComfyUI custom-node stacks.
- Claims we can safely use:
  - Ultralytics supports pip, conda, Docker, and GitHub installation paths.
  - Docker is explicitly positioned as an isolation option.
  - The CLI supports single-line task/mode workflows.
- Claims that need retesting:
  - Whether a given node pack needs full ultralytics or only model files in `models/ultralytics/`.
- Related AIWF repo: AIWF-EnvPack, AIWF-ComfyUI-Nodes, AIWF-Workflow-Packs
- Source quality: A

## OpenCV Python Wheels

- Source type: PyPI package page / upstream wheel docs
- URL or local file: https://pypi.org/project/opencv-python-headless/
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages
- Stability: Stable but conflict-prone
- AIWF decision: DOCUMENT
- Why it matters: OpenCV is everywhere in image/video utility code, but installing more than one cv2 wheel family in the same env causes namespace conflicts.
- Claims we can safely use:
  - The opencv-python package family uses the shared `cv2` namespace; install only one of opencv-python, opencv-contrib-python, opencv-python-headless, or opencv-contrib-python-headless per environment.
  - Headless packages avoid GUI dependencies and are usually better for server/backend inference when `cv2.imshow` is not needed.
- Claims that need retesting:
  - Which ComfyUI node packs require GUI-enabled OpenCV versus headless OpenCV.
- Related AIWF repo: AIWF-EnvPack, AIWF-Labs
- Source quality: A

## Meta SAM 2

- Source type: Official GitHub repo
- URL or local file: https://github.com/facebookresearch/sam2
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages / ComfyUI workflows
- Stability: Moderate
- AIWF decision: WRAP
- Why it matters: SAM 2 is a key segmentation component for auto-mask, inpaint, object isolation, and video object segmentation experiments.
- Claims we can safely use:
  - The official repo provides inference code, trained checkpoint links, and example notebooks.
  - Licenses shown on the repo include Apache-2.0 and BSD-3-Clause components.
- Claims that need retesting:
  - Windows install path without native-extension pain.
  - Best integration route for ComfyUI versus standalone Gradio scripts.
- Related AIWF repo: AIWF-Workflow-Packs, AIWF-Labs
- Source quality: A

## Grounding DINO via Transformers

- Source type: Official Hugging Face Transformers docs
- URL or local file: https://huggingface.co/docs/transformers/en/model_doc/grounding-dino
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages / ComfyUI workflows
- Stability: Moderate
- AIWF decision: WRAP
- Why it matters: Grounding DINO gives text-conditioned object detection, useful for auto-mask and prompt-aware inpaint workflows.
- Claims we can safely use:
  - Grounding DINO extends closed-set detection with language input for open-set object detection.
  - A Transformers path can reduce reliance on harder-to-compile native repos for some use cases.
- Claims that need retesting:
  - Exact bounding-box formats and conversion into SAM 2 masks.
- Related AIWF repo: AIWF-Workflow-Packs, AIWF-ComfyUI-Nodes
- Source quality: A

## ComfyUI-ReActor

- Source type: GitHub repo
- URL or local file: https://github.com/Gourieff/ComfyUI-ReActor
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages / ComfyUI workflows
- Stability: Fast-moving
- AIWF decision: DOCUMENT
- Why it matters: ReActor is a common ComfyUI face-swap/face-restore dependency zone and historically caused insightface/onnxruntime/C++ build tool friction.
- Claims we can safely use:
  - The repo advertises a newer ReActor Core with no InsightFace requirement, no C++ Build Tools requirement, and NumPy 1.x/2.x friendliness.
- Claims that need retesting:
  - Output differences between old insightface path and new ReActor Core.
  - Whether existing AIWF workflows need node schema updates.
- Related AIWF repo: AIWF-Workflow-Packs, AIWF-ComfyUI-Nodes
- Source quality: B

## Transparent Background / InSPyReNet

- Source type: GitHub repo
- URL or local file: https://github.com/plemeri/transparent-background
- Date checked: 2026-05-19
- Topic lane: Python pip and runtime packages / image utilities
- Stability: Moderate
- AIWF decision: WATCH
- Why it matters: Possible rembg alternative for background removal or matte extraction; not central to VQA, but useful for image preprocessing.
- Claims we can safely use:
  - The project describes itself as a background-removal tool powered by InSPyReNet.
  - It supports image, video, and webcam use cases according to the README.
- Claims that need retesting:
  - Whether it is preferable to rembg for AIWF workflows.
  - Whether dependency weight is acceptable for one-click installs.
- Related AIWF repo: AIWF-Labs, AIWF-Workflow-Packs
- Source quality: B

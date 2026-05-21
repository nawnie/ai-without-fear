# AIWF Runtime Package Cards

## Torch/CUDA is the base runtime profile, not just another pip package

```yaml
id: runtime_torch_cuda_base
type: package_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['PyTorch Local Install Matrix']
stability: fast-moving
aiwf_decision: DOCUMENT
```

Install torch/torchvision/torchaudio intentionally from the selected PyTorch CUDA/CPU index before adding AI packages that depend on them.

**Use when:** Building ComfyUI, Diffusers, VQA, training, or GPU inference environments.

**Do not use when:** Trying to fix a broken env by randomly upgrading packages without checking torch/CUDA compatibility.


## Hugging Face stack should live in isolated profiles

```yaml
id: runtime_hf_diffusers_transformers_stack
type: package_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['Hugging Face Diffusers Installation', 'Hugging Face Transformers Installation', 'Hugging Face Accelerate']
stability: moderate_fast_moving
aiwf_decision: DOCUMENT
```

Diffusers and Transformers are core reference stacks, but they should be installed into purpose-specific venv profiles instead of the main launcher env.

**Use when:** Building standalone image pipelines, VQA/captioning, local LLM/VLM tools, or teaching examples outside ComfyUI.

**Do not use when:** A ComfyUI API bridge can run the workflow without importing a second heavy ML stack.


## Gradio is the beginner UI shell, not the heavy runtime

```yaml
id: runtime_gradio_shell
type: tool_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['Gradio']
stability: moderate_fast_moving
aiwf_decision: WRAP
```

Use Gradio as a local browser/phone-friendly UI that calls backend profiles, scripts, or ComfyUI APIs. Keep heavy ML imports out of the shell startup path.

**Use when:** Making beginner-facing AIWF apps, demo tools, workflow launchers, and modular local interfaces.

**Do not use when:** The problem needs a native desktop GUI or a low-latency node graph editor.


## ONNX Runtime GPU failures are provider/DLL problems first

```yaml
id: runtime_onnxruntime_gpu_provider
type: failure_pattern_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['ONNX Runtime Install and CUDA Execution Provider']
stability: fast-moving
aiwf_decision: DOCUMENT
```

Face/CV stacks that use ONNX Runtime can silently fall to CPU or fail if CUDA/cuDNN/provider versions are wrong or if CPU and GPU ORT packages are mixed.

**Use when:** Diagnosing ReActor, insightface, face detection, ONNX model inference, or VQA/CV runtime failures.

**Do not use when:** The stack is pure PyTorch and does not import ONNX Runtime.


## Install only one OpenCV wheel family per environment

```yaml
id: runtime_opencv_single_cv2_namespace
type: failure_pattern_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['OpenCV Python Wheels']
stability: stable_conflict_prone
aiwf_decision: DOCUMENT
```

opencv-python, opencv-contrib-python, opencv-python-headless, and opencv-contrib-python-headless share the cv2 namespace. Multiple installs in one venv are a known conflict pattern.

**Use when:** Building any image/video/CV package profile.

**Do not use when:** Using OpenCV only through an already-managed environment where the package family is known and working.


## Ultralytics is a detection/segmentation package and CLI layer

```yaml
id: runtime_ultralytics_detection_profile
type: package_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['Ultralytics YOLO']
stability: fast-moving
aiwf_decision: DOCUMENT
```

Ultralytics can be installed via pip/conda/Docker/GitHub and provides CLI/Python access to detection, segmentation, and pose workflows.

**Use when:** YOLO detection, segmentation, pose, bbox models, or ComfyUI nodes require ultralytics models or package support.

**Do not use when:** A node only needs a downloaded .pt model file and already includes its own loader.


## SAM2 + Grounding DINO is the auto-mask direction

```yaml
id: runtime_sam2_groundingdino_masking
type: workflow_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['Meta SAM 2', 'Grounding DINO via Transformers']
stability: moderate
aiwf_decision: WRAP
```

Use text-conditioned detection from Grounding DINO plus SAM/SAM2 segmentation to create masks for inpainting and object isolation.

**Use when:** The user wants automatic inpaint masks from plain language targets like 'remove the person in red' or 'mask the shirt'.

**Do not use when:** Manual mask painting is faster or the object boundary is subjective/artistic.


## ReActor should be documented as a moving ComfyUI node dependency zone

```yaml
id: runtime_reactor_face_stack
type: source_decision_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['ComfyUI-ReActor']
stability: fast-moving
aiwf_decision: DOCUMENT
```

ReActor has moved toward a newer core that reduces old insightface/C++ build friction, but existing workflows and output behavior still need retesting.

**Use when:** Face swap or face restore nodes are needed inside ComfyUI workflows.

**Do not use when:** The user needs legally/ethically sensitive identity manipulation guidance or a workflow that cannot be tested for consent-safe use.


## Use venv islands for AIWF one-click installs

```yaml
id: runtime_venv_islands
type: source_decision_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['Hugging Face Diffusers Installation', 'Hugging Face Transformers Installation', 'OpenCV Python Wheels', 'ONNX Runtime Install and CUDA Execution Provider']
stability: stable_principle
aiwf_decision: BUILD_MISSING_PIECE
```

A single launcher can manage multiple isolated backend venvs. This reduces torch, OpenCV, ONNX, restoration, and segmentation dependency collisions.

**Use when:** Designing AIWF Gradio apps, workflow launchers, or one-click installers.

**Do not use when:** A single-purpose tool has a tiny dependency set and no GPU/CV conflict risk.


## Build a requirements auditor before auto-installing custom nodes

```yaml
id: runtime_requirements_auditor
type: tool_card
topic_lane: 02_python_pip_and_runtime_packages
source_refs: ['PyTorch Local Install Matrix', 'OpenCV Python Wheels', 'ONNX Runtime Install and CUDA Execution Provider']
stability: project_gap
aiwf_decision: BUILD_MISSING_PIECE
```

AIWF can add value by reading requirements files before install and warning when a package would replace torch, add conflicting OpenCV wheels, or mix ONNX Runtime providers.

**Use when:** Installing or updating ComfyUI custom nodes, Gradio profiles, or workflow dependencies.

**Do not use when:** The user intentionally wants a disposable experimental environment.

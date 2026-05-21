# AIWF Source Ledger — Existing Projects and Reference Sources

Purpose: keep AIWF from rebuilding things that already exist, while preserving enough source context for future RAG, docs, and repo planning.

## Use / Wrap / Document / Build Rule

Before a new AIWF tool, workflow, or node is built, classify the source landscape:

| Decision | Meaning | AIWF Action |
|---|---|---|
| Use | Existing project already solves the problem well | Link it, install it, document it |
| Wrap | Existing project solves the hard part but not the beginner workflow | Build a thin AIWF wrapper, preset, guide, or launcher |
| Document | Existing project is powerful but confusing | Add plain-language AIWF docs, failure modes, and examples |
| Build | Existing project does not cover the actual AIWF scope | Build only the missing piece |

## Core ComfyUI Ecosystem Sources

| Source | What It Covers | AIWF Relevance | Default Decision | URL |
|---|---|---|---|---|
| ComfyUI official repo | Modular node-graph engine for image, video, 3D, audio, and related generative-media workflows | Base runtime for workflow packs and node-pack work | Use | https://github.com/Comfy-Org/ComfyUI |
| ComfyUI official docs | Built-in nodes, custom nodes, local API, registry, installation patterns | Canonical reference for node development and install docs | Use / Document | https://docs.comfy.org/ |
| ComfyUI custom node docs | How custom nodes are installed and authored | Required reference before building AIWF-ComfyUI-Nodes | Use | https://docs.comfy.org/development/core-concepts/custom-nodes |
| ComfyUI install custom node guide | User-facing custom-node install methods | Helps AIWF keep one-click install compatible with current ComfyUI expectations | Use / Document | https://docs.comfy.org/installation/install_custom_node |
| ComfyUI Registry overview | Public custom-node registry powering Manager; supports publish/version/deprecate/metrics | Long-term route for AIWF node-pack discovery | Use / Submit Later | https://docs.comfy.org/registry/overview |
| ComfyUI Manager configuration | Manager security levels and behavior | Important for support docs; avoid telling users to weaken security casually | Document | https://docs.comfy.org/manager/configuration |
| ComfyUI-Manager repo | Custom-node install/update/dependency management | AIWF should not replace Manager; EnvPack should report Manager state | Use / Integrate Around | https://github.com/Comfy-Org/ComfyUI-Manager |
| comfy-cli repo | CLI for installing/running/extending ComfyUI, installing nodes/models, running workflows | Possible future one-click route or advanced install path | Evaluate / Wrap | https://github.com/Comfy-Org/comfy-cli |
| ComfyUI-Doctor | Real-time diagnostics and debugging assistant for ComfyUI tracebacks and node-context errors | EnvPack should not duplicate runtime diagnosis; it should create a broader support report | Use / Compare | https://github.com/rookiestar28/ComfyUI-Doctor |
| MTB / mtb endpoint | Node-load information and MTB-specific runtime visibility | Useful existing diagnostic surface; EnvPack can reference output if present | Use / Document | https://github.com/melMass/comfy_mtb |
| ComfyUI Impact Pack | Detector, detailer, upscaler, pipe, and image-enhancement nodes | High-value workflow dependency; don't rebuild detailer/upscaler basics | Use / Document | https://github.com/ltdrdata/ComfyUI-Impact-Pack |
| Awesome ComfyUI custom nodes | Curated custom-node discovery list | Useful research seed; not a canonical source of truth | Use for discovery | https://github.com/ComfyUI-Workflow/awesome-comfyui |

## EnvPack / Diagnostic Source Ledger

| Source | What It Covers | AIWF Relevance | Default Decision | URL |
|---|---|---|---|---|
| PyTorch collect_env | Torch/CUDA/cuDNN/Python/platform/package environment diagnostics | EnvPack should call or mirror this rather than invent weak Torch checks | Wrap | https://github.com/pytorch/pytorch/blob/main/torch/utils/collect_env.py |
| PyTorch collect_env docs | Helper functions used by collect_env | Good for documenting what EnvPack can and cannot know | Reference | https://docs.pytorch.org/docs/2.12/generated/torch.utils.collect_env.run.html |
| NVIDIA nvidia-smi | GPU monitoring and management through NVML | EnvPack should capture GPU model, VRAM, driver, utilization, temp, processes if available | Wrap | https://docs.nvidia.com/deploy/nvidia-smi/ |
| NVIDIA System Management Interface | Official high-level SMI overview | Helps explain why GPU data may be unavailable or limited on some hardware | Reference | https://developer.nvidia.com/system-management-interface |
| ComfyUI extra_model_paths docs | Adds external model search paths for multiple installs/shared model stores | Required for model checker and duplicate scan | Use | https://docs.comfy.org/development/core-concepts/models |
| ComfyUI extra_model_paths example | Canonical YAML shape for model folder mapping | Use as parser test fixture and docs example | Use | https://github.com/Comfy-Org/ComfyUI/blob/master/extra_model_paths.yaml.example |
| Safetensors docs | Safe tensor file format; avoids pickle execution | Model checker should prefer metadata/header inspection and avoid loading weights | Use | https://huggingface.co/docs/safetensors/index |
| Safetensors metadata parsing | Metadata/header parsing without downloading full model from Hub | Design pattern for lightweight metadata inspection | Use / Adapt | https://huggingface.co/docs/safetensors/metadata_parsing |
| pip-audit | Scans Python environments for packages with known vulnerabilities | Optional future security/report section; not required for v0.1 if it complicates installs | Park / Optional | https://pypi.org/project/pip-audit/ |
| PyPI | Python package registry | Package source for dependency checks and documentation | Reference | https://pypi.org/ |
| uv | Modern Python package/project manager | Potential future fast install path, but avoid forcing it in beginner beta until tested | Evaluate | https://docs.astral.sh/uv/ |

## Security Notes To Carry Forward

- Do not auto-run unknown custom-node code during scans.
- Do not weaken ComfyUI-Manager security settings as a default support answer.
- Treat ComfyUI custom nodes as executable Python projects, not harmless presets.
- For safetensors, read headers/metadata; do not load entire model weights for classification.
- For pip security checks, report only in v0.1; do not auto-upgrade packages.
- Avoid destructive model moves until after dry-run reports are proven.

## RAG Tags

Use these tags in future source notes:

```text
rag_tag: comfyui-core
rag_tag: comfyui-manager
rag_tag: custom-nodes
rag_tag: workflow-json
rag_tag: diagnostics
rag_tag: torch-cuda
rag_tag: model-paths
rag_tag: safetensors
rag_tag: security
rag_tag: packaging
rag_tag: beginner-install
```

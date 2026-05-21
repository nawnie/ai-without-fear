# Assistant Context — Runtime Package Lane

Date checked: 2026-05-19

Use this as a compact RAG context block for AIWF assistants.

## Runtime principles

- Torch/CUDA is the base profile. Install it intentionally before other ML packages.
- Prefer isolated venv profiles over one giant environment.
- Gradio is a good beginner shell, but it should call backend profiles rather than import every heavy dependency at startup.
- OpenCV wheel families share `cv2`; use only one per venv.
- ONNX Runtime CPU/GPU package mixing is a common face/CV failure pattern.
- Diffusers and Transformers are reference stacks; use them directly when building Python-native tools, but do not duplicate ComfyUI if ComfyUI already runs the workflow well.
- SAM2 + Grounding DINO is the preferred research direction for language-driven auto-mask/inpaint support.
- ReActor should be documented and tested as a moving ComfyUI node dependency, not blindly assumed stable.

## AIWF build targets suggested by this pass

1. Profile runner: one Gradio UI, multiple backend venvs.
2. Requirements auditor: detect torch/OpenCV/ONNX hazards before installing node requirements.
3. Workflow dependency report: inspect workflow JSON for custom nodes, model families, and likely package needs.
4. Model placement checker: continue EnvPack model sanity work.
5. Safe install generator: output PowerShell commands based on selected profile and detected environment.

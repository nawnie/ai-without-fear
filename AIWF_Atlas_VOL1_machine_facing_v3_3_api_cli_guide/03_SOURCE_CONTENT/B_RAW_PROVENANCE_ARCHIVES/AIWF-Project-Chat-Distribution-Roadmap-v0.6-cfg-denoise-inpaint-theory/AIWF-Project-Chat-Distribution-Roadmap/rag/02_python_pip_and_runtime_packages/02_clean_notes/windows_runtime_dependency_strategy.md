# Windows Runtime Dependency Strategy for AIWF

Date checked: 2026-05-19

## Core conclusion

AIWF should treat Python environments as **tool cartridges**. The user sees one app, but the app can run different backend profiles.

That gives us the advantage of Gradio/phone-friendly UI without forcing SAM2, ReActor, Diffusers, VQA, video IO, and restoration packages to coexist in one fragile venv.

## Recommended architecture

```text
User clicks run.ps1
        |
        v
AIWF Launcher / Gradio Shell
        |
        +-- calls ComfyUI API when workflow should run in ComfyUI
        +-- calls profile script in isolated venv when workflow is Python-native
        +-- reads profile manifest for install status, models, commands, ports
        +-- writes results to shared outputs folder
```

## Profile manifest idea

```json
{
  "profile_id": "auto_mask_sam2",
  "display_name": "Auto Mask: Grounding DINO + SAM2",
  "venv": ".venvs/auto_mask_sam2",
  "entrypoint": "profiles/auto_mask_sam2/run.py",
  "requires_gpu": true,
  "required_models": ["sam2 checkpoint", "grounding-dino model"],
  "inputs": ["image", "text_target"],
  "outputs": ["mask", "bbox_json", "preview_png"],
  "risk": "advanced",
  "install_status": "untested"
}
```

## What EnvPack should detect later

EnvPack should produce a runtime section that looks for:

- active Python executable
- Python version
- torch version
- torch CUDA build
- CUDA available yes/no
- GPU name and VRAM
- cuDNN version from torch when available
- `onnxruntime` installed yes/no
- `onnxruntime-gpu` installed yes/no
- available ONNX providers
- OpenCV package family or at least `cv2.__version__`
- duplicate package hazards, especially OpenCV and ONNX Runtime
- ComfyUI version / git hash when available
- custom node requirements files

## Powershell install principle

For public beginner installs, use profile creation commands instead of a giant global install.

Example pattern:

```powershell
# from repo root
py -3.12 -m venv .venvs\gradio_shell
.\.venvs\gradio_shell\Scripts\python.exe -m pip install --upgrade pip
.\.venvs\gradio_shell\Scripts\python.exe -m pip install -r requirements-gradio-shell.txt
```

Then separately:

```powershell
py -3.12 -m venv .venvs\diffusers_image
.\.venvs\diffusers_image\Scripts\python.exe -m pip install --upgrade pip
# install torch intentionally from the selected PyTorch CUDA index first
# then install the profile-specific requirements
```

## No-reinvent rule applied

- Do not rebuild ComfyUI-Manager; use it for custom-node install/update/disable/enable.
- Do not rebuild ComfyUI-Doctor; EnvPack should output pasteable evidence and environment context.
- Do not rebuild Gradio; use it as the beginner UI shell.
- Do not rebuild Transformers or Diffusers pipelines unless AIWF needs a teaching wrapper or a missing glue layer.
- Do not rebuild SAM2/Grounding DINO; wrap them for beginner masking workflows.
- Do not rebuild ONNX Runtime; detect and document provider problems.

## AIWF build-worthy missing pieces

1. **Profile runner:** one UI, many backend venvs.
2. **Requirements auditor:** reads a node pack's requirements before install and warns about torch/OpenCV/ONNX changes.
3. **Model placement checker:** detects misplaced SAM, YOLO, ControlNet, diffusion, VAE, LoRA, and face models.
4. **Workflow dependency report:** reads a workflow JSON and lists custom nodes/models/packages needed before the user clicks run.
5. **Safe install generator:** creates PowerShell commands for the user's current Python/CUDA/ComfyUI setup.

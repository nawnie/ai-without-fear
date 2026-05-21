# AIWF Runtime Package Family Map

Date checked: 2026-05-19

This is not a lockfile. It is a map of package families, what they do, how dangerous they are to combine, and where AIWF should use, wrap, document, or avoid them.

## Main rule

AIWF should not ship one enormous `requirements.txt` that tries to satisfy ComfyUI, Diffusers, VQA, face restoration, SAM, video IO, OCR, Gradio, and training in one environment. That approach creates dependency hell.

Preferred structure:

```text
aiwf-launcher/                 # small stable shell
  app.py                       # Gradio or CLI router
  aiwf_profiles.json           # profile registry
  profiles/
    comfy_bridge/              # calls ComfyUI API, minimal deps
    diffusers_sdxl/            # torch/diffusers profile
    vqa_caption/               # transformers/VLM profile
    auto_mask_sam2/            # SAM/GroundingDINO profile
    face_reactor_bridge/       # ComfyUI bridge or separate face env
    video_io/                  # av/decord/imageio/moviepy tools
```

The launcher should call profile scripts as subprocesses or HTTP workers. It should not import every heavy ML stack at startup.

## Package families

| Family | Common packages | AIWF use | Risk | Decision |
|---|---|---|---:|---|
| Torch/CUDA base | `torch`, `torchvision`, `torchaudio` | GPU inference/training base | High | DOCUMENT |
| Attention/perf add-ons | `xformers`, `sageattention`, `flash-attn`, `triton` | speed/memory experiments | High | WATCH |
| HF diffusion stack | `diffusers`, `accelerate`, `safetensors`, `huggingface_hub` | clean image/video scripts, teaching references | Medium | DOCUMENT |
| HF language/vision stack | `transformers`, `tokenizers`, `sentencepiece`, `protobuf` | local LLM/VLM, captioning, Grounding DINO path | Medium | DOCUMENT |
| Training helpers | `peft`, `datasets`, `bitsandbytes` | future training volume/labs | High on Windows | WATCH |
| UI shell | `gradio`, `fastapi`, `uvicorn`, `pydantic` | local web UI, modular app router | Medium | WRAP |
| System reporting | `psutil`, `platform`, `subprocess`, `json`, `rich`, `tqdm` | EnvPack diagnostics and readable CLI | Low | USE |
| Image basics | `pillow`, `numpy`, `scipy`, `scikit-image` | image IO and array processing | Low/Medium | USE |
| OpenCV family | `opencv-python`, `opencv-python-headless`, `opencv-contrib-python-headless` | image/video processing and CV utilities | Medium | DOCUMENT |
| Video IO | `imageio`, `imageio-ffmpeg`, `av`, `decord`, `moviepy` | frame extraction, stitching, preview video | Medium | DOCUMENT |
| Segmentation/detection | `ultralytics`, `sam2`, `segment-anything`, `groundingdino`, `transformers` | auto mask, inpainting, object selection | High | WRAP |
| Control/pose preprocessors | `controlnet_aux`, `mediapipe`, `timm`, `einops`, `kornia` | pose/depth/canny/lineart workflow helpers | Medium | DOCUMENT |
| ONNX/face stack | `onnx`, `onnxruntime-gpu`, `insightface` | face analysis, old ReActor-style stacks | High | DOCUMENT |
| Restoration/upscale | `spandrel`, `basicsr`, `facexlib`, `gfpgan`, `realesrgan` | restoration/upscaling experiments | High | WATCH |
| Background/matting | `rembg`, `transparent-background` | matte/background removal; not core VQA | Medium | WATCH |

## AIWF package decisions

### USE

Use these as boring foundations when needed:

```text
psutil, pillow, numpy, scipy, requests, rich, tqdm, pydantic
```

### DOCUMENT

Do not wrap these yet; teach what they are and how they fail:

```text
torch, torchvision, torchaudio, diffusers, transformers, accelerate,
safetensors, huggingface_hub, opencv-python-headless, onnxruntime-gpu
```

### WRAP

Good targets for beginner-friendly AIWF launchers or ComfyUI bridge scripts:

```text
gradio, fastapi, ultralytics, sam2, Grounding DINO via transformers
```

### WATCH

Useful, but do not make beginner install promises until tested:

```text
xformers, sageattention, flash-attn, triton, bitsandbytes, rembg,
transparent-background, basicsr, gfpgan, realesrgan, facexlib
```

## Windows-specific risk notes

1. `torch` is the base of the pyramid. Install it intentionally first.
2. Anything that says CUDA/cuDNN/ONNX/TensorRT should be treated as a profile-level dependency, not a global dependency.
3. OpenCV packages share `cv2`; install only one OpenCV wheel family per venv.
4. ONNX Runtime CPU and GPU packages can conflict in practice. For face stacks, EnvPack should detect both and warn.
5. Face restoration/upscaler stacks often drag older dependencies. They belong in isolated profiles until proven safe.
6. ComfyUI custom node requirements should be read, but not blindly installed into the main environment.
7. If a package requires Visual Studio Build Tools or native CUDA compile on Windows, it is not beginner-safe until wrapped or avoided.

## One-click install implication

The one-click AIWF installer should create profiles, not one mega-env.

Minimum beginner-safe profiles:

```text
profile_core_envpack        # diagnostics, JSON/Markdown reports
profile_comfy_bridge        # ComfyUI API caller, workflow runner
profile_gradio_shell        # UI/router, no heavy ML imports at launch
profile_diffusers_image     # torch + diffusers + HF stack
profile_vqa_caption         # torch + transformers + VLM-specific deps
profile_auto_mask           # transformers Grounding DINO + SAM/SAM2 path
```

Advanced/labs profiles:

```text
profile_face_restore
profile_realesrgan_restore
profile_training_lora
profile_video_io_heavy
profile_onnx_face_gpu
```

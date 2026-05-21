# Runtime Source Notes — 2026-05-19

This is a short capture file for the first pip/runtime source pass. It intentionally stores source summaries, not full copied docs.

## Official / primary sources checked

| Source | URL | Source quality | Why it enters the runtime lane |
|---|---|---:|---|
| PyTorch local install selector | https://pytorch.org/get-started/locally/ | A | Torch/CUDA/Python base profile for ComfyUI and all local AI scripts. |
| ComfyUI official changelog | https://docs.comfy.org/changelog | A | Confirms ComfyUI is moving fast; workflow JSONs must be schema/version checked. |
| Hugging Face Diffusers installation | https://huggingface.co/docs/diffusers/en/installation | A | Clean Python pipeline stack; recommends isolated environments. |
| Hugging Face Transformers installation | https://huggingface.co/docs/transformers/en/installation | A | Local LLM/VLM/CV model stack; Python/Torch compatibility matters. |
| Hugging Face Accelerate | https://huggingface.co/docs/accelerate/en/index | A | Device/distributed/fp16 support common in training and inference scripts. |
| ONNX Runtime install + CUDA provider | https://onnxruntime.ai/docs/install/ | A | Critical for face/CV stacks; CUDA/cuDNN mismatch is a common failure point. |
| Gradio GitHub/docs | https://github.com/gradio-app/gradio | A | Local browser UI shell for AIWF beginner apps. |
| Ultralytics quickstart | https://docs.ultralytics.com/quickstart | A | Detection/segmentation/pose package and CLI; isolation options documented. |
| OpenCV Python wheels | https://pypi.org/project/opencv-python-headless/ | A | cv2 namespace conflict rules matter for dependency hygiene. |
| SAM 2 official repo | https://github.com/facebookresearch/sam2 | A | Segmentation base for inpaint/auto-mask/video workflows. |
| Grounding DINO in Transformers | https://huggingface.co/docs/transformers/en/model_doc/grounding-dino | A | Text-conditioned object detection path for auto-mask. |
| ComfyUI-ReActor | https://github.com/Gourieff/ComfyUI-ReActor | B | Important ComfyUI node; fast-moving, needs workflow/schema retest. |
| Transparent Background | https://github.com/plemeri/transparent-background | B | Candidate preprocessing/background-removal package; watch status. |

## Immediate runtime rule learned

Do not build a single giant Python environment for every AIWF app. Build a small, stable launcher shell plus isolated venv profiles for heavy modules. Diffusers/Transformers/Gradio docs all point toward virtual environment isolation as the sane path, and the OpenCV/ONNX Runtime packages show why: many AI packages share namespaces, DLL loaders, or CUDA providers.

## Packages already seen or implied in the AIWF project

```text
torch, torchvision, torchaudio, xformers, accelerate, diffusers, transformers,
safetensors, huggingface_hub, tokenizers, sentencepiece, protobuf, peft, datasets,
gradiо, fastapi, uvicorn, pydantic, requests, rich, tqdm, psutil, pillow, numpy,
scipy, opencv-python, opencv-python-headless, opencv-contrib-python-headless,
imageio, imageio-ffmpeg, av, decord, moviepy, einops, timm, kornia,
controlnet_aux, onnx, onnxruntime, onnxruntime-gpu, insightface, ultralytics,
mediapipe, segment-anything, sam2, groundingdino, rembg, transparent-background,
spandrel, basicsr, facexlib, gfpgan, realesrgan
```

Note: `gradiо` above should be normalized to `gradio` in manifests. Keep this note because OCR/copy/paste can introduce lookalike characters.

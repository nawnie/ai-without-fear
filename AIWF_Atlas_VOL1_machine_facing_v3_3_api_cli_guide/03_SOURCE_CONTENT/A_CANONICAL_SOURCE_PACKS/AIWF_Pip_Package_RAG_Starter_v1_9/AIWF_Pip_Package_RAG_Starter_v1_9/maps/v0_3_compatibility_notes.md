# v0.3 Compatibility Notes — Image, Restoration, Face, Segmentation

## Purpose

This file records cross-package rules for the v0.3 package pass so an AI assistant avoids destructive install advice inside a working ComfyUI/Gradio environment.

## Rules

### 1. Do not upgrade torch as a side effect

Packages such as `ultralytics`, `sam2`, `gfpgan`, `realesrgan`, and `controlnet-aux` may depend on torch-family packages. In an existing ComfyUI venv, never allow a package install to casually replace the working CUDA torch build.

### 2. Distinguish pip package name from import name

- `Pillow` imports as `PIL`.
- `opencv-python` imports as `cv2`.
- `scikit-image` imports as `skimage`.
- `segment-anything` imports as `segment_anything`.
- `onnxruntime-gpu` imports as `onnxruntime`, same as CPU runtime.

### 3. ONNX Runtime provider availability is the real test

For InsightFace/ReActor-class tools, the important question is whether `CUDAExecutionProvider` appears in `ort.get_available_providers()`.

### 4. Legacy restoration has a known TorchVision API trap

Older BasicSR/Real-ESRGAN/GFPGAN-era code can fail on modern TorchVision with missing `torchvision.transforms.functional_tensor`. Treat that as cluster mismatch.

### 5. SAM v1 and SAM 2 are separate installs

SAM v1 uses `segment-anything` / `segment_anything`. SAM 2 is a separate repo/install path with newer torch requirements, video-aware use cases, and CUDA-extension considerations.

## Recommended venv strategy

- Main ComfyUI venv: keep stable; avoid experiments.
- AIWF UI/controller venv: Gradio/FastAPI/light dependencies.
- Restoration worker venv: GFPGAN/Real-ESRGAN/BasicSR stack.
- Face/identity worker venv: InsightFace + ONNX Runtime provider stack.
- Segmentation worker venv: SAM/SAM2/Ultralytics stack.

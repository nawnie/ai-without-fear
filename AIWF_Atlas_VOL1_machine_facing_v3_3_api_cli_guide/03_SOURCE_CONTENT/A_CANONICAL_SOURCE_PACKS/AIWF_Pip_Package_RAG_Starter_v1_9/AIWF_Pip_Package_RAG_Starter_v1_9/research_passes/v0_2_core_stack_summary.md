# v0.2 Core Stack Package Research Summary

## Packages documented this pass

- torch
- torchvision
- torchaudio
- xformers
- triton
- diffusers
- transformers
- accelerate
- safetensors
- huggingface_hub
- gradio
- fastapi
- pydantic
- starlette
- uvicorn
- anyio

## Main result

The package RAG should not be a flat list. It needs dependency-family reasoning:

1. Torch/CUDA ABI family
2. Hugging Face model/pipeline family
3. UI/API async web family
4. Image restoration/face-swap family
5. RAG/vector/search family
6. Diagnostics/reporting family

## Next pass recommendation

Document the image/vision/restoration batch next because it has the highest practical breakage rate in the user's current ComfyUI workflows:

`Pillow`, `numpy`, `opencv-python`, `controlnet-aux`, `psutil`, `gfpgan`, `basicsr`, `realesrgan`, `facexlib`, `insightface`, `onnxruntime`, `onnx`, `ultralytics`, `segment-anything`, `sam2`.

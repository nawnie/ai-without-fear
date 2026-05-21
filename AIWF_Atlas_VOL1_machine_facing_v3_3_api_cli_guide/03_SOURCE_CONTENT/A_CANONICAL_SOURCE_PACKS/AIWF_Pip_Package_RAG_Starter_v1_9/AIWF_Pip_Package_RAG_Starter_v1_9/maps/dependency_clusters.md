# Dependency Clusters for AIWF Pip RAG

## Torch / CUDA ABI cluster
Packages: `torch`, `torchvision`, `torchaudio`, `xformers`, `triton`.

Rule: inspect these as a family. A working import is not enough; CUDA wheel family, Python version, and compiled extension ABI must agree.

Core diagnostic:
```powershell
python -c "import torch; print(torch.__version__); print(torch.version.cuda); print(torch.cuda.is_available())"
python -c "import torchvision; print(torchvision.__version__)"
python -c "import xformers; print(xformers.__version__)"
```

## Hugging Face model/pipeline cluster
Packages: `diffusers`, `transformers`, `accelerate`, `safetensors`, `huggingface_hub`, plus tokenizer backends.

Rule: pin as a set per app/workflow. Do not mix old EveryDream-era pins with current VLM or diffusion repos in the same venv unless tested.

## Local app/API cluster
Packages: `gradio`, `fastapi`, `pydantic`, `starlette`, `uvicorn`, `anyio`.

Rule: major-version mismatches cause many UI failures. For beginner apps, use one venv per app or worker. For a modular AIWF launcher, keep the UI/controller venv separate from heavy ML worker venvs.

## Image restoration cluster
Packages to document next: `Pillow`, `numpy`, `opencv-python`, `gfpgan`, `basicsr`, `realesrgan`, `facexlib`, `insightface`, `onnxruntime`.

Rule: this cluster is where NumPy 2.x, old torchvision APIs, and Windows wheels most often collide.


## Image I/O and array bridge cluster
Packages: `Pillow`, `numpy`, `opencv-python`, `scikit-image`.

Rule: always document image mode, dtype, channel order, shape, and value range. PIL usually speaks RGB/RGBA/L; OpenCV often speaks BGR; NumPy is just an array and does not know semantic intent.

```powershell
python -c "from PIL import Image; import numpy as np; import cv2; print(Image.__version__, np.__version__, cv2.__version__)"
```

## Legacy restoration / upscaler cluster
Packages: `gfpgan`, `basicsr`, `realesrgan`, `facexlib`, plus `torch`, `torchvision`, `numpy`, `opencv-python`.

Rule: inspect this cluster before installing any single package. Known high-risk signature: `ModuleNotFoundError: No module named torchvision.transforms.functional_tensor` from older BasicSR/Real-ESRGAN code.

## Face identity / ONNX runtime cluster
Packages: `insightface`, `onnxruntime`, `onnxruntime-gpu`, `onnx`, `opencv-python`, `numpy`.

Rule: separate package import from provider availability. `import onnxruntime` succeeding does not prove `CUDAExecutionProvider` is active. Always check `ort.get_available_providers()`.

```powershell
python -c "import onnxruntime as ort; print(ort.__version__); print(ort.get_available_providers())"
```

## Detection / segmentation / mask automation cluster
Packages: `ultralytics`, `segment-anything`, `sam2`, `controlnet-aux`, plus `torch`, `torchvision`, `opencv-python`, `Pillow`, `numpy`.

Rule: record whether output is boxes, masks, pose, depth, lineart, or a conditioning image. For SAM 2, prefer isolated worker venvs because upstream install requirements can upgrade torch and require CUDA-extension build tooling.

## v0.4 — RAG / OCR / LLM-client cluster

### Retrieval cluster
`sentence-transformers` → embeddings → `chromadb` / `lancedb` / `faiss-cpu` → metadata store → LLM client.

### OCR cluster
`pytesseract` requires the external Tesseract executable; `easyocr` requires a working torch/torchvision install. These solve similar tasks but fail in different ways.

### Tokenization cluster
`tiktoken` is best for OpenAI-style budgeting; Hugging Face `tokenizers` is part of the model-loading contract for `transformers`.

### Provider-client cluster
`ollama` and `openai` are clients/adapters. They should sit behind an AIWF provider interface so local-first workflows can swap cloud/local backends without rewriting tools.


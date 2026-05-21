# Research Pass v0.3 — Image, Restoration, Face, ONNX, Segmentation

## Packages documented

`Pillow`, `numpy`, `opencv-python`, `controlnet-aux`, `psutil`, `gfpgan`, `basicsr`, `realesrgan`, `facexlib`, `insightface`, `onnxruntime`, `onnxruntime-gpu`, `onnx`, `ultralytics`, `segment-anything`, `sam2`, `scikit-image`.

## Main result

The v0.3 batch turns the archive into a practical troubleshooting map for ComfyUI-adjacent image workflows. The biggest issue is cluster skew:

- NumPy/OpenCV/Pillow/skimage image-array assumptions.
- BasicSR/Real-ESRGAN/GFPGAN legacy assumptions against newer TorchVision.
- InsightFace/ONNX Runtime CPU-vs-GPU provider confusion.
- SAM v1 vs SAM 2 install and checkpoint/config separation.

## RAG answer rules added

1. `cv2 missing` means `opencv-python` package identity.
2. `PIL missing` means `Pillow` package identity.
3. ReActor/InsightFace issues need ONNX Runtime provider checks.
4. BasicSR/Real-ESRGAN `functional_tensor` means version skew.
5. SAM 2 on Windows should use isolated venv/WSL or CUDA-extension fallback.
6. Bad masks require mode/dtype/channel-order checks before changing models.

## Next recommended pass

`sentence-transformers`, `chromadb`, `lancedb`, `faiss-cpu`, `ollama`, `openai`, `tiktoken`, `tokenizers`, `spacy`, `pytesseract`, `easyocr`, `rembg`, `transparent-background`, `onnxruntime-directml`, `protobuf`, `pyyaml`.

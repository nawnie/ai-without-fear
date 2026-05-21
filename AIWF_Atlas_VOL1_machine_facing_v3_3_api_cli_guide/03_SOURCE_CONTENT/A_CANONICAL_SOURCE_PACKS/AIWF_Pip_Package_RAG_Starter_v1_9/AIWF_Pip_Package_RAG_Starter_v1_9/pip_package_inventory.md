# AIWF Pip Package Inventory

Updated through **v1.6**. Tracked packages: **238**.

| ID | pip | import | category | priority | risk | doc |
|---|---|---|---|---|---|---|
| PIP-0001 | `torch` | `torch` | core_ml_runtime | critical | very_high | `packages/torch.md` |
| PIP-0002 | `torchvision` | `torchvision` | core_ml_runtime | critical | high | `packages/torchvision.md` |
| PIP-0003 | `torchaudio` | `torchaudio` | core_ml_runtime | medium | medium | `packages/torchaudio.md` |
| PIP-0004 | `xformers` | `xformers` | attention_backend | critical | very_high | `packages/xformers.md` |
| PIP-0005 | `triton` | `triton` | kernel_backend | medium | very_high | `packages/triton.md` |
| PIP-0006 | `diffusers` | `diffusers` | model_pipeline | critical | medium | `packages/diffusers.md` |
| PIP-0007 | `transformers` | `transformers` | model_pipeline | critical | medium | `packages/transformers.md` |
| PIP-0008 | `accelerate` | `accelerate` | model_pipeline | high | medium | `packages/accelerate.md` |
| PIP-0009 | `safetensors` | `safetensors` | model_io | critical | low | `packages/safetensors.md` |
| PIP-0010 | `huggingface_hub` | `huggingface_hub` | model_io | critical | low | `packages/huggingface_hub.md` |
| PIP-0011 | `datasets` | `datasets` | data_loading | high | medium | `packages/datasets.md` |
| PIP-0012 | `bitsandbytes` | `bitsandbytes` | quantization_training | high | very_high | `packages/bitsandbytes.md` |
| PIP-0013 | `lion-pytorch` | `lion_pytorch` | training_optimizer | low | low | `packages/lion-pytorch.md` |
| PIP-0014 | `omegaconf` | `omegaconf` | config | medium | low | `packages/omegaconf.md` |
| PIP-0015 | `gradio` | `gradio` | ui_webapp | critical | medium | `packages/gradio.md` |
| PIP-0016 | `fastapi` | `fastapi` | ui_backend_api | high | medium | `packages/fastapi.md` |
| PIP-0017 | `anyio` | `anyio` | async_runtime | medium | low | `packages/anyio.md` |
| PIP-0018 | `pandas` | `pandas` | data_processing | medium | medium | `packages/pandas.md` |
| PIP-0019 | `regex` | `regex` | text_processing | low | low | `packages/regex.md` |
| PIP-0020 | `ipywidgets` | `ipywidgets` | notebook_ui | low | low | `packages/ipywidgets.md` |
| PIP-0021 | `scipy` | `scipy` | numeric | medium | medium | `packages/scipy.md` |
| PIP-0022 | `ftfy` | `ftfy` | text_processing | low | low | `packages/ftfy.md` |
| PIP-0023 | `Pillow` | `PIL` | image_io | critical | low | `packages/pillow.md` |
| PIP-0024 | `controlnet-aux` | `controlnet_aux` | controlnet_preprocessor | high | medium | `packages/controlnet-aux.md` |
| PIP-0025 | `psutil` | `psutil` | diagnostics | critical | low | `packages/psutil.md` |
| PIP-0026 | `open-webui` | `open_webui` | llm_ui | medium | high | `packages/open-webui.md` |
| PIP-0027 | `gfpgan` | `gfpgan` | face_restore | high | high | `packages/gfpgan.md` |
| PIP-0028 | `dlib` | `dlib` | face_detection | medium | very_high | `packages/dlib.md` |
| PIP-0029 | `cmake` | `cmake` | native_build_tool | medium | medium | `packages/cmake.md` |
| PIP-0030 | `k-diffusion` | `k_diffusion` | sampler_backend | high | medium | `packages/k-diffusion.md` |
| PIP-0031 | `numpy` | `numpy` | numeric | critical | medium | `packages/numpy.md` |
| PIP-0032 | `opencv-python` | `cv2` | image_video_io | critical | medium | `packages/opencv-python.md` |
| PIP-0033 | `opencv-python-headless` | `cv2` | image_video_io | medium | medium | `packages/opencv-python-headless.md` |
| PIP-0034 | `tqdm` | `tqdm` | cli_progress | medium | low | `packages/tqdm.md` |
| PIP-0035 | `requests` | `requests` | http | medium | low | `packages/requests.md` |
| PIP-0036 | `PyYAML` | `yaml` | config | medium | low | `packages/pyyaml.md` |
| PIP-0037 | `einops` | `einops` | tensor_ops | high | low | `packages/einops.md` |
| PIP-0038 | `kornia` | `kornia` | vision_tensor_ops | medium | medium | `packages/kornia.md` |
| PIP-0039 | `spandrel` | `spandrel` | upscale_model_architecture | high | medium | `packages/spandrel.md` |
| PIP-0040 | `timm` | `timm` | vision_models | medium | medium | `packages/timm.md` |
| PIP-0041 | `tokenizers` | `tokenizers` | text_tokenization | medium | medium | `packages/tokenizers.md` |
| PIP-0042 | `sentencepiece` | `sentencepiece` | text_tokenization | medium | medium | `packages/sentencepiece.md` |
| PIP-0043 | `protobuf` | `google.protobuf` | serialization | medium | medium | `packages/protobuf.md` |
| PIP-0044 | `pydantic` | `pydantic` | validation_config | medium | medium | `packages/pydantic.md` |
| PIP-0045 | `starlette` | `starlette` | ui_backend_api | medium | medium | `packages/starlette.md` |
| PIP-0046 | `uvicorn` | `uvicorn` | ui_backend_api | medium | low | `packages/uvicorn.md` |
| PIP-0047 | `basicsr` | `basicsr` | restoration_upscale | high | high | `packages/basicsr.md` |
| PIP-0048 | `realesrgan` | `realesrgan` | restoration_upscale | high | high | `packages/realesrgan.md` |
| PIP-0049 | `facexlib` | `facexlib` | face_restore | high | medium | `packages/facexlib.md` |
| PIP-0050 | `insightface` | `insightface` | face_swap_identity | critical | very_high | `packages/insightface.md` |
| PIP-0051 | `onnxruntime` | `onnxruntime` | inference_runtime | high | medium | `packages/onnxruntime.md` |
| PIP-0052 | `onnxruntime-gpu` | `onnxruntime` | inference_runtime | medium | very_high | `packages/onnxruntime-gpu.md` |
| PIP-0053 | `onnx` | `onnx` | model_format | medium | medium | `packages/onnx.md` |
| PIP-0054 | `ultralytics` | `ultralytics` | detection_segmentation | high | medium | `packages/ultralytics.md` |
| PIP-0055 | `segment-anything` | `segment_anything` | segmentation | high | medium | `packages/segment-anything.md` |
| PIP-0056 | `SAM-2 / editable sam2 repo` | `sam2` | segmentation | high | high | `packages/sam2.md` |
| PIP-0057 | `groundingdino` | `groundingdino` | detection_segmentation | high | very_high | `packages/groundingdino.md` |
| PIP-0058 | `rembg` | `rembg` | background_segmentation | low | medium | `packages/rembg.md` |
| PIP-0059 | `transparent-background` | `transparent_background` | background_segmentation | low | medium | `packages/transparent-background.md` |
| PIP-0060 | `scikit-image` | `skimage` | image_processing | medium | medium | `packages/scikit-image.md` |
| PIP-0061 | `imageio` | `imageio` | media_image_video_io | medium | low | `packages/imageio.md` |
| PIP-0062 | `imageio-ffmpeg` | `imageio_ffmpeg` | media_video_io | medium | low | `packages/imageio-ffmpeg.md` |
| PIP-0063 | `ffmpeg-python` | `ffmpeg` | media_ffmpeg_graph | medium | medium | `packages/ffmpeg-python.md` |
| PIP-0064 | `av` | `av` | media_video_io | medium | medium | `packages/av.md` |
| PIP-0065 | `decord` | `decord` | media_video_loader | medium | high | `packages/decord.md` |
| PIP-0066 | `chromadb` | `chromadb` | rag_vector_db | high | medium | `packages/chromadb.md` |
| PIP-0067 | `lancedb` | `lancedb` | rag_vector_db | high | medium | `packages/lancedb.md` |
| PIP-0068 | `sentence-transformers` | `sentence_transformers` | embeddings | high | medium | `packages/sentence-transformers.md` |
| PIP-0069 | `FlagEmbedding` | `FlagEmbedding` | embeddings | medium | medium | `packages/flagembedding.md` |
| PIP-0070 | `nomic` | `nomic` | embeddings | low | low | `packages/nomic.md` |
| PIP-0071 | `llama-index` | `llama_index` | rag_framework | medium | medium | `packages/llama-index.md` |
| PIP-0072 | `langchain` | `langchain` | rag_framework | medium | medium | `packages/langchain.md` |
| PIP-0073 | `griptape` | `griptape` | agent_framework | low | medium | `packages/griptape.md` |
| PIP-0074 | `ollama` | `ollama` | llm_client | medium | low | `packages/ollama.md` |
| PIP-0075 | `llama-cpp-python` | `llama_cpp` | llm_runtime | high | very_high | `packages/llama-cpp-python.md` |
| PIP-0076 | `packaging` | `packaging` | dev_runtime | medium | low | `packages/packaging.md` |
| PIP-0077 | `rich` | `rich` | cli_ui | medium | low | `packages/rich.md` |
| PIP-0078 | `typer` | `typer` | cli_ui | medium | low | `packages/typer.md` |
| PIP-0079 | `GitPython` | `git` | repo_tools | medium | low | `packages/gitpython.md` |
| PIP-0080 | `tomli` | `tomli` | config | low | low | `packages/tomli.md` |
| PIP-0081 | `tomli-w` | `tomli_w` | config | low | low | `packages/tomli-w.md` |
| PIP-0082 | `pytest` | `pytest` | testing | medium | low | `packages/pytest.md` |
| PIP-0083 | `ruff` | `ruff` | lint_format | low | low | `packages/ruff.md` |
| PIP-0084 | `black` | `black` | lint_format | low | low | `packages/black.md` |
| PIP-0085 | `pyinstaller` | `PyInstaller` | packaging | low | medium | `packages/pyinstaller.md` |
| PIP-0086 | `faiss-cpu` | `faiss` | rag_vector_db | medium | high | `packages/faiss-cpu.md` |
| PIP-0087 | `openai` | `openai` | llm_client | medium | low | `packages/openai.md` |
| PIP-0088 | `tiktoken` | `tiktoken` | text_tokenization | medium | medium | `packages/tiktoken.md` |
| PIP-0089 | `spacy` | `spacy` | text_processing | medium | medium | `packages/spacy.md` |
| PIP-0090 | `pytesseract` | `pytesseract` | ocr | medium | high | `packages/pytesseract.md` |
| PIP-0091 | `easyocr` | `easyocr` | ocr | medium | high | `packages/easyocr.md` |
| PIP-0092 | `onnxruntime-directml` | `onnxruntime` | inference_runtime | medium | high | `packages/onnxruntime-directml.md` |
| PIP-0093 | `moviepy` | `moviepy` | media_video_editing | medium | medium | `packages/moviepy.md` |
| PIP-0094 | `librosa` | `librosa` | audio_analysis | medium | medium | `packages/librosa.md` |
| PIP-0095 | `soundfile` | `soundfile` | audio_io | medium | medium | `packages/soundfile.md` |
| PIP-0096 | `matplotlib` | `matplotlib` | plotting_visualization | medium | low | `packages/matplotlib.md` |
| PIP-0097 | `click` | `click` | cli_ui | medium | low | `packages/click.md` |
| PIP-0098 | `setuptools` | `setuptools` | build_packaging | medium | medium | `packages/setuptools.md` |
| PIP-0099 | `wheel` | `wheel` | build_packaging | medium | low | `packages/wheel.md` |
| PIP-0100 | `ninja` | `ninja` | native_build_tool | medium | medium | `packages/ninja.md` |
| PIP-0101 | `pybind11` | `pybind11` | native_python_binding | medium | medium | `packages/pybind11.md` |
| PIP-0102 | `comfyui-frontend-package` | `comfyui_frontend_package` | comfyui_core_runtime | high | low | `packages/comfyui-frontend-package.md` |
| PIP-0103 | `comfyui-workflow-templates` | `comfyui_workflow_templates` | comfyui_core_runtime | medium | low | `packages/comfyui-workflow-templates.md` |
| PIP-0104 | `comfyui-embedded-docs` | `comfyui_embedded_docs` | comfyui_core_runtime | medium | low | `packages/comfyui-embedded-docs.md` |
| PIP-0105 | `torchsde` | `torchsde` | sampling_math | high | medium | `packages/torchsde.md` |
| PIP-0106 | `aiohttp` | `aiohttp` | async_web_server | high | medium | `packages/aiohttp.md` |
| PIP-0107 | `yarl` | `yarl` | async_web_server | medium | low | `packages/yarl.md` |
| PIP-0108 | `alembic` | `alembic` | database_migration | medium | low | `packages/alembic.md` |
| PIP-0109 | `SQLAlchemy` | `sqlalchemy` | database_orm | medium | low | `packages/sqlalchemy.md` |
| PIP-0110 | `filelock` | `filelock` | filesystem_locking | medium | low | `packages/filelock.md` |
| PIP-0111 | `comfy-kitchen` | `comfy_kitchen` | comfyui_core_runtime | medium | low | `packages/comfy-kitchen.md` |
| PIP-0112 | `comfy-aimdo` | `comfy_aimdo` | comfyui_core_runtime | medium | low | `packages/comfy-aimdo.md` |
| PIP-0113 | `simpleeval` | `simpleeval` | safe_expression_eval | medium | low | `packages/simpleeval.md` |
| PIP-0114 | `blake3` | `blake3` | hashing_integrity | medium | medium | `packages/blake3.md` |
| PIP-0115 | `pydantic-settings` | `pydantic_settings` | settings_config | medium | low | `packages/pydantic-settings.md` |
| PIP-0116 | `PyOpenGL` | `OpenGL` | opengl_display | low | medium | `packages/pyopengl.md` |
| PIP-0117 | `glfw` | `glfw` | opengl_windowing | low | medium | `packages/glfw.md` |
| PIP-0118 | `comfyui_manager` | `comfyui_manager` | comfyui_manager_runtime | high | medium | `packages/comfyui-manager.md` |
| PIP-0119 | `mediapipe` | `mediapipe` | pose_face_hand_tracking | high | medium | `packages/mediapipe.md` |
| PIP-0120 | `albumentations` | `albumentations` | training_augmentation | medium | medium | `packages/albumentations.md` |
| PIP-0121 | `supervision` | `supervision` | computer_vision_utils | medium | medium | `packages/supervision.md` |
| PIP-0122 | `pycocotools` | `pycocotools` | dataset_eval_annotations | medium | medium | `packages/pycocotools.md` |
| PIP-0123 | `groundingdino-py` | `groundingdino` | detection_segmentation | medium | very_high | `packages/groundingdino-py.md` |
| PIP-0124 | `open-clip-torch` | `open_clip` | vision_language_model | medium | medium | `packages/open-clip-torch.md` |
| PIP-0125 | `clip-interrogator` | `clip_interrogator` | prompt_interrogation | medium | medium | `packages/clip-interrogator.md` |
| PIP-0126 | `lpips` | `lpips` | image_quality_metric | medium | medium | `packages/lpips.md` |
| PIP-0127 | `peft` | `peft` | training_lora_finetune | high | medium | `packages/peft.md` |
| PIP-0128 | `wandb` | `wandb` | experiment_tracking | medium | low | `packages/wandb.md` |
| PIP-0129 | `tensorboard` | `tensorboard` | experiment_tracking | medium | low | `packages/tensorboard.md` |
| PIP-0130 | `httpx` | `httpx` | http_client | medium | low | `packages/httpx.md` |
| PIP-0131 | `websockets` | `websockets` | websocket_client_server | medium | low | `packages/websockets.md` |
| PIP-0132 | `orjson` | `orjson` | json_serialization | medium | low | `packages/orjson.md` |
| PIP-0133 | `watchdog` | `watchdog` | filesystem_watch | low | low | `packages/watchdog.md` |
| PIP-0134 | `build` | `build` | build_frontend | high | low | `packages/build.md` |
| PIP-0135 | `pyproject-hooks` | `pyproject_hooks` | build_frontend | medium | low | `packages/pyproject-hooks.md` |
| PIP-0136 | `scikit-build-core` | `scikit_build_core` | native_build_backend | high | medium | `packages/scikit-build-core.md` |
| PIP-0137 | `meson-python` | `mesonpy` | native_build_backend | medium | medium | `packages/meson-python.md` |
| PIP-0138 | `maturin` | `maturin` | rust_build_backend | medium | medium | `packages/maturin.md` |
| PIP-0139 | `setuptools-scm` | `setuptools_scm` | versioning_build_tool | medium | low | `packages/setuptools-scm.md` |
| PIP-0140 | `cibuildwheel` | `cibuildwheel` | wheel_ci_builder | medium | medium | `packages/cibuildwheel.md` |
| PIP-0141 | `auditwheel` | `auditwheel` | wheel_repair_tool | medium | low | `packages/auditwheel.md` |
| PIP-0142 | `delvewheel` | `delvewheel` | wheel_repair_tool | high | medium | `packages/delvewheel.md` |
| PIP-0143 | `pip-tools` | `piptools` | dependency_locking | medium | low | `packages/pip-tools.md` |
| PIP-0144 | `pipdeptree` | `pipdeptree` | dependency_audit | medium | low | `packages/pipdeptree.md` |
| PIP-0145 | `uv` | `uv` | package_manager | medium | medium | `packages/uv.md` |
| PIP-0146 | `nvidia-pyindex` | `nvidia_pyindex` | nvidia_package_index | medium | low | `packages/nvidia-pyindex.md` |
| PIP-0147 | `nvidia-cuda-runtime-cu12` | `nvidia.cuda_runtime` | nvidia_cuda_runtime | medium | medium | `packages/nvidia-cuda-runtime-cu12.md` |
| PIP-0148 | `nvidia-cuda-runtime-cu13` | `nvidia.cuda_runtime` | nvidia_cuda_runtime | high | high | `packages/nvidia-cuda-runtime-cu13.md` |
| PIP-0149 | `nvidia-cuda-nvcc-cu12` | `nvidia.cuda_nvcc` | nvidia_cuda_compiler | high | high | `packages/nvidia-cuda-nvcc-cu12.md` |
| PIP-0150 | `nvidia-cuda-nvrtc-cu12` | `nvidia.cuda_nvrtc` | nvidia_cuda_runtime_compiler | medium | medium | `packages/nvidia-cuda-nvrtc-cu12.md` |
| PIP-0151 | `nvidia-nvjitlink-cu12` | `nvidia.nvjitlink` | nvidia_cuda_jit_linker | medium | medium | `packages/nvidia-nvjitlink-cu12.md` |
| PIP-0152 | `nvidia-cublas-cu12` | `nvidia.cublas` | nvidia_math_lib | medium | medium | `packages/nvidia-cublas-cu12.md` |
| PIP-0153 | `nvidia-cudnn-cu12` | `nvidia.cudnn / DLL package` | nvidia_cudnn_backend_runtime | critical | high | `packages/nvidia-cudnn-cu12.md` |
| PIP-0154 | `nvidia-cudnn-cu13` | `nvidia.cudnn / DLL package` | nvidia_cudnn_backend_runtime | high | very_high | `packages/nvidia-cudnn-cu13.md` |
| PIP-0155 | `nvidia-cufft-cu12` | `nvidia.cufft` | nvidia_math_lib | medium | medium | `packages/nvidia-cufft-cu12.md` |
| PIP-0156 | `nvidia-curand-cu12` | `nvidia.curand` | nvidia_math_lib | medium | medium | `packages/nvidia-curand-cu12.md` |
| PIP-0157 | `nvidia-cusolver-cu12` | `nvidia.cusolver` | nvidia_math_lib | medium | medium | `packages/nvidia-cusolver-cu12.md` |
| PIP-0158 | `nvidia-cusparse-cu12` | `nvidia.cusparse` | nvidia_math_lib | medium | medium | `packages/nvidia-cusparse-cu12.md` |
| PIP-0159 | `nvidia-npp-cu12` | `nvidia.npp` | nvidia_image_video_lib | medium | medium | `packages/nvidia-npp-cu12.md` |
| PIP-0160 | `nvidia-nvjpeg-cu12` | `nvidia.nvjpeg` | nvidia_image_video_lib | medium | medium | `packages/nvidia-nvjpeg-cu12.md` |
| PIP-0161 | `nvidia-nvtx-cu12` | `nvidia.nvtx` | nvidia_profiling | medium | low | `packages/nvidia-nvtx-cu12.md` |
| PIP-0162 | `nvidia-cuda-cupti-cu12` | `nvidia.cupti` | nvidia_profiling | medium | medium | `packages/nvidia-cuda-cupti-cu12.md` |
| PIP-0163 | `nvidia-cuda-sanitizer-api-cu12` | `nvidia.cuda_sanitizer_api` | nvidia_diagnostics | medium | medium | `packages/nvidia-cuda-sanitizer-api-cu12.md` |
| PIP-0164 | `nvidia-nvml-dev-cu12` | `nvidia.nvml` | nvidia_management | medium | low | `packages/nvidia-nvml-dev-cu12.md` |
| PIP-0165 | `nvidia-cuda-cccl-cu12` | `nvidia.cccl` | nvidia_cuda_headers_templates | high | high | `packages/nvidia-cuda-cccl-cu12.md` |
| PIP-0166 | `nvidia-cutlass` | `cutlass` | nvidia_cuda_templates | high | high | `packages/nvidia-cutlass.md` |
| PIP-0167 | `nvidia-cudnn-cu11` | `nvidia.cudnn / DLL package` | nvidia_cudnn_backend_runtime_legacy | medium | high | `packages/nvidia-cudnn-cu11.md` |
| PIP-0168 | `nvidia-cudnn` | `nvidia.cudnn / meta package` | nvidia_cudnn_meta_package | medium | medium | `packages/nvidia-cudnn.md` |
| PIP-0169 | `nvidia-cudnn-frontend` | `cudnn_frontend / nvidia_cudnn_frontend` | nvidia_cudnn_frontend_api | high | high | `packages/nvidia-cudnn-frontend.md` |
| PIP-0170 | `nvidia-cudnn-jit-cu12` | `nvidia.cudnn_jit / DLL package` | nvidia_cudnn_jit_runtime | high | high | `packages/nvidia-cudnn-jit-cu12.md` |
| PIP-0171 | `nvidia-cudnn-jit-cu13` | `nvidia.cudnn_jit / DLL package` | nvidia_cudnn_jit_runtime | medium | very_high | `packages/nvidia-cudnn-jit-cu13.md` |
| PIP-0172 | `cuda-python` | `cuda` | nvidia_cuda_python_api | high | medium | `packages/cuda-python.md` |
| PIP-0173 | `cuda-toolkit` | `cuda_toolkit` | nvidia_cuda_toolkit_metapackage | high | high | `packages/cuda-toolkit.md` |
| PIP-0174 | `cuda-bindings` | `cuda.bindings` | nvidia_cuda_python_bindings | medium | medium | `packages/cuda-bindings.md` |
| PIP-0175 | `cuda-core` | `cuda.core` | nvidia_cuda_python_core | medium | medium | `packages/cuda-core.md` |
| PIP-0176 | `cuda-pathfinder` | `cuda.pathfinder` | nvidia_cuda_component_discovery | medium | medium | `packages/cuda-pathfinder.md` |
| PIP-0177 | `tensorrt` | `tensorrt` | nvidia_tensorrt_metapackage | very_high | high | `packages/tensorrt.md` |
| PIP-0178 | `tensorrt-cu11` | `tensorrt` | nvidia_tensorrt_cuda_family_metapackage | medium | high | `packages/tensorrt-cu11.md` |
| PIP-0179 | `tensorrt-cu12` | `tensorrt` | nvidia_tensorrt_cuda_family_metapackage | very_high | high | `packages/tensorrt-cu12.md` |
| PIP-0180 | `tensorrt-cu13` | `tensorrt` | nvidia_tensorrt_cuda_family_metapackage | very_high | very_high | `packages/tensorrt-cu13.md` |
| PIP-0181 | `tensorrt-libs` | `tensorrt runtime libraries` | nvidia_tensorrt_libraries | high | high | `packages/tensorrt-libs.md` |
| PIP-0182 | `tensorrt-cu12-bindings` | `tensorrt` | nvidia_tensorrt_python_bindings | high | high | `packages/tensorrt-cu12-bindings.md` |
| PIP-0183 | `tensorrt-cu12-libs` | `TensorRT DLL/shared libraries` | nvidia_tensorrt_libraries | high | high | `packages/tensorrt-cu12-libs.md` |
| PIP-0184 | `tensorrt-cu13-bindings` | `tensorrt` | nvidia_tensorrt_python_bindings | high | very_high | `packages/tensorrt-cu13-bindings.md` |
| PIP-0185 | `tensorrt-cu13-libs` | `TensorRT DLL/shared libraries` | nvidia_tensorrt_libraries | high | very_high | `packages/tensorrt-cu13-libs.md` |
| PIP-0186 | `tensorrt-lean` | `tensorrt lean runtime` | nvidia_tensorrt_lean_runtime | medium | high | `packages/tensorrt-lean.md` |
| PIP-0187 | `tensorrt-lean-cu12` | `tensorrt lean runtime` | nvidia_tensorrt_lean_runtime | medium | high | `packages/tensorrt-lean-cu12.md` |
| PIP-0188 | `tensorrt-lean-cu13` | `tensorrt lean runtime` | nvidia_tensorrt_lean_runtime | medium | very_high | `packages/tensorrt-lean-cu13.md` |
| PIP-0189 | `tensorrt-rtx` | `tensorrt_rtx / TensorRT RTX runtime` | nvidia_tensorrt_rtx | high | high | `packages/tensorrt-rtx.md` |
| PIP-0190 | `tensorrt-rtx-cu12` | `TensorRT RTX runtime` | nvidia_tensorrt_rtx | high | high | `packages/tensorrt-rtx-cu12.md` |
| PIP-0191 | `tensorrt-rtx-cu13` | `TensorRT RTX runtime` | nvidia_tensorrt_rtx | high | very_high | `packages/tensorrt-rtx-cu13.md` |
| PIP-0192 | `tensorrt-rtx-cu12-bindings` | `TensorRT RTX Python bindings` | nvidia_tensorrt_rtx_bindings | medium | high | `packages/tensorrt-rtx-cu12-bindings.md` |
| PIP-0193 | `tensorrt-rtx-cu12-libs` | `TensorRT RTX libraries` | nvidia_tensorrt_rtx_libraries | medium | high | `packages/tensorrt-rtx-cu12-libs.md` |
| PIP-0194 | `tensorrt-rtx-cu13-bindings` | `TensorRT RTX Python bindings` | nvidia_tensorrt_rtx_bindings | medium | very_high | `packages/tensorrt-rtx-cu13-bindings.md` |
| PIP-0195 | `tensorrt-rtx-cu13-libs` | `TensorRT RTX libraries` | nvidia_tensorrt_rtx_libraries | medium | very_high | `packages/tensorrt-rtx-cu13-libs.md` |
| PIP-0196 | `tensorrt-llm` | `tensorrt_llm` | nvidia_tensorrt_llm | very_high | very_high | `packages/tensorrt-llm.md` |
| PIP-0197 | `torch-tensorrt` | `torch_tensorrt` | pytorch_tensorrt_bridge | high | very_high | `packages/torch-tensorrt.md` |
| PIP-0198 | `onnx-graphsurgeon` | `onnx_graphsurgeon` | onnx_graph_rewriting | high | medium | `packages/onnx-graphsurgeon.md` |
| PIP-0199 | `polygraphy` | `polygraphy` | model_debugging_accuracy_validation | high | medium | `packages/polygraphy.md` |
| PIP-0200 | `onnxslim` | `onnxslim` | onnx_graph_simplification | medium | medium | `packages/onnxslim.md` |
| PIP-0201 | `nvidia-modelopt` | `modelopt` | nvidia_model_optimization | medium | high | `packages/nvidia-modelopt.md` |
| PIP-0202 | `tritonclient` | `tritonclient` | nvidia_inference_server_client | high | medium | `packages/tritonclient.md` |
| PIP-0203 | `pytriton` | `pytriton` | triton_python_serving_wrapper | high | medium | `packages/pytriton.md` |
| PIP-0204 | `triton-model-analyzer` | `model_analyzer` | triton_performance_analysis | high | high | `packages/triton-model-analyzer.md` |
| PIP-0205 | `triton-model-navigator` | `model_navigator` | triton_model_optimization_deployment | high | high | `packages/triton-model-navigator.md` |
| PIP-0206 | `prometheus-client` | `prometheus_client` | metrics_observability | medium | low | `packages/prometheus-client.md` |
| PIP-0207 | `grpcio` | `grpc` | grpc_rpc_transport | high | medium | `packages/grpcio.md` |
| PIP-0208 | `grpcio-tools` | `grpc_tools` | grpc_proto_build_tooling | medium | medium | `packages/grpcio-tools.md` |
| PIP-0209 | `geventhttpclient` | `geventhttpclient` | http_client_transport | medium | medium | `packages/geventhttpclient.md` |
| PIP-0210 | `nvidia-ml-py` | `pynvml` | nvidia_gpu_telemetry | high | low | `packages/nvidia-ml-py.md` |
| PIP-0211 | `kubernetes` | `kubernetes` | deployment_orchestration_client | low | low | `packages/kubernetes.md` |
| PIP-0212 | `vllm` | `vllm` | llm_inference_server_engine | critical | very_high | `packages/vllm.md` |
| PIP-0213 | `flash-attn` | `flash_attn` | attention_cuda_extension | high | very_high | `packages/flash_attn.md` |
| PIP-0214 | `flashinfer-python` | `flashinfer` | llm_attention_kernel_library | high | very_high | `packages/flashinfer_python.md` |
| PIP-0215 | `flashinfer-cubin` | `flashinfer` | llm_attention_kernel_binary_cache | medium | very_high | `packages/flashinfer_cubin.md` |
| PIP-0216 | `flashinfer-jit-cache` | `flashinfer` | llm_attention_kernel_binary_cache | medium | very_high | `packages/flashinfer_jit_cache.md` |
| PIP-0217 | `sglang` | `sglang` | llm_inference_server_engine | high | very_high | `packages/sglang.md` |
| PIP-0218 | `sgl-kernel` | `sgl_kernel` | llm_serving_cuda_kernel_package | high | very_high | `packages/sgl_kernel.md` |
| PIP-0219 | `text-generation` | `text_generation` | huggingface_tgi_client | medium | low | `packages/text_generation.md` |
| PIP-0220 | `litellm` | `litellm` | llm_gateway_openai_router | high | medium | `packages/litellm.md` |
| PIP-0221 | `ray` | `ray` | distributed_serving_runtime | medium | high | `packages/ray.md` |
| PIP-0222 | `xgrammar` | `xgrammar` | structured_output_guided_decoding | high | high | `packages/xgrammar.md` |
| PIP-0223 | `outlines` | `outlines` | structured_output_guided_decoding | medium | medium | `packages/outlines.md` |
| PIP-0224 | `lm-format-enforcer` | `lmformatenforcer` | structured_output_guided_decoding | medium | medium | `packages/lm_format_enforcer.md` |
| PIP-0225 | `guidance` | `guidance` | structured_output_guided_decoding | medium | medium | `packages/guidance.md` |
| PIP-0226 | `compressed-tensors` | `compressed_tensors` | llm_quantization_format | high | medium | `packages/compressed_tensors.md` |
| PIP-0227 | `llmcompressor` | `llmcompressor` | llm_quantization_toolkit | high | high | `packages/llmcompressor.md` |
| PIP-0228 | `gptqmodel` | `gptqmodel` | llm_quantization_toolkit | high | very_high | `packages/gptqmodel.md` |
| PIP-0229 | `autoawq` | `awq` | llm_quantization_toolkit | medium | very_high | `packages/autoawq.md` |
| PIP-0230 | `auto-gptq` | `auto_gptq` | llm_quantization_toolkit | medium | very_high | `packages/auto_gptq.md` |
| PIP-0231 | `torchao` | `torchao` | pytorch_quantization_optimization | medium | high | `packages/torchao.md` |
| PIP-0232 | `mistral-common` | `mistral_common` | model_family_tokenization_chat_templates | medium | medium | `packages/mistral_common.md` |
| PIP-0233 | `msgspec` | `msgspec` | api_serialization_performance | medium | medium | `packages/msgspec.md` |
| PIP-0234 | `uvloop` | `uvloop` | asyncio_event_loop_acceleration | medium | high | `packages/uvloop.md` |
| PIP-0235 | `httptools` | `httptools` | asgi_http_parser_acceleration | medium | medium | `packages/httptools.md` |
| PIP-0236 | `h11` | `h11` | python_http_protocol_core | low | low | `packages/h11.md` |
| PIP-0237 | `sse-starlette` | `sse_starlette` | server_sent_events_streaming | medium | low | `packages/sse_starlette.md` |
| PIP-0238 | `watchfiles` | `watchfiles` | dev_server_file_watch_reload | low | medium | `packages/watchfiles.md` |

---

## Consolidated near-duplicate retained material

This section was added during AIWF near-duplicate consolidation. The canonical file was kept, and only unique non-matching chunks from older/alternate copies were appended below so the duplicate copy could be removed without cutting information.

### Unique retained material from `CONTENT/AIWF_Pip_Package_RAG_Starter_v1_5/AIWF_Pip_Package_RAG_Starter_v1_5/pip_package_inventory.md`

Generated for release v1.5. Tracked packages: 211.
| package_id | pip_name | import_name | category | priority | windows_risk | doc_file |
|---|---|---|---|---|---|---|
| PIP-0001 | `torch` | `torch` | core_ml_runtime | critical | very_high | packages/torch.md |
| PIP-0002 | `torchvision` | `torchvision` | core_ml_runtime | critical | high | packages/torchvision.md |
| PIP-0003 | `torchaudio` | `torchaudio` | core_ml_runtime | medium | medium | packages/torchaudio.md |
| PIP-0004 | `xformers` | `xformers` | attention_backend | critical | very_high | packages/xformers.md |
| PIP-0005 | `triton` | `triton` | kernel_backend | medium | very_high | packages/triton.md |
| PIP-0006 | `diffusers` | `diffusers` | model_pipeline | critical | medium | packages/diffusers.md |
| PIP-0007 | `transformers` | `transformers` | model_pipeline | critical | medium | packages/transformers.md |
| PIP-0008 | `accelerate` | `accelerate` | model_pipeline | high | medium | packages/accelerate.md |
| PIP-0009 | `safetensors` | `safetensors` | model_io | critical | low | packages/safetensors.md |
| PIP-0010 | `huggingface_hub` | `huggingface_hub` | model_io | critical | low | packages/huggingface_hub.md |
| PIP-0011 | `datasets` | `datasets` | data_loading | high | medium | packages/datasets.md |
| PIP-0012 | `bitsandbytes` | `bitsandbytes` | quantization_training | high | very_high | packages/bitsandbytes.md |
| PIP-0013 | `lion-pytorch` | `lion_pytorch` | training_optimizer | low | low | packages/lion-pytorch.md |
| PIP-0014 | `omegaconf` | `omegaconf` | config | medium | low | packages/omegaconf.md |
| PIP-0015 | `gradio` | `gradio` | ui_webapp | critical | medium | packages/gradio.md |
| PIP-0016 | `fastapi` | `fastapi` | ui_backend_api | high | medium | packages/fastapi.md |
| PIP-0017 | `anyio` | `anyio` | async_runtime | medium | low | packages/anyio.md |
| PIP-0018 | `pandas` | `pandas` | data_processing | medium | medium | packages/pandas.md |
| PIP-0019 | `regex` | `regex` | text_processing | low | low | packages/regex.md |
| PIP-0020 | `ipywidgets` | `ipywidgets` | notebook_ui | low | low | packages/ipywidgets.md |
| PIP-0021 | `scipy` | `scipy` | numeric | medium | medium | packages/scipy.md |
| PIP-0022 | `ftfy` | `ftfy` | text_processing | low | low | packages/ftfy.md |
| PIP-0023 | `Pillow` | `PIL` | image_io | critical | low | packages/pillow.md |
| PIP-0024 | `controlnet-aux` | `controlnet_aux` | controlnet_preprocessor | high | medium | packages/controlnet-aux.md |
| PIP-0025 | `psutil` | `psutil` | diagnostics | critical | low | packages/psutil.md |
| PIP-0026 | `open-webui` | `open_webui` | llm_ui | medium | high | packages/open-webui.md |
| PIP-0027 | `gfpgan` | `gfpgan` | face_restore | high | high | packages/gfpgan.md |
| PIP-0028 | `dlib` | `dlib` | face_detection | medium | very_high | packages/dlib.md |
| PIP-0029 | `cmake` | `cmake` | native_build_tool | medium | medium | packages/cmake.md |
| PIP-0030 | `k-diffusion` | `k_diffusion` | sampler_backend | high | medium | packages/k-diffusion.md |
| PIP-0031 | `numpy` | `numpy` | numeric | critical | medium | packages/numpy.md |
| PIP-0032 | `opencv-python` | `cv2` | image_video_io | critical | medium | packages/opencv-python.md |
| PIP-0033 | `opencv-python-headless` | `cv2` | image_video_io | medium | medium | packages/opencv-python-headless.md |
| PIP-0034 | `tqdm` | `tqdm` | cli_progress | medium | low | packages/tqdm.md |
| PIP-0035 | `requests` | `requests` | http | medium | low | packages/requests.md |
| PIP-0036 | `PyYAML` | `yaml` | config | medium | low | packages/pyyaml.md |
| PIP-0037 | `einops` | `einops` | tensor_ops | high | low | packages/einops.md |
| PIP-0038 | `kornia` | `kornia` | vision_tensor_ops | medium | medium | packages/kornia.md |
| PIP-0039 | `spandrel` | `spandrel` | upscale_model_architecture | high | medium | packages/spandrel.md |
| PIP-0040 | `timm` | `timm` | vision_models | medium | medium | packages/timm.md |
| PIP-0041 | `tokenizers` | `tokenizers` | text_tokenization | medium | medium | packages/tokenizers.md |
| PIP-0042 | `sentencepiece` | `sentencepiece` | text_tokenization | medium | medium | packages/sentencepiece.md |
| PIP-0043 | `protobuf` | `google.protobuf` | serialization | medium | medium | packages/protobuf.md |
| PIP-0044 | `pydantic` | `pydantic` | validation_config | medium | medium | packages/pydantic.md |
| PIP-0045 | `starlette` | `starlette` | ui_backend_api | medium | medium | packages/starlette.md |
| PIP-0046 | `uvicorn` | `uvicorn` | ui_backend_api | medium | low | packages/uvicorn.md |
| PIP-0047 | `basicsr` | `basicsr` | restoration_upscale | high | high | packages/basicsr.md |
| PIP-0048 | `realesrgan` | `realesrgan` | restoration_upscale | high | high | packages/realesrgan.md |
| PIP-0049 | `facexlib` | `facexlib` | face_restore | high | medium | packages/facexlib.md |
| PIP-0050 | `insightface` | `insightface` | face_swap_identity | critical | very_high | packages/insightface.md |
| PIP-0051 | `onnxruntime` | `onnxruntime` | inference_runtime | high | medium | packages/onnxruntime.md |
| PIP-0052 | `onnxruntime-gpu` | `onnxruntime` | inference_runtime | medium | very_high | packages/onnxruntime-gpu.md |
| PIP-0053 | `onnx` | `onnx` | model_format | medium | medium | packages/onnx.md |
| PIP-0054 | `ultralytics` | `ultralytics` | detection_segmentation | high | medium | packages/ultralytics.md |
| PIP-0055 | `segment-anything` | `segment_anything` | segmentation | high | medium | packages/segment-anything.md |
| PIP-0056 | `SAM-2 / editable sam2 repo` | `sam2` | segmentation | high | high | packages/sam2.md |
| PIP-0057 | `groundingdino` | `groundingdino` | detection_segmentation | high | very_high | packages/groundingdino.md |
| PIP-0058 | `rembg` | `rembg` | background_segmentation | low | medium | packages/rembg.md |
| PIP-0059 | `transparent-background` | `transparent_background` | background_segmentation | low | medium | packages/transparent-background.md |
| PIP-0060 | `scikit-image` | `skimage` | image_processing | medium | medium | packages/scikit-image.md |
| PIP-0061 | `imageio` | `imageio` | media_image_video_io | medium | low | packages/imageio.md |
| PIP-0062 | `imageio-ffmpeg` | `imageio_ffmpeg` | media_video_io | medium | low | packages/imageio-ffmpeg.md |
| PIP-0063 | `ffmpeg-python` | `ffmpeg` | media_ffmpeg_graph | medium | medium | packages/ffmpeg-python.md |
| PIP-0064 | `av` | `av` | media_video_io | medium | medium | packages/av.md |
| PIP-0065 | `decord` | `decord` | media_video_loader | medium | high | packages/decord.md |
| PIP-0066 | `chromadb` | `chromadb` | rag_vector_db | high | medium | packages/chromadb.md |
| PIP-0067 | `lancedb` | `lancedb` | rag_vector_db | high | medium | packages/lancedb.md |
| PIP-0068 | `sentence-transformers` | `sentence_transformers` | embeddings | high | medium | packages/sentence-transformers.md |
| PIP-0069 | `FlagEmbedding` | `FlagEmbedding` | embeddings | medium | medium | packages/flagembedding.md |
| PIP-0070 | `nomic` | `nomic` | embeddings | low | low | packages/nomic.md |
| PIP-0071 | `llama-index` | `llama_index` | rag_framework | medium | medium | packages/llama-index.md |
| PIP-0072 | `langchain` | `langchain` | rag_framework | medium | medium | packages/langchain.md |
| PIP-0073 | `griptape` | `griptape` | agent_framework | low | medium | packages/griptape.md |
| PIP-0074 | `ollama` | `ollama` | llm_client | medium | low | packages/ollama.md |
| PIP-0075 | `llama-cpp-python` | `llama_cpp` | llm_runtime | high | very_high | packages/llama-cpp-python.md |
| PIP-0076 | `packaging` | `packaging` | dev_runtime | medium | low | packages/packaging.md |
| PIP-0077 | `rich` | `rich` | cli_ui | medium | low | packages/rich.md |
| PIP-0078 | `typer` | `typer` | cli_ui | medium | low | packages/typer.md |
| PIP-0079 | `GitPython` | `git` | repo_tools | medium | low | packages/gitpython.md |
| PIP-0080 | `tomli` | `tomli` | config | low | low | packages/tomli.md |
| PIP-0081 | `tomli-w` | `tomli_w` | config | low | low | packages/tomli-w.md |
| PIP-0082 | `pytest` | `pytest` | testing | medium | low | packages/pytest.md |
| PIP-0083 | `ruff` | `ruff` | lint_format | low | low | packages/ruff.md |
| PIP-0084 | `black` | `black` | lint_format | low | low | packages/black.md |
| PIP-0085 | `pyinstaller` | `PyInstaller` | packaging | low | medium | packages/pyinstaller.md |
| PIP-0086 | `faiss-cpu` | `faiss` | rag_vector_db | medium | high | packages/faiss-cpu.md |
| PIP-0087 | `openai` | `openai` | llm_client | medium | low | packages/openai.md |
| PIP-0088 | `tiktoken` | `tiktoken` | text_tokenization | medium | medium | packages/tiktoken.md |
| PIP-0089 | `spacy` | `spacy` | text_processing | medium | medium | packages/spacy.md |
| PIP-0090 | `pytesseract` | `pytesseract` | ocr | medium | high | packages/pytesseract.md |
| PIP-0091 | `easyocr` | `easyocr` | ocr | medium | high | packages/easyocr.md |
| PIP-0092 | `onnxruntime-directml` | `onnxruntime` | inference_runtime | medium | high | packages/onnxruntime-directml.md |
| PIP-0093 | `moviepy` | `moviepy` | media_video_editing | medium | medium | packages/moviepy.md |
| PIP-0094 | `librosa` | `librosa` | audio_analysis | medium | medium | packages/librosa.md |
| PIP-0095 | `soundfile` | `soundfile` | audio_io | medium | medium | packages/soundfile.md |
| PIP-0096 | `matplotlib` | `matplotlib` | plotting_visualization | medium | low | packages/matplotlib.md |
| PIP-0097 | `click` | `click` | cli_ui | medium | low | packages/click.md |
| PIP-0098 | `setuptools` | `setuptools` | build_packaging | medium | medium | packages/setuptools.md |
| PIP-0099 | `wheel` | `wheel` | build_packaging | medium | low | packages/wheel.md |
| PIP-0100 | `ninja` | `ninja` | native_build_tool | medium | medium | packages/ninja.md |
| PIP-0101 | `pybind11` | `pybind11` | native_python_binding | medium | medium | packages/pybind11.md |
| PIP-0102 | `comfyui-frontend-package` | `comfyui_frontend_package` | comfyui_core_runtime | high | low | packages/comfyui-frontend-package.md |
| PIP-0103 | `comfyui-workflow-templates` | `comfyui_workflow_templates` | comfyui_core_runtime | medium | low | packages/comfyui-workflow-templates.md |
| PIP-0104 | `comfyui-embedded-docs` | `comfyui_embedded_docs` | comfyui_core_runtime | medium | low | packages/comfyui-embedded-docs.md |
| PIP-0105 | `torchsde` | `torchsde` | sampling_math | high | medium | packages/torchsde.md |
| PIP-0106 | `aiohttp` | `aiohttp` | async_web_server | high | medium | packages/aiohttp.md |
| PIP-0107 | `yarl` | `yarl` | async_web_server | medium | low | packages/yarl.md |
| PIP-0108 | `alembic` | `alembic` | database_migration | medium | low | packages/alembic.md |
| PIP-0109 | `SQLAlchemy` | `sqlalchemy` | database_orm | medium | low | packages/sqlalchemy.md |
| PIP-0110 | `filelock` | `filelock` | filesystem_locking | medium | low | packages/filelock.md |
| PIP-0111 | `comfy-kitchen` | `comfy_kitchen` | comfyui_core_runtime | medium | low | packages/comfy-kitchen.md |
| PIP-0112 | `comfy-aimdo` | `comfy_aimdo` | comfyui_core_runtime | medium | low | packages/comfy-aimdo.md |
| PIP-0113 | `simpleeval` | `simpleeval` | safe_expression_eval | medium | low | packages/simpleeval.md |
| PIP-0114 | `blake3` | `blake3` | hashing_integrity | medium | medium | packages/blake3.md |
| PIP-0115 | `pydantic-settings` | `pydantic_settings` | settings_config | medium | low | packages/pydantic-settings.md |
| PIP-0116 | `PyOpenGL` | `OpenGL` | opengl_display | low | medium | packages/pyopengl.md |
| PIP-0117 | `glfw` | `glfw` | opengl_windowing | low | medium | packages/glfw.md |
| PIP-0118 | `comfyui_manager` | `comfyui_manager` | comfyui_manager_runtime | high | medium | packages/comfyui-manager.md |
| PIP-0119 | `mediapipe` | `mediapipe` | pose_face_hand_tracking | high | medium | packages/mediapipe.md |
| PIP-0120 | `albumentations` | `albumentations` | training_augmentation | medium | medium | packages/albumentations.md |
| PIP-0121 | `supervision` | `supervision` | computer_vision_utils | medium | medium | packages/supervision.md |
| PIP-0122 | `pycocotools` | `pycocotools` | dataset_eval_annotations | medium | medium | packages/pycocotools.md |
| PIP-0123 | `groundingdino-py` | `groundingdino` | detection_segmentation | medium | very_high | packages/groundingdino-py.md |
| PIP-0124 | `open-clip-torch` | `open_clip` | vision_language_model | medium | medium | packages/open-clip-torch.md |
| PIP-0125 | `clip-interrogator` | `clip_interrogator` | prompt_interrogation | medium | medium | packages/clip-interrogator.md |
| PIP-0126 | `lpips` | `lpips` | image_quality_metric | medium | medium | packages/lpips.md |
| PIP-0127 | `peft` | `peft` | training_lora_finetune | high | medium | packages/peft.md |
| PIP-0128 | `wandb` | `wandb` | experiment_tracking | medium | low | packages/wandb.md |
| PIP-0129 | `tensorboard` | `tensorboard` | experiment_tracking | medium | low | packages/tensorboard.md |
| PIP-0130 | `httpx` | `httpx` | http_client | medium | low | packages/httpx.md |
| PIP-0131 | `websockets` | `websockets` | websocket_client_server | medium | low | packages/websockets.md |
| PIP-0132 | `orjson` | `orjson` | json_serialization | medium | low | packages/orjson.md |
| PIP-0133 | `watchdog` | `watchdog` | filesystem_watch | low | low | packages/watchdog.md |
| PIP-0134 | `build` | `build` | build_frontend | high | low | packages/build.md |
| PIP-0135 | `pyproject-hooks` | `pyproject_hooks` | build_frontend | medium | low | packages/pyproject-hooks.md |
| PIP-0136 | `scikit-build-core` | `scikit_build_core` | native_build_backend | high | medium | packages/scikit-build-core.md |
| PIP-0137 | `meson-python` | `mesonpy` | native_build_backend | medium | medium | packages/meson-python.md |
| PIP-0138 | `maturin` | `maturin` | rust_build_backend | medium | medium | packages/maturin.md |
| PIP-0139 | `setuptools-scm` | `setuptools_scm` | versioning_build_tool | medium | low | packages/setuptools-scm.md |
| PIP-0140 | `cibuildwheel` | `cibuildwheel` | wheel_ci_builder | medium | medium | packages/cibuildwheel.md |
| PIP-0141 | `auditwheel` | `auditwheel` | wheel_repair_tool | medium | low | packages/auditwheel.md |
| PIP-0142 | `delvewheel` | `delvewheel` | wheel_repair_tool | high | medium | packages/delvewheel.md |
| PIP-0143 | `pip-tools` | `piptools` | dependency_locking | medium | low | packages/pip-tools.md |
| PIP-0144 | `pipdeptree` | `pipdeptree` | dependency_audit | medium | low | packages/pipdeptree.md |
| PIP-0145 | `uv` | `uv` | package_manager | medium | medium | packages/uv.md |
| PIP-0146 | `nvidia-pyindex` | `nvidia_pyindex` | nvidia_package_index | medium | low | packages/nvidia-pyindex.md |
| PIP-0147 | `nvidia-cuda-runtime-cu12` | `nvidia.cuda_runtime` | nvidia_cuda_runtime | medium | medium | packages/nvidia-cuda-runtime-cu12.md |
| PIP-0148 | `nvidia-cuda-runtime-cu13` | `nvidia.cuda_runtime` | nvidia_cuda_runtime | high | high | packages/nvidia-cuda-runtime-cu13.md |
| PIP-0149 | `nvidia-cuda-nvcc-cu12` | `nvidia.cuda_nvcc` | nvidia_cuda_compiler | high | high | packages/nvidia-cuda-nvcc-cu12.md |
| PIP-0150 | `nvidia-cuda-nvrtc-cu12` | `nvidia.cuda_nvrtc` | nvidia_cuda_runtime_compiler | medium | medium | packages/nvidia-cuda-nvrtc-cu12.md |
| PIP-0151 | `nvidia-nvjitlink-cu12` | `nvidia.nvjitlink` | nvidia_cuda_jit_linker | medium | medium | packages/nvidia-nvjitlink-cu12.md |
| PIP-0152 | `nvidia-cublas-cu12` | `nvidia.cublas` | nvidia_math_lib | medium | medium | packages/nvidia-cublas-cu12.md |
| PIP-0153 | `nvidia-cudnn-cu12` | `nvidia.cudnn / DLL package` | nvidia_cudnn_backend_runtime | critical | high | packages/nvidia-cudnn-cu12.md |
| PIP-0154 | `nvidia-cudnn-cu13` | `nvidia.cudnn / DLL package` | nvidia_cudnn_backend_runtime | high | very_high | packages/nvidia-cudnn-cu13.md |
| PIP-0155 | `nvidia-cufft-cu12` | `nvidia.cufft` | nvidia_math_lib | medium | medium | packages/nvidia-cufft-cu12.md |
| PIP-0156 | `nvidia-curand-cu12` | `nvidia.curand` | nvidia_math_lib | medium | medium | packages/nvidia-curand-cu12.md |
| PIP-0157 | `nvidia-cusolver-cu12` | `nvidia.cusolver` | nvidia_math_lib | medium | medium | packages/nvidia-cusolver-cu12.md |
| PIP-0158 | `nvidia-cusparse-cu12` | `nvidia.cusparse` | nvidia_math_lib | medium | medium | packages/nvidia-cusparse-cu12.md |
| PIP-0159 | `nvidia-npp-cu12` | `nvidia.npp` | nvidia_image_video_lib | medium | medium | packages/nvidia-npp-cu12.md |
| PIP-0160 | `nvidia-nvjpeg-cu12` | `nvidia.nvjpeg` | nvidia_image_video_lib | medium | medium | packages/nvidia-nvjpeg-cu12.md |
| PIP-0161 | `nvidia-nvtx-cu12` | `nvidia.nvtx` | nvidia_profiling | medium | low | packages/nvidia-nvtx-cu12.md |
| PIP-0162 | `nvidia-cuda-cupti-cu12` | `nvidia.cupti` | nvidia_profiling | medium | medium | packages/nvidia-cuda-cupti-cu12.md |
| PIP-0163 | `nvidia-cuda-sanitizer-api-cu12` | `nvidia.cuda_sanitizer_api` | nvidia_diagnostics | medium | medium | packages/nvidia-cuda-sanitizer-api-cu12.md |
| PIP-0164 | `nvidia-nvml-dev-cu12` | `nvidia.nvml` | nvidia_management | medium | low | packages/nvidia-nvml-dev-cu12.md |
| PIP-0165 | `nvidia-cuda-cccl-cu12` | `nvidia.cccl` | nvidia_cuda_headers_templates | high | high | packages/nvidia-cuda-cccl-cu12.md |
| PIP-0166 | `nvidia-cutlass` | `cutlass` | nvidia_cuda_templates | high | high | packages/nvidia-cutlass.md |
| PIP-0167 | `nvidia-cudnn-cu11` | `nvidia.cudnn / DLL package` | nvidia_cudnn_backend_runtime_legacy | medium | high | packages/nvidia-cudnn-cu11.md |
| PIP-0168 | `nvidia-cudnn` | `nvidia.cudnn / meta package` | nvidia_cudnn_meta_package | medium | medium | packages/nvidia-cudnn.md |
| PIP-0169 | `nvidia-cudnn-frontend` | `cudnn_frontend / nvidia_cudnn_frontend` | nvidia_cudnn_frontend_api | high | high | packages/nvidia-cudnn-frontend.md |
| PIP-0170 | `nvidia-cudnn-jit-cu12` | `nvidia.cudnn_jit / DLL package` | nvidia_cudnn_jit_runtime | high | high | packages/nvidia-cudnn-jit-cu12.md |
| PIP-0171 | `nvidia-cudnn-jit-cu13` | `nvidia.cudnn_jit / DLL package` | nvidia_cudnn_jit_runtime | medium | very_high | packages/nvidia-cudnn-jit-cu13.md |
| PIP-0172 | `cuda-python` | `cuda` | nvidia_cuda_python_api | high | medium | packages/cuda-python.md |
| PIP-0173 | `cuda-toolkit` | `cuda_toolkit` | nvidia_cuda_toolkit_metapackage | high | high | packages/cuda-toolkit.md |
| PIP-0174 | `cuda-bindings` | `cuda.bindings` | nvidia_cuda_python_bindings | medium | medium | packages/cuda-bindings.md |
| PIP-0175 | `cuda-core` | `cuda.core` | nvidia_cuda_python_core | medium | medium | packages/cuda-core.md |
| PIP-0176 | `cuda-pathfinder` | `cuda.pathfinder` | nvidia_cuda_component_discovery | medium | medium | packages/cuda-pathfinder.md |
| PIP-0177 | `tensorrt` | `tensorrt` | nvidia_tensorrt_metapackage | very_high | high | packages/tensorrt.md |
| PIP-0178 | `tensorrt-cu11` | `tensorrt` | nvidia_tensorrt_cuda_family_metapackage | medium | high | packages/tensorrt-cu11.md |
| PIP-0179 | `tensorrt-cu12` | `tensorrt` | nvidia_tensorrt_cuda_family_metapackage | very_high | high | packages/tensorrt-cu12.md |
| PIP-0180 | `tensorrt-cu13` | `tensorrt` | nvidia_tensorrt_cuda_family_metapackage | very_high | very_high | packages/tensorrt-cu13.md |
| PIP-0181 | `tensorrt-libs` | `tensorrt runtime libraries` | nvidia_tensorrt_libraries | high | high | packages/tensorrt-libs.md |
| PIP-0182 | `tensorrt-cu12-bindings` | `tensorrt` | nvidia_tensorrt_python_bindings | high | high | packages/tensorrt-cu12-bindings.md |
| PIP-0183 | `tensorrt-cu12-libs` | `TensorRT DLL/shared libraries` | nvidia_tensorrt_libraries | high | high | packages/tensorrt-cu12-libs.md |
| PIP-0184 | `tensorrt-cu13-bindings` | `tensorrt` | nvidia_tensorrt_python_bindings | high | very_high | packages/tensorrt-cu13-bindings.md |
| PIP-0185 | `tensorrt-cu13-libs` | `TensorRT DLL/shared libraries` | nvidia_tensorrt_libraries | high | very_high | packages/tensorrt-cu13-libs.md |
| PIP-0186 | `tensorrt-lean` | `tensorrt lean runtime` | nvidia_tensorrt_lean_runtime | medium | high | packages/tensorrt-lean.md |
| PIP-0187 | `tensorrt-lean-cu12` | `tensorrt lean runtime` | nvidia_tensorrt_lean_runtime | medium | high | packages/tensorrt-lean-cu12.md |
| PIP-0188 | `tensorrt-lean-cu13` | `tensorrt lean runtime` | nvidia_tensorrt_lean_runtime | medium | very_high | packages/tensorrt-lean-cu13.md |
| PIP-0189 | `tensorrt-rtx` | `tensorrt_rtx / TensorRT RTX runtime` | nvidia_tensorrt_rtx | high | high | packages/tensorrt-rtx.md |
| PIP-0190 | `tensorrt-rtx-cu12` | `TensorRT RTX runtime` | nvidia_tensorrt_rtx | high | high | packages/tensorrt-rtx-cu12.md |
| PIP-0191 | `tensorrt-rtx-cu13` | `TensorRT RTX runtime` | nvidia_tensorrt_rtx | high | very_high | packages/tensorrt-rtx-cu13.md |
| PIP-0192 | `tensorrt-rtx-cu12-bindings` | `TensorRT RTX Python bindings` | nvidia_tensorrt_rtx_bindings | medium | high | packages/tensorrt-rtx-cu12-bindings.md |
| PIP-0193 | `tensorrt-rtx-cu12-libs` | `TensorRT RTX libraries` | nvidia_tensorrt_rtx_libraries | medium | high | packages/tensorrt-rtx-cu12-libs.md |
| PIP-0194 | `tensorrt-rtx-cu13-bindings` | `TensorRT RTX Python bindings` | nvidia_tensorrt_rtx_bindings | medium | very_high | packages/tensorrt-rtx-cu13-bindings.md |
| PIP-0195 | `tensorrt-rtx-cu13-libs` | `TensorRT RTX libraries` | nvidia_tensorrt_rtx_libraries | medium | very_high | packages/tensorrt-rtx-cu13-libs.md |
| PIP-0196 | `tensorrt-llm` | `tensorrt_llm` | nvidia_tensorrt_llm | very_high | very_high | packages/tensorrt-llm.md |
| PIP-0197 | `torch-tensorrt` | `torch_tensorrt` | pytorch_tensorrt_bridge | high | very_high | packages/torch-tensorrt.md |
| PIP-0198 | `onnx-graphsurgeon` | `onnx_graphsurgeon` | onnx_graph_rewriting | high | medium | packages/onnx-graphsurgeon.md |
| PIP-0199 | `polygraphy` | `polygraphy` | model_debugging_accuracy_validation | high | medium | packages/polygraphy.md |
| PIP-0200 | `onnxslim` | `onnxslim` | onnx_graph_simplification | medium | medium | packages/onnxslim.md |
| PIP-0201 | `nvidia-modelopt` | `modelopt` | nvidia_model_optimization | medium | high | packages/nvidia-modelopt.md |
| PIP-0202 | `tritonclient` | `tritonclient` | nvidia_inference_server_client | high | medium | packages/tritonclient.md |
| PIP-0203 | `pytriton` | `pytriton` | triton_python_serving_wrapper | high | medium | packages/pytriton.md |
| PIP-0204 | `triton-model-analyzer` | `model_analyzer` | triton_performance_analysis | high | high | packages/triton-model-analyzer.md |
| PIP-0205 | `triton-model-navigator` | `model_navigator` | triton_model_optimization_deployment | high | high | packages/triton-model-navigator.md |
| PIP-0206 | `prometheus-client` | `prometheus_client` | metrics_observability | medium | low | packages/prometheus-client.md |
| PIP-0207 | `grpcio` | `grpc` | grpc_rpc_transport | high | medium | packages/grpcio.md |
| PIP-0208 | `grpcio-tools` | `grpc_tools` | grpc_proto_build_tooling | medium | medium | packages/grpcio-tools.md |
| PIP-0209 | `geventhttpclient` | `geventhttpclient` | http_client_transport | medium | medium | packages/geventhttpclient.md |
| PIP-0210 | `nvidia-ml-py` | `pynvml` | nvidia_gpu_telemetry | high | low | packages/nvidia-ml-py.md |
| PIP-0211 | `kubernetes` | `kubernetes` | deployment_orchestration_client | low | low | packages/kubernetes.md |

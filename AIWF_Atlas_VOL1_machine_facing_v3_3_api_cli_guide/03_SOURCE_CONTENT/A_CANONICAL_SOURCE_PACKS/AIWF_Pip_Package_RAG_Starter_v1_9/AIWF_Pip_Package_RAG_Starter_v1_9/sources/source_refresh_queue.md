# Source Refresh Queue

These sources should be refreshed before the support system gives hard install commands or compatibility claims.

## github_repositories

- `SRC-0118` https://github.com/facebookresearch/faiss/blob/main/INSTALL.md — packages: faiss-cpu
- `SRC-0120` https://github.com/facebookresearch/sam2/blob/main/INSTALL.md — packages: SAM-2 / editable sam2 repo
- `SRC-0141` https://github.com/onnx/onnx/blob/main/INSTALL.md — packages: onnx
- `SRC-0151` https://github.com/pytorch/TensorRT/releases — packages: torch-tensorrt
- `SRC-0158` https://github.com/vllm-project/llm-compressor — packages: compressed-tensors | llmcompressor

## huggingface_ecosystem_docs

- `SRC-0166` https://huggingface.co/docs/accelerate/en/basic_tutorials/install — packages: accelerate
- `SRC-0169` https://huggingface.co/docs/bitsandbytes/en/installation — packages: bitsandbytes
- `SRC-0172` https://huggingface.co/docs/datasets/installation — packages: datasets
- `SRC-0179` https://huggingface.co/docs/peft/en/install — packages: peft
- `SRC-0185` https://huggingface.co/docs/tokenizers/installation — packages: tokenizers
- `SRC-0187` https://huggingface.co/docs/transformers/en/installation — packages: transformers
- `SRC-0372` https://sbert.net/docs/installation.html — packages: sentence-transformers

## llm_serving_docs

- `SRC-0031` https://docs.litellm.ai/docs/ — packages: litellm
- `SRC-0065` https://docs.ray.io/en/latest/serve/llm/user-guides/vllm-compatibility.html — packages: ray
- `SRC-0067` https://docs.sglang.ai/ — packages: chat-level / subsystem source
- `SRC-0073` https://docs.vllm.ai/en/latest/configuration/engine_args/ — packages: vllm
- `SRC-0074` https://docs.vllm.ai/en/latest/features/quantization/ — packages: auto-gptq | compressed-tensors | flashinfer-python | llmcompressor | torchao
- `SRC-0075` https://docs.vllm.ai/en/latest/features/quantization/gptqmodel/ — packages: gptqmodel
- `SRC-0076` https://docs.vllm.ai/en/latest/features/structured_outputs/ — packages: guidance | lm-format-enforcer | outlines | xgrammar
- `SRC-0077` https://docs.vllm.ai/en/latest/getting_started/quickstart/ — packages: vllm
- `SRC-0078` https://docs.vllm.ai/en/latest/quantization/auto_awq.html — packages: autoawq
- `SRC-0079` https://docs.vllm.ai/en/latest/serving/openai_compatible_server/ — packages: vllm
- `SRC-0080` https://docs.vllm.ai/en/stable/getting_started/installation/gpu/ — packages: flash-attn | vllm
- `SRC-0081` https://docs.vllm.ai/en/stable/usage/metrics/ — packages: vllm

## nvidia_cuda_inference_docs

- `SRC-0013` https://developer.nvidia.com/cuda-downloads — packages: nvidia-cublas-cu12 | nvidia-cuda-cccl-cu12 | nvidia-cuda-cupti-cu12 | nvidia-cuda-nvcc-cu12 | nvidia-cuda-nvrtc-cu12 | nvidia-cuda-runtime-cu12 | nvidia-cuda-runtime-cu13 | nvidia-cuda-sanitizer-api-cu12 | nvidia-cufft-cu12 | nvidia-curand-cu12 | nvidia-cusolver-cu12 | nvidia-cusparse-cu12 | nvidia-cutlass | nvidia-npp-cu12 | nvidia-nvjitlink-cu12 | nvidia-nvjpeg-cu12 | nvidia-nvml-dev-cu12 | nvidia-nvtx-cu12 | nvidia-pyindex
- `SRC-0014` https://developer.nvidia.com/cuda/python — packages: cuda-bindings | cuda-core | cuda-python
- `SRC-0015` https://developer.nvidia.com/cudnn-downloads — packages: nvidia-cudnn-cu13
- `SRC-0016` https://developer.nvidia.com/management-library-nvml — packages: nvidia-ml-py
- `SRC-0017` https://developer.nvidia.com/tensorrt — packages: nvidia-modelopt
- `SRC-0033` https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/ — packages: nvidia-cublas-cu12 | nvidia-cuda-cccl-cu12 | nvidia-cuda-cupti-cu12 | nvidia-cuda-nvcc-cu12 | nvidia-cuda-nvrtc-cu12 | nvidia-cuda-runtime-cu12 | nvidia-cuda-runtime-cu13 | nvidia-cuda-sanitizer-api-cu12 | nvidia-cufft-cu12 | nvidia-curand-cu12 | nvidia-cusolver-cu12 | nvidia-cusparse-cu12 | nvidia-cutlass | nvidia-npp-cu12 | nvidia-nvjitlink-cu12 | nvidia-nvjpeg-cu12 | nvidia-nvml-dev-cu12 | nvidia-nvtx-cu12 | nvidia-pyindex
- `SRC-0034` https://docs.nvidia.com/deeplearning/cudnn/backend/latest/api/overview.html — packages: nvidia-cudnn-cu12 | nvidia-cudnn-jit-cu12 | nvidia-cudnn-jit-cu13
- `SRC-0035` https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/developer/overview.html — packages: chat-level / subsystem source
- `SRC-0036` https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/index.html — packages: nvidia-cudnn-frontend
- `SRC-0037` https://docs.nvidia.com/deeplearning/cudnn/installation/latest/cpp-frontend-install.html — packages: nvidia-cudnn-frontend
- `SRC-0038` https://docs.nvidia.com/deeplearning/cudnn/installation/latest/index.html — packages: nvidia-cudnn | nvidia-cudnn-cu11
- `SRC-0039` https://docs.nvidia.com/deeplearning/cudnn/installation/latest/python-frontend-install.html — packages: nvidia-cudnn-frontend
- `SRC-0040` https://docs.nvidia.com/deeplearning/cudnn/installation/latest/windows.html — packages: nvidia-cudnn-cu12 | nvidia-cudnn-cu13 | nvidia-cudnn-jit-cu12 | nvidia-cudnn-jit-cu13
- `SRC-0041` https://docs.nvidia.com/deeplearning/tensorrt-rtx/latest/installing-tensorrt-rtx/installing.html — packages: tensorrt-rtx | tensorrt-rtx-cu12 | tensorrt-rtx-cu12-bindings | tensorrt-rtx-cu12-libs | tensorrt-rtx-cu13 | tensorrt-rtx-cu13-bindings | tensorrt-rtx-cu13-libs
- `SRC-0042` https://docs.nvidia.com/deeplearning/tensorrt/latest/api/onnx-graphsurgeon-api.html — packages: onnx-graphsurgeon
- `SRC-0043` https://docs.nvidia.com/deeplearning/tensorrt/latest/api/polygraphy-api.html — packages: polygraphy
- `SRC-0044` https://docs.nvidia.com/deeplearning/tensorrt/latest/getting-started/support-matrix.html — packages: tensorrt | tensorrt-cu11 | tensorrt-cu12 | tensorrt-cu13
- `SRC-0045` https://docs.nvidia.com/deeplearning/tensorrt/latest/installing-tensorrt/installing.html — packages: tensorrt | tensorrt-cu11 | tensorrt-cu12 | tensorrt-cu13
- `SRC-0046` https://docs.nvidia.com/deeplearning/triton-inference-server/ — packages: pytriton
- `SRC-0047` https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/client/README.html — packages: geventhttpclient | grpcio | tritonclient
- `SRC-0048` https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/customization_guide/deploy.html — packages: kubernetes
- `SRC-0049` https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/index.html — packages: chat-level / subsystem source
- `SRC-0050` https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/model_navigator/README.html — packages: triton-model-navigator
- `SRC-0051` https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/python_backend/README.html — packages: chat-level / subsystem source
- `SRC-0052` https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/metrics.html — packages: prometheus-client
- `SRC-0053` https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/model_analyzer.html — packages: triton-model-analyzer
- `SRC-0054` https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/model_repository.html — packages: chat-level / subsystem source
- `SRC-0055` https://docs.nvidia.com/tensorrt-llm/index.html — packages: tensorrt-llm
- `SRC-0241` https://pypi.nvidia.com/ — packages: nvidia-cublas-cu12 | nvidia-cuda-cccl-cu12 | nvidia-cuda-cupti-cu12 | nvidia-cuda-nvcc-cu12 | nvidia-cuda-nvrtc-cu12 | nvidia-cuda-runtime-cu12 | nvidia-cuda-runtime-cu13 | nvidia-cuda-sanitizer-api-cu12 | nvidia-cudnn | nvidia-cudnn-cu11 | nvidia-cudnn-cu13 | nvidia-cudnn-jit-cu12 | nvidia-cudnn-jit-cu13 | nvidia-cufft-cu12 | nvidia-curand-cu12 | nvidia-cusolver-cu12 | nvidia-cusparse-cu12 | nvidia-cutlass | nvidia-modelopt | nvidia-npp-cu12 | nvidia-nvjitlink-cu12 | nvidia-nvjpeg-cu12 | nvidia-nvml-dev-cu12 | nvidia-nvtx-cu12 | nvidia-pyindex | onnx-graphsurgeon | polygraphy | tensorrt | tensorrt-cu11 | tensorrt-cu12 | tensorrt-cu12-bindings | tensorrt-cu12-libs | tensorrt-cu13 | tensorrt-cu13-bindings | tensorrt-cu13-libs | tensorrt-lean | tensorrt-lean-cu12 | tensorrt-lean-cu13 | tensorrt-libs | tensorrt-rtx | tensorrt-rtx-cu12 | tensorrt-rtx-cu12-bindings | tensorrt-rtx-cu12-libs | tensorrt-rtx-cu13 | tensorrt-rtx-cu13-bindings | tensorrt-rtx-cu13-libs
- `SRC-0242` https://pypi.nvidia.com/tensorrt-cu13/ — packages: tensorrt-cu13

## onnx_runtime_docs

- `SRC-0219` https://onnxruntime.ai/docs/execution-providers/CUDA-ExecutionProvider.html — packages: nvidia-cudnn-cu11 | nvidia-cudnn-cu12 | nvidia-cudnn-cu13 | onnxruntime-gpu
- `SRC-0220` https://onnxruntime.ai/docs/execution-providers/DirectML-ExecutionProvider.html — packages: onnxruntime-directml
- `SRC-0221` https://onnxruntime.ai/docs/get-started/with-python.html — packages: onnxruntime
- `SRC-0222` https://onnxruntime.ai/docs/install/ — packages: onnxruntime | onnxruntime-directml | onnxruntime-gpu

## other_project_docs

- `SRC-0003` https://albumentations.ai/docs/1-introduction/installation/ — packages: albumentations
- `SRC-0007` https://bge-model.com/Introduction/installation.html — packages: FlagEmbedding
- `SRC-0019` https://developers.llamaindex.ai/python/framework/getting_started/installation/ — packages: llama-index
- `SRC-0025` https://docs.flashinfer.ai/installation.html — packages: flashinfer-cubin | flashinfer-jit-cache | flashinfer-python
- `SRC-0030` https://docs.langchain.com/oss/python/langchain/install — packages: langchain
- `SRC-0203` https://librosa.org/doc/latest/install.html — packages: librosa
- `SRC-0207` https://matplotlib.org/stable/users/installing/index.html — packages: matplotlib
- `SRC-0213` https://nvidia.github.io/TensorRT-LLM/installation/linux.html — packages: tensorrt-llm
- `SRC-0214` https://nvidia.github.io/cuda-python/cuda-bindings/latest/install.html — packages: cuda-bindings | cuda-pathfinder | cuda-python | cuda-toolkit
- `SRC-0237` https://pyav.org/docs/develop/overview/installation.html — packages: av
- `SRC-0401` https://www.pyinstaller.org/ — packages: pyinstaller
- `SRC-0407` https://zulko.github.io/moviepy/getting_started/install.html — packages: moviepy

## project_documentation

- `SRC-0196` https://ipywidgets.readthedocs.io/en/latest/user_install.html — packages: ipywidgets
- `SRC-0199` https://kornia.readthedocs.io/en/latest/get-started/installation.html — packages: kornia
- `SRC-0234` https://psutil.readthedocs.io/latest/install.html — packages: psutil
- `SRC-0239` https://pybind11.readthedocs.io/en/stable/installing.html — packages: pybind11
- `SRC-0368` https://requests.readthedocs.io/en/latest/user/install/ — packages: requests

## pypi_package_metadata

- `SRC-0264` https://pypi.org/project/cuda-python/ — packages: cuda-bindings | cuda-core | cuda-pathfinder | cuda-python
- `SRC-0265` https://pypi.org/project/cuda-toolkit/ — packages: cuda-toolkit
- `SRC-0295` https://pypi.org/project/nvidia-cudnn-cu12/ — packages: nvidia-cudnn-cu12
- `SRC-0296` https://pypi.org/project/nvidia-cudnn-frontend/ — packages: nvidia-cudnn-frontend
- `SRC-0334` https://pypi.org/project/tensorrt-cu11/ — packages: tensorrt-cu11
- `SRC-0335` https://pypi.org/project/tensorrt-cu12-bindings/ — packages: tensorrt-cu12-bindings
- `SRC-0336` https://pypi.org/project/tensorrt-cu12/ — packages: tensorrt-cu12 | tensorrt-cu12-libs
- `SRC-0337` https://pypi.org/project/tensorrt-cu13-bindings/ — packages: tensorrt-cu13-bindings
- `SRC-0338` https://pypi.org/project/tensorrt-cu13-libs/ — packages: tensorrt-cu13-libs
- `SRC-0339` https://pypi.org/project/tensorrt-cu13/ — packages: tensorrt-cu13
- `SRC-0340` https://pypi.org/project/tensorrt-llm/ — packages: tensorrt-llm
- `SRC-0341` https://pypi.org/project/tensorrt/ — packages: tensorrt | tensorrt-cu11 | tensorrt-cu12 | tensorrt-cu13 | tensorrt-libs
- `SRC-0345` https://pypi.org/project/torch-tensorrt/ — packages: torch-tensorrt

## python_packaging_build_docs

- `SRC-0023` https://docs.astral.sh/ruff/installation/ — packages: ruff

## pytorch_docs

- `SRC-0061` https://docs.pytorch.org/TensorRT/ — packages: torch-tensorrt
- `SRC-0062` https://docs.pytorch.org/docs/2.12/cpp_extension.html — packages: chat-level / subsystem source
- `SRC-0063` https://docs.pytorch.org/tutorials/advanced/cpp_custom_ops.html — packages: chat-level / subsystem source
- `SRC-0064` https://docs.pytorch.org/tutorials/beginner/introyt/tensorboardyt_tutorial.html — packages: tensorboard
- `SRC-0364` https://pytorch.org/ — packages: torch | triton
- `SRC-0365` https://pytorch.org/get-started/locally/ — packages: torch | torchaudio | torchvision

## scientific_python_docs

- `SRC-0212` https://numpy.org/install/ — packages: numpy
- `SRC-0227` https://pandas.pydata.org/docs/getting_started/install.html — packages: pandas
- `SRC-0376` https://scikit-image.org/docs/stable/user_guide/install.html — packages: scikit-image
- `SRC-0378` https://scipy.org/install/ — packages: scipy



## v1.8 high-refresh additions
- llama.cpp server/GGUF docs
- llama-cpp-python server docs
- Transformers chat templates, multimodal templates, RoPE utilities, and generation docs
- Ollama Modelfile/import docs
- LM Studio server/OpenAI-compatible docs
- ExLlamaV2 and TabbyAPI docs
- KoboldCpp runtime docs

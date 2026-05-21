# v0.5 Research Pass — Training, Data, Config, Dev Tooling, and LLM Framework Packages

## Packages documented

- datasets
- bitsandbytes
- omegaconf
- pandas
- regex
- scipy
- ftfy
- tqdm
- requests
- einops
- kornia
- timm
- sentencepiece
- open-webui
- llama-cpp-python
- llama-index
- langchain

## Main findings

1. Training/data packages need cluster pinning, especially around Hugging Face packages, tokenizers, `datasets`, `accelerate`, and quantization packages.
2. `bitsandbytes` and `llama-cpp-python` are not casual pip installs on Windows. They need isolated recipes and smoke tests.
3. `open-webui` should be treated as an app/runtime, not a normal helper library to drop into ComfyUI.
4. `llama-index` and `langchain` are framework ecosystems with modular integration packages. Installing the base package does not guarantee every provider/vector store/reader works.
5. Lightweight utilities like `tqdm`, `requests`, `ftfy`, and `regex` are low risk, but still need import-name and intended-use documentation for RAG accuracy.

## New smoke script

Added `scripts/Test-AIWF-TrainingToolingPackageSmoke.ps1`.

## Next recommended pass

Audio/video/media and notebook/build tooling: `av`, `imageio`, `imageio-ffmpeg`, `moviepy`, `decord`, `librosa`, `soundfile`, `ffmpeg-python`, `matplotlib`, `rich`, `typer`, `click`, `gitpython`, `packaging`, `setuptools`, `wheel`, `ninja`, `cmake`, `pybind11`.

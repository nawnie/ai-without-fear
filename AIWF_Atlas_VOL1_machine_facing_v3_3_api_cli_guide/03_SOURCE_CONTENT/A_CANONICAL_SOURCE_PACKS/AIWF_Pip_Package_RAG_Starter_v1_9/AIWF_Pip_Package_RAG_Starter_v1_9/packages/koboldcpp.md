# koboldcpp

## Role in AIWF
KoboldCpp is a beginner-friendly local LLM runtime/app for GGUF/GGML models. It provides a UI and APIs, including an OpenAI-compatible `/v1` route.

## Support boundary
Do not troubleshoot KoboldCpp as if it were a pip package. It is usually a downloaded binary or source-built executable that loads GGUF files.

## Install / runtime notes
The upstream project says all up-to-date GGUF models are supported in general, but support still depends on architecture, quantization, context settings, backend build, GPU offload, and memory.

## Windows risk
Medium. Runtime use is relatively easy; backend-specific source builds and GPU acceleration can become toolchain-heavy.

## Sources
- https://github.com/LostRuins/koboldcpp
- https://github.com/LostRuins/koboldcpp/wiki

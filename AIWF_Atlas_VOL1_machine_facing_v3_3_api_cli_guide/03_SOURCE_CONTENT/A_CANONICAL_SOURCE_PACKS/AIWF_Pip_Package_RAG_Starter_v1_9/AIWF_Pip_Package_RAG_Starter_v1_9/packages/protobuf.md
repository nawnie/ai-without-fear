# protobuf

## RAG purpose
Tracks a hidden transitive dependency that often causes confusing import/runtime errors in ML stacks.

## Why AI Without Fear cares
Users rarely install protobuf intentionally, but many AI packages rely on it. The RAG should recognize protobuf errors as dependency-version problems, not model failures.

## Common import patterns
- `from google.protobuf import json_format`

## Install / pinning notes
Pin only when a dependency requires it. Protobuf version skew can break generated proto modules or TensorFlow/HF-adjacent tools.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import google.protobuf; print(google.protobuf.__version__)"
```

## Common failure signatures
- `No module named google.protobuf`
- Generated pb2 files incompatible with runtime version
- Dependency resolver downgrades/upgrades protobuf for another package

## AIWF usage notes
Protocol Buffers Python runtime used by model, tokenizer, ONNX, and ML tooling dependencies.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `medium`, `serialization`, `transitive-dependency`, `model-format`, `protobuf`

## Source URLs
- https://github.com/protocolbuffers/protobuf/blob/main/python/README.md
- https://pypi.org/project/protobuf/

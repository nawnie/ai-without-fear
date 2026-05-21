# Triton Python Backend and Custom Runtime Deep Reference

## What the Python backend is
The Python backend lets Triton serve models written in Python without writing a C++ backend. It is ideal for preprocessing, postprocessing, glue logic, wrappers around Python inference code, and custom control flow.

## Why support is different
A Python backend model is both a Triton model and Python code. Failures may come from Triton model repository layout, `config.pbtxt` mismatch, Python import paths, dependency mismatch, CUDA device mismatch, missing runtime libraries, request/response object misuse, or exceptions inside `initialize`, `execute`, or `finalize`.

## Lifecycle methods to know
- `auto_complete_config` can help define model config programmatically.
- `initialize` runs when the model instance loads.
- `execute` handles inference requests.
- `finalize` runs during cleanup/unload.
- Decoupled mode and async execution are advanced patterns that alter request/response assumptions.

## AIWF warning
Do not use Python backend as an excuse to dump an entire unstable local AI venv into Triton. For supportability, record the server Python version, all required packages, custom execution environment, and whether the model code was copied from a different environment.

## Recommended local support policy
1. Get a tiny Python backend sample loading first.
2. Add imports one at a time.
3. Add the model load path.
4. Add GPU use.
5. Add preprocessing/postprocessing.
6. Add batching only after correctness is verified.
7. Then benchmark.

## Failure signatures
- `ModuleNotFoundError` inside server log: dependency is missing from server runtime, not client venv.
- `TritonModelException`: model code raised a handled backend exception.
- Model loads but client fails: likely input/output name, dtype, shape, batching, or protocol issue.
- Server starts but model unavailable: repository/config/backend failure.

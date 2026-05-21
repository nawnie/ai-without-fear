# geventhttpclient

## Identity
- **pip name:** `geventhttpclient`
- **import/module clue:** `geventhttpclient`
- **category:** `http_client_transport`
- **AIWF confidence:** source-reviewed for Triton serving/deployment support placement.

## What it is
HTTP client transport dependency used in some Triton client HTTP stacks and high-throughput Python HTTP workflows.

## Why AIWF cares
Triton turns model files into a service boundary. Support changes from “does the package import?” to “can the server load the model repository, select the backend, allocate memory, batch requests, expose health/metrics, and return correct outputs under HTTP/gRPC load?”

## Install and build notes
Usually should be pulled through tritonclient[http] rather than manually pinned unless a specific client bug requires intervention.

## Deep support notes
- Separate **server runtime**, **client package**, **model repository**, **backend**, **model format**, **scheduler/batching config**, **GPU runtime**, and **observability endpoint**.
- Triton clients do not prove that Triton server is installed or healthy. Always check server URL, liveness/readiness endpoints, model repository load status, and model-specific readiness.
- For support bundles, capture: Triton version/container tag, driver/GPU, CUDA/cuDNN/TensorRT family, server launch command, model repository tree, `config.pbtxt`, backend type, model version folder, server logs, client protocol, request shape/dtype, and metrics snapshot.
- Treat model repository write access as security-sensitive. A Python backend model can execute Python code; dynamic repository loading must not be exposed to untrusted users.

## AIWF diagnostic checks
1. `python -m pip show geventhttpclient`.
2. Verify import/module where applicable: `geventhttpclient`.
3. If related to a live Triton server, probe `localhost:8000/v2/health/live`, `localhost:8000/v2/health/ready`, and `localhost:8002/metrics`.
4. Check whether the user needs local ComfyUI-style Python inference or a real model-serving boundary.
5. Do not add this to a shared AI image/ComfyUI venv unless the workflow specifically needs Triton serving/client behavior.

## Windows risk
`medium` — Serving stacks involve ports, containers/WSL/Linux assumptions, GPU runtime visibility, and separate server/client lifecycles.

## Sources
https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/client/README.html | https://pypi.org/project/geventhttpclient/

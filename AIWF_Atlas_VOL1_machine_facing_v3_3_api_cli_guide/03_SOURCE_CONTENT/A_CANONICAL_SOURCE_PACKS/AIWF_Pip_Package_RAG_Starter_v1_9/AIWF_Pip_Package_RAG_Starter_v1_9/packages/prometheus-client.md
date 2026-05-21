# prometheus-client

## Identity
- **pip name:** `prometheus-client`
- **import/module clue:** `prometheus_client`
- **category:** `metrics_observability`
- **AIWF confidence:** source-reviewed for Triton serving/deployment support placement.

## What it is
Python Prometheus metrics client useful for local support probes, custom app metrics, and testing scrape-style observability around Triton services.

## Why AIWF cares
Triton turns model files into a service boundary. Support changes from “does the package import?” to “can the server load the model repository, select the backend, allocate memory, batch requests, expose health/metrics, and return correct outputs under HTTP/gRPC load?”

## Install and build notes
Triton itself exposes Prometheus-format metrics at its metrics endpoint. This package is for Python-side tools/services that emit or parse metrics-like data.

## Deep support notes
- Separate **server runtime**, **client package**, **model repository**, **backend**, **model format**, **scheduler/batching config**, **GPU runtime**, and **observability endpoint**.
- Triton clients do not prove that Triton server is installed or healthy. Always check server URL, liveness/readiness endpoints, model repository load status, and model-specific readiness.
- For support bundles, capture: Triton version/container tag, driver/GPU, CUDA/cuDNN/TensorRT family, server launch command, model repository tree, `config.pbtxt`, backend type, model version folder, server logs, client protocol, request shape/dtype, and metrics snapshot.
- Treat model repository write access as security-sensitive. A Python backend model can execute Python code; dynamic repository loading must not be exposed to untrusted users.

## AIWF diagnostic checks
1. `python -m pip show prometheus-client`.
2. Verify import/module where applicable: `prometheus_client`.
3. If related to a live Triton server, probe `localhost:8000/v2/health/live`, `localhost:8000/v2/health/ready`, and `localhost:8002/metrics`.
4. Check whether the user needs local ComfyUI-style Python inference or a real model-serving boundary.
5. Do not add this to a shared AI image/ComfyUI venv unless the workflow specifically needs Triton serving/client behavior.

## Windows risk
`low` — Serving stacks involve ports, containers/WSL/Linux assumptions, GPU runtime visibility, and separate server/client lifecycles.

## Sources
https://prometheus.github.io/client_python/ | https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/metrics.html

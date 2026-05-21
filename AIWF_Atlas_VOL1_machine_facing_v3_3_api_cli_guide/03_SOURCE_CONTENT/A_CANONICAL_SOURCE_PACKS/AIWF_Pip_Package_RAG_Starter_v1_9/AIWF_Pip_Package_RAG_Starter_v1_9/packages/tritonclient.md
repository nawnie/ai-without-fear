# tritonclient

## Identity
- **pip name:** `tritonclient`
- **import/module clue:** `tritonclient`
- **category:** `nvidia_inference_server_client`
- **AIWF confidence:** source-reviewed for TensorRT/Triton serving support.

## What it is
Official Python client package for NVIDIA Triton Inference Server. It talks to a Triton server over HTTP/REST or gRPC. It is not the server.

## Why AIWF cares
This is the bridge between local tools and served models. A ComfyUI helper, Gradio tool, AnythingLLM-style app, or AIWF support script can call Triton through `tritonclient` while the model actually runs behind a separate server/runtime boundary.

## Install and build notes
- `pip install tritonclient[all]` installs both HTTP and gRPC client support.
- `tritonclient[http]` installs HTTP/REST support only.
- `tritonclient[grpc]` installs gRPC support only.
- CUDA shared-memory utilities need the relevant cuda extra/component support.
- Client install success does not mean a Triton server exists, is reachable, has loaded a model, or is GPU-enabled.

## Deep support notes
- Separate **client venv** from **server runtime**. They may be different containers or machines.
- Default Triton service ports are conventionally HTTP `8000`, gRPC `8001`, and metrics `8002` when using standard examples.
- HTTP client objects and gRPC client objects have different threading/streaming behavior. Do not assume a client wrapper is thread-safe without checking the protocol docs.
- Capture URL, protocol, timeout, model name, model version, request dtype, request shape, and server readiness for any support ticket.
- For high-throughput local inference, benchmark HTTP vs gRPC; do not guess.

## AIWF diagnostic checks
```powershell
python -m pip show tritonclient
python -c "import tritonclient; print('tritonclient import ok')"
try { Invoke-WebRequest http://127.0.0.1:8000/v2/health/live -UseBasicParsing | Select-Object StatusCode, Content } catch { $_.Exception.Message }
try { Invoke-WebRequest http://127.0.0.1:8000/v2/health/ready -UseBasicParsing | Select-Object StatusCode, Content } catch { $_.Exception.Message }
try { Invoke-WebRequest http://127.0.0.1:8002/metrics -UseBasicParsing | Select-Object -ExpandProperty Content | Select-Object -First 20 } catch { $_.Exception.Message }
```

## Windows risk
`medium` — client wheels are usually easier than server/runtime deployment, but support still has to separate Python client issues from Triton server/container/GPU/model repository issues.

## Sources
https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/client/README.html | https://pypi.org/project/tritonclient/

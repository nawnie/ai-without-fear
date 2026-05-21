# AIWF Triton Local Serving Playbook

## Goal
Use this when a local AI setup needs a real inference service instead of direct in-process Python calls.

## Beginner-safe decision point
Do not introduce Triton unless at least one is true: multiple tools need the same model service, HTTP/gRPC inference boundary is required, batching/scheduling is needed, production-like metrics are needed, or TensorRT/ONNX/PyTorch/Python backend models are intentionally being served.

## Step 1 — prove server health
```powershell
Invoke-WebRequest http://127.0.0.1:8000/v2/health/live -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:8000/v2/health/ready -UseBasicParsing
Invoke-WebRequest http://127.0.0.1:8002/metrics -UseBasicParsing
```

## Step 2 — prove client package only after server exists
```powershell
python -m pip install "tritonclient[all]"
python -c "import tritonclient.http as h; c=h.InferenceServerClient(url='127.0.0.1:8000'); print(c.is_server_live(), c.is_server_ready())"
```

## Step 3 — prove model repository layout
```text
models/
  my_model/
    config.pbtxt
    1/
      model.plan | model.onnx | model.py | model.pt
```

## Step 4 — capture support bundle
Capture server launch command, container/release tag, GPU driver/nvidia-smi, pip freeze for client venv, model repository tree, `config.pbtxt`, model file hash/size, server startup log, health/readiness results, metrics snapshot, client request script, and actual traceback.

## Step 5 — tune only after correctness
Confirm correct inference first, then repeated correct inference, then shape/dtype behavior, then batching, then instance groups, then Perf Analyzer and Model Analyzer.

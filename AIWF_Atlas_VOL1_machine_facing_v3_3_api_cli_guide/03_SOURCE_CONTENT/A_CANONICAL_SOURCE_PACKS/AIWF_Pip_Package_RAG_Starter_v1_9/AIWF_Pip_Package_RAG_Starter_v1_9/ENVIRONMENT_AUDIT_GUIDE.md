# Environment Audit Guide

Use this when the question is not merely “what does this package do?” but “what is wrong with this install?”

## One-pass collector

From PowerShell, run the collector from the archive `scripts` folder:

```powershell
Set-ExecutionPolicy -Scope Process Bypass -Force
.\scripts\Collect-AIWFEnvironmentGroundTruth.ps1 -ComfyRoot F:\ComfyUI -PythonExe F:\ComfyUI\venv\Scripts\python.exe -OutDir F:\ComfyUI\aiwf_env_reports
```

The script writes:

- `pip_freeze.txt`
- `pip_check.txt`
- `pip_list.json`
- `runtime_probe.json`
- discovered `requirements.txt` files
- merged requirement inventory from the target ComfyUI tree

## How to use the report

1. Check `pip_check.txt` first. Broken requirements here often explain red nodes before runtime logs do.
2. Check `runtime_probe.json` for torch/CUDA and ONNX provider facts.
3. Compare custom-node requirements against the master inventory.
4. Do not change torch, torchvision, xformers, or onnxruntime variants until the cluster has been reviewed as a set.

## IDM download reminder

For Shawn's Windows workflow, downloaded archives often land under:

```powershell
C:\Users\Shawn\Downloads\Compressed
```

When giving install commands, account for archives being nested inside IDM-style compressed folders.

<#
AI Without Fear - Core Package Smoke Test
Checks the core runtime/import packages most likely to break ComfyUI or Gradio AI workflows.
#>
param(
    [string]$PythonExe = "python"
)

$ErrorActionPreference = "Continue"

$code = @'
import json
checks = [
    "torch", "torchvision", "torchaudio", "xformers", "diffusers", "transformers",
    "accelerate", "safetensors", "huggingface_hub", "gradio", "fastapi",
    "pydantic", "starlette", "uvicorn", "PIL", "cv2", "numpy", "onnxruntime"
]
out = {}
for name in checks:
    info = {"importable": False}
    try:
        mod = __import__(name)
        info["importable"] = True
        info["version"] = getattr(mod, "__version__", "unknown")
        if name == "torch":
            info["cuda_available"] = mod.cuda.is_available()
            info["torch_cuda"] = getattr(mod.version, "cuda", None)
            info["cudnn"] = mod.backends.cudnn.version() if mod.backends.cudnn.is_available() else None
        if name == "onnxruntime":
            info["providers"] = mod.get_available_providers()
    except Exception as e:
        info["error"] = repr(e)
    out[name] = info
print(json.dumps(out, indent=2))
'@

& $PythonExe -c $code

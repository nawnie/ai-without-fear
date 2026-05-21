<#
AI Without Fear - Custom Node / Training / Web Package Smoke Test
Run inside target venv:
  .\venv\Scripts\Activate.ps1
  .\scripts\Test-AIWF-CustomNodePackageSmoke.ps1
#>
$ErrorActionPreference = "Continue"
$packages = @(
  @{ Pip="mediapipe"; Import="mediapipe" },
  @{ Pip="albumentations"; Import="albumentations" },
  @{ Pip="supervision"; Import="supervision" },
  @{ Pip="pycocotools"; Import="pycocotools" },
  @{ Pip="groundingdino-py"; Import="groundingdino" },
  @{ Pip="open-clip-torch"; Import="open_clip" },
  @{ Pip="clip-interrogator"; Import="clip_interrogator" },
  @{ Pip="lpips"; Import="lpips" },
  @{ Pip="peft"; Import="peft" },
  @{ Pip="wandb"; Import="wandb" },
  @{ Pip="tensorboard"; Import="tensorboard" },
  @{ Pip="httpx"; Import="httpx" },
  @{ Pip="websockets"; Import="websockets" },
  @{ Pip="orjson"; Import="orjson" },
  @{ Pip="watchdog"; Import="watchdog" }
)
Write-Host "AIWF custom-node/training/web package smoke test" -ForegroundColor Cyan
Write-Host "Python:" (python -c "import sys; print(sys.executable)")
foreach ($p in $packages) {
  Write-Host "== $($p.Pip) / import $($p.Import) ==" -ForegroundColor Yellow
  python -m pip show $p.Pip | Select-String -Pattern "Name:|Version:|Location:"
  python -c "import importlib; name='$($p.Import)'; m=importlib.import_module(name); print('IMPORT OK:', name, getattr(m, '__version__', 'version not exposed'))"
}
Write-Host "Caveats: open-clip-torch imports as open_clip; groundingdino-py may not match every repo layout; tensorboard/wandb need runtime/account checks."

# AI Without Fear - Training/Data/LLM Framework Package Smoke Test
# Run inside the venv you want to inspect.

$packages = @(
    @{Name="datasets"; Import="datasets"},
    @{Name="bitsandbytes"; Import="bitsandbytes"},
    @{Name="omegaconf"; Import="omegaconf"},
    @{Name="pandas"; Import="pandas"},
    @{Name="regex"; Import="regex"},
    @{Name="scipy"; Import="scipy"},
    @{Name="ftfy"; Import="ftfy"},
    @{Name="tqdm"; Import="tqdm"},
    @{Name="requests"; Import="requests"},
    @{Name="einops"; Import="einops"},
    @{Name="kornia"; Import="kornia"},
    @{Name="timm"; Import="timm"},
    @{Name="sentencepiece"; Import="sentencepiece"},
    @{Name="open-webui"; Import="open_webui"},
    @{Name="llama-cpp-python"; Import="llama_cpp"},
    @{Name="llama-index"; Import="llama_index"},
    @{Name="langchain"; Import="langchain"}
)

Write-Host "AIWF v0.5 package smoke test" -ForegroundColor Cyan
Write-Host "Python:" (python -c "import sys; print(sys.executable)")
Write-Host ""

foreach ($pkg in $packages) {
    $code = "import $($pkg.Import); print(getattr($($pkg.Import), '__version__', 'import_ok_no_version'))"
    Write-Host "[$($pkg.Name)] import $($pkg.Import)" -NoNewline
    $out = python -c $code 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host " OK " -ForegroundColor Green -NoNewline
        Write-Host $out
    } else {
        Write-Host " FAIL" -ForegroundColor Red
        Write-Host $out
    }
}

Write-Host ""
Write-Host "Provider/runtime notes:" -ForegroundColor Yellow
Write-Host "- bitsandbytes import success does not prove CUDA kernels are usable. Run: python -m bitsandbytes"
Write-Host "- llama-cpp-python import success does not prove GPU acceleration. Confirm build flags and model load behavior."
Write-Host "- open-webui is an app; prefer a dedicated venv or Docker path."

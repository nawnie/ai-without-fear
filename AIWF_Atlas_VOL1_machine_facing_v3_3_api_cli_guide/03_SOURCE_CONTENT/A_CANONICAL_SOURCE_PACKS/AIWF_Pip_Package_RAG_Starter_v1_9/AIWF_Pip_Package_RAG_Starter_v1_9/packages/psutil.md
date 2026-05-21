# psutil

## RAG purpose
Cross-platform process and system utility library for CPU, RAM, disk, network, sensors, processes, and resource monitoring.

## Why AI Without Fear cares
Core dependency for AIWF EnvPack, model checker, process diagnostics, port conflicts, background monitor, and user-friendly environment reports.

## Package identity
- Pip package: `psutil`
- Import name: `psutil`
- Priority: `critical`
- Windows / ComfyUI risk: `low`

## Common import patterns
- `import psutil`

## Install / pinning notes
```powershell
python -m pip install -U psutil
python -c "import psutil; print(psutil.__version__); print(psutil.virtual_memory())"
```

## Dependency / cluster notes
- native wheel normally available
- Visual Studio build tools only if building from source on Windows

## Common failure signatures
- AccessDenied can happen for process details without admin rights.
- Process names alone are not stable; log PID, exe path, command line where possible.

## Quick diagnostic command
```powershell
python -c "import psutil; print(psutil.__version__); print(psutil.cpu_percent())"
```

## AIWF usage notes
For support logs, capture PID, process path, ports, RAM, VRAM-side companion data, and app role.

## RAG tags
`pip-package`, `v0.3-image-restoration-face-segmentation`, `diagnostics`, `envpack`, `process-monitor`, `ports`

## Source URLs
- https://psutil.readthedocs.io/
- https://psutil.readthedocs.io/latest/install.html
- https://pypi.org/project/psutil/
- https://github.com/giampaolo/psutil

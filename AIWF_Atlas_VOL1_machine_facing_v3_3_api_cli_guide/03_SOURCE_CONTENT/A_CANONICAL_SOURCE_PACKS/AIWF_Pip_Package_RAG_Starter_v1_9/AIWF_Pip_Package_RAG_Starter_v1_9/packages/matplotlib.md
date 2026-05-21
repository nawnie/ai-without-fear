# matplotlib

## RAG purpose
Plotting and visualization library for charts, diagnostics, histograms, progress summaries, and report graphics.

## Why AI Without Fear cares
Useful for EnvPack/model checker reports, training curves, benchmark comparisons, and guide figures generated from data.

## Common import patterns
- `matplotlib`

## Install / pinning notes
Usually safe. GUI backends can vary by environment; use noninteractive backends for scripts/servers.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import matplotlib; print(matplotlib.__version__)"
```

## Common failure signatures
- GUI backend errors in headless/server mode
- Font/cache warnings
- Plots not shown because script uses noninteractive backend
- NumPy mismatch after upgrades

## Dependency cluster notes
Visualization cluster: matplotlib + numpy + pandas for reports; avoid GUI assumptions inside web apps.

## Source context
Diagnostic reports, training logs, RAG package charts, generated guide visuals.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `low`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://matplotlib.org/stable/
- https://matplotlib.org/stable/users/installing/index.html
- https://pypi.org/project/matplotlib/

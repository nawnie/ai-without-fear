# rich

## RAG purpose
Terminal rendering library for rich text, tables, markdown, syntax highlighting, progress bars, tracebacks, and readable CLI diagnostics.

## Why AI Without Fear cares
Important for AIWF one-click installers, EnvPack validators, package/node audit tools, and user-friendly PowerShell/terminal output.

## Common import patterns
- `rich`

## Install / pinning notes
Safe dependency. Watch for log capture if terminal ANSI output is written to plain files.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c 'import rich; print("rich import ok")'
```

## Common failure signatures
- ANSI escape codes appear in captured logs
- Terminal does not support color/style
- Progress displays badly when stderr/stdout redirected

## Dependency cluster notes
CLI UX cluster: rich + typer/click can make beginner diagnostics readable.

## Source context
CLI UX for validators, installers, smoke tests, and reports.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `low`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://rich.readthedocs.io/
- https://rich.readthedocs.io/en/latest/introduction.html
- https://github.com/Textualize/rich

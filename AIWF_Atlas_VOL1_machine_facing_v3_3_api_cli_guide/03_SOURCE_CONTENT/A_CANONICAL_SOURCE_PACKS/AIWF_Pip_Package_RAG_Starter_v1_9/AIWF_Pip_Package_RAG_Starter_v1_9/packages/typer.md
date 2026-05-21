# typer

## RAG purpose
Python CLI framework based on type hints, commonly used for ergonomic command-line tools.

## Why AI Without Fear cares
Useful for AIWF command tools where commands/options should be clear, typed, and self-documenting.

## Common import patterns
- `typer`

## Install / pinning notes
Typer sits above Click. Pin Typer/Click together if a CLI tool depends on exact help/option behavior.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import typer; print(typer.__version__)"
```

## Common failure signatures
- Typer/Click compatibility error
- Help formatting differs across versions
- Entry point installed into wrong venv
- Shell quoting issues on Windows PowerShell

## Dependency cluster notes
CLI framework cluster: typer uses click; rich can improve display; packaging/entry points determine install behavior.

## Source context
Model sorter, EnvPack, installers, package inventory collectors, future CLI utilities.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `low`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://typer.tiangolo.com/
- https://typer.tiangolo.com/tutorial/package/
- https://github.com/fastapi/typer

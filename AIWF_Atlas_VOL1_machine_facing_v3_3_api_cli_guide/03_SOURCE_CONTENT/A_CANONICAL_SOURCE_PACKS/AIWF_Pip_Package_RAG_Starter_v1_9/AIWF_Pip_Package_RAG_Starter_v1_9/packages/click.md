# click

## RAG purpose
Mature Python package for building composable command-line interfaces.

## Why AI Without Fear cares
Often appears as a dependency under Typer, Flask tools, and package CLIs; relevant when diagnosing broken command entry points.

## Common import patterns
- `click`

## Install / pinning notes
Pin with Typer when CLI behavior matters. Do not assume a CLI failure is your app code before checking Click/Typer versions.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import click; print(click.__version__)"
```

## Common failure signatures
- Option parsing changed across versions
- Shell completion/entry point mismatch
- Typer compatibility issue
- Windows quoting of paths with spaces

## Dependency cluster notes
CLI framework cluster: click is base layer; typer and rich-click build on top.

## Source context
CLI tools, installers, dev utilities, transitive dependencies.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `low`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://click.palletsprojects.com/
- https://pypi.org/project/click/

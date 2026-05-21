# setuptools

## RAG purpose
Core Python build/package backend historically used for installing and building Python projects.

## Why AI Without Fear cares
Relevant when custom node requirements trigger source builds or setup.py-era packages.

## Common import patterns
- `setuptools`

## Install / pinning notes
Modern projects may use pyproject backends instead, but many legacy AI packages still hit setuptools paths.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import setuptools; print(setuptools.__version__)"
```

## Common failure signatures
- Legacy setup.py install warnings
- Build isolation pulls unexpected build deps
- Package assumes distutils behavior removed/changed
- Old setuptools breaks modern pyproject builds

## Dependency cluster notes
Build tooling cluster: setuptools + wheel + packaging + pyproject build backend.

## Source context
Native/source installs for custom nodes, legacy restoration packages, packaging diagnostics.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://setuptools.pypa.io/
- https://packaging.python.org/en/latest/tutorials/packaging-projects/
- https://pypi.org/project/setuptools/

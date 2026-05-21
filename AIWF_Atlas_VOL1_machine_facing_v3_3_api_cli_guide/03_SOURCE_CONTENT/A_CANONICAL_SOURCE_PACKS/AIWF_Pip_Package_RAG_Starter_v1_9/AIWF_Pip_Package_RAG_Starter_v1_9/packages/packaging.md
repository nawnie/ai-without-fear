# packaging

## RAG purpose
Python package/version/specifier/tag parsing library used across modern packaging and dependency resolution tooling.

## Why AI Without Fear cares
Critical for validators that need to compare versions correctly instead of string-sorting torch/CUDA/package versions.

## Common import patterns
- `packaging`

## Install / pinning notes
Usually safe. Prefer packaging.version/specifiers over homemade version logic.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c 'from packaging.version import Version; print(Version("2.10") > Version("2.9"))'
```

## Common failure signatures
- Naive string version comparisons cause false reports
- InvalidVersion on local/custom tags
- Tool assumes semver when Python packaging version rules differ

## Dependency cluster notes
Python packaging cluster: packaging + setuptools + wheel + pip metadata.

## Source context
EnvPack, dependency validators, model/package checkers, install reports.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `low`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://packaging.pypa.io/
- https://pypi.org/project/packaging/

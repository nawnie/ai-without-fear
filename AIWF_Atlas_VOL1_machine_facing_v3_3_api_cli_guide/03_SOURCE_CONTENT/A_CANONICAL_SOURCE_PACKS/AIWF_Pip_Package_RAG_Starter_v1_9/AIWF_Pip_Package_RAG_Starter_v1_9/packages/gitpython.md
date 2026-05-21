# GitPython

## RAG purpose
Python interface to Git repositories for clone/status/log/diff operations and repo metadata inspection.

## Why AI Without Fear cares
Useful for AIWF tooling that audits custom nodes, reads Git commit status, collects repo URLs, or verifies installed custom-node versions.

## Common import patterns
- `git`

## Install / pinning notes
Requires Git executable behavior underneath for many workflows. Validate `git --version` separately.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import git; print(git.__version__)"
```
```powershell
git --version
```

## Common failure signatures
- Python package imports but git executable missing
- Repo path has spaces/permissions issues
- Detached HEAD or shallow clone confusion
- Network/auth errors while fetching

## Dependency cluster notes
Repo tooling cluster: GitPython + external git + packaging/version parsers.

## Source context
ComfyUI custom-node audit, repo inventory, GitHub/load-format workflows, changelog tooling.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `low`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://gitpython.readthedocs.io/
- https://github.com/gitpython-developers/GitPython
- https://pypi.org/project/GitPython/

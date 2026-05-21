# omegaconf

## RAG purpose
Hierarchical configuration library for YAML configs, interpolation, merges, and CLI-style overrides.

## Why AI Without Fear cares
Reproducible trainer/tool settings without hardcoded Python constants.

## Common import patterns
- `omegaconf`

## Install / pinning notes
Usually light. Pin when a trainer expects specific OmegaConf/Hydra behavior.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "from omegaconf import OmegaConf; print(OmegaConf.to_yaml(OmegaConf.create({'ok': True})))"
```

## Common failure signatures
- YAML interpolation errors
- Missing config keys due to schema mismatch
- Docs assume Hydra/OmegaConf overrides but script uses argparse

## Dependency cluster notes
Config cluster: omegaconf + pyyaml + hydra-core when present.

## Source context
Trainer/config stack; YAML-driven AIWF tools and workflow settings.

## RAG tags
`pip-package`, `v0.5-training-data-config-llm-framework`, `low`, `windows-ai`, `training`, `rag`, `local-ai`

## Source URLs
- https://omegaconf.readthedocs.io/en/2.3_branch/
- https://omegaconf.readthedocs.io/en/2.3_branch/usage.html

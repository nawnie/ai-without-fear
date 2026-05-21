# PyYAML

## RAG purpose
Basic config dependency for AIWF tools that read/write YAML settings, model path maps, or install manifests.

## Why AI Without Fear cares
It is boring but important; many install/config issues are simply tools reading a different YAML file than the user edited.

## Common import patterns
- `import yaml`
- `data = yaml.safe_load(text)`

## Install / pinning notes
Import name is `yaml`, not `pyyaml`. Use safe loaders for untrusted YAML.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import yaml; print(yaml.__version__)"
```

## Common failure signatures
- Package installed as PyYAML but import attempted as pyyaml
- Unsafe loader used on untrusted files
- Indentation/escaping mistakes in YAML configs

## AIWF usage notes
YAML parser/emitter used for config files such as model paths, app settings, and workflow/tool metadata.

## RAG tags
`pip-package`, `v0.4-rag-ocr-llm-client`, `low`, `config`, `yaml`, `model-paths`, `settings`, `safe-load`

## Source URLs
- https://pyyaml.org/wiki/PyYAMLDocumentation
- https://pypi.org/project/PyYAML/

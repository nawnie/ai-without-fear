# jinja2

## Role in AIWF
Jinja2 is important because modern local LLM chat formatting often uses Jinja-style templates. When a model works but responds weirdly, the chat template can be the real fault line.

## Support boundary
- Package/import: `jinja2`.
- Artifact using it: `tokenizer_config.json` chat template, app prompt templates, TabbyAPI/HF Jinja chat template support.
- Failure mode: template renders but model receives wrong role tokens, missing BOS/EOS, duplicated assistant prompt, or malformed tool schema.

## Install / runtime notes
Usually transitive, but pinning may matter if a server depends on specific template behavior.

## Sources
- https://jinja.palletsprojects.com/
- https://jinja.palletsprojects.com/en/stable/templates/

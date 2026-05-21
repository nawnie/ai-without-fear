# blake3

## RAG identity

- **pip name:** `blake3`
- **import name:** `blake3`
- **category:** `hashing_integrity`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `not pinned`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Fast hashing package. Relevant to cache keys, integrity checks, model/file fingerprinting, and duplicate model tooling.

## Where this package came from

ComfyUI upstream requirements.txt; hashing/integrity utility.

## Install / compatibility notes

Native wheel package; source builds may need Rust/build tooling if a matching wheel is unavailable.

## Windows risk

`medium`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://pypi.org/project/blake3/
- https://github.com/oconnor663/blake3-py

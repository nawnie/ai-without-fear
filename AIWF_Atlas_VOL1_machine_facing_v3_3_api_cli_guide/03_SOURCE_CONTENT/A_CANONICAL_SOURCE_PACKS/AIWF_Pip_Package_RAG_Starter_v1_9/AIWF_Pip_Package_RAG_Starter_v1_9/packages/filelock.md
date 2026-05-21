# filelock

## RAG identity

- **pip name:** `filelock`
- **import name:** `filelock`
- **category:** `filesystem_locking`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `not pinned`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Cross-platform file locks; relevant to model/cache/download/write contention and multi-process helper code.

## Where this package came from

ComfyUI upstream requirements.txt; filesystem locking/concurrency utility.

## Install / compatibility notes

Usually safe. RAG should identify it as infrastructure, not AI model functionality.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://py-filelock.readthedocs.io/
- https://pypi.org/project/filelock/

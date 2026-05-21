# torchsde

## RAG identity

- **pip name:** `torchsde`
- **import name:** `torchsde`
- **category:** `sampling_math`
- **confidence:** `upstream_confirmed`
- **priority:** `high`
- **version seen:** `not pinned`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Stochastic differential equation tooling used in diffusion sampling ecosystems. For ComfyUI, treat as core sampler-adjacent dependency.

## Where this package came from

ComfyUI upstream requirements.txt; used by samplers/noise/SDE-related generation paths.

## Install / compatibility notes

Depends on torch/numpy/scipy ecosystem. If missing, ComfyUI sampler paths may fail even when torch works.

## Windows risk

`medium`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://github.com/google-research/torchsde
- https://pypi.org/project/torchsde/

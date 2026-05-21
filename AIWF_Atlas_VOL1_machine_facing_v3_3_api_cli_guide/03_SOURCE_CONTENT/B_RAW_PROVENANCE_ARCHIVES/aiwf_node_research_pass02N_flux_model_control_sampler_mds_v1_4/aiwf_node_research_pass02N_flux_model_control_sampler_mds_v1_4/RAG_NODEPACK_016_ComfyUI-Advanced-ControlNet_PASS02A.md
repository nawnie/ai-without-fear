# RAG Nodepack 016 — ComfyUI-Advanced-ControlNet

Repo: Kosinkadink/ComfyUI-Advanced-ControlNet

## Purpose

Advanced ControlNet application with keyframes, weights, SparseCtrl, ControlNet++, CtrLoRA, reference control, and deprecated compatibility IDs.

## Key groups

- Keyframes: `TimestepKeyframe`, `LatentKeyframe`, interpolation/list nodes.
- Apply: `ACN_AdvancedControlNetApply_v2`, `ACN_AdvancedControlNetApplySingle_v2`.
- Loaders: `ACN_ControlNetLoaderAdvanced`, `ACN_DiffControlNetLoaderAdvanced`.
- Weights: soft/custom/default/masked weight nodes.
- Advanced control: SparseCtrl, ControlNet++, CtrLoRA, Reference ControlNet.
- Deprecated IDs are explicitly marked `do_not_generate`.

## AIWF usage

Important for temporal/keyframed control and advanced conditioning. Requires deeper per-node schema before final workflow JSON.

## Generation rule

Prefer `_v2` apply IDs. Never use deprecated IDs in new workflows.

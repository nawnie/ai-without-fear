# Web-Aware Structure Hardening Report v1.9

## Purpose

This Z pass corrects the operating assumption for future work: current/volatile claims must be web-verified unless the user explicitly opts out. The archive is machine-facing, but it must still be source-grounded and release-safe.

## What Changed

Added:

- `00_AI_READ_FIRST/WEB_VERIFICATION_REQUIRED_POLICY_v1_9.md`
- `00_AI_READ_FIRST/ANTI_AI_SLOP_RESEARCH_POLICY_v1_9.md`
- `01_CANONICAL_RESEARCH_LANES/26_comfyui_advanced_node_io_datatypes/ADVANCED_SOCKET_CHANGE_GUIDE_IMAGE_TO_LATENT.md`
- `04_MANIFESTS/comfyui_advanced_web_verified_sources_v1_9.csv`
- `04_MANIFESTS/comfyui_advanced_web_verified_sources_v1_9.jsonl`
- `10_SCHEMA_AND_INDEX/web_verification_required_policy_v1_9.json`
- `10_SCHEMA_AND_INDEX/comfyui_socket_change_rules_v1_9.json`

Updated:

- `AIWF_KNOWLEDGE_ADAPTER_PROFILE.json`
- `README.md`
- `CHANGELOG.md`
- current file manifest
- checksums

## Web-Verified Source Areas

This pass verified and pinned official or reputable sources for:

- ComfyUI custom node `INPUT_TYPES`, `RETURN_TYPES`, `FUNCTION`, and tuple-return behavior.
- ComfyUI Images/Latents/Masks backend docs.
- ComfyUI backend datatypes docs.
- ComfyUI hidden/flexible inputs.
- ComfyUI lazy evaluation.
- ComfyUI node replacement/migration.
- ComfyUI V3 migration docs.
- ComfyUI-Manager official repository.
- Computerworld reporting on arXiv penalties for unchecked AI-generated slop.

## Specific ComfyUI Finding

For user questions about changing node inputs/outputs from `IMAGE` to `LATENT`, the assistant must explain that this is a datatype and function-contract change, not a label-only edit. Pixel-space code requires VAE boundaries; latent-native code must operate on latent samples and preserve the latent dictionary.

## Integrity Rule

No generated research lane should be promoted to canonical status unless major claims are either source-verified or explicitly labeled as volatile/unverified.

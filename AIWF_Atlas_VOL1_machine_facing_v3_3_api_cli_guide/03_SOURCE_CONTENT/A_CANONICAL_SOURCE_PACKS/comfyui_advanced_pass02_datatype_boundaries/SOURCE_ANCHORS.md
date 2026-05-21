# ComfyUI Advanced Pass 02 Source Anchors

Use these sources for datatype-boundary claims before relying on community examples or old workflow JSON.

## COMFY-PASS02-DOC-001 — ComfyUI backend datatypes

URL: https://docs.comfy.org/custom-nodes/backend/datatypes

Type: official_docs

Supports: Comfy datatypes act like strong typing on the client; IMAGE, LATENT, MASK, AUDIO, MODEL, CLIP, VAE, CONDITIONING and sampling datatypes are documented here.

## COMFY-PASS02-DOC-002 — ComfyUI Images, Latents, and Masks

URL: https://docs.comfy.org/custom-nodes/backend/images_and_masks

Type: official_docs

Supports: IMAGE is a torch tensor [B,H,W,C]; MASK is [B,H,W]; LATENT is a dict containing samples [B,C,H,W].

## COMFY-PASS02-DOC-003 — ComfyUI custom node properties

URL: https://docs.comfy.org/custom-nodes/backend/server_overview

Type: official_docs

Supports: Custom nodes use INPUT_TYPES, RETURN_TYPES, RETURN_NAMES, CATEGORY, FUNCTION, and functions must return tuples corresponding to RETURN_TYPES.

## COMFY-PASS02-DOC-004 — ComfyUI hidden and flexible inputs

URL: https://docs.comfy.org/custom-nodes/backend/more_on_inputs

Type: official_docs

Supports: Hidden inputs can request UNIQUE_ID, PROMPT, and EXTRA_PNGINFO; flexible/custom input patterns should be treated carefully.

## COMFY-PASS02-DOC-005 — ComfyUI lazy evaluation

URL: https://docs.comfy.org/custom-nodes/backend/lazy_evaluation

Type: official_docs

Supports: Lazy inputs and check_lazy_status support conditional/router patterns without evaluating unused branches.

## COMFY-PASS02-DOC-006 — ComfyUI V3 migration and MultiType inputs

URL: https://docs.comfy.org/custom-nodes/v3_migration

Type: official_docs

Supports: V3 schema supports custom types, MultiType inputs, MatchType, dynamic inputs, and schema-based node definitions.


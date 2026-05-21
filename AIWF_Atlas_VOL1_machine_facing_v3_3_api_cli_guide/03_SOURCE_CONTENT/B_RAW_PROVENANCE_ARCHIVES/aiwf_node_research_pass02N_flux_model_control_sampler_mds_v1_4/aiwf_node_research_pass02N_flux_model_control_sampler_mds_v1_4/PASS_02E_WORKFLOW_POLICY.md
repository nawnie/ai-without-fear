# Pass 02E Workflow Generation Policy

## Safe direct candidates from this pass

- `ImageSelector`
- `ImageDuplicator`
- `LatentSelector`
- `LatentDuplicator`
- `ImagesGridByColumns`
- `ImagesGridByRows`

These are small, schema-confirmed utility nodes with no heavy model dependencies.

## RAG-only / repair-first packs

- Efficiency Nodes
- WAS Node Suite
- MTB Nodes
- Comfyroll Studio
- tinyterraNodes

These packs are common in shared workflows but often hide core ComfyUI flow inside wrapper nodes, dynamic imports, caches, or broad utility layers. Prefer core ComfyUI / Essentials / Impact / rgthree / AIWF-native nodes for new teaching workflows unless the user explicitly needs old-workflow compatibility.

## UI/server extensions, not workflow foundations

- ComfyUI Browser
- Workspace Manager / Comfyspace
- ComfyUI-Copilot

These add web routes or assistant/workspace behavior. Do not insert their UI-only rows into workflow JSON unless a schema-confirmed node row exists.

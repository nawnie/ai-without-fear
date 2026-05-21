# AIWF Node Research PASS 02F — Light Popular Pack Sweep

Date: 2026-05-19

Archive scope: Markdown, CSV, and JSON node research only. No full project/workflow re-archive.

## Pass summary

- Previous covered original rows: **40**
- Covered original rows after this pass: **60**
- Original rows left to do/retry: **231**
- New Pass 02 CSV rows: **53**
- Pass 02 CSV rows total: **545**
- New packs covered: **18**
- Attempted but unresolved: **ComfyUI Prompt Control**, **time-river CLIPSeg**

## New coverage groups

### Metadata / provenance

- Save Image with Generation Metadata
- SD Prompt Reader

### Prompt helpers

- DynamicPrompts
- One Button Prompt
- SDXL Prompt Styler
- comfyui-prompt-composer

### UI / management helpers

- Quick Connections
- AIGODLIKE Studio
- AIGODLIKE Translation

### Background removal / semantic masks / segmentation

- ComfyUI-RMBG
- BiRefNet variants
- InSPyReNet RMBG
- BRIA RMBG
- Masquerade Nodes
- a-person-mask-generator
- YoloWorld + EfficientSAM
- alternate SAM2 implementation

## Build decision

For these common utility packs, AIWF should avoid dense socket-by-socket capture until they are selected as actual workflow dependencies. The exception is segmentation/background-removal capability: RMBG, BiRefNet, YoloWorld/ESAM, SAM2, and Masquerade CLIPSeg deserve deeper follow-up if we decide they become default auto-mask/inpaint tooling.

# AIWF Node Research Pass 02E — B-Tier Utility / Legacy Compatibility Slice

Date: 2026-05-19

Archive scope: Markdown, CSV, and JSON node research only. No full AIWF project re-archive.

## Coverage counts

- Original master-list rows: 291
- Covered original rows: 40
- Original rows left to do: 251
- B-tier rows total: 142
- B-tier rows covered: 16
- B-tier rows left: 126
- Pass 02 CSV rows total: 492
- New rows this pass: 38

## Packs covered this pass

31. Efficiency Nodes for ComfyUI Version 2.0+
32. WAS Node Suite Revised
33. MTB Nodes
34. Comfyroll Studio
35. ComfyUI_tinyterraNodes
36. ComfyUI Browser
37. ComfyUI Workspace Manager / Comfyspace
38. ComfyUI-Copilot
39. ComfyUI-Image-Selector
40. ImagesGrid

## Practical AIWF decision

This pass is mostly compatibility and workflow-repair coverage, not new default workflow foundations. The safest direct workflow candidates from this pass are `ImageSelector`, `ImageDuplicator`, `LatentSelector`, `LatentDuplicator`, `ImagesGridByColumns`, and `ImagesGridByRows`.

Large wrapper packs such as Efficiency Nodes, WAS, MTB, Comfyroll, and tinyterra should be treated as RAG/repair knowledge until a dedicated schema sweep is done for a specific target node.

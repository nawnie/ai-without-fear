# RAG Nodepack 021 — ComfyUI-ReActor — Pass 02C

## Identity
- Repo: `Gourieff/ComfyUI-ReActor`
- Main nodes: `ReActorFaceSwap`, `ReActorFaceSwapOpt`, `ReActorOptions`, `ReActorFaceBoost`, `ReActorMaskHelper`, face-model nodes, restore nodes, similarity QA.

## Workflow use
Use for face swap/restoration and A1111-style ReActor parity, plus face similarity QA. Many nodes depend on InsightFace, ONNXRuntime, facerestore models, SAM, or Ultralytics models.

## AIWF rule
Do not treat ReActor as a generic face-detailer. Use it only for legitimate identity workflows and restoration/QA. Keep model download/install requirements explicit.


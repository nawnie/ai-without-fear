# RAG Nodepack 013 — ComfyUI_IPAdapter_plus

Repo: cubiq/ComfyUI_IPAdapter_plus

## Purpose

Identity/style/composition image prompting through IPAdapter, CLIPVision, embeds, FaceID, and scheduling helpers.

## Key groups

- Apply nodes: `IPAdapter`, `IPAdapterAdvanced`, `IPAdapterBatch`, `IPAdapterFaceID`, tiled, embeds, style/composition variants.
- Loaders: `IPAdapterUnifiedLoader`, `IPAdapterUnifiedLoaderFaceID`, `IPAdapterModelLoader`, `IPAdapterInsightFaceLoader`.
- Helpers: `IPAdapterEncoder`, `IPAdapterCombineEmbeds`, `PrepImageForClipVision`, `IPAdapterWeights`, `IPAdapterRegionalConditioning`.

## AIWF usage

High value for identity preservation and style/composition transfer. FaceID paths require InsightFace and should always be local-test.

## Generation rule

Use helper nodes first. Large apply nodes remain mapping-confirmed in this pass and need deeper per-class schema before being placed in polished workflows.

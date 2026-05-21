# Open Questions — ML Theory, Training, and Model Behavior

## Needs source-backed future passes

- Flow matching / rectified flow / consistency models: how to explain newer image/video model families without overloading Volume I.
- Classifier-free guidance: dedicated source card for CFG and why high guidance can damage outputs.
- Denoise strength: implementation-specific source notes for img2img and inpainting across ComfyUI/Diffusers/A1111-style systems.
- VAE artifacts: collect concrete visual failure signatures and model-family-specific VAE cautions.
- SD 1.5 vs SDXL vs Flux vs WAN vs LTX: architecture and behavior comparison table.
- LoRA training settings: source-backed starter ranges by model family, written with standard decimals.
- Dataset curation: captions, repeats, regularization/class images, identity/style leakage, validation samples.
- Evaluation: how beginners should judge small local training runs without pretending loss is enough.
- Copyright/licensing/dataset provenance: what AIWF can safely teach and what should stay cautious.

## v0.6 editing/operator-theory questions

- Which AIWF workflow packs should receive hard preset ranges first: old-photo repair, SDXL inpaint, pose transfer, face repair, or upscaling/detail restore?
- Should the workflow validator treat high CFG/high denoise as warnings only, or should it offer task-specific suggested ranges?
- For ComfyUI JSON QA, how many common mask-path patterns should be recognized before building a real validator?
- Which inpaint model families should be documented separately from generic masked img2img?
- How should Flux/flow-model editing guidance be explained without incorrectly forcing SD 1.5/SDXL assumptions onto it?


# Pass 02C Workflow Policy

## Safe immediate build target

Use **ComfyUI-Inpaint-CropAndStitch** with **Acly comfyui-inpaint-nodes** for the next inpaint workflow pass.

Recommended pattern:

1. `InpaintCropImproved`
2. inpaint conditioning / mask expansion / masked fill or model-based inpaint
3. SDXL/Flux/SD inpaint sampler path
4. `InpaintStitchImproved`
5. optional color match and preview/save

## Guarded but useful

- `UltralyticsDetectorProvider`: safe when Impact Subpack and YOLO models exist.
- Kijai SAM2 single-image path: strong for masks but requires SAM2 model install and segmentor mode selection.
- storyicon GroundingDINO+SAM: useful for prompt-to-mask, but model/dependency-heavy.
- ReActor restore/similarity nodes: useful for face QA/restoration; face swap paths require explicit user intent and installed models.
- LTXVideo samplers: useful for LTX workflows, but not beginner defaults until a local wiring workflow is verified.

## Do not generate yet

- LTXVideo mapping-only nodes from the static mapping; they need module-specific schema sweeps.
- Stateful SAM2 video chains unless exact inference state wiring is present.
- ReActor write/output face-model nodes unless the workflow purpose is explicitly face-model creation.

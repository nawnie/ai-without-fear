# AIWF Editing Preset Notes — First-Pass Human Defaults

Date: 2026-05-19
Status: Working notes, not final presets

These presets are retrieval notes for future UI/tooltips. They are intentionally expressed as relative ranges because exact values depend on model family, scheduler, sampler, image size, mask size, crop context, and whether the workflow is SD 1.5, SDXL, Flux/flow-based, WAN/LTX video, or a specialized restoration/inpaint pipeline.

## Restoration bias

Goal: preserve source and repair defects.

- Denoise: low to medium
- CFG: low to moderate
- Mask: soft edges, enough context
- Prompt: describe restored material, not a new object
- Extra controls: face/detail restoration only where needed

Use for:

- old photo dust removal;
- scratches;
- small stains;
- compression cleanup;
- mild face repair.

Failure warning:

If the photo starts looking like a new synthetic photo, denoise or CFG is probably too high, or the model/restorer is too aggressive.

## Replacement bias

Goal: change a thing while preserving the surrounding image.

- Denoise: medium to high
- CFG: moderate
- Mask: covers object plus shadow/contact edges
- Prompt: replacement plus lighting, material, camera perspective, and scene context
- Extra controls: depth/pose/edge if structure matters

Use for:

- remove object;
- replace object;
- alter clothing;
- repaint background region.

Failure warning:

If the new region looks pasted on, increase context, blur/expand mask, or describe integration details instead of only naming the object.

## Identity-safe bias

Goal: edit around a person without losing likeness.

- Denoise: low to medium for face region
- CFG: low to moderate
- Mask: avoid unnecessary facial landmarks unless intentionally repairing them
- Prompt: simple and preservation-oriented
- Extra controls: ReActor/FaceID/IP-Adapter/reference stack as appropriate

Use for:

- face cleanup;
- mild expression/detail repair;
- old-photo face restoration;
- clothing/background edits around a person.

Failure warning:

If likeness drifts, do not simply raise CFG. Lower denoise, improve reference conditioning, and isolate the edit area.

## Structure-control bias

Goal: move layout/pose/geometry.

- Denoise: medium to high
- CFG: moderate
- Mask: large enough to include all changed structure
- Prompt: broad description, not micro-control
- Extra controls: pose/depth/canny/segmentation/reference tools

Use for:

- pose transfer;
- body rewrite;
- large composition changes;
- architecture/room layout edits.

Failure warning:

Denoise alone does not preserve anatomy. If the structure matters, use structure control.

## Creative repaint bias

Goal: reinterpret source heavily.

- Denoise: high
- CFG: moderate to high, but watch for overcooking
- Mask: broad or full image
- Prompt: creative target style and subject
- Extra controls: optional; use when composition must survive

Use for:

- stylization;
- concept repaint;
- mood transfer;
- dramatic background transformation.

Failure warning:

High denoise means the source is becoming suggestion rather than law. Do not expect exact identity or object placement unless control/reference systems are active.

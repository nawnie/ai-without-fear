# AIWF Node Research Pass 02G — Light Popular Video / Layer / Identity Coverage

Date: 2026-05-19

## Scope

Light-report mode remains active. This pass covers popular/high-value B-tier packs without full socket-by-socket analysis unless the pack introduces a new capability class.

## Counts

- Original list rows: 291
- Covered original rows: 79
- Original rows left to do: 209
- Needs retry / stale repo rows: 3
- B-tier rows total: 142
- B-tier covered: 54
- B-tier needs retry / stale: 3
- Pass 02 CSV rows total: 581
- New CSV rows this pass: 36

## Covered this pass

1. ComfyUI-ProPainter Nodes
2. ComfyUI-Video-Matting
3. ComfyUI-LayerStyle
4. ComfyUI_LayerStyle_Advance
5. Comfyui-LayerForge
6. Canvas Tab
7. comfyui-enricos-nodes
8. ComfyUI AdvancedLivePortrait
9. ComfyUI-LivePortraitKJ
10. comfyui-liveportrait — unresolved/stale repo entry
11. ComfyUI_InstantID
12. ComfyUI-InstantID
13. comfyui-instantId-faceswap
14. PuLID_ComfyUI
15. ComfyUI_PuLID_Flux_ll
16. ComfyUI-PuLID-Flux-Enhanced
17. ComfyUI-IPAdapter-Flux
18. ComfyUI PhotoMaker Plus
19. ComfyUI PhotoMaker (ZHO)
20. Face Analysis for ComfyUI

## Important findings

- ProPainter is the first real temporal video inpaint/outpaint pack in the archive. It deserves a later dense pass before production workflow JSON.
- Video Matting adds video alpha/matte capability, overlapping with RMBG/BiRefNet but aimed at frame/video use.
- LayerStyle and LayerStyle Advance are large dynamic-import packs; they are excellent compatibility/capability references but not clean workflow defaults until individual files are schema-swept.
- LivePortrait and InstantID/PuLID/PhotoMaker packs are identity-sensitive. They are high-value but should be local-tested before AIWF publishes one-click workflows.
- Flux-specific identity packs are base-model-specific and should get a dense pass before use.

## Hard rules added

- Do not auto-generate workflow JSON from dynamic module inventory rows.
- Do not treat identity/face-animation packs as beginner defaults.
- Mark all InsightFace/ONNX-provider identity paths as local-test required.
- Treat temporal video inpaint/matting as workflow-target candidates, but only after local model/dependency verification.

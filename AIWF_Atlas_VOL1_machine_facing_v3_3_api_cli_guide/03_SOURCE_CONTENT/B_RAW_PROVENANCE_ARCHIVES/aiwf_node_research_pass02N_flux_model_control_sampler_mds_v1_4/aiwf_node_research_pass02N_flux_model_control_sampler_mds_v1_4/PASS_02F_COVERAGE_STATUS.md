# PASS 02F Coverage Status — Light Popular Pack Sweep

Date: 2026-05-19

## Counts

- Original list rows: **291**
- Covered original rows: **60**
- Original rows left to do / retry: **231**
- New original rows covered this pass: **20**
- Attempted but not covered: **2** (`ComfyUI Prompt Control`, `CLIPSeg` / time-river path)

## Priority breakdown

| priority   |   covered |   needs_retry |   remaining |
|:-----------|----------:|--------------:|------------:|
| A          |        24 |             0 |           0 |
| B          |        35 |             2 |         105 |
| C          |         0 |             0 |          62 |
| D          |         1 |             0 |          62 |

## Research mode rule locked in

Default mode is now **light coverage**: pack purpose, main node families, overlap/replacement notes, and risk flags. Dense review is reserved for:

1. first node/pack of its capability type;
2. new or fast-moving 2026 techniques;
3. base-model-specific systems such as Flux, Wan, Hunyuan, LTX, SD3, HiDream, etc.;
4. missing capability gaps such as video inpainting or identity control;
5. packs selected for actual workflow JSON generation.

## PASS 02F theme

This pass covered popular/high-value metadata, prompt-helper, UI/helper, RMBG/matting, semantic mask, and SAM2/YoloWorld segmentation packs.

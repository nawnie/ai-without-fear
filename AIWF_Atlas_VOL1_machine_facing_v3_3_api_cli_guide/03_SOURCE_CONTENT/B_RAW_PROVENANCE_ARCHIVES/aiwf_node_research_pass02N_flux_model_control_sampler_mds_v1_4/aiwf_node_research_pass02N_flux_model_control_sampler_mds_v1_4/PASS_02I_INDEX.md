# AIWF Node Research Pass 02I — Retry + Expansion Repair

Date: 2026-05-19

Archive scope: Markdown, CSV, and JSON node research only. No workflow JSONs and no full AIWF project archive.

## Why this pass exists

The user asked to focus on retry rows and anything we moved past too soon. This pass does that instead of continuing down the general popularity list.

## Counts

- Original list rows: **291**
- Covered original rows: **100**
- Untouched original rows left: **189**
- Retry/stale rows still left: **2**
- Total left including retry/stale: **191**
- Pass 02 CSV rows total: **632**
- New CSV rows this pass: **34**
- Schema-confirmed rows total: **251**

## Retry rows handled

1. **ComfyUI Prompt Control** — resolved; modern V3 ComfyExtension pack, not legacy NODE_CLASS_MAPPINGS.
2. **CLIPSeg** — resolved via equivalent ComfyUI-CLIPSeg implementation after the listed time-river path did not fetch node source cleanly.
3. **comfyui-liveportrait** — still stale/unresolved; prefer Kijai LivePortraitKJ or AdvancedLivePortrait.
4. **comfyui-portrait-master-zh-cn** — still stale/unresolved; base Portrait Master remains covered.
5. **SeedVR2 VideoUpscaler** — resolved through active official-style V3 extension repo rather than the listed numz path.

## Expanded because they were too important for light-only coverage

- **ComfyUI-Video-Matting** — Robust Video Matting and BRIAAI Matting upgraded to schema-confirmed.
- **ComfyUI-InfiniteYou** — identity-control Flux path upgraded to schema-confirmed node-family coverage.
- **ComfyUI-HyperLoRA** — generated-LoRA identity/adaptation family upgraded to schema-confirmed coverage.
- **SeedVR2 VideoUpscaler** — modern video upscaling system upgraded to schema-confirmed V3 nodes.
- **Prompt Control** — prompt scheduling/macro/mask-control path captured as an advanced prompt system.
- **CLIPSeg** — direct CLIPSeg semantic-mask implementation captured for red-node repair and alternate workflows.

## AIWF guidance added

- Keep light reporting as default.
- Upgrade to dense/schema notes when a pack is first-of-type, model-family-specific, or fills a missing workflow capability.
- Do not treat V3 ComfyExtension packs as missing just because they lack `NODE_CLASS_MAPPINGS`.
- Do not generate workflow JSON from stale repo names; resolve to current active repo or mark stale.

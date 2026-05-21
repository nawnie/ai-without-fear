# Pass 02D Coverage Status

## Original master list

The original master list contains **291 node-pack rows**.

After Pass 02D:

- Covered node-pack rows: **30**
- Remaining node-pack rows: **261**
- Unique repo URLs total: **282**
- Unique repo URLs covered: **30**
- Unique repo URLs remaining: **252**

## A-tier status

- A-tier total: **24**
- A-tier covered: **24**
- A-tier remaining: **0**

Pass 02D closes A-tier pack-level coverage. The next passes should move into B-tier packs or do deeper schema passes for large A-tier packs before workflow JSON generation.

## What “remaining” means

Remaining count means the row from the original node-pack coverage list has not yet received a RAG/CSV research entry. It does not mean there are only 261 individual nodes left. Many covered packs contain dozens or hundreds of individual ComfyUI nodes, and many remaining packs contain only a few.

## Remaining work by type

1. **Deep schema sweeps for covered mega-packs**
   - AnimateDiff Evolved module files.
   - HunyuanVideoWrapper text/image/sampler/context modules.
   - LTXVideo remaining modules.
   - Fluxtapoz node files.
   - Nunchaku control/IPAdapter/PuLID/text encoder modules.
   - FluxTrainer SD3/SDXL modules.

2. **B-tier original list coverage**
   - Control/refiner/upscale/segmentation/helper packs that matter for AIWF workflows but are not first-line A-tier.

3. **Workflow generation readiness**
   - Acly inpaint + CropAndStitch can be used first.
   - IPAdapter Plus and Advanced-ControlNet are next after one workflow-focused consistency pass.
   - Hunyuan/Wan/LTX/SUPIR/Nunchaku remain local-test/hardware-sensitive.

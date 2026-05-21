# Pass 02L Coverage Status — Video/Restoration/Motion Block

Date: 2026-05-19
Mode: light research pass with targeted schema samples
Base archive: Pass 02K source consolidation

## Counts

- Previous Pass 02 node rows: 643
- New rows this pass: 26
- New Pass 02 node rows: 669
- Original list rows: 291
- Covered original rows: 111
- Remaining original rows: 174
- Retry/stale rows: 6

## Covered / updated this pass

- ComfyUI-TopazVideoAI
- ComfyUI Bringing Old Photos Back to Life
- ComfyUI_InstantIR_Wrapper
- ComfyUI-Detail-Daemon
- ComfyUI Frame Interpolation
- ComfyUI-GIMM-VFI
- ComfyUI-DynamiCrafterWrapper
- ComfyUI-CogVideoXWrapper
- ComfyUI-PyramidFlowWrapper
- ComfyUI-RH_FramePack

## Marked retry/stale this pass

- HandFixer
- ComfyUI-fastblend
- ComfyUI-WanVideoStartEndFrames
- ComfyUI_ControlNeXt-SVD

## Main classification update

This block is mostly **advanced video finishing / restoration / legacy video model support**. None of these displace the Pass 02J decision that native Wan 2.2 5B is the P0 modern video target. The high-value additions are:

1. Frame interpolation options: Fannovel16 VFI pack and Kijai GIMM-VFI.
2. Restoration comparison paths: old-photo restoration and InstantIR.
3. Advanced detail/sigma control: Detail Daemon.
4. Legacy/alternate video wrappers: DynamiCrafter, CogVideoX, PyramidFlow, FramePack.
5. External app bridge: Topaz Video AI.

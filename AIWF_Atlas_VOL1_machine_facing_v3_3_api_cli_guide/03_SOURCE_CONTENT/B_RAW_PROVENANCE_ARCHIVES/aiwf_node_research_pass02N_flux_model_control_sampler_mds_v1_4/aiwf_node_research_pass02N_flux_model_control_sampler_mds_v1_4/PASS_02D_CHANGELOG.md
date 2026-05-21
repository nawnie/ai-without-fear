# Pass 02D Changelog

Date: 2026-05-19

## Added

- Added A-tier completion coverage for packs 023–030.
- Added rows for HunyuanVideoWrapper, AnimateDiff Evolved, SUPIR, UltimateSDUpscale, Nunchaku, x-flux-comfyui, Fluxtapoz, and FluxTrainer.
- Updated `ORIGINAL_COVERAGE_LEDGER.csv` with resolved repo URLs and coverage notes.
- Added coverage status with original-list remaining count.

## Changed

- A-tier remaining count is now zero.
- Original list remaining count moved from 269 to 261.
- Nunchaku original list row was resolved to the active `nunchaku-ai/ComfyUI-nunchaku` source for research.

## Guardrails

- Mapping-only rows remain RAG-only.
- Hardware-sensitive packs remain guarded/local-test.
- Training nodes are not inference workflow defaults.

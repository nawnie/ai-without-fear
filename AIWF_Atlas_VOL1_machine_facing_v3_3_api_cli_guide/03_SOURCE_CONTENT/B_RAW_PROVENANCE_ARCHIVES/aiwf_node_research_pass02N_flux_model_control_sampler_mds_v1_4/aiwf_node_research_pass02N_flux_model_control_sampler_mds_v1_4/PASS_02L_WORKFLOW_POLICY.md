# Pass 02L Workflow Policy Addendum

## Green only after local install

- `GIMMVFI_interpolate` once model files are installed.
- `DetailDaemonSamplerNode` only in advanced sampler labs.

## Yellow / local-test required

- Topaz Video AI nodes: external-app and ffmpeg-path sensitive.
- BOPBTL old-photo nodes: many model files and dlib dependency.
- InstantIR nodes: SDXL + DINO + adapter/aggregator/LoRA stack.
- DynamiCrafter / CogVideoX / PyramidFlow / FramePack wrappers: model-heavy legacy/alternate video systems.

## Red / do not generate

- Any row marked `RETRY_NO_REPO_MATCH`.
- Any unresolved repo listed as `needs_retry_or_stale_repo`.

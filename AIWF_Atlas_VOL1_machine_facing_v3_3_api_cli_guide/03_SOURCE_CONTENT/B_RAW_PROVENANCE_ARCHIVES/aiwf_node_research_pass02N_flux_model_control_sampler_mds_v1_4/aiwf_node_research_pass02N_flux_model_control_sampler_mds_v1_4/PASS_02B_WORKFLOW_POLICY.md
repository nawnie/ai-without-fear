# Pass 02B Workflow Generation Policy

Date: 2026-05-19

## Safe filters

For generated ComfyUI JSON, prefer rows where:

- `schema_level = schema_confirmed`
- `workflow_generation_policy` starts with `safe_to_generate`
- `portable_default_candidate = True`

Rows marked `guarded_generate_after_local_test` may be used in experimental workflows when the pack and models are known installed.

Rows marked `rag_only_or_expert_local_test`, `rag_only_needs_module_sweep`, or `do_not_generate` should not be emitted into user-facing workflow JSONs unless the user explicitly asks for an expert/local test graph.

## Pass 02B specific rules

### IPAdapter Plus

- `IPAdapter` and `IPAdapterAdvanced` are now usable draft targets when the IPAdapter pipeline is present.
- FaceID paths require InsightFace and face detection; never treat them as a plain image-reference replacement.
- Tiled paths output diagnostic tile/mask images and should be used deliberately, not as a drop-in default.
- Dev nodes like `IPAdapterMS` and ClipVision enhancer paths remain expert/local-test.

### Advanced-ControlNet

- Prefer current IDs ending in `_v2` for apply nodes.
- Deprecated IDs remain `do_not_generate`.
- `vae_optional` matters for some SD3/advanced ControlNet variants; missing VAE can fail at runtime.
- Weight/keyframe nodes are powerful but should not be included in beginner workflows unless the workflow’s purpose is explicitly scheduled/advanced control.

### ControlNet Aux

- `AIO_Preprocessor` is useful for general examples, but individual wrapper schemas still need a later sweep.
- `ExecuteAllControlNetPreprocessors` is a debug/inspection node; do not use it in production workflows.

### WanVideoWrapper

- `WanVideoSampler` is indexed for RAG and repair, not beginner generation.
- It depends on upstream Wan model loading, embeds, context/cache/control/video modules, and hardware-sensitive settings.

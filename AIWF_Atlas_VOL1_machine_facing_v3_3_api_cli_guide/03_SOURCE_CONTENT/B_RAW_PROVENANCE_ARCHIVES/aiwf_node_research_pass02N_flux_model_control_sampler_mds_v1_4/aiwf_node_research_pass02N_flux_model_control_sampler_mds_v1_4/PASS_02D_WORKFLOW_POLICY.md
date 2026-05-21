# Pass 02D Workflow Generation Policy

## Safe-first rule

Do not generate a published ComfyUI workflow from a node row unless the row is either:

1. `schema_confirmed` and its `workflow_generation_policy` starts with `safe_to_generate`, or
2. `schema_confirmed` and explicitly marked `guarded_generate_after_local_test` for a workflow that is labeled experimental/local-test.

## Pass 02D pack policy

| Policy | Count |
|---|---:|
| rag_only_do_not_generate_until_schema_confirmed | 199 |
| guarded_generate_after_local_test | 104 |
| do_not_generate | 43 |
| rag_only_needs_module_sweep | 30 |
| guarded_generate_after_schema_check | 14 |
| rag_only_or_expert_local_test | 13 |
| rag_only_training_workflow | 13 |
| safe_to_generate_when_dependency_installed | 12 |
| safe_to_generate_if_inpaint_pack_installed | 9 |
| safe_to_generate_if_ipadapter_installed | 6 |
| safe_to_generate_if_advanced_controlnet_installed | 5 |
| do_not_generate_legacy_unless_repairing | 2 |
| safe_to_generate_if_hunyuan_installed | 2 |
| safe_to_generate_if_controlnet_aux_installed | 1 |
| do_not_generate_utility_typo_unless_needed | 1 |

## Pack-level notes

- **HunyuanVideoWrapper**: expert video pack. Loader/sampler/encode/decode schemas are useful, but model size, quantization, compile, TeaCache, and block swap require local testing.
- **AnimateDiff Evolved**: mapping coverage only this pass. Do not generate new workflows from mapping-only rows.
- **SUPIR**: core v2 nodes are usable for experimental upscale workflows after local model validation.
- **UltimateSDUpscale**: schema-confirmed but wraps A1111 Ultimate SD Upscale internals and shared state; local test required.
- **Nunchaku**: CUDA architecture/package-version sensitive. Do not make it a beginner default.
- **x-flux-comfyui**: core Flux control/IPAdapter/sampler nodes are schema-confirmed but should be guarded due to custom Flux pipeline assumptions.
- **Fluxtapoz**: mapping-only Flux inversion/edit/regional pack. Use as RAG reference until node files are swept.
- **FluxTrainer**: training workflow coverage only. Do not use in inference workflow JSON.

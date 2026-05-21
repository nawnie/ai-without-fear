# AIWF Research Projects — Vol. 1 Balanced Index
This corrected layer promotes each research lane to a balanced **Vol. 1 research kit**.

Vol. 1 here means a lane is not just a pile of source files; it has enough structure for RAG ingestion, retrieval testing, and next-pass development.

## Vol. 1 minimum kit
- scope and non-scope
- canonical overview
- concept map
- embedding/chunking policy
- retrieval cards
- QA prompts
- gap audit / Vol. 2 queue
- source coverage notes

## Lanes
| Lane | Title | Before | Source folders |
|---|---|---|---|
| RP01 | [Source Ledger and Evidence Governance](01_source_ledger_evidence/README_VOL1.md) | concept/early structure | `AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger`, `AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory`, `AIWF_RAG_Concept_Additions_v0_1` |
| RP02 | [RAG Architecture, Chunking, and Embedding Strategy](02_rag_architecture_chunking_embedding/README_VOL1.md) | concept scattered across RAG notes and loader notes | `AIWF-Project-Chat-Distribution-Roadmap-v0.3-rag-source-ledger`, `AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory`, `AIWF_RAG_Concept_Additions_v0_1` |
| RP03 | [ComfyUI Core API, Workflow JSON, and Subgraph Research](03_comfyui_core_api_subgraph/README_VOL1.md) | v0.5 focused pass | `AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph`, `AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory` |
| RP04 | [ComfyUI Custom Node Ecosystem and Nodepack Evaluation](04_comfyui_custom_node_ecosystem/README_VOL1.md) | large but uneven pass with high coverage in some packs and RAG-only notes in others | `aiwf_node_research_pass02N_flux_model_control_sampler_mds_v1_4`, `AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory` |
| RP05 | [Python/Pip Runtime Dependencies and Local AI Environment Support](05_pip_runtime_dependency_knowledge/README_VOL1.md) | already broad v1.9 package map; needs balanced Vol. 1 bridge into the full data pack | `AIWF_Pip_Package_RAG_Starter_v1_9`, `AIWF_Pip_Package_RAG_Starter_v1_5` |
| RP06 | [Training, Data-Centric ML, and Volume II Research Spine](06_training_data_centric_ml_vol2/README_VOL1.md) | rich v0.17 Vol. 2 archive; not converted into balanced Vol. 1 lane for the combined data pack | `AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML` |
| RP07 | [CFG, Denoise, Img2Img, and Inpainting Theory](07_cfg_denoise_inpaint_theory/README_VOL1.md) | focused v0.6 pass inside roadmap archive | `AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory`, `aiwf_node_research_pass02N_flux_model_control_sampler_mds_v1_4` |
| RP08 | [Compatibility Matrix RAG](08_compatibility_matrix_rag/README_VOL1.md) | concept note only; now promoted to Vol. 1 lane | `AIWF_RAG_Concept_Additions_v0_1`, `AIWF_Pip_Package_RAG_Starter_v1_9`, `aiwf_node_research_pass02N_flux_model_control_sampler_mds_v1_4` |
| RP09 | [Failure Signature Atlas RAG](09_failure_signature_atlas_rag/README_VOL1.md) | concept note plus scattered package/runtime failure maps | `AIWF_RAG_Concept_Additions_v0_1`, `AIWF_Pip_Package_RAG_Starter_v1_9`, `AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory` |
| RP10 | [Workflow Pattern Library RAG](10_workflow_pattern_library_rag/README_VOL1.md) | concept note plus ComfyUI workflow policy/source passes | `AIWF_RAG_Concept_Additions_v0_1`, `AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph`, `aiwf_node_research_pass02N_flux_model_control_sampler_mds_v1_4`, `AIWF-Project-Chat-Distribution-Roadmap-v0.6-cfg-denoise-inpaint-theory` |

## Added lane


| RP11 | Gradio UI Research | `11_gradio_ui_research/` | Browser-based Python UI layer for local AI tools, workflow wrappers, RAG/chat shells, image/video apps, and beginner-friendly settings/log panels. |

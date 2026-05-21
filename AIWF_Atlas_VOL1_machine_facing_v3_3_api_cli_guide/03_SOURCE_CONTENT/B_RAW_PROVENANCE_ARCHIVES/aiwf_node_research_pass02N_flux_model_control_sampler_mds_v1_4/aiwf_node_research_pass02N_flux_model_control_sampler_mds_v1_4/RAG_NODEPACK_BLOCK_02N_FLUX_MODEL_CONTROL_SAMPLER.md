# RAG Nodepack Block 02N — Flux / Modern Model / Control / Sampler Systems

## Scope

Pass 02N covers the unresolved B-tier block around Flux-family extensions, Kolors wrappers, modern editing packs, regional prompting, ControlNet-LLLite, advanced guidance/sampler tools, CFG helpers, Redux/Reflux controls, and Flux prompt helpers.

## Summary

This block is **not beginner-default material**. Most packs patch model behavior, sampler behavior, guidance behavior, regional conditioning, or model-family-specific loaders. They are valuable for the AIWF RAG because they explain red nodes and advanced workflows, but most require a dense source pass before workflow JSON generation.

## Practical decisions

- **FluxExt-MZ / Kolors-MZ / KwaiKolorsWrapper / ExtraModels**: compatibility and model-family support; useful for red-node repair and advanced model-specific workflows, not foundation defaults.
- **ControlNet-LLLite**: important lightweight control path; fetch exact schemas before generating workflows.
- **Omost**: regional prompt/composition system; useful conceptually for AIWF but advanced.
- **RES4LYF / ppm / perturbed-attention / AutomaticCFG**: powerful sampler/guidance families; mark as `dense_before_workflow_json` because bad settings can produce quality regressions or misleading teaching examples.
- **ACE Plus / ICEdit**: modern editing candidates; resolved enough to keep on the roadmap but need dense review before actual inpaint/edit workflows.
- **ConDelta / AdvancedReflux / Flux Prompt Generator**: useful support tools; do not use as canonical teaching defaults.

## Retry/stale notes

Several listed entries still need retry or exact repo correction: ComfyUI-Lightning, ComfyUI_DiT, Scepter, easycontrol, Dynamic Thresholding, Skimmed_CFG, Euler-Smea-Dyn-Sampler, Flux Style Adjust, and Flux Continuum.

## Workflow policy

Default policy for this block: `rag_first_fetch_before_workflow_json` or `rag_first_dense_before_workflow_json`.

Only generate workflows from these packs after:
1. exact `NODE_CLASS_MAPPINGS` or Comfy V3 schema is fetched,
2. required model folders and filenames are known,
3. local install/dependency risk is known,
4. sampler/guidance quality-risk settings are documented.

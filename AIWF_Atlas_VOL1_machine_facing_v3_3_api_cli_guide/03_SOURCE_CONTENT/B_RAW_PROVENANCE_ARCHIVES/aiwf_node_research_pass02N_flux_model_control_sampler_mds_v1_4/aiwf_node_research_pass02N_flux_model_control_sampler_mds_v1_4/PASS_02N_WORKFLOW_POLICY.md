# Pass 02N Workflow Policy

## Rule

The Pass 02N Flux/model/control/sampler block is **RAG-first**.

Do not auto-generate workflow JSON from these packs unless a later dense pass confirms exact node schemas and safe defaults.

## Strong no-default groups

- Advanced samplers/guidance: RES4LYF, ppm, sd-perturbed-attention, AutomaticCFG, Skimmed_CFG, Euler-Smea-Dyn-Sampler
- Model patch/load extensions: FluxExt-MZ, ExtraModels, ControlNet-LLLite
- Regional/Redux/conditioning systems: Omost, ConDelta, AdvancedReflux, Flux Style Adjust
- Modern editing systems: ACE Plus, ICEdit, easycontrol

## Safer use in AIWF

Use these packs as:
- compatibility/red-node explanation sources,
- advanced chapter references,
- future dense review targets,
- comparison tools once the user already knows stock-core Flux/Wan/SDXL foundations.

## Count snapshot

- Previous Pass 02 rows: 692
- New rows this pass: 24
- New Pass 02 rows total: 716
- Original list rows covered: 150
- Remaining original rows: 124
- Retry/stale rows: 17

# Quality Review — v0.8

## Review type

Archive polish and structural audit. This was not a full factual revalidation pass against every upstream repository.

## Strong points

- The project now has a clear domain map: LLM/bot, RAG, image, video, voice/audio, multimodal, evaluation, law, and release packaging.
- The `01_research_cards` folder is the main knowledge base and already covers the core training landscape.
- The `02_tables` folder gives useful machine-ingestable summaries for trainers, methods, hardware, law, failure signatures, and deployment.
- The `05_specs` folder is becoming the AIWF product spine: Dataset Doctor, Training Preset Builder, RAG Retriever Trainer, Training Judge, and Run Pack.
- The research direction is correctly biased toward wrapping and evaluating existing trainers instead of rebuilding them.

## Polish fixes applied

- Cleaned README focus and ingestion order.
- Reordered changelog into v0.8 through v0.1.
- Moved old manifests into an archive folder.
- Added current manifest.
- Added coverage dashboard and RAG ingestion guide.
- Added editorial scaffolding to prepare the material for a book/manual.
- Added next-pass queue that continues with image LoRA depth.

## Known limitations

- Many tool claims are source-backed in source logs, but not every card has inline source citations.
- Hardware estimates are guidance, not guarantees. They need local smoke tests.
- Legal material is a research baseline, not legal advice.
- Video and voice training sections are still underdeveloped relative to LLM/image training.
- No one-click trainer has been built yet. The correct order remains: research → dataset doctor → preset builder → run packs → launcher.

## Priority fixes for future passes

1. Deepen image LoRA family training and evaluation.
2. Deepen video LoRA training with consumer GPU survival settings.
3. Deepen voice/audio consent and technical workflows.
4. Add install/run-pack examples per trainer.
5. Add model card/dataset card examples for release.
6. Add exact Windows/PowerShell commands where applicable.

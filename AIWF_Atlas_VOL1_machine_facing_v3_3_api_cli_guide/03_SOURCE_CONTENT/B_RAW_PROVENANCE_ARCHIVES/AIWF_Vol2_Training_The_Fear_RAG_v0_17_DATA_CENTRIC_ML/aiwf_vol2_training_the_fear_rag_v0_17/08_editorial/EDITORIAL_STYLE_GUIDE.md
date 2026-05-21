# Editorial Style Guide — Vol. 2 Training the Fear

## Voice

Use the AI Without Fear field-manual voice: practical, honest, technical enough to be useful, and blunt about limits.

Avoid hype. Avoid fake certainty. Avoid implying that training is magic.

## Core teaching stance

Training is not asking harder. Training changes weights or adapters. It can improve behavior inside a narrow target, but it can also destroy general ability, memorize private data, or produce a model that only looks better on weak tests.

## Terms to prefer

- Use `adapter` when the trained artifact is a LoRA/QLoRA/DoRA-style add-on.
- Use `fine-tune` when model weights or adapters are actually trained.
- Use `RAG` when the system retrieves external knowledge without changing model weights.
- Use `post-training` for SFT/preference/reward/alignment stages after base model pretraining.
- Use `release gate` for final checks before sharing a model or adapter.

## Terms to avoid or qualify

- Avoid `train a chatbot` without specifying SFT, LoRA, QLoRA, RAG, preference tuning, or tool-use data.
- Avoid `safe` as an absolute claim.
- Avoid `legal` as an absolute claim.
- Avoid `works on 16GB` without naming model, precision, rank, sequence length, batch size, and trainer.

## Required pattern for technical claims

When possible, state:

1. What is being trained.
2. Which tool/trainer does it.
3. What hardware tier is plausible.
4. What dataset format is needed.
5. What failure mode to watch.
6. What evaluation proves it worked.

## Required pattern for legal/rights claims

State the risk category and the recommended caution. Do not convert research notes into legal advice.

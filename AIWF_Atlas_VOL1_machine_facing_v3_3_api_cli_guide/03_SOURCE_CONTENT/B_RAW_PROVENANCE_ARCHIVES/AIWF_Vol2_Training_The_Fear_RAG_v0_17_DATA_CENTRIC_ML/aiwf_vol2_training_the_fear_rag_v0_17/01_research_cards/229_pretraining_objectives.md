# 229 — Pretraining Objectives: What the Model Is Actually Practicing

## Why this matters for Vol. 2
Architecture does not define skill by itself. The objective tells the model what game it is practicing: next token, masked reconstruction, denoising, contrastive alignment, classification, preference ranking.

## Core facts
- Next-token prediction teaches sequence continuation.
- Masked modeling teaches reconstruction from context.
- Contrastive learning teaches alignment/separation in embedding space.
- Denoising teaches recovery from corruption.
- Preference objectives teach chosen vs rejected behavior, not truth by default.

## AIWF rules of thumb
- Always ask: what target was used, what negative examples existed, and what success meant during training?
- Do not infer model capability from architecture alone.
- Fine-tuning should not fight the pretraining objective unless there is enough data/evaluation to justify it.

## Exercise / lab hook
For LLM SFT, CLIP, SimCLR, MAE, and DDPM, write the input, corruption/augmentation, target, and loss.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

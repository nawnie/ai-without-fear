# 227 — State Space Models and Mamba-Style Long Sequence Alternatives

## Why this matters for Vol. 2
Transformers are dominant, but long context, audio, genomics, and streaming models keep reviving state-based architectures. Vol. 2 should teach this as a tradeoff frontier.

## Core facts
- State space models summarize sequence history through evolving state.
- Mamba uses selective state spaces where parameters depend on input, improving content-dependent reasoning while scaling linearly with sequence length.
- These models compete on long-sequence efficiency but are not a universal transformer replacement.

## AIWF rules of thumb
- Teach SSMs as “memory through state, not all-pairs attention.”
- Long-context architecture choice is about access pattern, latency, hardware, and task type.
- Keep SSMs in the watchlist for bots, audio, video, and local-agent memory systems.

## Exercise / lab hook
Compare attention cost vs state update cost conceptually for a 1k, 10k, and 100k token sequence.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/
- Mamba — https://arxiv.org/abs/2312.00752

## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

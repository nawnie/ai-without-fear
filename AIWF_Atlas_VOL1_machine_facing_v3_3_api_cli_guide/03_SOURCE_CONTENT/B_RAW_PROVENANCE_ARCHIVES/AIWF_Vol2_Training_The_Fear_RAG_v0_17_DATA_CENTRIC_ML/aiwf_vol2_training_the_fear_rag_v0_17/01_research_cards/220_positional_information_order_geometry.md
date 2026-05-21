# 220 — Positional Information: From Order to Geometry

## Why this matters for Vol. 2
Self-attention alone has no built-in sequence order. Positional encoding explains why token position, image patch geometry, video time, and context packing all matter.

## Core facts
- Transformers need positional information because attention over a set is otherwise permutation-insensitive.
- Absolute, learned, relative, rotary, and bias-based schemes encode order differently.
- Position handling affects extrapolation, long context, prompt packing, image patches, and video frames.

## AIWF rules of thumb
- Teach position as “the model needs a map, not just tokens.”
- In RAG, bad chunk order can sabotage context even when retrieval succeeds.
- In video/image transformers, patch/frame positions carry geometry and motion assumptions.

## Exercise / lab hook
Take the same prompt chunks in shuffled order and reason how a transformer/RAG answer could change.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

# LLM Fundamentals — Expanded Research Notes

## Purpose
Ground the adapter in how modern language models work: tokenization, transformer attention, context windows, decoding, alignment, quantization, and local model family selection.

## Canonical summary
LLM fundamentals is the base layer for every assistant using the adapter. The assistant must know the difference between model knowledge, retrieved context, tool output, chat template formatting, and decoding behavior. A retrieval-augmented small model should be treated as a reasoning engine plus external memory, not as a memorized encyclopedia. Transformer attention is stable foundational knowledge; model-family rankings and context-window limits are volatile and must be tagged as fast-moving.

## In scope
- tokenization and chat templates
- transformer architecture and attention
- context windows and memory limits
- sampling controls and logits
- instruction tuning and preference alignment
- quantization and local model tradeoffs
- small-model behavior under retrieval

## Core concepts
- tokens
- embeddings
- attention
- transformer block
- context window
- KV cache
- logits
- temperature
- top-p
- top-k
- system prompt
- chat template
- instruction tuning
- preference tuning
- quantization
- GGUF
- small-model routing

## AIWF interpretation
This topic is part of the adapter's machine-memory layer. It should help an AI assistant retrieve, reason, and answer with better domain maturity than a raw small model. Use this note as source content, but prefer the canonical lane files for direct answer routing.

## Source anchors
- Attention Is All You Need: https://arxiv.org/abs/1706.03762
- Hugging Face platform and model ecosystem: https://huggingface.co/
- scikit-learn ML foundations: https://scikit-learn.org/
- Stanford CS229 course description: https://cs229.stanford.edu/

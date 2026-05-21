# 115 — Transformers and Sequence Modeling

## Core claim

Transformers are sequence-processing systems built around attention, residual pathways, normalization, and large-scale pretraining objectives.

## Core parts

- tokenization
- token embeddings
- positional information
- query/key/value projections
- attention scores
- feed-forward layers
- residual connections
- layer normalization or RMSNorm
- output logits

## Attention intuition

Attention lets each token gather information from other tokens. Query asks, key advertises, value supplies.

## Training objectives

- causal next-token prediction
- masked language modeling
- sequence-to-sequence objectives
- instruction tuning
- preference optimization

## Inference concepts

- context window
- KV cache
- temperature/top-p/top-k
- repetition penalties
- decoding latency

## AIWF rule

A transformer does not “remember” a training item like a database by default; it encodes statistical patterns in weights. But it can memorize, leak, or reproduce data under certain conditions, so privacy and eval tests matter.

## Reader exercise

Tokenize prompts with multiple tokenizers. Show how whitespace, punctuation, names, and rare terms change token counts.

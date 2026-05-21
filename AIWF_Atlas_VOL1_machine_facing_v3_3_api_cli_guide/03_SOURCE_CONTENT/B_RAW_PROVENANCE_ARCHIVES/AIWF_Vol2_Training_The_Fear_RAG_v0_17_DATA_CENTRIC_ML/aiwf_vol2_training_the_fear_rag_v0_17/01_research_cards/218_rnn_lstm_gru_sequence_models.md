# 218 — Sequence Models Before Transformers: RNN, LSTM, GRU

## Why this matters for Vol. 2
Readers should know what transformers replaced, because recurrence, state, memory, and long-context failure modes still matter in SSMs, agents, audio, and streaming systems.

## Core facts
- RNNs process sequence step by step using hidden state.
- LSTMs/GRUs add gates to reduce vanishing-gradient problems and control memory.
- Sequential processing limits parallel training compared with transformers.
- State-based models remain useful when streaming, latency, or very long sequences matter.

## AIWF rules of thumb
- Use recurrence to teach “state carries history.”
- Do not frame RNNs as obsolete; frame them as a different tradeoff.
- Ask whether the task needs random access to all tokens or compact state over time.

## Exercise / lab hook
Build a simple next-character RNN and compare its training behavior to a tiny transformer on the same toy corpus.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

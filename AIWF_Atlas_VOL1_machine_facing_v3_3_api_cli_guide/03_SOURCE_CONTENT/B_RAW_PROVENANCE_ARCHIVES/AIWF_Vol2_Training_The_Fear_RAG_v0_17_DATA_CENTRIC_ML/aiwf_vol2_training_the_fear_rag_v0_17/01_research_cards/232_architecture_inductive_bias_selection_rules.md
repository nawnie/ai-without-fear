# 232 — Architecture Inductive Bias Selection Rules

## Why this matters for Vol. 2
A postgrad-level reader should be able to justify architecture choice from data shape and constraints, not from hype.

## Core facts
- Inductive bias is a model’s built-in assumption about useful structure.
- CNNs bias toward locality; transformers toward flexible token relations; recurrence/SSMs toward state evolution; trees toward feature splits.
- Bias is not bad. It is what lets models learn from finite data.

## AIWF rules of thumb
- If data is scarce, stronger bias can help.
- If scale is huge, flexible architectures can win.
- Match the model’s bias to the task’s invariances: time, space, identity, order, locality, hierarchy.

## Exercise / lab hook
For each dataset type—tabular, small image set, large captioned image set, long logs, audio, video—choose the likely first baseline and likely high-capacity architecture.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

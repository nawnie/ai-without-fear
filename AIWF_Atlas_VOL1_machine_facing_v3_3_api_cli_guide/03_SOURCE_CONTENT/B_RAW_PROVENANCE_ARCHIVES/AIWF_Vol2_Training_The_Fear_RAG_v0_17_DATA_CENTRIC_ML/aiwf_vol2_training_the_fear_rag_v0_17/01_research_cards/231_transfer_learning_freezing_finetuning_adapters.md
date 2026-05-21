# 231 — Transfer Learning, Freezing, Fine-Tuning, and Adapters

## Why this matters for Vol. 2
This is the practical hinge between ML theory and consumer hardware. Most readers will not pretrain foundation models; they will adapt existing models.

## Core facts
- Transfer learning reuses representations from a source task/model.
- Freezing preserves base weights and trains a head/projector/adapter.
- Full fine-tuning updates all or most weights.
- LoRA/adapters learn small update modules, often making consumer training possible.

## AIWF rules of thumb
- Choose the smallest intervention that moves the target metric.
- Freeze when data is small or risk of forgetting is high.
- Adapter train when style/domain/behavior changes are narrow.
- Full fine-tune only when the task and data justify the risk/cost.

## Exercise / lab hook
Given five scenarios, decide: prompt/RAG, train head, LoRA, projector tune, full fine-tune, or do not train.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

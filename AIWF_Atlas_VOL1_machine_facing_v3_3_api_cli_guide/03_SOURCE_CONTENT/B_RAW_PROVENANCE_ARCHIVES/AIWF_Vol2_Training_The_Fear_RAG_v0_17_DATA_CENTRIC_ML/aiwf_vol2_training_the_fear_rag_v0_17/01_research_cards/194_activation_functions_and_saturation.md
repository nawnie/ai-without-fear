# 194 — Activation Functions and Saturation

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Connects architecture choices to gradient flow.

## Core idea
Activations decide how signals move through the network. Saturating activations can kill gradients when values move into flat regions; ReLU-family and modern gated activations changed deep-network trainability.

## What the reader must learn
Know sigmoid/tanh saturation, ReLU dead units, GELU/SwiGLU, and why transformer MLP blocks use modern activations.

## Practical rules
For most fine-tuning, you do not pick activations; you inherit them. But you must understand them to debug architecture papers and custom models.

## Failure signatures
Dead neurons, slow learning, sensitivity to initialization and normalization.

## AIWF application
AIWF should position activation functions as signal gates. This gives readers a bridge from old ML to transformer internals.

## Exercise hook
Compare sigmoid, tanh, ReLU, and GELU in a toy network and inspect gradient norms.

## Source anchors
- Xavier initialization / deep feedforward difficulty: https://proceedings.mlr.press/v9/glorot10a.html

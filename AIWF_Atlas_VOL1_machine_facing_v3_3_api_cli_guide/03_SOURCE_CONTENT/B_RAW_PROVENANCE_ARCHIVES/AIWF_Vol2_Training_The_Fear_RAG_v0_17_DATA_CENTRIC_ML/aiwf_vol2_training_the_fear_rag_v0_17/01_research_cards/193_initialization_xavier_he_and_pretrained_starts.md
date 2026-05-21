# 193 — Initialization: Xavier, He, and Pretrained Starts

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Explains why modern fine-tuning begins from useful weights.

## Core idea
Initialization controls early signal propagation. Xavier/Glorot initialization was designed to keep activation and gradient variance in a useful range for deep feedforward networks; He initialization adjusted this for ReLU-like activations. Fine-tuning usually starts from pretrained weights, but adapters still introduce new initialized parameters.

## What the reader must learn
Know random seed, variance preservation, fan-in/fan-out, saturation, and why LoRA matrices often start near zero impact.

## Practical rules
Do not compare training runs without controlling seed when datasets are small. For adapters, initialization affects how quickly the adapter begins influencing the base model.

## Failure signatures
Vanishing/exploding activations, seed lottery behavior, one run learns while another fails with same config.

## AIWF application
Vol. 2 should teach initialization historically, then map it to adapter initialization and why base models are not blank slates.

## Exercise hook
Train tiny MLPs with bad random init vs Xavier/He and plot gradient norms by layer.

## Source anchors
- Xavier initialization / deep feedforward difficulty: https://proceedings.mlr.press/v9/glorot10a.html

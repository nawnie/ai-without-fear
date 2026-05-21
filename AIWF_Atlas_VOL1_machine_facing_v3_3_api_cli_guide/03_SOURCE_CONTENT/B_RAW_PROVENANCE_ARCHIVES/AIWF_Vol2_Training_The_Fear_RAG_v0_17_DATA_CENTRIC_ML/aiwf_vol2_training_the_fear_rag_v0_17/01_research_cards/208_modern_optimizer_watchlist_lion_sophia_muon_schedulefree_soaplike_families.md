# 208 — Modern Optimizer Watchlist: Lion, Sophia, Muon, Schedule-Free, SOAP-like Families

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Tracks emerging optimizer research without overpromising.

## Core idea
March 2026 optimizer culture includes many alternatives to AdamW. Some promise memory savings, better scaling, or faster convergence. Most users should still benchmark against AdamW before adopting a new optimizer.

## What the reader must learn
Know why optimizer papers can be task/scale dependent and why a better benchmark result may not translate to a consumer LoRA workflow.

## Practical rules
Treat non-default optimizers as experiments. Record exact implementation, trainer support, hardware behavior, and eval outcome. Do not ship them as default until they beat AdamW on repeatable local tests.

## Failure signatures
Optimizer works on one task and fails on another; hidden dependency on batch/precision; no clear support in target trainer.

## AIWF application
AIWF should maintain a watchlist card and a test harness, not hard-code hype into beginner recipes.

## Exercise hook
Pick one alternative optimizer and benchmark it against AdamW on a tiny controlled task with identical budget.

## Source anchors
- Adam paper: https://arxiv.org/abs/1412.6980
- AdamW / Decoupled Weight Decay: https://arxiv.org/abs/1711.05101

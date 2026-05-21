# 184 — Momentum and Nesterov Momentum

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Shows why optimizers remember direction.

## Core idea
Momentum adds velocity to gradient descent. Instead of reacting only to the latest batch, the optimizer accumulates a smoothed direction over time, helping it move across shallow valleys and dampen zig-zag motion.

## What the reader must learn
Understand velocity, damping, overshoot, and why momentum can accelerate good runs while worsening bad learning rates.

## Practical rules
Momentum is helpful when gradients are noisy but consistent. If loss oscillates wildly, lower LR before blaming momentum. Nesterov-style lookahead can improve stability in some classical setups.

## Failure signatures
Runaway oscillation, delayed correction after LR mistakes, and overshoot near minima.

## AIWF application
Vol. 2 should introduce momentum before Adam, because Adam is easier to use but harder to understand unless the reader already grasps velocity.

## Exercise hook
Visualize a 2D quadratic valley with and without momentum and explain why one path zig-zags less.

## Source anchors
- Adam paper: https://arxiv.org/abs/1412.6980

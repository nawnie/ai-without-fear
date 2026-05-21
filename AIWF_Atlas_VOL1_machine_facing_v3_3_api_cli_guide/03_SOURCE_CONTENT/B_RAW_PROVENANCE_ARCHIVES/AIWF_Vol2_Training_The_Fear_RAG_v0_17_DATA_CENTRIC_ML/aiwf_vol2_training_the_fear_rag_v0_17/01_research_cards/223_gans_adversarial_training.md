# 223 — GANs and Adversarial Training

## Why this matters for Vol. 2
GANs are not the dominant beginner path now, but adversarial learning explains realism pressure, instability, discriminators, and why some training objectives fight themselves.

## Core facts
- GANs train a generator against a discriminator.
- They can produce sharp outputs but are sensitive to instability and mode collapse.
- Adversarial losses remain useful in super-resolution, restoration, distillation, and realism scoring.

## AIWF rules of thumb
- Teach GANs as a two-player game, not a normal single loss curve.
- Failure mode: one player overpowers the other.
- Use GANs to explain why “better looking” can diverge from “more faithful.”

## Exercise / lab hook
Use a conceptual game: generator creates fake coins, discriminator spots them; track what happens if either side becomes too strong.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

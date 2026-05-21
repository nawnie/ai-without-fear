# 013 — Evaluation and Failure Signatures

## Why this matters

Training without evaluation is just expensive wishful thinking.

Vol. 2 should teach users to judge adapters with the same seriousness they use to create them.

## Universal eval loop

1. Save a fixed validation set before training.
2. Use fixed prompts or fixed chat tasks.
3. Use fixed seeds/sample settings when possible.
4. Compare multiple checkpoints.
5. Test outside the training environment.
6. Write down what improved, what got worse, and what changed unexpectedly.

## Bot eval

Check:

- instruction following,
- formatting,
- refusal/safety behavior,
- tool-call format,
- hallucination rate,
- style overfit,
- ability to answer outside the exact training examples.

## Image eval

Check:

- identity/style strength,
- prompt flexibility,
- overfit artifacts,
- trigger word behavior,
- clothing/body leakage,
- sample diversity,
- compatibility with ComfyUI loaders.

## Video eval

Check:

- motion learned vs appearance copied,
- temporal consistency,
- frame flicker,
- identity drift,
- prompt generalization,
- high-noise/low-noise model compatibility,
- whether LoRA works in the intended workflow.

## Voice eval

Check:

- similarity,
- intelligibility,
- noise/clipping,
- accent stability,
- emotion range,
- consent/license notes,
- source separation artifacts.

## AIWF tooling idea

Build `AIWF Training Judge`:

- reads training logs,
- finds checkpoints,
- generates fixed eval samples,
- stores comparison grids,
- writes a simple scorecard,
- and helps produce model cards.

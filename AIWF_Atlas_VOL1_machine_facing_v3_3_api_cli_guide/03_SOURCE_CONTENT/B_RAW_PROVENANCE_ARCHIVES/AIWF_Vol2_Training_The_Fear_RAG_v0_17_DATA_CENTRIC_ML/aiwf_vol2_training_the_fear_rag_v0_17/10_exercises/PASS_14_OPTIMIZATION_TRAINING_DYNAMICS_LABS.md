# Pass 14 Labs — Optimization and Training Dynamics

## Lab format
Every lab produces:

- hypothesis
- config table
- run logs
- curve or metric artifact
- fixed validation sample/prompt set when applicable
- diagnosis memo
- next action

## Lab 1 — Learning-rate sweep
Run the same small task at low, medium, and high LR. Identify underfit, stable learning, and instability.

## Lab 2 — Optimizer comparison
Compare SGD/momentum, Adam, and AdamW under the same budget. Explain which converges fastest and which generalizes best.

## Lab 3 — Batch and accumulation
Calculate effective batch for several configs. Run two configs with same effective batch but different microbatch/accumulation if possible.

## Lab 4 — Mixed precision
Compare FP32, FP16, and BF16 when hardware supports them. Record VRAM, speed, and any numerical instability.

## Lab 5 — Gradient checkpointing
Run a model with checkpointing off/on. Record VRAM and seconds per step. Explain why it is not a free speedup.

## Lab 6 — LoRA checkpoint selection
Train a small image or text LoRA with saved checkpoints. Evaluate early/mid/final checkpoints against fixed tests and select the best.

## Lab 7 — Failure signature triage
Given logs for OOM, NaNs, flat loss, overfit, and bad validation outputs, assign the training phase and first three actions.

## Capstone — Evidence-based release memo
Write a one-page release decision for a trained adapter including dataset summary, config, validation method, selected checkpoint, known limits, and rejection criteria.

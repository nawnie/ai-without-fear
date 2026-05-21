# Optimization Field Rules — Pass 14

## Rules worth teaching as law-like habits

1. **Learning rate is the first suspect.** If a run is unstable, too weak, or overcooked, inspect LR before changing five other settings.
2. **Loss is evidence, not judgment.** A better model needs validation behavior, fixed prompts/tests, and task metrics.
3. **The final checkpoint is not automatically the best checkpoint.** Select by evidence.
4. **Effective batch is not microbatch.** Always write both.
5. **Memory tricks have costs.** Gradient checkpointing saves VRAM by recomputing; offload saves VRAM by moving work; mixed precision changes numerical behavior.
6. **AdamW is a baseline, not a religion.** Alternative optimizers must beat it under controlled local tests.
7. **Validation must include negative tests.** A LoRA should know when not to activate.
8. **A training run without a run card is not a scientific result.** It is an anecdote.
9. **Bad data beats good settings.** Optimization can amplify dataset flaws faster than it fixes them.
10. **Consumer hardware training is constraint solving.** Fit, speed, stability, quality, and reproducibility must be balanced.

## AIWF translation
For the field manual, every optimizer/scheduler/memory setting should be explained through a three-line rubric:

- **Purpose:** what it is trying to solve
- **Tradeoff:** what it costs
- **Failure mode:** what happens when it is overused or misapplied

# Post-Training Rules — Pass 07

1. SFT teaches behavior; preference tuning teaches choice; RL-style tuning optimizes reward. Do not confuse them.
2. If the desired answer is known, use SFT before preference/RL methods.
3. If the desired comparison is known, DPO is usually the first preference method to try.
4. If the reward is verifiable, GRPO/RLVR-style approaches may be appropriate.
5. If the reward is vague, the model will learn the vagueness.
6. Never judge a training run by one cherry-picked sample.
7. Never export/quantize without re-evaluating the exported artifact.
8. Never merge models without license, tokenizer, architecture, and regression checks.
9. Distillation is powerful but creates synthetic-data provenance obligations.
10. Quantized artifacts are deployment outputs, not source-of-truth training artifacts.
11. A model that is more obedient is not automatically safer or better.
12. A model that refuses more is not automatically safer or better.
13. Every public release needs a model card, dataset/source notes, known limitations, and eval summary.
14. Training Judge should block release when evidence is missing, even if the demo looks good.

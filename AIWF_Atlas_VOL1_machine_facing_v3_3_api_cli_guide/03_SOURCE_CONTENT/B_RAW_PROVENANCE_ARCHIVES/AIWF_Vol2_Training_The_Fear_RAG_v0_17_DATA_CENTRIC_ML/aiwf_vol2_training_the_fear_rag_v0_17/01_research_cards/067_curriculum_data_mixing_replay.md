# Curriculum, Data Mixing, and Replay — The Hidden Training Controls

## Why this matters
Many small training runs fail because the data is fed in the wrong balance, not because the method is wrong. The model sees too much style and loses task ability, sees too much task and loses identity, or sees duplicated data and memorizes.

## Curriculum training
Curriculum means controlling the order or difficulty of examples. In consumer fine-tuning, this does not always mean formal curriculum learning; it often means staging.

### Common stages
1. Format/behavior SFT.
2. Domain-specific examples.
3. Edge cases and correction examples.
4. Preference/alignment pass if needed.
5. Final eval and regression test.

## Data mixing
Data mixing means deciding proportions. A domain chatbot might need:
- 60% core task examples,
- 20% refusal/safety/boundary examples,
- 10% style/voice examples,
- 10% general capability preservation examples.

These ratios are not universal. The lesson is that ratios should be intentional and logged.

## Replay / capability preservation
Replay examples preserve old behavior while adding new behavior. Without replay, a small adapter can over-specialize.

Examples:
- A code model trained on one API should still answer general coding questions.
- A support bot trained on one manual should still say "I do not know" when outside scope.
- An image character LoRA should still accept clothing/pose/background changes if identity is the target.

## DataComp lesson
Large-scale research increasingly shows that data curation is not a housekeeping chore; it is central to model performance. DataComp-LM frames the challenge as finding better training data while holding model/training recipe fixed.

## Scaling laws lesson
Scaling law papers are mostly about pretraining, but the field-guide translation is still useful: compute, model size, and data quality/quantity interact. On consumer hardware, this means you cannot brute-force your way out of bad data.

## Practical consumer rules
- Remove near-duplicates unless intentional repetition is part of the recipe.
- Hold out eval data before training.
- Keep a small regression set for old abilities.
- For image identity LoRA, vary pose, lighting, outfit, camera, expression, and background.
- For style LoRA, do not accidentally train a character/object as part of the style.
- For instruction tuning, avoid one-tone synthetic data unless the target is intentionally narrow.

## AIWF dataset manifest fields
- split: train/validation/test
- sample_type: task/style/safety/replay/edge_case/preference
- source_status: owned/licensed/public/unknown/excluded
- difficulty: easy/normal/hard/adversarial
- weight: default/custom
- duplicate_group_id
- eval_holdout: true/false

## Sources
- Scaling Laws for Neural Language Models: https://arxiv.org/abs/2001.08361
- Chinchilla / compute-optimal training: https://arxiv.org/abs/2203.15556
- DataComp-LM: https://arxiv.org/abs/2406.11794
- DCLM repo: https://github.com/mlfoundations/dclm

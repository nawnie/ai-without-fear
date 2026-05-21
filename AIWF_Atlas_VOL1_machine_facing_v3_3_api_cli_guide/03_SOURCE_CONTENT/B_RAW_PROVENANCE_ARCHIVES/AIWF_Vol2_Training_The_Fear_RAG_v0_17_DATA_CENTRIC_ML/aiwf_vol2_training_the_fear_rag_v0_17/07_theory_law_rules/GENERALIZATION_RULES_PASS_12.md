# Generalization Rules — Pass 12

**Snapshot:** March 2026

## Core rules

1. Training loss measures fit to the sample, not fitness for the world.
2. Validation is only meaningful when it stays independent of training and tuning decisions.
3. Test sets are not dashboards; they are final evidence.
4. Leakage turns evaluation into theater.
5. A tiny clean dataset can beat a large dirty dataset for adaptation tasks.
6. Bigger models can generalize surprisingly well, but they can also memorize quietly.
7. Regularization is a dial, not a virtue.
8. Calibration matters whenever a probability drives an action.
9. Metrics need sample size and uncertainty.
10. A model comparison without a fixed protocol is just anecdote.
11. OOD failure is expected, not surprising.
12. Label noise is gradient sabotage.
13. Spurious correlations are shortcuts, not intelligence.
14. A release decision needs evidence, not confidence.

## Diagnostic shorthand

| Symptom | First suspicion | Next check |
|---|---|---|
| Train poor, validation poor | underfit or optimizer failure | capacity, LR, data format |
| Train strong, validation poor | overfit, leakage, distribution mismatch | split, dedup, heldout quality |
| Validation good, real-world poor | eval not representative | OOD set, grouped split, edge cases |
| Metric improved slightly | noise or tuning to eval | confidence interval, paired test |
| Good random split, bad grouped split | leakage or spurious correlation | source/person/time grouping |
| Beautiful samples, bad eval | cherry picking | fixed evaluation pack |

# Pass 17 Exercise Pack — Make Data Visible

## Lab 1 — Dataset inventory
Take a messy folder and produce `dataset_inventory.csv` with path, size, hash, type, source, label/caption status, and exclusion flag.

## Lab 2 — Split by the leakable unit
Create three splits: random, group, and time/source. Train or simulate evaluation and compare how scores change.

## Lab 3 — Leakage trap
Build an intentionally leaky dataset using a metadata shortcut. Show how the model gets a high score for the wrong reason.

## Lab 4 — Caption audit
For image/video training, audit captions for missing trigger tokens, wrong subject details, background over-description, and duplicate phrasing.

## Lab 5 — Weak supervision
Write three labeling functions. Compare weak labels against a small hand-labeled gold set.

## Lab 6 — Active learning queue
Train a small baseline. Select uncertain or high-loss examples for human review. Retrain and compare to random review.

## Lab 7 — Dataset card
Write a dataset card with provenance, composition, intended use, exclusions, bias, and known failure cases.

## Lab 8 — Run pack freeze
Create a training run pack with dataset fingerprint, split manifests, config, command, seed, environment, and eval report.

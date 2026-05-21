# Dataset Construction Rules — Pass 05

## Rule 1 — Data format is model behavior
The model learns from token/media structure. Wrong roles, wrong chat template, wrong captions, or wrong pair ordering become behavior.

## Rule 2 — Small clean beats large dirty on consumer hardware
Adapter training on 12GB to 24GB GPUs is sensitive to repeated examples, malformed rows, and noisy captions. Quality matters more than raw count.

## Rule 3 — Same template in training and inference
For chat models, the chat template is part of the model contract. Training in one format and serving in another causes role and stop-token failures.

## Rule 4 — Never trust validation if duplicates exist
Exact and near-duplicate leakage can make a model look better than it is. Dedup before splitting, then check leakage after splitting.

## Rule 5 — Synthetic data must stay labeled
Synthetic instruction or preference data is useful, but it must be marked as synthetic with teacher/judge provenance and review status.

## Rule 6 — Preference data needs realistic rejected answers
DPO-style datasets need meaningful contrasts. Cartoonishly bad rejected answers teach less than realistic failure-mode negatives.

## Rule 7 — Captions are control surfaces
Image/video captions should describe what the model should learn and what should vary. They are not just alt text.

## Rule 8 — Video clips must be single-purpose
Avoid multi-scene clips unless the target concept is explicitly multi-scene editing. Motion LoRAs need motion clarity.

## Rule 9 — PII and consent are release blockers
Names, faces, voices, addresses, private logs, and personal artifacts must be handled before training, not after publication.

## Rule 10 — A checkpoint without a run card does not enter the library
Every usable trained artifact needs a run card, dataset manifest, config, environment report, source log, and eval evidence.

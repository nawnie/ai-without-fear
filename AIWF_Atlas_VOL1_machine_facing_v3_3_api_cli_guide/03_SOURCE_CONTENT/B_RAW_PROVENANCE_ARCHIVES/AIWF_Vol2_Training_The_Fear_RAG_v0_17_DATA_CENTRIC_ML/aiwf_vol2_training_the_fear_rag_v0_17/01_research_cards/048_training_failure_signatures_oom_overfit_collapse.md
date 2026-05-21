# Training Failure Signatures — OOM, Overfit, Collapse, and False Success

## Purpose

AIWF needs a failure-signature language so users can diagnose training runs without guessing.

## OOM before first step

Likely causes:

- base model too large;
- sequence length too high;
- image/video resolution too high;
- batch size too high;
- optimizer state not quantized/offloaded;
- dataloader/preprocessing spike.

Fix order:

1. reduce batch size to 1;
2. reduce sequence length/resolution/frame count;
3. enable gradient checkpointing;
4. use LoRA/QLoRA;
5. lower rank;
6. try offload;
7. choose a smaller base model.

## OOM after several steps

Likely causes:

- variable-length examples;
- eval spike;
- checkpoint spike;
- memory fragmentation;
- cached previews/logging;
- video/image batch with one unusually large item.

Fixes:

- cap lengths/resolutions;
- lower eval batch/max generation;
- less frequent checkpointing;
- bucket examples;
- clear cache between phases if framework allows.

## Train loss improves, outputs get worse

Likely causes:

- dataset is too narrow;
- chat template mismatch;
- catastrophic style contamination;
- learning rate too high;
- too many epochs;
- no validation gate.

Fixes:

- reduce LR;
- reduce epochs;
- add mixed examples;
- add validation set;
- inspect duplicates;
- compare against base model.

## Perfect training score, bad real output

Likely causes:

- train/validation leakage;
- prompt format mismatch;
- benchmark contaminated;
- eval too easy;
- model memorized answers.

Fixes:

- create held-out human examples;
- use adversarial eval prompts;
- hash and dedupe splits;
- test in target inference UI.

## Image LoRA failure signatures

- Character likeness good but poses stiff: dataset lacks pose diversity.
- Style learned but subject lost: captions overemphasize style or subject examples weak.
- Subject overbakes into every prompt: trigger word too broad, too many repeats, high LR/epochs.
- Background contamination: captions fail to separate subject from scene.

## Video LoRA failure signatures

- Temporal noise: too much motion/resolution/frame pressure, weak motion captions, or unstable model/trainer settings.
- Identity drift: insufficient consistent subject frames or no identity-preserving strategy.
- Frozen motion: dataset lacks motion variety or model learned static frames.
- Style flicker: frame captions inconsistent or clips too diverse without control tokens.

## Voice/ASR failure signatures

- TTS voice clone sounds close but unstable: dataset too small/noisy or transcript alignment weak.
- ASR improves on train speaker only: speaker overfit.
- ASR hallucination during silence: no silence/noise negatives.
- Pronunciation/jargon failure: text normalization mismatch or too few domain terms.

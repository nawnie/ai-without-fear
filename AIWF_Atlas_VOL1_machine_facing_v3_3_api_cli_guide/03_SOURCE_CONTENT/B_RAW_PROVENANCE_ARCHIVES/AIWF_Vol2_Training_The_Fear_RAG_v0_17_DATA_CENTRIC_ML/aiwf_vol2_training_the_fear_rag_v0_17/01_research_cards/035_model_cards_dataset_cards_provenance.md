# Model Cards, Dataset Cards, Data Statements, and Provenance

## Purpose

Vol. 2 should teach that releasing a model without documentation is like shipping an electrical panel with no labels. It may work, but nobody knows what is safe to touch.

## Model card

A model card documents:

- what the model is
- intended use
- out-of-scope use
- training data
- training procedure
- evaluation results
- limitations and bias
- license
- safety/ethical notes

Hugging Face’s model card guidance maps closely to the original Model Cards paper and is practical for AIWF users publishing to Hugging Face or GitHub.

## Dataset card / datasheet

A dataset card/datasheet documents:

- why the dataset exists
- who created it
- what it contains
- how it was collected
- consent/license terms
- preprocessing
- recommended use
- misuse risks
- demographic/domain gaps
- maintenance and update plan

## Data statement

Data statements were proposed for NLP to document language data, speaker/writer context, and social/demographic considerations that affect downstream system behavior.

AIWF should extend the idea across modalities:

- text: language, dialect, register, source population
- image: subject, setting, consent, camera/source, manipulation
- video: motion/camera/context/identity
- voice: speaker consent, language, accent, recording context

## Provenance ledger

AIWF should maintain a simple provenance ledger for every training dataset:

| Field | Meaning |
|---|---|
| asset_id | unique ID |
| modality | text/image/video/audio |
| source | where it came from |
| creator/rights holder | if known |
| license | SPDX/license/terms URL |
| consent_status | explicit, implied, public-domain, unknown, prohibited |
| allowed_use | train, eval, reference only, no AI training, etc. |
| processing | crop, transcript, denoise, caption, synthetic generation |
| synthetic_source | generator/model if synthetic |
| removal_request | yes/no/status |
| notes | known issues |

## Why documentation is training-relevant

Documentation is not just ethics paperwork. It prevents technical failure:

- tells future users what the model was optimized for
- prevents misuse outside training distribution
- records eval limitations
- preserves reproducibility
- helps debug regressions
- allows legal/consent review

## AIWF release minimum

Every released adapter/model should include:

1. Base model and version.
2. Trainer and version/commit.
3. Training method.
4. Dataset summary and rights status.
5. Hyperparameters.
6. Intended use.
7. Out-of-scope use.
8. Evaluation prompts/results.
9. Known failure modes.
10. License and redistribution constraints.
11. Consent statement for any human likeness/voice/private style.

## Red flags

- “Dataset: internet.”
- “License: unknown.”
- “Use however you want.”
- person/voice model with no consent statement.
- no base model license.
- no evals.
- no training settings.
- no trigger-word guidance for diffusion LoRAs.

## AIWF tool implication

The Dataset Doctor and Model Card Builder should generate documentation automatically from:

- dataset scan
- trainer config
- source ledger
- eval results
- user-entered intended use

## Sources

- Hugging Face model cards: https://huggingface.co/docs/hub/model-cards
- Hugging Face model card tutorial: https://huggingface.co/learn/llm-course/chapter4/4
- Model Cards for Model Reporting: https://arxiv.org/abs/1810.03993
- Data Statements for NLP: https://aclanthology.org/Q18-1041/
- Datasheets for Datasets: https://arxiv.org/abs/1803.09010

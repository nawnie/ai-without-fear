# Data Cleaning, Deduplication, PII Removal, and Dataset Triage

## Scope
This card covers the non-glamorous work that makes consumer training viable: cleaning raw data before training. This includes exact deduplication, near-duplicate detection, schema validation, PII redaction/anonymization, label/caption quality checks, outlier detection, and train/eval leakage prevention.

## Core AIWF principle
> Dataset cleanup is not preprocessing busywork. It is model behavior design.

A 400-row dataset with clean, intentional examples can outperform a 40,000-row mess for adapter training. Consumer hardware amplifies this: small runs have less room to average out bad examples.

## Failure modes from dirty data
- Duplicate examples cause memorization and wasted steps.
- Near-duplicates make validation loss look better than real generalization.
- Mixed task schemas confuse the model.
- PII teaches private details and creates release risk.
- Bad labels or captions teach the wrong concept.
- Toxic/unwanted examples create behavior regressions.
- Hidden eval leakage gives fake confidence.
- OCR garbage creates broken syntax and hallucinated patterns.

## Cleaning stages

### Stage 1 — Ingest inventory
Record:
- source path or URL,
- source license/permission,
- collection method,
- date-only collection note,
- modality,
- owner/consent status,
- intended training use.

### Stage 2 — Schema validation
Check required fields by target trainer:
- LLM SFT: `text`, or `prompt/completion`, or `messages`, or Alpaca fields.
- Preference: prompt + chosen/rejected, or conversational equivalent.
- Image LoRA: image file + sidecar caption, or metadata table.
- Video LoRA: video/clip path + caption + duration/frame metadata.
- Voice: audio path + transcript + speaker/consent metadata.

### Stage 3 — Exact duplicate pass
Use hashing for exact file/text duplicates:
- text normalized hash,
- image perceptual hash plus file hash,
- audio/video file hash plus duration and perceptual fingerprints where possible.

Exact duplicates should usually be removed unless intentionally used as weighting. If using duplicates as weighting, declare it.

### Stage 4 — Near-duplicate pass
Use MinHash/LSH or embeddings for text near-duplicates; perceptual hashes/CLIP embeddings for images; scene and embedding similarity for video clips.

Near duplicates matter because they:
- leak train data into validation,
- make eval look inflated,
- overemphasize common patterns,
- cause style collapse in small LoRA runs.

### Stage 5 — PII and sensitive data pass
Use tools like Microsoft Presidio for PII identification and anonymization in text/images. For local AI training datasets, PII should be treated as a release blocker unless the user explicitly owns the data and the model is private/local-only.

Recommended policy:
- redact private data by default,
- preserve expansion slots when the structure matters,
- separate private-local datasets from publishable datasets,
- record anonymization method in provenance.

### Stage 6 — Label/caption quality pass
For labeled data, use outlier/label-error detection tools such as cleanlab where applicable. For LoRA captions, check that captions are accurate, consistent, and not overloaded with irrelevant details.

### Stage 7 — Split discipline
Recommended default:
- train: most examples,
- validation: representative but not duplicated,
- test: locked, never tuned against.

For tiny LoRA image datasets, the “test set” may be a prompt deck instead of held-out images, but the validation prompts must still be stable.

## What to remove versus rewrite
Remove:
- corrupt rows,
- empty outputs,
- exact duplicates unless intentionally weighted,
- illegal/non-consented personal data,
- rows with broken encoding,
- captions unrelated to media.

Rewrite:
- inconsistent formatting,
- weak but useful captions,
- OCR errors where source is available,
- private names replaced with role expansion slots.

Keep with warning:
- edge cases if the model must handle them,
- rare but valid examples,
- intentionally hard examples for eval.

## Dataset quality metrics to compute
- row count by schema type,
- empty field count,
- token length distribution,
- duplicate rate,
- near-duplicate clusters,
- PII entity count,
- language distribution,
- license/permission coverage,
- caption length distribution,
- eval leakage score,
- malformed JSONL rows,
- role distribution in chat data.

## AIWF Dataset Doctor output levels
- PASS: ready for small run.
- WARN: trainable, but risks should be accepted.
- FAIL: schema/privacy/leakage/corruption issue must be fixed.
- PRIVATE ONLY: safe only for local/private experiments, not publication.

## Consumer-hardware guidance
Do not compensate for bad data with more epochs. More epochs on bad data makes the model learn the bad data harder.

## Sources
- Hugging Face Datasets processing docs: https://huggingface.co/docs/datasets/en/process
- Microsoft Presidio repository: https://github.com/microsoft/presidio
- Microsoft Presidio docs: https://microsoft.github.io/presidio/
- Microsoft Presidio text anonymization docs: https://microsoft.github.io/presidio/text_anonymization/
- cleanlab docs: https://docs.cleanlab.ai/
- cleanlab GitHub: https://github.com/cleanlab/cleanlab
- Milvus MinHash LSH deduplication article: https://milvus.io/blog/minhash-lsh-in-milvus-the-secret-weapon-for-fighting-duplicates-in-llm-training-data.md

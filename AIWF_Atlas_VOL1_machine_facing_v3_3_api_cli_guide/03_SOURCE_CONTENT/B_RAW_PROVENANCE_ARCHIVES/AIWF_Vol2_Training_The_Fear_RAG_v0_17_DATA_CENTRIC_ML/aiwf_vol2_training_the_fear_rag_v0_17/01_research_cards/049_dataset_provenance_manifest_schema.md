# Dataset Provenance Manifest Schema — AIWF Standard

## Purpose

Every AIWF training dataset should ship with a machine-readable manifest. This prevents “mystery meat training” and lets the RAG answer questions about rights, consent, composition, and reproducibility.

## Minimum JSON schema concept

```json
{
  "dataset_name": "example_project_lora_dataset",
  "dataset_version": "0.1",
  "created_day": "2026-05-19",
  "task_type": "image_lora | llm_sft | llm_preference | video_lora | asr | tts | embedding",
  "owner": "dataset creator or organization",
  "intended_use": "short plain-language purpose",
  "not_for": ["uses to avoid"],
  "sources": [
    {
      "source_id": "src_001",
      "source_type": "owned_photo | licensed_dataset | public_domain | consented_recording | synthetic | generated | scraped | unknown",
      "uri_or_path": "relative/path/or/source/url",
      "license": "SPDX or plain text",
      "consent_status": "owned | explicit_consent | license_allows | unknown | prohibited",
      "credit_required": true,
      "notes": "context"
    }
  ],
  "splits": {
    "train_count": 0,
    "validation_count": 0,
    "test_count": 0
  },
  "quality_checks": {
    "deduped": false,
    "hashes_recorded": false,
    "caption_reviewed": false,
    "pii_reviewed": false,
    "license_reviewed": false,
    "consent_reviewed": false
  },
  "known_risks": ["copyright uncertainty", "speaker consent", "face likeness", "PII"],
  "recommended_eval": ["held-out prompts", "visual grid", "WER", "human preference pairs"],
  "base_model_assumptions": ["models this dataset was prepared for"],
  "change_log": ["day-level notes, no timestamps"]
}
```

## AIWF rule

A dataset without a manifest is not production-ready. It can be a lab experiment, but the guide should label it as undocumented.

## Why it matters

- Reproducibility: same data, same config, same base model.
- Legal hygiene: license and consent are tracked before publication.
- Debugging: failures can be tied back to data composition.
- RAG readiness: the assistant can answer what a dataset is and what it should not be used for.

## Future tool

Dataset Doctor should generate this manifest automatically and flag missing fields.

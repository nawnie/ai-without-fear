# AIWF Dataset Doctor v0.3 — Dataset + Run Pack Builder

## Purpose
Dataset Doctor v0.3 expands from dataset validation into run readiness. It should inspect a dataset, classify its target training type, validate trainer compatibility, generate cleanup warnings, and emit a reproducible run pack skeleton.

## Inputs
- dataset folder or file,
- intended modality: text/image/video/audio/vlm/auto,
- intended trainer: optional,
- intended model family: optional,
- privacy mode: public/private/local-only,
- output folder.

## Detection modules

### Text/LLM
Detect:
- raw text,
- prompt/completion,
- Alpaca,
- ShareGPT/conversation,
- generic messages,
- DPO chosen/rejected,
- KTO/ORPO variants where identifiable,
- malformed JSONL.

### Image LoRA
Detect:
- image files,
- sidecar captions,
- metadata CSV/JSON,
- trigger token presence,
- resolution/aspect distribution,
- perceptual duplicates,
- missing/corrupt files.

### Video LoRA
Detect:
- video files,
- captions,
- fps,
- frame count,
- duration,
- resolution,
- scene-cut risk,
- reference/target pairs if required.

### Audio/voice
Detect:
- audio files,
- transcripts,
- speaker labels,
- sample rate,
- duration distribution,
- silence/noise estimate,
- consent status.

### VLM
Detect:
- image path + messages/instruction/answer,
- answerability risk,
- OCR/private data risk,
- image decode status.

## Validation outputs
- `dataset_doctor_report.md`
- `dataset_manifest.json`
- `dataset_quality_metrics.csv`
- `privacy_report.json`
- `dedup_report.csv`
- `caption_audit.csv` when applicable
- `trainer_export/` with converted formats where safe
- `run_pack_skeleton/`

## Severity levels
- PASS: ready for a small controlled training run.
- WARN: usable but with named risk.
- FAIL: do not train until fixed.
- PRIVATE ONLY: usable only for local/private work.
- NEEDS REVIEW: uncertain; human review required.

## Checks

### General
- file exists,
- supported extension,
- encoding valid,
- row count,
- empty field count,
- duplicate count,
- near-duplicate clusters,
- source/provenance missing,
- license/consent missing,
- train/eval leakage.

### LLM schema
- required fields,
- role names,
- empty assistant output,
- chat template requirement,
- target masking recommendation,
- token length outliers.

### Preference
- chosen/rejected present,
- chosen equals rejected,
- rejected too short/empty,
- swapped-pair suspicion,
- rubric missing.

### Image
- missing caption,
- trigger absent,
- caption too short,
- caption too long,
- perceptual duplicate,
- resolution outlier,
- non-RGB or alpha note.

### Video
- caption lacks motion verb,
- too many scene cuts,
- frame count outlier,
- fps mismatch,
- unsupported duration,
- paired data missing.

### Privacy
- PII found,
- face/voice consent missing,
- source license unknown,
- synthetic data unlabeled.

## Run pack builder
Create:
```text
run_pack_skeleton/
  README_RUN_CARD.md
  config/
    dataset_manifest.json
    trainer_config_current_field.yaml
    environment_report_current_field.json
  logs/
    train.log_current_field
    metrics.csv
  eval/
    eval_prompt_deck.md
    eval_results_current_field.json
  samples/
  MODEL_CARD_DRAFT.md
  source_log.md
```

## Future modules
- automatic caption rewrite assistant,
- Florence-2/BLIP/VLM caption-image mismatch check,
- Presidio privacy pass,
- MinHash dedup,
- perceptual image hash dedup,
- video shot detection,
- ComfyUI workflow export for captioning,
- trainer-specific export: LLaMA-Factory, Axolotl, TRL, SimpleTuner, musubi-tuner, LTX Trainer.

---

## Retained unique material from older internal version files

This section was added during internal version-file consolidation. The newest versioned file was kept and older version files were removed after their unique chunks were appended here.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/05_specs/AIWF_Dataset_Doctor_v0_2.md`

# AIWF Dataset Doctor v0.2 — Expanded Product Spec
Dataset Doctor is the first AIWF Vol. 2 tool that should probably be built. It does not replace trainers. It makes trainers less dangerous and less wasteful.
A local-first dataset scanner and prep assistant for text, image, video, and audio training datasets.
- dataset health report
- training-readiness score
- legal/consent checklist
- duplicate report
- caption/transcript warnings
- suggested train/validation split
- model card/dataset card draft
- trainer-specific warnings
### Text / chatbot mode
- json/jsonl/csv/parquet/txt/md
- ShareGPT/ChatML/Alpaca formats
- preference-pair datasets
- malformed records
- empty responses
- duplicate examples
- role formatting errors
- extreme length examples
- PII/secret indicators
- mixed languages
- source/provenance fields
- train/eval leakage
- token length histogram
- format conversion suggestions
- SFT vs preference suitability
- held-out eval set generator
### RAG/embedding mode
- query/passage pairs
- positives/negatives
- document chunks
- missing positives
- weak negatives
- duplicate queries
- source overlap
- chunk length distribution
- metadata gaps
- retrieval eval starter set
- hard-negative mining suggestions
- RAGAS/DeepEval test skeleton
- image folder
- caption txt sidecars
- metadata csv/json
- missing captions
- duplicate/near-duplicate images
- too many same-background images
- resolution/aspect distribution
- watermarks/logos
- blur/quality flags
- trigger consistency
- unsafe/identity/consent flags
- caption audit csv
- recommended buckets
- train/eval split
- prompt grid
- model card draft
- video clips
- frame folders
- captions/metadata
- clip length/fps/resolution
- hard cuts
- duplicate clips
- low-motion vs high-motion balance
- camera/subject motion labels
- compression artifacts
- audio present/private speech warning
- consent flags
- clip manifest
- motion label audit
- video eval prompt grid
### Voice/audio mode
- wav/flac/mp3
- transcript files
- speaker metadata
- transcript mismatch risk
- noise/silence levels
- clip length distribution
- speaker identity consistency
- consent status
- multilingual/accent notes
- speaker ledger
- transcript correction queue
- consent checklist
- model card warning block
## Scoring dimensions
- format health
- duplication risk
- label/caption quality
- dataset diversity
- consent/provenance completeness
- eval readiness
- trainer compatibility
- privacy/PII risk
- `dataset_doctor_report.md`
- `dataset_manifest.csv`
- `issues.csv`
- `recommended_split.csv`
- `model_card_draft.md`
- `dataset_card_draft.md`
- optional `trainer_config_suggestions.json`
## One-click install goal
Windows-first PowerShell installer should:
- create venv
- install dependencies
- launch Gradio UI
- offer CLI mode
- avoid conflicting with ComfyUI venvs
Dataset Doctor reports should become RAG assets. Every report should include machine-readable summaries at the top:
## Build vs use existing
Do not build captioning, OCR, diarization, or embedding models from scratch. Wrap mature tools:
- JoyCaption / Florence-2 / WD14 for image captioning/tagging.
- Whisper-family tools for transcription.
- sentence-transformers/FlagEmbedding for text embeddings.
- perceptual hashing for image dedupe.
- ffmpeg/OpenCV for video inspection.
The value is not the scanners individually. The value is the training-readiness judgment, beginner language, model-card output, and connection to trainer-specific settings.

### Unique retained material from `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/05_specs/AIWF_Dataset_Doctor_v0_1.md`

# AIWF Dataset Doctor v0.1 — Product Spec
Prevent bad training runs before they happen.
AIWF should not start by writing another trainer. It should inspect datasets, generate safe presets, and explain risk before calling existing trainers.
## Supported dataset modes v0.1
1. Image LoRA dataset
2. Video LoRA dataset
3. LLM SFT dataset
4. Preference dataset
5. Embedding/reranker dataset
6. Voice/TTS dataset
- 90–100: train-ready
- 75–89: usable with warnings
- 50–74: fix before serious training
- below 50: do not train
- no captions
- invalid JSONL
- missing chosen/rejected fields
- non-consented voice data
- private identifiers detected
- extreme duplicate rate
- unreadable videos/images/audio
## Future integration
- ComfyUI node pack: `ai without fear`
- Gradio UI
- one-click trainer launch
- Hugging Face dataset card exporter
- Civitai model card helper

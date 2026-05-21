# Source Verification Run v1.3

## Purpose

This pass audits source coverage after the v1.2 structure hardening pass. It does **not** remove source material. It adds verification manifests and a volatile-claim review queue so AI systems can distinguish grounded facts from fast-moving research snapshots.

## Archive Source Inventory

- Source URL references found: **7267**
- Unique URLs found: **3194**
- Unique domains found: **221**
- Manual verification sample size: **12**
- Volatile/source-review claim candidates queued: **460**

## Top Referenced Domains

| Domain | References |
|---|---:|
| `github.com` | 1803 |
| `pypi.org` | 945 |
| `huggingface.co` | 730 |
| `docs.nvidia.com` | 422 |
| `arxiv.org` | 300 |
| `pypi.nvidia.com` | 246 |
| `developer.nvidia.com` | 146 |
| `docs.vllm.ai` | 136 |
| `scikit-learn.org` | 99 |
| `www.deeplearningbook.org` | 84 |
| `cs229.stanford.edu` | 70 |
| `onnxruntime.ai` | 69 |
| `www.statlearning.com` | 60 |
| `hastie.su.domains` | 60 |
| `docs.pytorch.org` | 58 |

## Verification Method

1. Extract all URLs from Markdown, JSON, JSONL, CSV, and text files.
2. Summarize source domains and likely source classes.
3. Manually verify a high-impact sample of source anchors across:
   - LLM fundamentals
   - agent/tool use/MCP
   - evaluation/observability
   - safety/security
   - model serving/deployment
   - Gradio UI
   - audio/speech AI
   - VLM/OCR/document AI
   - hardware/cost planning
4. Generate a volatile-claim queue for claims with temporal, superlative, benchmark, ranking, or numeric cues.
5. Add a source verification policy for AI ingestion.

## Verified Source Anchors

See `04_MANIFESTS/source_verification_sample_v1_3.csv`.

High-confidence examples checked in this run include:

- Transformer paper / attention-only architecture.
- MCP official definition as a standard for connecting AI apps to external systems.
- OpenAI function/tool calling flow.
- OWASP LLM Top 10 risk categories.
- MLflow GenAI evaluation and monitoring capabilities.
- vLLM serving features.
- llama.cpp local inference features.
- Gradio Interface / Blocks / ChatInterface / State concepts.
- Qwen3-TTS 2026 model-family claim.
- NVIDIA PersonaPlex full-duplex claim.
- DeepSeek-OCR Contexts Optical Compression claim.
- Google TPU 8t/8i and TPU 8i SRAM claim.

## Important Findings

### 1. Source preservation is strong

The archive contains thousands of source references across GitHub, PyPI, Hugging Face, arXiv, official docs, vendor docs, and project-specific source packs.

### 2. Fast-moving claims need periodic reverification

The highest-risk claims are not necessarily wrong; they are volatile. Examples include:
- model rankings
- current-best recommendations
- benchmark numbers
- hardware availability
- package/API behavior
- ComfyUI node/class names
- cloud/vendor claims

These are now queued in `04_MANIFESTS/volatile_claims_review_queue_v1_3.csv`.

### 3. Some generated lane summaries are source-backed indirectly

Several lane files synthesize knowledge from source packs, but do not themselves include direct URLs on every claim. This is acceptable for retrieval cards, but final answers should prefer source manifests and raw/canonical source files when making exact factual claims.

### 4. Topics 20–25 are high-value but should be treated as research notes

The user-expanded notes for Topics 20–25 are useful and dense. Because they contain many 2026 landscape statements and high-specificity model/hardware claims, they should be tagged as `volatile` or `fast_moving` where appropriate.

## Files Added

- `00_AI_READ_FIRST/SOURCE_VERIFICATION_GUIDE.md`
- `04_MANIFESTS/source_url_inventory_v1_3.csv`
- `04_MANIFESTS/source_domain_summary_v1_3.csv`
- `04_MANIFESTS/source_verification_sample_v1_3.csv`
- `04_MANIFESTS/volatile_claims_review_queue_v1_3.csv`
- `10_SCHEMA_AND_INDEX/source_verification_policy_v1_3.json`
- `05_REPORTS/SOURCE_VERIFICATION_RUN_V1_3_REPORT.md`

## Recommendation

Next pass should be **Z** if you want stricter enforcement:
- add source status fields directly into every `lane_profile.json`
- add source confidence fields to every retrieval card
- mark volatile cards as requiring external verification before high-confidence answers

Next pass should be **A** if you want more research:
- expand missing real-world deployment examples
- add source-backed case studies
- deepen model-serving and evaluation lanes

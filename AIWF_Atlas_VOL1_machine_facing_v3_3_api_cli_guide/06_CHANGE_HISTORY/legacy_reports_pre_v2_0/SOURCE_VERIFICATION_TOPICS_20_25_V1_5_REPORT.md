# Source Verification Run v1.5 — Topics 20–25

## Scope

This pass verifies the uploaded bibliography `Sources_for_Topics_20_to_25_v1.md` against current web-accessible sources and folds the status into the AIWF Knowledge Adapter.

The uploaded bibliography states that every major claim, model name, benchmark number, and architectural recommendation in Topics 20–25 traces to a listed source, and that links were verified as of 2026-05-19. This v1.5 pass treats that document as a source-register candidate, not as proof by itself.

## Outputs Added

- `03_SOURCE_CONTENT/C_USER_EXPANDED_TOPIC_NOTES/topics_20_25/Sources_for_Topics_20_to_25_v1.md`
- `04_MANIFESTS/topics_20_25_source_verification_matrix_v1_5.csv`
- `04_MANIFESTS/topics_20_25_source_verification_matrix_v1_5.jsonl`
- `04_MANIFESTS/topics_20_25_source_correction_queue_v1_5.csv`
- `10_SCHEMA_AND_INDEX/topics_20_25_source_verification_policy_v1_5.json`
- `05_REPORTS/SOURCE_VERIFICATION_TOPICS_20_25_V1_5_REPORT.md`

## Summary Counts

- Total source claims checked: 32
- Verified as primary/academic/official enough for current use: 14
- Verified as industry/trend source: 6
- Partial/secondary/needs exact URL: 8
- Needs stronger source / high-risk not found: 3

## Key Findings

### Strongly Verified

- Topic 20: Jarrahi et al. CACM Data-Centric AI; lakeFS 2026 data-engineering best practices; DBTA 2026 trend article.
- Topic 21: Qwen3-TTS technical report and Fish Speech S2 sources.
- Topic 22: Qwen3-VL, DeepSeek-OCR, DeepSeek-VL2, BentoML VLM guide.
- Topic 23: ACL synthetic data tutorial, DeepEval synthetic-data docs, Confident AI guide, synthetic-data survey.
- Topic 24: LangGraph, CrewAI, and RAGAS official documentation.
- Topic 25: Google TPU 8t/8i announcement/deep dive, MLPerf Inference v6.0, Pinggy 2026 hardware guide.

### Corrections Needed

1. **NVIDIA PersonaPlex**: not found in this focused web verification. Do not cite it as fact until an official NVIDIA page or paper is located.
2. **ACL Synthetic Data Tutorial**: found as ACL 2025, not ACL 2026.
3. **Qwen3-VL Technical Report**: found as late 2025, not 2026, although still valid for 2026 landscape notes.
4. **TPU 8t performance improvement**: Google Cloud technical deep dive says up to **2.7x** training price-performance vs Ironwood; the uploaded source list says 2.8x. Prefer 2.7x unless another official source is pinned.
5. **TPU 8i 384 MB SRAM**: found in ITPro secondary reporting; keep as secondary unless the official Google spec table is captured.
6. **30–70% synthetic frontier training data** and **30–50% electricity TCO**: plausible planning notes, but not fully verified by primary sources in this pass. Keep tagged as volatile estimates.

## Machine Policy Update

AI systems using this adapter should treat Topics 20–25 sources as follows:

1. Prefer primary papers, official docs, and vendor technical posts over blogs.
2. Use industry guides for practice/trend framing only.
3. Do not repeat unsupported model/product names such as `PersonaPlex` unless a verified source is retrieved.
4. Preserve source notes as provenance but attach status tags during retrieval.
5. When answering about fast-moving model/hardware rankings, disclose that claims are volatile and may require current verification.

## Next Recommended Pass

Run **Z** to propagate these verification statuses into lane profiles, source freshness tags, and retrieval card risk levels. After that, run **A** only if you want to replace the weak/unverified sources with stronger primary references.

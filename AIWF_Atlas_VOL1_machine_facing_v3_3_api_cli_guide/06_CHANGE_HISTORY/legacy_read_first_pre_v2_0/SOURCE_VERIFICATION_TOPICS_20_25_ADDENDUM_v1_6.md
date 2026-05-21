# Source Verification Addendum v1.6 — Topics 20–25

This addendum continues the focused verification of the uploaded `Sources_for_Topics_20_to_25_v1.md` bibliography.

## How an AI should use this pass

1. Prefer the v1.6 verification matrix over older v1.5 correction statuses for Topics 20–25.
2. Use canonical URLs in `topics_20_25_canonical_source_pinset_v1_6.jsonl` when answering or citing.
3. Treat claims marked `not_verified_as_hard_fact` as hypotheses, planning heuristics, or industry estimates unless a stronger source is later added.
4. Do not discard the original source list. It remains the author-provided bibliography, but v1.6 records which claims were pinned, corrected, or downgraded.

## Important corrections from this pass

- PersonaPlex was found and verified through NVIDIA Research and NVIDIA's Hugging Face model card. The older v1.5 `not_found_high_risk` status is superseded.
- Feast point-in-time correctness is now pinned to exact official docs pages.
- Gradio/FastRTC real-time audio/WebRTC references are now pinned to official Gradio/FastRTC pages.
- Qwen3-VL should be described as a late-2025 technical report, even if used in a 2026 research pack.
- ACL Synthetic Data in the Era of LLMs is ACL 2025, not ACL 2026.
- TPU 8i 384 MB on-chip SRAM is now verified from an official Google Cloud technical deep dive.
- TPU 8t training price/performance should use the official 2.7x value unless a separate official 2.8x source is pinned.
- The “30–70% synthetic frontier training data” and “electricity is often 30–50% of inference TCO” claims remain too broad for hard-fact treatment.

## Files produced

- `04_MANIFESTS/topics_20_25_source_verification_matrix_v1_6.csv`
- `04_MANIFESTS/topics_20_25_source_verification_matrix_v1_6.jsonl`
- `04_MANIFESTS/topics_20_25_source_correction_queue_v1_6.csv`
- `04_MANIFESTS/topics_20_25_canonical_source_pinset_v1_6.jsonl`
- `05_REPORTS/SOURCE_VERIFICATION_TOPICS_20_25_V1_6_REPORT.md`

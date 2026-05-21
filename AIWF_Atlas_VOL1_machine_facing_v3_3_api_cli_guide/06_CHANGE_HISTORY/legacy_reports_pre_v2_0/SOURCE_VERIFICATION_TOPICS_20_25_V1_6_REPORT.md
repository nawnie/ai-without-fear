# Source Verification Run v1.6 — Topics 20–25

## Summary

This run continued the source verification work for Topics 20–25 using the uploaded bibliography and the v1.5 correction queue.

- Source claims reviewed in this pass: 36
- Verified or partially verified claims: 33
- Correction / caution queue rows: 6
- New canonical source pinset rows: 33

## Major upgrades over v1.5

1. PersonaPlex is no longer `not_found_high_risk`; it is verified from NVIDIA Research and NVIDIA's model card.
2. Feast, Gradio/FastRTC, Qwen3-TTS, Fish Audio S2, LlamaParse, RAGAS, ARES, LangSmith, Phoenix, Helicone, and Google TPU 8t/8i now have pinned source URLs.
3. TPU 8i's 384 MB on-chip SRAM is now official-Google verified.
4. Broad/volatile claims were separated from verified claims instead of being silently accepted.

## Claims that still need correction or qualification

- `30–70% of frontier training data is synthetic`: not verified as a hard fact. Replace with narrower sourced claims about synthetic data usage, data evolution, and specific mixture-ratio studies.
- `Electricity is often 30–50% of inference TCO`: not verified as a hard fact. Use measured power/cooling/facility-cost framing instead.
- `TPU 8t 2.8x training perf/$`: use official 2.7x unless another official source is added.
- `ACL 2026 Synthetic Data tutorial`: correct to ACL 2025.
- `Qwen3-VL 2026 technical report`: correct to late-2025 technical report.

## Machine-use instruction

For answers involving Topics 20–25, an AI should retrieve the lane overview, then the source pinset, then the v1.6 verification matrix. If a claim appears in the original topic notes but is listed in the v1.6 correction queue, the AI should qualify the claim or use the corrected wording.

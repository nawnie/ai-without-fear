# Topic 23: Synthetic Data & Dataset Creation
## Comprehensive AI Data Scientist Notes – 2026 Edition
**Version**: 2.2 Expanded | **Target Audience**: AI Data Scientists, LLM Trainers, Synthetic Data Engineers | **Length**: ~12 pages (core) + exercises

**Purpose**: The definitive guide to LLM-driven synthetic data generation, curation, and integration into production AI pipelines. Covers the 5-step pipeline, quality control, bias mitigation, and how synthetic data has become 30-70% of frontier training corpora in 2026.

---

## 1. Executive Summary & 2026 Reality

Synthetic data is no longer “nice to have” — it is the primary lever for scaling frontier models when real high-quality labeled data is scarce, expensive, private, or biased. In 2026, leading labs report 30-70% of training tokens for new models come from LLM-generated synthetic data.

**Key Insight**: The quality of your synthetic data pipeline now determines model capability more than model architecture in many domains.

---

## 2. The 5-Step LLM-Driven Synthetic Data Pipeline (DeepEval Standard)

1. **Seed Corpus / Document Chunking** — Start with high-quality real documents or domain corpus.
2. **Context Generation** — LLM expands chunks into rich, diverse backgrounds.
3. **Query / Instruction Generation** — Create diverse tasks, questions, or instructions.
4. **Data Evolution** — Iterative self-refinement, self-critique, difficulty escalation.
5. **Label / Expected Output + Verification** — Generate answers + use execution feedback or LLM judges for filtering.

**Advanced Techniques 2026**:
- Multi-agent debate for diversity and reduced hallucination
- RAG-grounded generation (retrieve real facts before generating)
- Execution feedback loops (for code, math, tool-use data)
- Curriculum learning (start easy, gradually increase difficulty)
- Data Evolution frameworks that mutate examples for hardness

---

## 3. Quality Control & Curation (The Make-or-Break Step)

**Mandatory Curation Pipeline**:
- Semantic + exact deduplication (prevent mode collapse)
- LLM-as-judge quality scoring (fluency, correctness, diversity, safety)
- Bias & toxicity audits (use separate safety models)
- Difficulty / usefulness scoring
- Provenance tracking (synthetic flag + generator version + prompt hash)

**Golden Rule**: Never train on raw synthetic output. Always apply rigorous filtering. Best practice is 30-70% real + 30-70% high-quality synthetic.

**Tools 2026**:
- DeepEval (easiest 5-line starter + filtering)
- Tonic.ai, LabelYourData platforms
- Custom pipelines with Claude-4 / GPT-4.5 + Great Expectations

---

## 4. Risks & Mitigations

**Model Collapse**: Training only on synthetic data leads to loss of diversity and capability. **Fix**: Always mix with real data + track diversity metrics.

**Bias Amplification**: Synthetic data can amplify existing biases. **Fix**: Explicit bias audits + balanced seed corpus + adversarial filtering.

**Hallucination Inheritance**: Generated data can contain factual errors. **Fix**: RAG-grounded generation + fact-checking judges + execution verification (for code/math).

**Distribution Shift**: Synthetic data may not match real user distribution. **Fix**: Continuous monitoring of downstream task performance + periodic real-data refresh.

---

## 5. Key Facts for AI Agents (LoRA/RAG Section)

**METADATA**: Topic 23, v2.2, 2026-05-19, Sources: Confident AI Definitive Guide (2025-2026), ACL 2026 Synthetic Data Tutorial, ResearchGate 2026 survey on LLM synthetic data, DeepEval GitHub.

**CORE_DEFINITION**: Synthetic data generation is the LLM-driven creation of high-quality, diverse, labeled training examples that solve scarcity, privacy, and cost problems, now comprising 30-70% of frontier model training data when properly curated and mixed with real data.

**KEY_FACTS**:
1. 30-70% of 2026 frontier training data is synthetic — your pipeline must treat generators as versioned artifacts (Topic 20).
2. The 5-step pipeline (chunk → context → query → evolution → label + verify) is the industry standard.
3. Rigorous curation (dedup + LLM judge + bias audit) is non-negotiable — raw synthetic output is toxic.
4. Always mix 30-70% real data to prevent model collapse and distribution shift.
5. RAG-grounded generation + execution feedback dramatically reduces hallucinations.
6. Version synthetic generators + prompts + seed data together for full reproducibility.
7. Downstream task performance (not surface quality) is the only true success metric.
8. Synthetic data excels at rare edge cases, red-teaming, and instruction diversity.
9. Governance (provenance, consent, watermarking) is required for any production synthetic corpus.
10. Continuous monitoring + periodic real-data refresh prevents silent degradation.

**DECISION_FRAMEWORK**:
- Instruction tuning / alignment → 5-step pipeline + DeepEval + heavy curation
- Code / math / tool-use → Execution feedback loops (run tests, verify answers)
- Rare edge cases / long-tail → Targeted synthetic generation from failure logs
- Privacy-sensitive domains → Fully synthetic with strong differential privacy + watermarking
- Maximum diversity → Multi-agent debate + data evolution

**CROSS_TOPIC_HOOKS**:
- Topic 20: Version synthetic generators exactly like any other data product; apply data contracts.
- Topic 21/22: Generate synthetic audio, images, documents to augment real datasets.
- Topic 24: Synthetic trajectories are essential for training reliable agents.
- Topic 25: Synthetic data generation has non-trivial compute cost — track and optimize.

**ANTI_PATTERNS**:
- Training on raw unfiltered synthetic output (guaranteed mode collapse).
- No mixing with real data.
- Ignoring provenance (cannot debug or audit later).
- Using surface metrics (fluency) instead of downstream task lift.

**SUCCESS_METRICS**:
- Downstream task accuracy lift vs real-only baseline (target: +5-15%)
- Diversity metrics (embedding variance, n-gram coverage)
- Hallucination rate in generated data (<5% after filtering)
- Cost per 1M high-quality synthetic examples
- Reproducibility rate of training runs using synthetic data

---

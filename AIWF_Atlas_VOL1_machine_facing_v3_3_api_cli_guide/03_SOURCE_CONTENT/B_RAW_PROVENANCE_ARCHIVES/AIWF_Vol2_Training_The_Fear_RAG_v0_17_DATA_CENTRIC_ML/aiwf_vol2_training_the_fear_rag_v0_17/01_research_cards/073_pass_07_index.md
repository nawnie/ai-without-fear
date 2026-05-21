# Pass 07 Index — Post-Training, Distillation, Quantization, Merging, and Release Gates

## Pass purpose

Pass 07 expands the RAG from "how to train an adapter" into "how to improve, compress, compare, release, and not break a model after training." This matters because consumer training rarely ends at a single SFT or LoRA run. The actual loop is usually:

1. prepare/clean data,
2. run SFT or LoRA,
3. evaluate,
4. optionally align with preferences or rewards,
5. optionally merge/stack adapters,
6. export/quantize,
7. run regression tests,
8. document rights and limitations.

## New cards

- 074 — RLHF / RLAIF / reward modeling and consumer limits.
- 075 — DPO / ORPO / KTO / GRPO method selection rules.
- 076 — distillation and teacher-student synthetic data.
- 077 — model merging with mergekit, SLERP, TIES, DARE, passthrough, and MoE-style merges.
- 078 — quantization/export map: bitsandbytes, GGUF/llama.cpp, GPTQ, AWQ, Quanto.
- 079 — evaluation harnesses and private benchmarks.
- 080 — safety alignment and red-team gates.
- 081 — deployment formats and adapter release packages.
- 082 — AIWF Training Judge spec.
- 083 — post-training failure modes.

## AIWF direction

AIWF should add a **Training Judge** next to Dataset Doctor and Preset Builder. The judge should answer: "Did this run make the model better for the intended job without making it worse elsewhere?" Training without judging is just expensive superstition.

## Source anchors

Primary anchors: Hugging Face TRL docs, TRL GitHub, mergekit GitHub/paper, llama.cpp/GGUF docs, bitsandbytes and Quanto docs, OpenAI Evals, Hugging Face Evaluate/LightEval direction, EleutherAI lm-evaluation-harness, NIST AI RMF/Governance resources, and Partnership on AI synthetic media framework.

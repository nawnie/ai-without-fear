# Pass 03 Index — Theory, Law, Methods, Evaluation Backbone

Pass 03 expands the RAG away from tool-only notes and into the material AIWF Vol. 2 needs to teach training correctly:

1. Hardware reality and VRAM math.
2. PEFT method map: LoRA, QLoRA, DoRA, IA3, AdaLoRA, prefix/prompt tuning.
3. Quantization: bitsandbytes, GPTQ, AWQ, GGUF, and where each belongs.
4. Preference/alignment training: SFT, DPO, ORPO, KTO, GRPO, reward models, PPO/RLHF.
5. RAG vs fine-tune vs LoRA decision rules.
6. Dataset design laws and data-quality failure modes.
7. Model documentation: model cards, datasheets, data statements.
8. Evaluation frameworks: lm-eval-harness, OpenCompass, RAGAS, DeepEval.
9. Image LoRA captioning/tagging pipeline.
10. Video LoRA dataset/motion pipeline.
11. Synthetic media governance: consent, disclosure, provenance, C2PA, NIST AI RMF, PAI synthetic media guidance.
12. AIWF Dataset Doctor expanded spec.

## AIWF position after Pass 03

Training education must be organized around **decisions**, not around buttons.

A beginner does not need to memorize every trainer first. They need to learn:

- What kind of change they are trying to make.
- Whether training is the right tool.
- What hardware envelope they are inside.
- What dataset evidence they actually have.
- What legal/consent rights they have.
- How to measure whether the new model improved or merely became more biased, memorized, or obedient to a narrow benchmark.

## New standing terms

- **Training Budget Triangle:** VRAM, dataset quality, and evaluation budget. If one side is missing, the training run is likely theater.
- **Adapter-First Rule:** On consumer hardware, prefer adapters before full fine-tuning unless a strong reason exists.
- **Data beats epochs:** Most failed consumer training runs are data mistakes amplified by training steps.
- **Evaluation before pride:** A training run is not successful until it beats a baseline on held-out prompts/tasks and passes failure-mode checks.
- **Consent ledger:** Voice, face, likeness, and private/person-specific style training need explicit provenance and permission tracking.

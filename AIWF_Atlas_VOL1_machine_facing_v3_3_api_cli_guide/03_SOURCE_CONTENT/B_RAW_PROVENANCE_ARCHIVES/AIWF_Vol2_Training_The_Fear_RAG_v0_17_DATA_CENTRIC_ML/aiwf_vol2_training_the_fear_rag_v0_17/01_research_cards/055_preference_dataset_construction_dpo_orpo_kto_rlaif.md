# Preference Dataset Construction for DPO, ORPO, KTO, and RLAIF

## Scope
This card covers preference data: datasets that tell a model which answer is better, not just what answer to imitate. This is relevant for DPO, ORPO, KTO, SimPO-style approaches, reward modeling, and RLAIF workflows.

## Why preference data matters
SFT teaches “do this.” Preference training teaches “prefer this over that.” For AIWF, this is crucial because many beginner-facing assistants fail not from lack of knowledge, but from poor answer style:
- too vague,
- too risky,
- too verbose,
- too confident,
- wrong tone for beginners,
- missing safety boundaries,
- no actionable next step.

## Basic preference schema
```json
{
  "prompt": "My LoRA looks exactly like the training images. What happened?",
  "chosen": "It likely overfit. Reduce repeats or epochs, lower learning rate, improve captions, and test with a fixed validation prompt deck.",
  "rejected": "Use more steps and a higher rank."
}
```

Conversational preference datasets should preserve roles in both chosen and rejected continuations when the trainer supports it.

## What makes a good rejected answer
A rejected answer should be realistically bad, not cartoonishly stupid. Useful rejected examples include:
- common beginner myth,
- partially correct but unsafe,
- overconfident guess,
- ignores constraints,
- wrong trainer/framework assumptions,
- “cloud-only” answer when local consumer hardware was requested,
- answer that recommends full fine-tuning when LoRA is appropriate.

## Preference data types

### Human preference
Best quality, highest cost. Use for final behavior shaping and high-risk domains.

### AI preference / RLAIF
A judge model ranks outputs. Fast and cheap, but judge bias must be measured.

### Rubric-generated preference
Use explicit scoring rubrics. The chosen answer must score better on known dimensions.

Example rubric:
- correctness,
- actionability,
- beginner safety,
- hardware realism,
- source/provenance honesty,
- avoids fake certainty,
- uses appropriate terminology.

### Failure-mode preference
Generate rejected answers from known failure signatures.

Example:
- Prompt: “Can I train Wan video on 8GB VRAM?”
- Chosen: “Likely not in a practical way for modern Wan LoRA training; use smaller image LoRA, rented GPU, or preprocessed low-frame experiments.”
- Rejected: “Yes, just use xFormers.”

## DPO-specific considerations
DPO works best when chosen/rejected pairs are meaningfully different and aligned to the target behavior. If both responses are nearly identical, the signal is weak. If the rejected response is absurd, the model learns little.

## KTO/ORPO-style considerations
Some methods can use different forms of preference or odds-ratio objectives. The dataset still needs clear desirability labels and consistent formatting.

## Consumer-hardware guidance
Preference tuning can often be done with PEFT/QLoRA on smaller models, but it is sensitive to dataset quality. Small preference datasets are useful when they target a narrow behavior.

Good first run:
- 200 to 1,000 preference pairs,
- one model family,
- one chat template,
- one behavior goal,
- fixed eval set.

Bad first run:
- mixed tools, styles, safety policies, and domains in 50,000 unreviewed pairs.

## AIWF preference dataset standard
Every preference row should include:
- `prompt`,
- `chosen`,
- `rejected`,
- `reason_chosen`,
- `rubric_version`,
- `source_type` human/synthetic/mixed,
- `review_status`,
- `risk_level`,
- `intended_behavior`.

## Validation checks
- chosen/rejected both present,
- no identical pairs,
- no swapped pairs,
- no empty chosen,
- no private data,
- no eval leakage,
- judge scores stored separately,
- human spot-check percentage recorded.

## Sources
- TRL DPOTrainer docs: https://huggingface.co/docs/trl/en/dpo_trainer
- TRL dataset formats: https://huggingface.co/docs/trl/en/dataset_formats
- TRL GitHub: https://github.com/huggingface/trl
- Distilabel docs: https://distilabel.argilla.io/
- Mistral/Distilabel synthetic DPO cookbook: https://docs.mistral.ai/resources/cookbooks/third_party-argilla-distilabel_synthetic_dpo_dataset
- LLaMA-Factory data README: https://github.com/hiyouga/LLaMA-Factory/blob/main/data/README.md
- Axolotl dataset formats: https://docs.axolotl.ai/docs/dataset-formats/

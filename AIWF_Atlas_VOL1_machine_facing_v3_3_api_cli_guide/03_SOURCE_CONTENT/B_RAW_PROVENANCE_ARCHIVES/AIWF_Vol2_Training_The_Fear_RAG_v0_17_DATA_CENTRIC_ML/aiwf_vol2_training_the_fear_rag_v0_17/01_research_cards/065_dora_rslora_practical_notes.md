# DoRA and rsLoRA Practical Notes — Better LoRA Is Not Always the First LoRA

## Why this matters
Beginners often chase the newest adapter variant before they have clean data. AIWF should present DoRA and rsLoRA as escalation tools, not magic defaults.

## DoRA
DoRA decomposes pretrained weight updates into magnitude and direction components, using LoRA for directional updates. The intent is to improve learning capacity and training stability compared with plain LoRA.

### Use DoRA when
- Plain LoRA underfits despite clean data.
- You need better fidelity on a constrained adapter.
- The trainer supports DoRA without patchy hacks.
- You can test against a plain LoRA baseline.

### Avoid DoRA when
- The dataset is unclean.
- The model family/trainer support is uncertain.
- The user has not run a baseline.
- The project needs the simplest portable adapter first.

## rsLoRA
rsLoRA changes scaling from alpha/r to alpha/sqrt(r). This makes higher-rank LoRA less likely to have weakened updates.

### Use rsLoRA when
- Rank is high enough that normal LoRA scaling weakens learning.
- You need more capacity than r=16 or r=32.
- The trainer has a clean `use_rslora` option.

### Avoid rsLoRA when
- A small normal LoRA already works.
- You are debugging dataset or chat template issues.
- The downstream runtime cannot load the resulting adapter reliably.

## AIWF test pattern
For a serious adapter project:
1. Plain LoRA baseline.
2. Same data, same eval, DoRA variant.
3. Same data, same eval, rsLoRA high-rank variant.
4. Compare with fixed eval prompts, not vibe.
5. Keep all adapters and run cards.

## Important distinction
A better adapter method cannot fix:
- mislabeled data,
- unsafe/illegal training data,
- wrong base model,
- missing eval set,
- broken tokenizer/chat template,
- captions that encode the wrong concept.

## Sources
- DoRA paper: https://arxiv.org/abs/2402.09353
- NVlabs DoRA repo: https://github.com/NVlabs/DoRA
- rsLoRA paper: https://arxiv.org/abs/2312.03732
- PEFT LoRA config notes: https://github.com/huggingface/peft/blob/main/src/peft/tuners/lora/config.py
- TRL PEFT integration: https://huggingface.co/docs/trl/en/peft_integration

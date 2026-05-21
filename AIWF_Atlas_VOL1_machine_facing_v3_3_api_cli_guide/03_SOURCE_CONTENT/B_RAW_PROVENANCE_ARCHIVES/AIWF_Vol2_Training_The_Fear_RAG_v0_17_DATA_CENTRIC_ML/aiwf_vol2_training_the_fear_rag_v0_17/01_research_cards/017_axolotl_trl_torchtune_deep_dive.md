# 017 — Axolotl, TRL, and torchtune Deep Dive

## Identity

- Tools: Axolotl, TRL, torchtune
- Axolotl repo: https://github.com/axolotl-ai-cloud/axolotl
- TRL repo/docs: https://github.com/huggingface/trl
- torchtune repo: https://github.com/pytorch/torchtune
- torchtune docs: https://meta-pytorch.org/torchtune/stable/index.html
- Domain: LLM training recipes, preference tuning, RLHF-style workflows, PyTorch-native training
- AIWF priority: P0/P1

## What this card covers

These tools are less "single beginner GUI" and more "serious training engine." They matter because Vol. 2 must teach what is happening under the hood, not only which button to press.

## Axolotl

Axolotl is a YAML-driven fine-tuning framework with broad support for:

- full fine-tuning
- LoRA
- QLoRA
- GPTQ-related workflows
- quantization-aware training in newer versions
- preference tuning such as DPO, IPO, KTO, ORPO
- RL-style methods such as GRPO/GDPO in the current ecosystem
- reward modeling and process reward modeling

### Why Axolotl matters

Axolotl is a strong intermediate/advanced choice. It is good for users who need reproducible configs and deeper control than a notebook. It also teaches that training is a pipeline: dataset preprocessing, training, evaluation, quantization, and inference are connected.

### AIWF use

- Include as advanced YAML path.
- Mine its examples for setting explanations.
- Use it to teach config discipline.
- Do not make it the first beginner path.

## TRL

TRL is Hugging Face's reinforcement/post-training library. It is important for SFT, reward modeling, DPO, PPO, GRPO, ORPO-style workflows depending on version and trainer support.

### Why TRL matters

TRL is often the underlying conceptual layer even when beginners use higher-level tools. Vol. 2 should explain:

- SFTTrainer
- DPOTrainer
- PPOTrainer
- reward model training
- preference datasets
- policy/reference model logic
- why preference tuning is not magic

### AIWF use

- Theory reference.
- Script examples later.
- Method glossary.
- Preference-data validation rules.

## torchtune

torchtune is PyTorch-native and recipe-oriented. Official docs include LoRA and QLoRA tutorials, including QLoRA examples designed to reduce memory requirements. It is not just a beginner GUI; it is a clean way to teach reproducible training recipes.

### Why torchtune matters

- Good for principled PyTorch-native explanations.
- Useful for users who want to understand recipes rather than hide everything behind a web UI.
- Strong source for "what does a training recipe actually do?"

## Consumer hardware angle

- Axolotl: powerful but config-sensitive; 16GB can work for small/7B QLoRA but users must respect sequence length and batch size.
- TRL: depends entirely on model, trainer, and recipe; preference tuning often needs more care than SFT.
- torchtune: official examples show LoRA/QLoRA single-device paths; it is useful for honest hardware education.

## Key theory Vol. 2 must teach

### SFT

Supervised fine-tuning teaches the model to imitate desired responses.

### Preference tuning

Preference tuning does not teach facts directly. It pushes the model toward preferred response patterns using winner/loser examples or reward signals.

### RL-style training

RL-style post-training is powerful but easy to misuse. For consumers, it belongs after basic SFT/eval discipline, not before.

## Failure signatures

- Preference tuning makes the model verbose or evasive: winner examples rewarded bad style.
- Reward hacking: model learns superficial markers of preferred answers.
- DPO collapse: preference pairs too easy, too noisy, or misformatted.
- Long-context OOM: sequence length dominates VRAM.
- YAML drift: config copied from another model without matching tokenizer/template.

## AIWF integration recommendation

- Axolotl card should feed a config explainer.
- TRL card should feed theory chapters and advanced scripts.
- torchtune card should feed recipe-based learning labs.

## Sources

- https://github.com/axolotl-ai-cloud/axolotl
- https://axolotl.ai/
- https://github.com/huggingface/trl
- https://github.com/pytorch/torchtune
- https://meta-pytorch.org/torchtune/stable/index.html
- https://github.com/pytorch/torchtune/blob/main/docs/source/tutorials/qlora_finetune.rst

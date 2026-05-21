# 002 — LLM / Bot Training Stack

## What this covers

Training AI bots now usually means one of these:

- supervised fine-tuning (SFT),
- QLoRA/LoRA adapter training,
- preference tuning such as DPO, ORPO, KTO, SimPO,
- reward modeling,
- GRPO/RL-style post-training,
- tool-use dataset tuning,
- or VLM/chat model fine-tuning.

## Main tools

### Unsloth

Best candidate for beginner-to-intermediate local bot fine-tuning. It emphasizes faster training and lower VRAM, includes Studio/WebUI direction, and targets local training on modern RTX GPUs.

### LLaMA-Factory

Best broad GUI/YAML ecosystem map. It supports many model families, SFT, pretraining, reward modeling, PPO, DPO, KTO, ORPO, SimPO, LoRA, QLoRA, OFT/QOFT, and multimodal tasks.

### Axolotl

Best serious/pro YAML pipeline. It supports full fine-tuning, LoRA, QLoRA, GPTQ/QAT, preference tuning, reward modeling, GRPO/GDPO, and multimodal training.

### TRL

Best conceptual library for SFT, DPO, GRPO, RewardTrainer, PPO-style workflows. Many higher-level tools sit on the same ecosystem.

### torchtune

Best PyTorch-native recipe reference. Useful for showing clean, principled training recipes without hiding every detail.

## Consumer hardware reality

- 0.5B–3B SFT: very realistic.
- 7B QLoRA: realistic on 12–16GB with conservative settings.
- 14B QLoRA: possible but tight; depends on context length, batch, optimizer, quantization, and offload.
- 30B+: usually cloud/multi-GPU/advanced compromises.
- Full fine-tune 7B+: not the normal consumer path.

## Dataset notes

Common formats:

- instruction JSONL,
- ShareGPT/chat format,
- prompt/completion,
- preference pairs,
- reward-model comparisons,
- tool-call transcripts,
- multimodal image/video/audio conversation records.

## Failure signatures

- Loss goes down but behavior gets worse: dataset style mismatch or overfit.
- Model forgets general behavior: too much rank/learning rate/data repetition.
- Tool calls break: wrong chat template or malformed tool-call format.
- Local inference differs from training validation: tokenizer/chat template mismatch.
- Training OOMs only after a while: sequence length spikes or packing/batching issue.

## AIWF decision

Make this a core Vol. 2 pillar. Start with Unsloth + LLaMA-Factory for beginner workflow, Axolotl for serious workflow, TRL/torchtune/PEFT for concept explanations.

## Sources

- https://github.com/unslothai/unsloth
- https://github.com/hiyouga/LLaMA-Factory
- https://github.com/axolotl-ai-cloud/axolotl
- https://github.com/huggingface/trl
- https://github.com/meta-pytorch/torchtune
- https://github.com/huggingface/peft

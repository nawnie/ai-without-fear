# 015 — Unsloth Deep Dive

## Identity

- Tool: Unsloth
- Repo: https://github.com/unslothai/unsloth
- Docs: https://unsloth.ai/docs
- Domain: LLM fine-tuning, QLoRA/LoRA, RL-style post-training, model optimization
- AIWF priority: P0

## What it is

Unsloth is a high-priority consumer-facing LLM training stack focused on fast and memory-efficient fine-tuning. It is important for AIWF because it compresses a lot of modern LLM training into relatively approachable notebooks, scripts, and docs.

## What it trains

Unsloth is mainly relevant for:

- instruction/chatbot SFT
- LoRA and QLoRA adapters
- some full fine-tuning workflows
- RL/post-training workflows in the modern open LLM ecosystem
- quantized training paths for consumer hardware

## Consumer hardware angle

Unsloth's practical value is that it reduces the hardware barrier for small and medium LLM fine-tuning. On a 16GB GPU, the AIWF default expectation should be:

- 0.5B–3B models: good first training targets.
- 7B–8B models: practical with QLoRA and conservative sequence length.
- 14B models: possible in some configurations but fragile on 16GB; usually better on 24GB or cloud.
- 30B+ models: research/experimental for consumer hardware unless heavily quantized and carefully constrained.

## Why it matters to Vol. 2

Unsloth is one of the strongest teaching bridges between "I used a chatbot" and "I trained a usable assistant adapter." It is approachable enough for beginners but deep enough to introduce real concepts:

- base model choice
- tokenizer compatibility
- dataset formatting
- chat templates
- LoRA target modules
- sequence length
- batch size
- gradient accumulation
- evaluation prompts
- adapter export and inference

## AIWF beginner-safe pattern

1. Start with a small instruct model.
2. Use a tiny clean dataset first.
3. Train for a short run only.
4. Save adapter separately from the base model.
5. Test with fixed prompts before and after training.
6. Only scale model size after the pipeline works.

## Settings that need AIWF glossary treatment

- `max_seq_length`: maximum token window during training. Higher values cost more VRAM.
- `load_in_4bit`: enables quantized base model loading for QLoRA-style training.
- `r` / rank: LoRA adapter rank; higher rank can learn more but costs more memory and may overfit.
- `lora_alpha`: scaling factor for LoRA updates.
- `lora_dropout`: regularization; often low or zero in many recipes but should be explained.
- `target_modules`: which transformer modules receive adapters.
- `learning_rate`: step size; too high causes instability or style/personality collapse.
- `gradient_accumulation_steps`: simulates larger batches over multiple smaller steps.
- `num_train_epochs` / `max_steps`: how long training runs.
- `warmup_steps`: gradual ramp to the target learning rate.

## Dataset formats to document

- Alpaca-style instruction/input/output
- ShareGPT-style conversation arrays
- ChatML-style messages
- tool-call traces
- preference pairs for later DPO/ORPO style training

## Failure signatures

- Model parrots training examples: overfit or too narrow dataset.
- Model becomes worse at general chat: dataset too domain-narrow or too aggressive training.
- Loss drops but behavior does not improve: poor eval prompts, incorrect chat template, bad dataset alignment, or adapter not loaded correctly.
- Training crashes near start: CUDA/torch mismatch, sequence length too high, batch too high, missing tokenizer files.
- Model refuses previously safe tasks after training: inherited safety template conflict or bad response examples.

## AIWF integration recommendation

Do not rewrite Unsloth. Build:

- Unsloth preset generator.
- Dataset format converter.
- Before/after prompt evaluator.
- Adapter card builder.
- Windows/WSL setup checklist.

## Source notes

- Official repo notes current support for fine-tuning, RL, pretraining, 4-bit/16-bit, FP8 training, live training monitoring, and multi-GPU work.
- Official docs include consumer/older GPU claims for several kernels and QLoRA examples.

## Sources

- https://github.com/unslothai/unsloth
- https://unsloth.ai/docs
- https://unsloth.ai/docs/get-started/install/intel
- https://unsloth.ai/docs/basics/faster-moe

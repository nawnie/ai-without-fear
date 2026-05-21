# Pass 04 Index — Practical Post-Training Stack + Multimodal/ASR Expansion

## Purpose

Pass 04 expands the RAG from “which trainers exist?” into “which training stack should AIWF recommend, wrap, or avoid for different beginner-to-advanced use cases?” The pass focuses on the Hugging Face/PyTorch post-training spine, low-code training, VLM fine-tuning, speech recognition fine-tuning, consumer runbooks, and failure signatures.

## Files added

- `040_torchtune_native_pytorch_recipes.md`
- `041_hf_peft_library_adapter_ops.md`
- `042_hf_trl_post_training_stack.md`
- `043_accelerate_deepspeed_fsdp_memory_backend.md`
- `044_autotrain_low_code_training_bridge.md`
- `045_vlm_training_qwen_llava_bridge.md`
- `046_asr_whisper_wav2vec_training.md`
- `047_aiwf_training_runbook_consumer_gpus.md`
- `048_training_failure_signatures_oom_overfit_collapse.md`
- `049_dataset_provenance_manifest_schema.md`
- `050_aiwf_trainer_wrapper_architecture.md`

## Pass conclusion

The AIWF training product should be a guided orchestration layer. Existing projects already do the heavy lifting. AIWF should focus on:

1. choosing the correct trainer for the user’s hardware and task;
2. validating dataset structure before training;
3. generating safe, conservative config presets;
4. tracking provenance, licensing, consent, and eval results;
5. translating training failure signatures into actionable fixes.

## Current wheel-check position

- Use **LLaMA-Factory** when the user wants the broadest GUI/API/CLI LLM fine-tuning surface.
- Use **Unsloth** when speed and consumer GPU practicality are the priority.
- Use **Axolotl** when the user wants serious YAML-based LLM fine-tuning with high configurability.
- Use **TRL + PEFT + Transformers + Accelerate** when building custom scripts or teaching principles.
- Use **torchtune** when the goal is native PyTorch clarity and hackable recipes.
- Use **AutoTrain** when the user wants a no-code/low-code bridge.
- Use **SimpleTuner/AI-Toolkit/musubi-tuner/OneTrainer** for diffusion/video LoRA coverage.
- Do not build a trainer from scratch yet.

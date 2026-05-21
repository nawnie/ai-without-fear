# Source Gaps and Recheck Queue — v0.15

This queue exists because the archive now has enough source volume that freshness and authority matter more than raw collection.

## Highest priority rechecks before final Vol. 2 drafting

1. **March 2026 trainer support matrix**: recheck LLaMA-Factory, Unsloth, Axolotl, TRL, torchtune, SimpleTuner, AI Toolkit, OneTrainer, sd-scripts, musubi-tuner, LTX trainer.
2. **Model-family support**: recheck FLUX.2/Klein, Qwen-Image/Qwen-Image-Edit/2512, Z-Image, Wan 2.x, LTX 2.x, SD3.5, and any 2026 replacements.
3. **Legal/policy**: recheck U.S. Copyright Office reports, EU AI Act/GPAI Code, FTC voice cloning guidance, C2PA/Content Credentials, Creative Commons AI-training guidance.
4. **Evaluation**: recheck lm-eval, OpenCompass, OpenAI Evals, HF Evaluate, DeepEval, RAGAS.
5. **Consumer hardware**: recheck official VRAM guidance and reproduce locally where possible. Avoid quoting random community VRAM claims as fact.

## Known weak areas needing more sources

- Audio model training beyond GPT-SoVITS, Whisper, and Wav2Vec2.
- Tabular ML and time-series ML at college depth.
- Causal inference exercises.
- Privacy-preserving training: DP-SGD, federated learning, membership inference, data extraction risk.
- Security: poisoned datasets, backdoors, prompt-injection resistant RAG, supply-chain risk for model files.
- Evaluation design for creative/video outputs.
- Model licensing comparison tables.

## How to use this queue

Each future pass should close one gap by adding: research cards, source logs, a small CSV/table, and at least one exercise/lab if the topic belongs in the manual.

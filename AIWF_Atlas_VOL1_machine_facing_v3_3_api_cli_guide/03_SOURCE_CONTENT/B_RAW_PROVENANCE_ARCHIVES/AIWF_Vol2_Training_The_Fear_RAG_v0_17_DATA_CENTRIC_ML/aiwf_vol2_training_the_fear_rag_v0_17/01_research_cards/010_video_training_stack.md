# 010 — Video Training Stack

## Scope

Video training is where beginner honesty matters most. It is possible, but slow, fragile, and hardware-sensitive.

Current targets:

- Wan 2.1 / 2.2
- HunyuanVideo
- FramePack
- LTX / LTX-2
- LongCat-style video models
- DiffSynth/Wan training scripts

## Main tools

- musubi-tuner
- SimpleTuner
- AI-Toolkit
- DiffSynth-Studio
- LTX-Video-Trainer

## Consumer hardware reality

Video LoRA can be possible on consumer cards, but feasibility depends on:

- model size,
- resolution,
- frame count,
- clip length,
- rank,
- batch size,
- whether blocks can be swapped/offloaded,
- and whether the trainer supports the exact model family.

For AIWF, the correct beginner entry is probably:

1. train on a tiny curated clip set,
2. low resolution,
3. small frame windows,
4. fixed validation prompts,
5. conservative rank,
6. very clear expectations.

## Failure signatures

- Learns appearance but not motion.
- Learns camera angle but destroys identity.
- High-noise/low-noise split mismatch for Wan-style models.
- Overfits to one clip and fails general prompts.
- Samples look good only at one seed.
- Training appears successful but ComfyUI loader cannot read the adapter.

## AIWF decision

Video training should be an intermediate/advanced Vol. 2 chapter, not the first lab. Start with a feasibility matrix and one known-good low-end workflow.

## Sources

- https://github.com/kohya-ss/musubi-tuner
- https://github.com/bghira/SimpleTuner
- https://github.com/ostris/ai-toolkit
- https://github.com/modelscope/DiffSynth-Studio
- https://github.com/Lightricks/LTX-Video-Trainer

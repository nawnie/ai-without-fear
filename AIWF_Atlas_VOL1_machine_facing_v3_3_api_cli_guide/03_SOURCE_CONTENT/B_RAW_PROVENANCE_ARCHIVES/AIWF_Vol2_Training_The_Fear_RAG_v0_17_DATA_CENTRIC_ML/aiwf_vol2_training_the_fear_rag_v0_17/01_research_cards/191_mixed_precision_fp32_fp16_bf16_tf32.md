# 191 — Mixed Precision: FP32, FP16, BF16, TF32

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Explains speed/memory precision choices.

## Core idea
Mixed precision uses lower precision for many tensor operations while preserving enough higher precision state to keep training numerically stable. FP16 saves memory but can underflow; BF16 has wider exponent range and is often more stable on supported hardware.

## What the reader must learn
Know parameter precision, compute precision, optimizer state precision, loss scaling, overflow, underflow, and hardware support.

## Practical rules
Use BF16 when supported and stable; use FP16 with loss scaling when BF16 is unavailable; reserve FP32 for debugging or unsupported paths. TF32 accelerates compatible matrix operations on NVIDIA hardware but is not the same as FP16 training.

## Failure signatures
NaNs, INF gradients, silent instability, slower-than-expected training when using unsupported precision.

## AIWF application
Consumer-GPU guides should specify precision per model family, not just “use half.” For diffusion/video, VAE/text encoder precision may matter separately from UNet/DiT precision.

## Exercise hook
Run a small model in FP32, FP16, and BF16 where available; record memory, speed, and stability.

## Source anchors
- NVIDIA Mixed Precision Training Guide: https://docs.nvidia.com/deeplearning/performance/mixed-precision-training/index.html
- PyTorch Performance Tuning Guide: https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one

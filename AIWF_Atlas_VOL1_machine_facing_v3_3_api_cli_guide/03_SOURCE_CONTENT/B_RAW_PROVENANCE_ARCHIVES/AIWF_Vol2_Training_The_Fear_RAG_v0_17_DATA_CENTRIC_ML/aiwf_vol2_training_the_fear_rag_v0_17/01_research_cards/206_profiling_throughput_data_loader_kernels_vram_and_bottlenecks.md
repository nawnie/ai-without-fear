# 206 — Profiling Throughput: Data Loader, Kernels, VRAM, and Bottlenecks

**Pass:** 14 — Optimization and Training Dynamics  
**Snapshot framing:** March 2026 Vol. 2 research state  
**Reader level:** college/postgrad, written in field-manual style  
**Primary role in Vol. 2:** Explains speed diagnosis.

## Core idea
Training speed is often limited by something other than raw GPU compute: data loading, preprocessing, CPU bottlenecks, disk speed, attention kernels, precision, batch shape, or synchronization.

## What the reader must learn
Know samples/sec, tokens/sec, sec/step, GPU utilization, data loader workers, pinned memory, compile/fused kernels, and I/O bottleneck.

## Practical rules
Profile before guessing. If GPU utilization is low, inspect data pipeline and CPU/disk. If VRAM is full but GPU is idle, batch shape or paging may be the issue.

## Failure signatures
Low GPU utilization, high CPU, stalls between steps, inconsistent step time, slow first epoch due to caching.

## AIWF application
AIWF EnvPack/Trainer Wrapper should capture step time, GPU utilization, VRAM, CPU, disk path, and dataloader settings.

## Exercise hook
Run a profile with intentionally slow image loading; fix it and compare sec/step.

## Source anchors
- PyTorch Performance Tuning Guide: https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
- Hugging Face Transformers single GPU performance: https://huggingface.co/docs/transformers/perf_train_gpu_one

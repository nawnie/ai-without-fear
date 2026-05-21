# Pass 14 Source Anchors — Optimization and Training Dynamics

These are source anchors for the RAG. Use the primary papers/docs when expanding Volume 2 prose.

- PyTorch Performance Tuning Guide — https://docs.pytorch.org/tutorials/recipes/recipes/tuning_guide.html
- Hugging Face Transformers GPU training performance guide — https://huggingface.co/docs/transformers/perf_train_gpu_one
- Hugging Face gradient checkpointing docs — https://github.com/huggingface/transformers/blob/main/docs/source/en/grad_checkpointing.md
- NVIDIA Mixed Precision Training Guide — https://docs.nvidia.com/deeplearning/performance/mixed-precision-training/index.html
- Adam: A Method for Stochastic Optimization — https://arxiv.org/abs/1412.6980
- Decoupled Weight Decay Regularization / AdamW — https://arxiv.org/abs/1711.05101
- Batch Normalization — https://arxiv.org/abs/1502.03167
- Layer Normalization — https://arxiv.org/abs/1607.06450
- Understanding the difficulty of training deep feedforward neural networks — https://proceedings.mlr.press/v9/glorot10a.html
- How Does Batch Normalization Help Optimization? — https://arxiv.org/abs/1805.11604
- Analyzing and Reducing the Need for Learning Rate Warmup — https://arxiv.org/abs/2410.23922
- Transformers without Normalization / Dynamic Tanh — https://arxiv.org/abs/2503.10622

## Fact-check note
Some optimization advice is architecture-, scale-, and implementation-dependent. Volume 2 should mark emerging optimizer families as watchlist items unless the project has local reproducible evidence on consumer hardware.

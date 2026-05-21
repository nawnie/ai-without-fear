# Training Method Rules — Pass 06

1. Do not fine-tune facts that should be retrieved.
2. Do not preference-train without preference pairs or a scoring rubric.
3. Do not use GRPO/RL-style methods without a verifiable reward or strict evaluator.
4. Do not increase rank before checking dataset quality and target modules.
5. Do not merge adapters before testing them unmerged.
6. Do not publish a baked model without retaining base ID, adapter, config, and eval report.
7. Do not trust loss alone; always run fixed eval prompts or retrieval metrics.
8. Do not change data, LR, scheduler, rank, and optimizer in the same diagnostic pass.
9. Do not train on unclear rights/consent data unless it is marked as excluded or private research with warnings.
10. The smallest working intervention wins: RAG > prompt/template > LoRA > preference pass > full fine-tune.

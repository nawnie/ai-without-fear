# 111 — Representation Learning, Embeddings, and Metric Learning

## Core claim

A representation is a coordinate system the model learns so useful relationships become easier to measure.

## Embeddings

Embeddings are vectors representing text, images, audio, users, items, documents, or concepts.

A good embedding space places related items near each other according to the task, not according to human intuition in every possible way.

## Metric learning

Metric learning shapes distance.

Methods include:

- contrastive loss
- triplet loss
- InfoNCE-style objectives
- hard negative mining
- supervised contrastive learning

## Retrieval connection

RAG depends on embeddings and/or rerankers. If the embedding model does not encode the right notion of similarity, retrieval fails before the LLM answers.

## LoRA connection

LoRA modifies representations and transformations through low-rank updates. The adapter changes how the model maps inputs through internal spaces.

## Reader exercise

Build an embedding index for a small document set. Add hard-negative pairs and evaluate whether the retriever improves on confusing queries.

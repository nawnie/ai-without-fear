# Math for AI Practitioners — Expanded Research Notes

## Purpose
Provide enough practical math to understand embeddings, similarity, probability, loss, optimization, sampling, metrics, and model behavior without becoming a textbook.

## Canonical summary
AIWF math should be operational: enough to debug, choose settings, understand RAG similarity, interpret evaluation metrics, and reason about training behavior. The assistant should translate math into tool behavior: cosine similarity explains retrieval ranking, entropy relates to uncertainty, cross-entropy relates to language-model training, and gradients explain why data quality matters.

## In scope
- vectors and matrices
- dot product and cosine similarity
- embeddings as geometry
- probability distributions
- entropy and cross-entropy
- loss functions
- gradient descent
- normalization
- classification metrics
- regression metrics
- sampling controls
- bias/variance intuition

## Core concepts
- vector
- matrix
- embedding
- dot product
- cosine similarity
- probability
- softmax
- entropy
- cross entropy
- loss function
- gradient descent
- normalization
- precision
- recall
- F1
- ROC-AUC
- RMSE
- bias variance

## AIWF interpretation
This topic is part of the adapter's machine-memory layer. It should help an AI assistant retrieve, reason, and answer with better domain maturity than a raw small model. Use this note as source content, but prefer the canonical lane files for direct answer routing.

## Source anchors
- Stanford CS229 course: https://cs229.stanford.edu/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- scikit-learn metrics and ML docs: https://scikit-learn.org/
- Attention Is All You Need: https://arxiv.org/abs/1706.03762

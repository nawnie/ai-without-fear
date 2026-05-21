# 132 — kNN, Distance, and the Curse of Dimensionality

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Nearest-neighbor methods expose a key truth: similarity depends on representation and distance. In high dimensions, naive distance can become weak unless the representation is meaningful.

## Why this matters now

RAG systems, vector databases, embedding search, face matching, image retrieval, LoRA dataset deduplication, and hard-negative mining all rely on similarity.

## Technique notes

- Choose distance metric intentionally: cosine, Euclidean, dot product, edit distance, etc.
- Normalize vectors when cosine-like behavior is desired.
- Scale numeric features before distance-based methods.
- Use approximate nearest neighbor indexes for large corpora.
- Inspect nearest neighbors manually before trusting retrieval.

## AIWF translation

A vector search failure is often not an LLM failure. It may be an embedding, chunking, normalization, metadata, or reranking failure.

## Exercise

Build a small document retrieval set. Compare keyword search, raw embedding search, and embedding + reranker. Record failures by retrieval cause.

## Core references

- Stanford CS229 lecture notes — supervised learning, GLMs, SVMs, learning theory, ML diagnostics: https://cs229.stanford.edu/main_notes.pdf
- scikit-learn User Guide — cross-validation, model selection, scoring metrics, calibration, preprocessing, pipeline hygiene: https://scikit-learn.org/stable/user_guide.html
- scikit-learn model evaluation guide: https://scikit-learn.org/stable/modules/model_evaluation.html
- scikit-learn cross-validation guide: https://scikit-learn.org/stable/modules/cross_validation.html
- Google Machine Learning Crash Course — dataset splitting, overfitting, production framing: https://developers.google.com/machine-learning/crash-course
- Dive into Deep Learning — code/math/context bridge for deep learning: https://d2l.ai/
- Deep Learning, Goodfellow/Bengio/Courville — free online book: https://www.deeplearningbook.org/
- An Introduction to Statistical Learning — broad statistical learning bridge: https://www.statlearning.com/
- The Elements of Statistical Learning — conceptual/statistical learning reference: https://hastie.su.domains/ElemStatLearn/
- Distill, Why Momentum Really Works — optimization intuition: https://distill.pub/2017/momentum/

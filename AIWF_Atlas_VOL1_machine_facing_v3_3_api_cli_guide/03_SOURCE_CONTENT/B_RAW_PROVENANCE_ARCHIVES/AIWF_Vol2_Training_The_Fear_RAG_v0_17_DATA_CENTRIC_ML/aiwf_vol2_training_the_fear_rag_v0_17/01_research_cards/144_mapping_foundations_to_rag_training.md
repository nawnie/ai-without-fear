# 144 — Mapping ML Foundations to RAG, Embedding, and Reranker Training

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

RAG is an ML system even when no LLM weights are trained. Retrieval quality depends on representation, chunking, indexing, similarity, reranking, and eval design.

## Training levers

- Better chunking.
- Better metadata.
- Query rewriting.
- Embedding model selection.
- Domain embedding fine-tuning.
- Hard-negative mining.
- Reranker training.
- Answer-evaluation harness.

## Metrics

- Recall@k: did the right chunk appear?
- MRR: how high was the first useful chunk?
- nDCG: ranked relevance quality.
- Answer faithfulness: did the generated answer stay within retrieved evidence?
- Citation precision: do cited chunks actually support the claim?

## AIWF rule

Before blaming the chatbot, inspect the retrieved chunks. If retrieval failed, SFT is probably the wrong fix.

## Exercise

For 30 questions over the AIWF manual, record retrieved chunks, answer quality, and failure cause. Separate retrieval failure from generation failure.

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

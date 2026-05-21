# Pass 11 — Foundations and Technique Roadmap

## Purpose

This pass converts the Vol. 2 roadmap from a list of topics into a practical ML judgment curriculum. The reader should finish this block able to explain not only how to start a training run, but how to decide whether the run was valid.

## Reader outcome

By the end of this layer, the reader can:

1. Frame a problem as data + model family + objective + evidence.
2. Identify inductive bias and why a method fits or does not fit a task.
3. Build train/validation/test splits without obvious leakage.
4. Construct a baseline ladder before reaching for a large model.
5. Choose classification/regression/ranking/generation metrics by failure cost.
6. Interpret learning curves.
7. Diagnose optimizer pathologies.
8. Package a run so it can be reproduced and audited.
9. Translate ML foundations into LoRA, chatbot SFT, RAG, and release gates.

## Added card block

- 121 Pass 11 index
- 122 Learning problem formal frame
- 123 No Free Lunch and inductive bias
- 124 Data representation and feature engineering
- 125 Splits, cross-validation, leakage
- 126 Baselines, ablations, error analysis
- 127 Regression losses
- 128 Classification losses, metrics, thresholds
- 129 Calibration and uncertainty
- 130 Imbalanced data and cost-sensitive learning
- 131 Regularized linear/logistic models
- 132 kNN, distance, curse of dimensionality
- 133 Trees, forests, gradient boosting
- 134 Clustering, PCA, dimensionality reduction
- 135 Kernels, SVMs, similarity
- 136 Hyperparameter search and early stopping
- 137 SGD, momentum, AdamW, LR dynamics
- 138 Scaling, compute, data, model size
- 139 Learning curves and run debugging
- 140 Reproducibility and run packs
- 141 Fairness, validity, responsible ML foundations
- 142 Mapping foundations to LoRA training
- 143 Mapping foundations to chatbot training
- 144 Mapping foundations to RAG training
- 145 Mapping foundations to release gates

## Next roadmap change

Pass 12 should go deeper on statistical learning and generalization:

- bias/variance decomposition;
- VC dimension and capacity as intuition, not theorem dumping;
- double descent;
- data distribution and covariate/label/concept shift;
- uncertainty and confidence intervals;
- benchmark contamination;
- experimental design and significance.

Pass 13 can then return to transformers/tokenization/context with stronger foundations.

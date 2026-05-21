# 134 — Clustering, PCA, and Dimensionality Reduction

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Unsupervised methods help inspect structure, compress data, detect duplicates, and find groups, but their outputs are not ground truth unless validated.

## PCA

Principal component analysis finds directions of high variance. It is useful for compression, visualization, denoising, and understanding correlated features. High variance is not automatically high relevance.

## Clustering

- k-means assumes roughly spherical clusters and requires k.
- DBSCAN/HDBSCAN-style methods find density clusters and outliers.
- Hierarchical clustering can expose nested structure.
- Embedding clustering groups semantically similar items if the embedding is fit for purpose.

## AIWF translation

Person clustering in photo tools, LoRA dataset grouping, duplicate detection, topic clustering in RAG, and error-bucket discovery all use this family of ideas.

## Exercise

Cluster 200 image captions or support tickets. Manually label cluster quality. Identify at least three clusters that are artifacts of formatting rather than true meaning.

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

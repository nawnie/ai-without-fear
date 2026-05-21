# 123 — No Free Lunch, Inductive Bias, and Why Assumptions Matter

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

There is no universally best learner across all possible problems. A method works because its assumptions match the structure of the task. This is the practical meaning of inductive bias.

Examples:

- Linear models assume a mostly linear relation after feature transformation.
- Trees assume useful decision boundaries can be built from recursive splits.
- Convolutional nets assume locality and translation-like structure in images.
- Transformers assume sequence items can be related by attention over context.
- Diffusion models assume data can be learned through denoising trajectories.

## AIWF rule

A model architecture is not a brand identity. It is a bet about the structure of the problem.

## Practical consequences

- If the dataset is tiny and tabular, a gradient-boosted tree can beat a neural net.
- If the failure is knowledge retrieval, RAG may beat SFT.
- If the failure is visual style or identity in generation, a LoRA may be appropriate.
- If the failure is reasoning, a small LoRA may only teach phrasing while leaving core capability unchanged.

## Exercise

Pick one user problem and list three possible approaches: rules, classical ML, and foundation-model workflow. For each, write the assumption that would make it work and the assumption that would make it fail.

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

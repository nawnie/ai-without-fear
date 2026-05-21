# 142 — Mapping ML Foundations to LoRA Training

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

LoRA is adapter training, but the same ML foundations still apply: data distribution, objective, optimization, generalization, splits, metrics, and release evidence.

## Translation table

- Features → captions, tags, crops, masks, trigger tokens, image diversity.
- Labels/targets → denoising objective, prompt-image pairs, preference grids.
- Model capacity → rank, alpha, target modules, base model size.
- Regularization → dropout, augmentation, caption diversity, prior preservation, lower rank, early stopping.
- Evaluation → sample grids, held-out prompts, negative tests, trigger leakage tests, identity/style/pose separation.

## AIWF rules

- Do not train if captions are garbage.
- Do not judge only on prompts from the training set.
- Do not increase epochs before checking data diversity.
- Do not call a LoRA good if it only works at one weight and one prompt template.

## Exercise

Create a LoRA eval grid with held-out prompts that test: close-up, full body, different lighting, different background, forbidden overfit background, and style neutrality.

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

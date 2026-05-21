# 137 — Optimization Dynamics — SGD, Momentum, AdamW, and Learning Rate

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Training is optimization over a loss landscape. The optimizer determines how parameter updates move through that landscape.

## Concepts

- Gradient: local direction of steepest increase; training steps against it.
- Learning rate: step size; too low is slow or stuck, too high diverges or destabilizes.
- Momentum: accumulates velocity and can smooth zig-zagging.
- Adam/AdamW: adaptive methods scale updates using gradient statistics; AdamW decouples weight decay from the gradient update.
- Scheduler: changes the learning rate over time.
- Warmup: prevents early instability in large/deep models.
- Gradient clipping: limits extreme update spikes.

## AIWF translation

Most LoRA failures blamed on the model are really optimizer, LR, caption, rank, data size, or objective mismatch. In diffusion/video training, a learning rate that is slightly too high can destroy identity, motion, or style before loss tells a beginner what happened.

## Exercise

On a toy neural net, compare SGD, SGD+momentum, AdamW, and too-high LR. Plot train/validation loss. Label the failure modes: slow, oscillating, diverging, overfitting.

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

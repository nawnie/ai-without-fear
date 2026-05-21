# 129 — Calibration, Uncertainty, and Confidence

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

A model can be accurate but badly calibrated. Calibration asks whether confidence scores mean what they claim. If a model says “80% confident” on 100 cases, about 80 should be correct in a calibrated system.

## Important distinction

- **Discrimination:** can the model rank correct cases above incorrect cases?
- **Calibration:** do the probabilities correspond to real frequencies?

## Techniques

- Reliability diagrams.
- Brier score.
- Expected calibration error as an approximate summary.
- Platt scaling / sigmoid calibration.
- Isotonic calibration.
- Temperature scaling for neural nets.
- Abstention thresholds and “I don’t know” policies.

## AIWF translation

For chatbots, confidence is usually not a calibrated probability unless explicitly trained and evaluated. For RAG, citation presence does not automatically mean groundedness. For image/video, a good-looking output is not confidence.

## Exercise

Train a classifier, plot predicted probabilities in bins, and compare predicted confidence to observed correctness. Then calibrate and rerun.

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

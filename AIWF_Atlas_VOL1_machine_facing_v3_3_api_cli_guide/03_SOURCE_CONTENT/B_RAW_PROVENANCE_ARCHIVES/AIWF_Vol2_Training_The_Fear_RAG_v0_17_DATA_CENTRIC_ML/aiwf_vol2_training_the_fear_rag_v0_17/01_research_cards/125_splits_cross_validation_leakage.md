# 125 — Train/Validation/Test Splits, Cross-Validation, and Leakage

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Evaluation is only meaningful when the model is tested on evidence it did not get to memorize, tune against, or indirectly see.

## Split roles

- **Training set:** used to update parameters.
- **Validation set:** used to choose settings, checkpoints, thresholds, and early stopping.
- **Test set:** used once at the end for a final estimate.
- **Production shadow set:** real-world drift check after release.

## Leakage types

- Duplicate examples across splits.
- Near-duplicates across splits.
- Same person/object/scene in train and test for identity tasks.
- Prompt, label, or answer text appearing in the input.
- Time leakage where future information appears in training.
- Preprocessing fitted before splitting.
- Dataset cleaning decisions made after looking at the test set.

## AIWF rule

A pretty eval is worthless if the model saw the answer through a side door.

## Technique notes

- Use grouped splits when one subject, customer, video, source document, or scene produces many examples.
- Use time-based splits for forecasting or logs.
- Use stratified splits when class balance matters.
- Use cross-validation for small classical ML datasets, but remember that hyperparameter search over CV still needs a final holdout when stakes are high.

## Exercise

Given 500 customer tickets from 40 customers, design a split that prevents the same customer from appearing in both train and test.

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

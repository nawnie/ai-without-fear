# 124 — Data Representation and Feature Engineering

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

Models do not see reality. They see representations. A huge part of training is deciding what information reaches the learner and in what form.

## Classical ML representation

- Numeric features may need scaling, clipping, binning, or log transforms.
- Categorical features may need one-hot, ordinal, hashing, target encoding, or embeddings.
- Text can be bag-of-words, TF-IDF, dense embeddings, token sequences, or instruction messages.
- Images become pixels, latents, captions, masks, tags, crops, or multimodal pairs.
- Video becomes frames, clips, motion buckets, captions, optical/motion cues, and temporal metadata.

## AIWF translation

LoRA captioning is feature engineering. Chat templates are feature engineering. RAG chunking is feature engineering. Prompt formatting is feature engineering. Mask generation for inpainting is feature engineering.

## Failure signatures

- The model learns irrelevant filenames or watermarks.
- The model learns background instead of subject.
- The chatbot learns formatting but not reasoning.
- The classifier overfits to timestamps, customer names, or location markers.
- The video model learns static appearance but not motion.

## Exercise

Take a messy folder of 50 images. Build three representations: raw captions, cleaned captions, and structured tag columns. Predict which will train cleaner and why before training.

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

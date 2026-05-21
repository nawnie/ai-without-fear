# 143 — Mapping ML Foundations to Chatbot Training

**Snapshot:** March 2026  
**Layer:** ML foundations / facts / techniques  
**Use in AIWF Vol. 2:** This card should be chunked as theory + practical training doctrine.

## Core idea

LLM fine-tuning is still supervised learning or preference optimization over examples. The model learns patterns in the dataset and template, not the user’s intent by magic.

## Translation table

- Features → tokens, chat template, system prompt, retrieved context, tool traces.
- Labels → assistant responses, preference winners, tool-call targets.
- Splits → held-out conversations, held-out documents, held-out task families.
- Baselines → prompt-only, RAG-only, small SFT, full SFT, preference-tuned.
- Metrics → task accuracy, refusal correctness, style adherence, grounding, citation support, regression tests.

## AIWF rules

- Use RAG before fine-tuning when failure is missing knowledge.
- Use SFT when failure is behavior format, domain style, or procedure imitation.
- Use preference data when the model knows both answers but chooses the worse one.
- Use evals before training so you know what broke.

## Exercise

Build a 50-question private eval set for an AIWF tutor. Include answerable, unanswerable, citation-needed, safety-boundary, and trick prompt cases.

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

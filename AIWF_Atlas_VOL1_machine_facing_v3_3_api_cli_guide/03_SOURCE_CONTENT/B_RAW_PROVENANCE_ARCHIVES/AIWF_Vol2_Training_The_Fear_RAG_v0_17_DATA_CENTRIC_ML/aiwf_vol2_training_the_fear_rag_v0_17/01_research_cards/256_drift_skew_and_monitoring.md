# 256 — Drift, Skew, and Monitoring

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Definitions
- Training-serving skew: training data and inference data are processed or distributed differently.
- Data drift: input distribution changes over time.
- Concept drift: the relationship between input and target changes.

## AIWF rule
Training is not finished at export. A deployed model needs a way to notice when the world changes.

## Local version
Even without production infrastructure, compare new data against the training dataset: distribution, embeddings, class ratios, caption vocabulary, image resolution, audio duration, and failure examples.

## Sources
- Evidently GitHub: https://github.com/evidentlyai/evidently
- Evidently data drift docs: https://docs.evidentlyai.com/metrics/preset_data_drift
- Data Validation for Machine Learning: https://mlsys.org/Conferences/2019/doc/2019/167.pdf

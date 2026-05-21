# 249 — Data Leakage Deep Taxonomy

**Pass:** 17  
**Snapshot:** March 2026  
**Layer:** Data-centric ML / dataset engineering / governance  
**Status:** RAG research note

## Leakage types
- preprocessing before split
- target leakage
- duplicate/near-duplicate leakage
- time leakage
- group leakage
- metadata leakage
- prompt-template leakage
- benchmark contamination
- evaluation-set training by repeated tuning

## Practical test
Ask: could this feature, caption, example, or transformation contain information unavailable at inference time?

## AIWF rule
Every reported score needs a leakage note.

## Sources
- scikit-learn common pitfalls and leakage guidance: https://scikit-learn.org/stable/common_pitfalls.html

# 170 — Experimental Design and Ablation

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

An ablation removes or changes one component to test causal contribution. Without controlled experiments, training improvements are guesswork.

## Technique rules

Change one thing at a time, keep seeds/splits/eval fixed, record config diffs, run enough repeats for noisy metrics, and preserve failed runs.

## AIWF mapping

Ablation is how Vol. 2 teaches rank, learning rate, caption quality, dataset size, scheduler, augmentation, and training length.

## Exercise

Run a 2x2 ablation: low/high learning rate and clean/noisy captions. Write what each factor changed.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/

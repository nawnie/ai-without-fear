# 147 — Population Risk vs Sample Risk

**Snapshot:** March 2026  
**Layer:** Statistical learning / generalization / college-postgrad ML  
**Use in AIWF Vol. 2:** Chunk as theory + technique + lab doctrine.

## Core idea

Population risk is what we want. Sample risk is what we can measure. Generalization is the gap between the two.

## Failure mode

A tiny curated dataset can produce beautiful training loss and useless deployment behavior. This is the same reason a character LoRA can memorize 20 images but fail on new poses.

## AIWF doctrine

Do not ask whether a model learned the dataset. Ask whether the dataset represented the task.

## Exercise

Build two train/test splits from the same data: random split and grouped split. Compare the apparent performance gap.

## Core references

- Understanding Machine Learning: From Theory to Algorithms — Shalev-Shwartz & Ben-David: https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf
- An Introduction to Statistical Learning: https://www.statlearning.com/
- The Elements of Statistical Learning: https://hastie.su.domains/ElemStatLearn/
- Stanford CS229 notes: https://cs229.stanford.edu/main_notes.pdf
- Deep Learning book: https://www.deeplearningbook.org/

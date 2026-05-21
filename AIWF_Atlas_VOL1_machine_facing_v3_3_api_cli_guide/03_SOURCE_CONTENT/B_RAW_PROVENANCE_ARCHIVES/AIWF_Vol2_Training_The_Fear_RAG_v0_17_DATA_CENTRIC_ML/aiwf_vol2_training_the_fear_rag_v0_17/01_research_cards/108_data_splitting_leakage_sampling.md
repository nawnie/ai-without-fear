# 108 — Data Splitting, Leakage, and Sampling

## Core claim

Bad splits create fake intelligence.

## Split types

- random split: common baseline; dangerous when near-duplicates exist
- grouped split: keeps related samples together
- time split: trains on past, validates on future
- stratified split: preserves class proportions
- leave-one-group-out: tests generalization to unseen entities/sites/users

## Leakage examples

- same person or object appears in train and test
- near-duplicate images across splits
- future data included in training
- label appears inside metadata or filename
- preprocessing fitted on full dataset before split
- generated synthetic examples too similar to test items

## Sampling concepts

- class imbalance
- hard negatives
- oversampling/undersampling
- distribution shift
- active learning

## AIWF rule

Split by the unit of generalization. If the model must work on unseen people, split by person. If it must work on future weeks, split by time.

## Reader exercise

Create two validation splits for the same dataset: random and grouped. Compare performance. Explain which one is honest.

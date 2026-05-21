# AIWF Pedagogy and Exercise Design — Vol. 2

## Vol. 1 teaching pattern to preserve

Volume I uses controlled first wins, decision trees, common-problem fixes, practical parameter recipes, and practice ladders. Vol. 2 should preserve this structure, but each lab should now teach research habits: controlled variables, evidence capture, comparison, and release criteria.

## Exercise ladder

| Tier | Name | Reader action | Evidence produced |
|---|---|---|---|
| 1 | Concept check | Explain or identify a principle | Short answer / annotated diagram |
| 2 | Micro-lab | Run a tiny experiment | Chart/table/screenshot |
| 3 | Debug lab | Diagnose a broken run | Failure tag + fix plan |
| 4 | Build lab | Create a small training artifact | Dataset/model/eval pack |
| 5 | Capstone | Solve a realistic workflow | Release memo + reproducible run pack |

## Lab design rules

1. Every lab must have a success condition.
2. Every lab must save evidence.
3. Every lab must have a controlled-variable version.
4. Every lab must include at least one expected failure.
5. Every lab should produce something useful for the reader's future work.

## Examples

### Dataset leakage lab

Goal: Show why train/test leakage makes scores dishonest.

Steps:

1. Build a tiny text classifier.
2. Evaluate with a clean split.
3. Duplicate near-identical examples across train/test.
4. Evaluate again.
5. Compare the score change.
6. Write a release note explaining why the leaked score is invalid.

Evidence: split manifest, metric table, leakage notes.

### LoRA overfit lab

Goal: Show what overtraining does to a small concept LoRA.

Steps:

1. Train a conservative LoRA.
2. Train an overfit LoRA with too many repeats/epochs.
3. Generate the same test prompt with both.
4. Compare identity/style strength, flexibility, artifacts, and prompt obedience.

Evidence: settings, sample grid, failure tags, preferred checkpoint.

### RAG vs fine-tune lab

Goal: Show why private facts often belong in retrieval, not weights.

Steps:

1. Ask base model about private docs; record failure.
2. Add docs to RAG; record answer quality.
3. Fine-tune small adapter on the same facts; record brittleness/hallucination risk.
4. Write decision memo.

Evidence: prompt log, retrieved chunks, answer scoring, decision memo.

## Vol. 2 capstone sequence

1. Build a dataset from source material.
2. Audit consent/license/provenance.
3. Clean and split the data.
4. Train a small adapter or retriever.
5. Evaluate against a baseline.
6. Red-team the output.
7. Package the release with model card/dataset card.
8. Write a release memo.

## Exercise tone

Exercises should feel like lab work, not homework. Use direct, operational language:

- "Run this."
- "Save the chart."
- "Change only one variable."
- "Write down what changed."
- "Do not trust the score until you check leakage."

## The final reader outcome

By the end of Vol. 2, the reader should be able to say:

I can train small systems responsibly, understand why they fail, evaluate whether they improved, and package the result so another person can reproduce or audit what I did.

# Exercise Ladder — Vol. 2

The book should teach college/postgrad-level competence through labs, not just explanation. Each lab must produce an artifact the reader can save: dataset card, run log, plot, eval table, model card, or release decision.

## Level 1 — Concept labs

Small, runnable exercises that prove a single idea.

- Plot train vs validation loss.
- Create a deliberate data leak and detect it.
- Compare MSE vs MAE on outliers.
- Demonstrate class imbalance and threshold tuning.
- Tokenize the same sentence across multiple tokenizers.
- Show nearest-neighbor retrieval with good and bad embeddings.

## Level 2 — Technique labs

Exercises that use realistic tools but narrow scope.

- Train logistic regression, tree, and small MLP baselines on the same dataset.
- Tune learning rate and batch size on a small neural network.
- Build a deduplication pass for a text dataset.
- Build a caption-quality audit for an image dataset.
- Train a tiny LoRA or adapter where feasible.
- Build a RAG eval set with hard negatives.

## Level 3 — Failure labs

The reader intentionally breaks systems and learns the signature.

- Overfit a model on purpose.
- Train with noisy labels.
- Train with bad LR until divergence.
- Quantize a model and measure behavior drift.
- Merge adapters and detect regressions.
- Build a benchmark that is accidentally contaminated.

## Level 4 — Evaluation labs

The reader stops trusting pretty samples.

- Build confusion matrices and calibration plots.
- Compare accuracy, precision, recall, F1, AUROC, and PR-AUC.
- Run a retrieval eval using recall@k and MRR.
- Create a small human-eval rubric.
- Red-team a chatbot for instruction-following failures.
- Evaluate an image LoRA for identity/style leakage and concept drift.

## Level 5 — Capstones

Each capstone ends in a release/reject memo.

### Capstone A — Classical ML

Train a tabular model. Produce dataset audit, baseline comparison, validation report, and deployment note.

### Capstone B — RAG/Retriever

Build a small local knowledge base. Train or select embeddings/reranker. Evaluate with query set and hard negatives.

### Capstone C — LLM Adapter

Prepare a small instruction dataset. Train an adapter with an existing trainer. Evaluate against base model and reject cherry-picked-only claims.

### Capstone D — Image LoRA

Prepare images and captions. Train a LoRA. Evaluate prompt adherence, overfit, style bleed, and release safety.

### Capstone E — Responsible Release

Create model card, dataset card, risk register, consent/provenance table, and rollback plan.

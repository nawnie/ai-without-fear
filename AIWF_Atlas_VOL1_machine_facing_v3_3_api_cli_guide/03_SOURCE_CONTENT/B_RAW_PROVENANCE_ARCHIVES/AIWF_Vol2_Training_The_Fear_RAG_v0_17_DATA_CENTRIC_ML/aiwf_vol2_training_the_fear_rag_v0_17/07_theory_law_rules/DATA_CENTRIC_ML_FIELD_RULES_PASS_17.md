# Data-Centric ML Field Rules — Pass 17

**Snapshot:** March 2026  
**Purpose:** Rules for Vol. 2 authors/editors so dataset engineering is taught as a core training discipline, not as cleanup.

## Rules

1. **Task before data.** Define the target behavior before collecting or formatting examples.
2. **Data is decisions.** Every file, label, caption, split, and exclusion encodes a decision.
3. **Split by the leakable unit.** Person, document, scene, source, user, time, or topic may matter more than row count.
4. **Dedup before split; contam-check after split.** Duplicates and near-duplicates inflate scores.
5. **Schema first, trainer second.** Invalid data should be blocked before it reaches a training loop.
6. **Labels are model instructions.** Captions, assistant responses, preference pairs, transcripts, and class labels all train behavior.
7. **Synthetic data must be marked.** Never let synthetic, human, and corrected data become indistinguishable.
8. **Consent has scope.** Possession, private training, public release, and demo use are different permissions.
9. **Dataset cards are run evidence.** Even local projects need documentation.
10. **A model cannot generalize past an invalid evaluation set.** Evaluation design is part of training.

## Key source anchors
- scikit-learn leakage guidance: https://scikit-learn.org/stable/common_pitfalls.html
- TensorFlow Data Validation: https://www.tensorflow.org/tfx/data_validation/get_started
- Hugging Face Dataset Cards: https://huggingface.co/docs/hub/datasets-cards
- Snorkel weak supervision: https://pmc.ncbi.nlm.nih.gov/articles/PMC5951191/
- Evidently drift monitoring: https://docs.evidentlyai.com/metrics/preset_data_drift

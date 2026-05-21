# Fact-Check and Source Rules — v0.8

## Source hierarchy

Prefer sources in this order:

1. Official repository README/docs.
2. Official paper or technical report.
3. Official project documentation site.
4. Maintainer discussions/issues when docs are incomplete.
5. Hugging Face model/dataset cards.
6. Community tutorials only as implementation examples, not primary truth.

## What must be rechecked often

- Supported model families.
- VRAM estimates.
- Install commands.
- Python/Torch/CUDA requirements.
- Dataset formats.
- License terms.
- Safety/disclosure requirements.
- Active vs abandoned repository status.

## What can be treated as slower-moving

- Core concepts: loss, gradient descent, epochs, batches.
- General PEFT theory.
- General dataset-quality principles.
- Documentation patterns such as model cards and datasheets.

## Required future-source fields

Each new research card should eventually include:

- `Primary sources`
- `Last checked`
- `Claims needing recheck`
- `Consumer hardware notes`
- `AIWF decision`

## Do not overclaim

A repo supporting a method does not mean that method is beginner-friendly, current on Windows, compatible with every model, or realistic on a 16GB card.

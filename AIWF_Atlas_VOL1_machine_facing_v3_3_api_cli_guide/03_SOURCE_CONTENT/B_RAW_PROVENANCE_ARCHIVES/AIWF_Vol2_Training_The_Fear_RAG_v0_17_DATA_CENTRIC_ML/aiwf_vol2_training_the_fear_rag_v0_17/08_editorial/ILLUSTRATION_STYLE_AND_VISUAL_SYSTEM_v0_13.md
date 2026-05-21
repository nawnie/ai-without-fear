# AIWF Illustration Style and Visual System — Vol. 2

## Source visual language from Vol. 1

Vol. 1 establishes a locked visual style: dark-tech / neon blue / clean vector. Diagrams are not decoration; they are cognitive scaffolding. The visual system uses dark backgrounds, cyan/electric-blue lines, rounded boxes, arrows, ladders, and simple icons to turn intimidating systems into navigable maps.

Vol. 1's visual tiers are a useful production rule:

| Tier | Purpose | Ownership |
|---|---|---|
| Tier 1 | Core system diagrams | Brand-owned generated visuals |
| Tier 2 | Parameter references / measurable data | External or research-backed sources with credit |
| Tier 3 | Real-world screenshots | User captured / tool-specific evidence |

Vol. 2 should keep the same tiering but add a fourth optional tier:

| Tier 4 | Lab evidence visuals | User-generated charts from exercises: loss curves, confusion matrices, calibration plots, eval tables |

## Visual categories for Vol. 2

1. **Concept diagrams**
   - learning pipeline
   - data -> model -> loss -> optimizer -> weights
   - overfit/underfit
   - bias/variance
   - generalization gap
   - train/validation/test split

2. **Process ladders**
   - dataset quality ladder
   - LoRA training ladder
   - eval maturity ladder
   - release readiness ladder
   - consumer hardware ladder

3. **Failure signature panels**
   - loss explosion
   - memorization
   - catastrophic forgetting
   - mode collapse
   - reward hacking
   - hallucination after fine-tune
   - style bleed in LoRA
   - overfit voice clone

4. **Decision trees**
   - RAG vs fine-tune vs prompt engineering
   - LoRA vs full fine-tune vs adapter merge
   - when to stop training
   - which metric to trust
   - whether a dataset is legally usable

5. **Lab outputs**
   - training curve screenshot
   - before/after eval table
   - dataset audit report
   - confusion matrix
   - calibration curve
   - retrieval evaluation grid

## Vol. 2 visual style prompts

### General diagram prompt template

Dark navy technical field manual infographic, clean vector style, cyan and electric-blue accents, high contrast, rounded rectangular nodes, thin glowing arrows, minimal clutter, precise labels, educational diagram, AI Without Fear field manual aesthetic.

### Loss curve prompt

Dark navy technical chart showing training loss and validation loss over epochs, cyan training line, electric-blue validation line, annotated regions for underfitting, good fit, overfitting, clean grid, field manual style, readable labels.

### Dataset pipeline prompt

Dark navy horizontal pipeline diagram: Raw Data -> Consent/License Check -> Dedup/PII Scan -> Label/Caption QA -> Train/Validation/Test Split -> Training Run Pack, cyan boxes, electric-blue arrows, small icons for document, shield, broom, tag, split, GPU.

### Failure panel prompt

Four-panel technical failure atlas on dark navy background, each panel with a simple schematic and label: Overfit, Data Leakage, Reward Hacking, Catastrophic Forgetting. Cyan line art, red warning accents only where necessary, clean field manual style.

## Do / don't

Do:

- use diagrams to reduce cognitive load;
- show loops and decision paths;
- label every visual with a practical takeaway;
- include source credit under every external or generated image;
- use real screenshots only when they demonstrate tool reality.

Do not:

- add abstract AI art as filler;
- use inconsistent color palettes;
- overpack a diagram with more than 7 major nodes;
- make the mascot carry advanced theory alone;
- use unlabeled screenshots that a beginner cannot interpret.

## Visual continuity rule

Every chapter should have at least one anchor diagram that can be recognized as an AIWF visual even out of context. Same dark field-manual surface. Same cyan/electric-blue control logic. Same practical caption style.

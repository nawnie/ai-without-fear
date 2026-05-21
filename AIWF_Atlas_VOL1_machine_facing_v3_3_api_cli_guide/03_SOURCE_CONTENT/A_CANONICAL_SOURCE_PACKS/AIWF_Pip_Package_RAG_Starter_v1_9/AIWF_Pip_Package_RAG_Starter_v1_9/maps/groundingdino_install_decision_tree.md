# GroundingDINO Install Decision Tree

## First question
Do we need a custom GroundingDINO repo/node, or only text-guided object detection inference?

## Prefer the low-risk route when possible
Use the Hugging Face Transformers Grounding DINO path when:
- The goal is inference only.
- We need open-vocabulary boxes for masking.
- We do not need a specific custom node's repo layout.
- The user is on Windows and wants low-friction setup.

## Use repo/editable/native route only when required
Use repo/editable installs when:
- A custom node imports a local `groundingdino` layout.
- A workflow depends on code not exposed through Transformers.
- The node author documents a working version/commit.

## AIWF rule
Do not make users compile GroundingDINO unless there is no cleaner route. For beginner workflows, box detection through Transformers plus SAM/SAM2 mask refinement is usually safer.

# Workflow Default Prompt Template

Use this when creating a new AIWF default prompt for a workflow, app mode, RAG process, ComfyUI helper, Gradio tool, or release QA agent.

## Required Sections

1. **Role** — what the assistant is responsible for.
2. **Retrieve First** — ordered sources/lanes/tools.
3. **Rules** — operational boundaries and safety constraints.
4. **Output Shape** — stable structure for answers.
5. **AIWF Tone** — practical, source-aware, human-centered, light humor only when safe.

## Brand Requirements

- The human remains the decision-maker.
- Sources outrank vibes.
- Safe defaults come before advanced toggles.
- Humor should reduce panic, not reduce precision.
- Mascot/Torchie comments are optional and should never replace the fix.

## Mini Skeleton

```markdown
# Default Prompt — [Workflow Name]

## Role
[What this mode does.]

## Retrieve First
1. [Primary lane]
2. [Secondary lane]
3. [Raw source when exactness matters]

## Rules
- [Rule]
- [Rule]

## Output Shape
1. [Section]
2. [Section]

## AIWF Tone
[Short voice note.]
```

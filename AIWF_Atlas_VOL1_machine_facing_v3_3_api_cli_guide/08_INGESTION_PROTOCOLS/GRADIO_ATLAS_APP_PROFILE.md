# Gradio Atlas App Profile

This profile defines how a Gradio app should expose the adapter to an AI assistant or developer tool.

## Recommended UI areas

A builder-facing app can expose:

- query box
- retrieved context panel
- lane filter
- source priority selector
- confidence display
- citation/source list
- raw chunk viewer
- answer draft
- evaluation/debug tab

## Recommended backend behavior

1. Load adapter profile JSON.
2. Load machine read-first instructions.
3. Build index from Atlas cards and canonical lanes.
4. Add source archive as lower-priority fallback.
5. Show retrieved chunks before final answer when debugging is enabled.
6. Log failed retrievals into a gap queue.

## Minimal app modes

- `Ask`: normal answer mode
- `Diagnose`: failure-signature and troubleshooting mode
- `Build`: workflow/app design mode
- `Research`: source comparison and gap analysis mode
- `Eval`: benchmark and regression mode

## Do not expose by default

Do not make casual users browse the entire archive. The archive is for AI and builder tooling. Human-facing UI should show answers, retrieved evidence, confidence, and next action.

# QA Test Prompts — Python/Pip Runtime Dependencies and Local AI Environment Support

Use these prompts to test whether this lane retrieves the right knowledge instead of vague adjacent content.

## Test 1

**Prompt:** Why did a ComfyUI custom node fail to import?

**Expected retrieval:** concept card + canonical overview + relevant source folder.

## Test 2

**Prompt:** Which package cluster owns this error?

**Expected retrieval:** concept card + canonical overview + relevant source folder.

## Test 3

**Prompt:** Can this Gradio module use a separate venv?

**Expected retrieval:** concept card + canonical overview + relevant source folder.

## Test 4

**Prompt:** What should the one-click installer test before launch?

**Expected retrieval:** concept card + canonical overview + relevant source folder.

## Negative control

Ask a question that belongs to a different lane. The assistant should route away instead of forcing this lane to answer.

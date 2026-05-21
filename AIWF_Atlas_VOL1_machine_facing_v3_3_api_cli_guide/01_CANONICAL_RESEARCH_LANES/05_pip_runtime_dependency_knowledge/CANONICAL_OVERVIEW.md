# Canonical Overview — Python/Pip Runtime Dependencies and Local AI Environment Support

## Core idea

    Runtime failures are cluster failures, not isolated package failures; AIWF support should reason across Python, Torch, CUDA, cuDNN, ONNX, media, web server, and native build boundaries.

## Operational model

The lane should be used as a decision layer, not just a library of facts. The assistant should first identify the user's task, then retrieve the relevant concept card, then check the source/provenance folder, then produce an action with a safety or validation step when needed.

## Main concepts

- venv island
- wheelhouse
- ABI boundary
- CUDA wheel family
- provider mismatch
- native build toolchain
- import smoke test
- package cluster
- external binary dependency

## Common retrieval questions

- Why did a ComfyUI custom node fail to import?
- Which package cluster owns this error?
- Can this Gradio module use a separate venv?
- What should the one-click installer test before launch?

## Practical AIWF decision posture

- **Use** existing projects when they already solve the problem cleanly.
- **Wrap** existing projects when AIWF can make them safer, clearer, or easier for beginners.
- **Document** existing behavior when the main value is explanation and failure prevention.
- **Build** only when a real gap remains after repo/package/workflow evaluation.

## Stable vs fast-moving knowledge

    Stable: concepts, failure categories, task boundaries, metadata requirements, and validation habits.
    Fast-moving: package versions, ComfyUI node schemas, model file names, API-only vs open-weight model status, install commands, and repo maintenance status.

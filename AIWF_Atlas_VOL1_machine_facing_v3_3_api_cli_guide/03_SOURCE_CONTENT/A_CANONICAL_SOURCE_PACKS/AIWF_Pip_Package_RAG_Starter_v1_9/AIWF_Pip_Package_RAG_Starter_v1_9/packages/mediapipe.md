# mediapipe

## RAG purpose
Pose/face/hand/vision task preprocessing package from Google MediaPipe.

## Why AI Without Fear cares
This package appears in the AI Without Fear / ComfyUI / local-AI tooling ecosystem. The RAG should know what it does, whether it belongs in runtime, training, RAG, dev, or custom-node environments, and what to check before adding it to a one-click install.

## Common import patterns
- `mediapipe`

## Install / pinning notes
Check wheel/Python support; not a diffusion model dependency.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -m pip show mediapipe
python -c "import importlib; m=importlib.import_module('mediapipe'); print('mediapipe import ok', getattr(m, '__version__', 'version not exposed'))"
```

## Common failure signatures
- Wrong venv / package installed outside the active interpreter
- Package installs but import name differs from pip name
- Version skew with neighboring packages in the same dependency cluster

## Dependency cluster notes
Category: `pose_face_hand_tracking`. Treat this as part of its dependency family, not as an isolated pip name. Confirm adjacent packages before blaming the node or model.

## Source context
Added in v0.9 custom-node/training/web package expansion.

## RAG tags
`pip-package`, `v0.9-custom-node-training-web-deps`, `high`, `medium`, `windows-ai`, `pose_face_hand_tracking`

## Source URLs
- https://pypi.org/project/mediapipe/
- https://ai.google.dev/edge/mediapipe/solutions/setup_python

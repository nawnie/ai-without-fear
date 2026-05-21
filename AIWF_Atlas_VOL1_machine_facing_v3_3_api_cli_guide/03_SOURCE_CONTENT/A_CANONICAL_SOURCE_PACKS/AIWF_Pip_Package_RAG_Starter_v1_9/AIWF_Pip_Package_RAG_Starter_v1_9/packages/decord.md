# decord

## RAG purpose
Efficient video loader designed for deep-learning workloads, random frame access, slicing, and batch retrieval.

## Why AI Without Fear cares
Useful for video training/evaluation datasets where repeatedly decoding frames with slow general-purpose tooling becomes the bottleneck.

## Common import patterns
- `decord`

## Install / pinning notes
Project/release cadence and wheel availability can be a concern. Validate Python/OS wheels before putting it in beginner one-click installs.

## Windows / ComfyUI risk level
**high**

## Quick diagnostic commands
```powershell
python -c 'import decord; print(decord.__version__ if hasattr(decord, "__version__") else "decord import ok")'
```

## Common failure signatures
- No wheel for current Python/Windows combo
- FFmpeg/libav backend mismatch
- GPU decode expectations not met
- Old package conflicts with modern Python choices

## Dependency cluster notes
Video dataset cluster: decord competes with PyAV/OpenCV/imageio for frame extraction; use when random access and training throughput matter.

## Source context
Video dataset/training research; frame sampling; VQA/video loaders.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `high`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://github.com/dmlc/decord
- https://pypi.org/project/decord/
- https://cv.gluon.ai/build/examples_action_recognition/decord_loader.html

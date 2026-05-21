# moviepy

## RAG purpose
High-level Python video editing library for clips, cuts, overlays, audio, compositing, and export.

## Why AI Without Fear cares
Useful for AIWF lesson/video generation tooling, preview creation, shorts/longform assembly, and simple post-processing where direct FFmpeg command graphs are too low-level.

## Common import patterns
- `moviepy`

## Install / pinning notes
Depends on FFmpeg for video reading/writing and preview tooling. Keep it in a media/tooling venv when possible; do not mix blindly into core ComfyUI runtime.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import moviepy; print(moviepy.__version__)"
```
```powershell
python -c 'from moviepy import VideoFileClip; print("moviepy import ok")'
```

## Common failure signatures
- FFmpeg missing or not downloadable
- Import path differences between major versions
- Audio/video codec mismatch on export
- Temporary files fill disk during render

## Dependency cluster notes
High-level media editing cluster: moviepy + imageio + imageio-ffmpeg + numpy + Pillow.

## Source context
AIWF video lessons pipeline; rendered guide clips; simple video assembly utilities.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://zulko.github.io/moviepy/
- https://zulko.github.io/moviepy/getting_started/install.html
- https://github.com/Zulko/moviepy

# ffmpeg-python

## RAG purpose
Pythonic builder for FFmpeg command graphs; it does not replace the FFmpeg executable itself.

## Why AI Without Fear cares
Useful for deterministic video/audio transforms, filters, metadata extraction, concat/remux/transcode steps, and advanced media automation in AIWF pipelines.

## Common import patterns
- `ffmpeg`

## Install / pinning notes
Install the Python wrapper and verify a real ffmpeg executable is available on PATH or explicitly configured.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c 'import ffmpeg; print("ffmpeg-python import ok")'
```
```powershell
ffmpeg -version
```

## Common failure signatures
- Python import works but ffmpeg executable missing
- Windows PATH issue
- Filter graph syntax errors
- Codec unsupported by installed ffmpeg build

## Dependency cluster notes
FFmpeg command cluster: ffmpeg-python builds commands; imageio-ffmpeg may supply binary; system ffmpeg controls codec availability.

## Source context
Workflow post-processing, lesson-video pipeline, media transforms, batch scripts.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://kkroening.github.io/ffmpeg-python/
- https://github.com/kkroening/ffmpeg-python
- https://ffmpeg.org/ffmpeg.html

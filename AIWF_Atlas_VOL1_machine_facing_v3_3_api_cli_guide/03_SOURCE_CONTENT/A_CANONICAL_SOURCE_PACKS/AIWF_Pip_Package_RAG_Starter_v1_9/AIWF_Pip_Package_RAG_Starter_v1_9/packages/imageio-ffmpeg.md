# imageio-ffmpeg

## RAG purpose
Simple FFmpeg wrapper used by ImageIO/MoviePy-style video read/write paths.

## Why AI Without Fear cares
Useful for one-click workflows because platform wheels can include the FFmpeg executable, avoiding a separate manual ffmpeg install for many simple cases.

## Common import patterns
- `imageio_ffmpeg`

## Install / pinning notes
Package can be large because wheels may contain ffmpeg binaries. Still validate codec behavior; included binary is not the same as full system FFmpeg installation policy.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import imageio_ffmpeg; print(imageio_ffmpeg.get_ffmpeg_exe())"
```

## Common failure signatures
- FFmpeg executable path not found
- Antivirus/firewall blocks bundled executable
- Codec/container unsupported by bundled build
- Large wheel slows install

## Dependency cluster notes
FFmpeg wrapper cluster: imageio-ffmpeg supplies/locates ffmpeg for imageio/MoviePy patterns; ffmpeg-python only builds command graphs.

## Source context
Video export/read helpers; MoviePy/ImageIO dependency path; beginner-friendly media support.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `low`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://github.com/imageio/imageio-ffmpeg
- https://pypi.org/project/imageio-ffmpeg/
- https://imageio.readthedocs.io/en/v2.34.2/_autosummary/imageio.plugins.ffmpeg.html

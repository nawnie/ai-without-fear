# av

## RAG purpose
PyAV bindings for FFmpeg/LibAV media containers, streams, packets, codecs, frames, and direct video/audio decode/encode work.

## Why AI Without Fear cares
Useful when workflows need frame-accurate video I/O instead of high-level wrappers. It can bridge video frames to NumPy/Pillow and is relevant to ComfyUI video pipelines, dataset extraction, and VQA/video analysis.

## Common import patterns
- `av`

## Install / pinning notes
Prefer available wheels. Treat source builds as native-extension work requiring FFmpeg headers/libs and compiler sanity. Do not assume the system ffmpeg command and PyAV bindings are the same dependency boundary.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import av; print(av.__version__)"
```
```powershell
python -c "import av; print(av.library_versions)"
```

## Common failure signatures
- Import fails because no compatible wheel/build environment
- Codec exists in system ffmpeg but not in PyAV-linked FFmpeg
- Frame color order/pixel format surprises
- Media files open but specific codec/container fails

## Dependency cluster notes
Media I/O cluster: av + imageio + imageio-ffmpeg + ffmpeg-python + external ffmpeg. Use PyAV when precise frames/streams matter.

## Source context
WAN/LTX/video workflow research; video loaders; frame extraction; media helper nodes.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://pyav.org/docs/develop/overview/installation.html
- https://pyav.basswood-io.com/docs/stable/
- https://pypi.org/project/av/

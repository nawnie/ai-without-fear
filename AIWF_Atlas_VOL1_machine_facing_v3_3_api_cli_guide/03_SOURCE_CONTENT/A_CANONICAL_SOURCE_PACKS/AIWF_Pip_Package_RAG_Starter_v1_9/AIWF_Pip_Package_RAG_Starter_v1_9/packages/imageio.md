# imageio

## RAG purpose
Image and video I/O library with plugin backends, including FFmpeg and PyAV plugins for movie formats.

## Why AI Without Fear cares
Good general-purpose read/write layer for images, GIFs, simple video, previews, dataset frame extraction, and quick scripts without directly managing FFmpeg subprocesses.

## Common import patterns
- `imageio`

## Install / pinning notes
For video, install the right backend/plugin. `imageio[ffmpeg]` pulls the FFmpeg backend path; PyAV plugin needs `av` installed.

## Windows / ComfyUI risk level
**low**

## Quick diagnostic commands
```powershell
python -c "import imageio; print(imageio.__version__)"
```
```powershell
python -c 'import imageio.v3 as iio; print("imageio v3 ok")'
```

## Common failure signatures
- Image import works but video plugin missing
- FFmpeg binary unavailable
- PyAV plugin selected but `av` missing
- Unexpected plugin behavior across imageio v2/v3 APIs

## Dependency cluster notes
Media I/O cluster: imageio chooses plugins; imageio-ffmpeg and av are distinct backends.

## Source context
Workflow/frame utilities; MoviePy dependency path; generated images/video manifests.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `low`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://imageio.readthedocs.io/
- https://imageio.readthedocs.io/en/v2.34.2/_autosummary/imageio.plugins.ffmpeg.html
- https://imageio.readthedocs.io/en/stable/_autosummary/imageio.plugins.pyav.html

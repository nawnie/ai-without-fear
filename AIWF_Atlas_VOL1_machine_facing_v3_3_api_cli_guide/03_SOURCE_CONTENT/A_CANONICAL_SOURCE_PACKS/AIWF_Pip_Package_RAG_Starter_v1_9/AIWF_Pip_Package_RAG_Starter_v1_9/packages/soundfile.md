# soundfile

## RAG purpose
Python audio file I/O package backed by libsndfile through CFFI.

## Why AI Without Fear cares
Core dependency boundary for librosa default audio loading and standalone WAV/FLAC/OGG read/write workflows.

## Common import patterns
- `soundfile`

## Install / pinning notes
Remember the package is imported as `soundfile`; native libsndfile support determines which formats work.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import soundfile as sf; print(sf.__libsndfile_version__)"
```

## Common failure signatures
- libsndfile library missing or wrong architecture
- Format not supported despite package import
- Audio load works in librosa only via fallback, masking soundfile issue

## Dependency cluster notes
Audio I/O cluster: soundfile + librosa + libsndfile; codec support is not the same as import success.

## Source context
Audio I/O for lesson/video tooling, datasets, and multimodal experiments.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://python-soundfile.readthedocs.io/
- https://pypi.org/project/soundfile/
- https://librosa.org/doc/0.11.0/ioformats.html

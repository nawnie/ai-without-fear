# librosa

## RAG purpose
Python package for music and audio analysis: loading, resampling, spectral features, MFCCs, beat/onset analysis, and audio feature extraction.

## Why AI Without Fear cares
Relevant for audio-aware video lessons, speech/music metadata, waveform/spectrogram utilities, and future multimodal training references.

## Common import patterns
- `librosa`

## Install / pinning notes
Depends on soundfile/audioread for audio I/O behavior. Some codec support belongs to external/libsndfile/FFmpeg boundaries, not pure Python.

## Windows / ComfyUI risk level
**medium**

## Quick diagnostic commands
```powershell
python -c "import librosa; print(librosa.__version__)"
```

## Common failure signatures
- sndfile/libsndfile-related load errors
- Codec unsupported by soundfile fallback path
- NumPy/SciPy/Numba version skew
- Slow audio analysis on huge files

## Dependency cluster notes
Audio analysis cluster: librosa + soundfile + numpy + scipy + optional audioread/ffmpeg paths.

## Source context
Audio extraction/analysis for video pipeline; future multimodal training/package RAG.

## RAG tags
`pip-package`, `v0.6-media-video-audio-cli-build`, `medium`, `windows-ai`, `media`, `build-tooling`, `local-ai`

## Source URLs
- https://librosa.org/doc/latest/install.html
- https://librosa.org/doc/
- https://librosa.org/doc/0.11.0/ioformats.html

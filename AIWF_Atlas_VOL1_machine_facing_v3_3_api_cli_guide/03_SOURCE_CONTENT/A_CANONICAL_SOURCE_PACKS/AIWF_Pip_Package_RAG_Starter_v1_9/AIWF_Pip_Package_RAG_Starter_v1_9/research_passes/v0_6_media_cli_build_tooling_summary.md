# v0.6 Research Pass — Media, Video, Audio, CLI, and Build Tooling

## Packages documented

`av`, `imageio`, `imageio-ffmpeg`, `moviepy`, `decord`, `librosa`, `soundfile`, `ffmpeg-python`, `matplotlib`, `rich`, `typer`, `click`, `GitPython`, `packaging`, `setuptools`, `wheel`, `ninja`, `cmake`, `pybind11`

## Why this pass matters

This batch covers the dependencies that decide whether AIWF can reliably read/write video, assemble lesson videos, analyze audio, display friendly CLI output, inspect Git repos, and explain native build failures.

## Key conclusions

- FFmpeg-related Python packages are not interchangeable. `ffmpeg-python` builds command graphs, `imageio-ffmpeg` supplies/wraps an executable path, PyAV binds FFmpeg libraries, and MoviePy uses higher-level editing abstractions.
- Audio failures should be split into analysis failures (`librosa`) and file/backend failures (`soundfile`/libsndfile/codecs).
- Decord is useful for training-style video frame sampling, but it should be validated carefully before beginner packaging because wheel/Python/OS support is the risk.
- Native build helpers are diagnostic context. Installing `cmake`, `ninja`, or `pybind11` does not magically provide a working compiler/CUDA/toolchain.

## Files added

- `maps/v0_6_media_cli_build_tooling_notes.md`
- `scripts/Test-AIWF-MediaBuildPackageSmoke.ps1`
- 19 package cards under `packages/`

# v0.6 Media, CLI, and Build Tooling Compatibility Notes

## Media/video I/O is not one dependency

Treat these as separate layers:

1. **High-level editing** — `moviepy` for clip composition and simple programmatic video assembly.
2. **Generic image/video I/O** — `imageio` plus plugins/backends.
3. **Bundled/simple FFmpeg path** — `imageio-ffmpeg`, often used by ImageIO/MoviePy-style workflows.
4. **Direct media binding path** — `av` / PyAV for FFmpeg library-level access to containers, packets, streams, codecs, and frames.
5. **Command-graph path** — `ffmpeg-python`, which builds FFmpeg commands but still needs an actual `ffmpeg` executable.
6. **Deep-learning video-loader path** — `decord`, designed for efficient/random video frame access.

RAG rule: never answer "install ffmpeg-python" when the problem is "ffmpeg executable missing." Never answer "install imageio" when the problem is a missing FFmpeg/PyAV backend.

## Audio stack boundary

`librosa` is analysis/feature extraction. `soundfile` is audio file I/O backed by libsndfile. A working `import librosa` does not prove every codec can load. Codec support, libsndfile support, and fallback behavior matter.

## CLI UX packages

`rich`, `typer`, and `click` are low-risk but high-value for AIWF one-click tools. They turn scary terminal tools into readable diagnostics. Pin Typer/Click together when a packaged CLI is part of a public release.

## Native build cluster

`cmake`, `ninja`, `pybind11`, `setuptools`, `wheel`, and `packaging` are support tools, not the final missing model/package. Installing one of them may not be enough. Native extension installs on Windows can require:

- Correct Python version/architecture
- MSVC Build Tools / Windows SDK
- CMake generator selection
- Ninja or Visual Studio generator
- CUDA toolkit/headers where needed
- PyTorch/CUDA ABI compatibility where torch extensions are involved

## AIWF install policy

For beginner-facing installs, prefer prebuilt wheels and isolated venvs. Use source builds only when the package is essential and the installer can diagnose the toolchain cleanly.

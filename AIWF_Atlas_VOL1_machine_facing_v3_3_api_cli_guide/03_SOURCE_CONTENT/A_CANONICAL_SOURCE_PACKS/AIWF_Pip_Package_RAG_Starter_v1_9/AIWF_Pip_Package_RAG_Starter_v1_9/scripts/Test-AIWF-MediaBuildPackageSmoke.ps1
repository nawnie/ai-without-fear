param(
    [string]$Python = "python"
)

Write-Host "AIWF v0.6 Media/Build Package Smoke Test" -ForegroundColor Cyan
Write-Host "Python: $Python"

$tests = @(
    @{Name="av"; Code="import av; print('av', av.__version__)"},
    @{Name="imageio"; Code="import imageio; print('imageio', imageio.__version__)"},
    @{Name="imageio-ffmpeg"; Code="import imageio_ffmpeg; print('ffmpeg exe', imageio_ffmpeg.get_ffmpeg_exe())"},
    @{Name="moviepy"; Code="import moviepy; print('moviepy', getattr(moviepy, '__version__', 'unknown'))"},
    @{Name="decord"; Code="import decord; print('decord import ok')"},
    @{Name="librosa"; Code="import librosa; print('librosa', librosa.__version__)"},
    @{Name="soundfile"; Code="import soundfile as sf; print('libsndfile', sf.__libsndfile_version__)"},
    @{Name="ffmpeg-python"; Code="import ffmpeg; print('ffmpeg-python import ok')"},
    @{Name="matplotlib"; Code="import matplotlib; print('matplotlib', matplotlib.__version__)"},
    @{Name="rich"; Code="import rich; print('rich import ok')"},
    @{Name="typer"; Code="import typer; print('typer', typer.__version__)"},
    @{Name="click"; Code="import click; print('click', click.__version__)"},
    @{Name="GitPython"; Code="import git; print('GitPython', git.__version__)"},
    @{Name="packaging"; Code="from packaging.version import Version; print('packaging version compare', Version('2.10') > Version('2.9'))"},
    @{Name="setuptools"; Code="import setuptools; print('setuptools', setuptools.__version__)"},
    @{Name="wheel"; Code="import wheel; print('wheel', wheel.__version__)"},
    @{Name="ninja"; Code="import ninja; print('ninja module', ninja.__file__)"},
    @{Name="cmake"; Code="import cmake; print('cmake', cmake.__version__)"},
    @{Name="pybind11"; Code="import pybind11; print('pybind11', pybind11.__version__, pybind11.get_include())"}
)

foreach ($t in $tests) {
    Write-Host "`n[$($t.Name)]" -ForegroundColor Yellow
    & $Python -c $t.Code
    if ($LASTEXITCODE -ne 0) { Write-Host "FAILED: $($t.Name)" -ForegroundColor Red }
}

Write-Host "`n[External commands]" -ForegroundColor Yellow
foreach ($cmd in @('ffmpeg','git','cmake','ninja')) {
    Write-Host "-- $cmd --"
    & $cmd --version 2>$null | Select-Object -First 2
    if ($LASTEXITCODE -ne 0) { Write-Host "Missing or not on PATH: $cmd" -ForegroundColor Red }
}

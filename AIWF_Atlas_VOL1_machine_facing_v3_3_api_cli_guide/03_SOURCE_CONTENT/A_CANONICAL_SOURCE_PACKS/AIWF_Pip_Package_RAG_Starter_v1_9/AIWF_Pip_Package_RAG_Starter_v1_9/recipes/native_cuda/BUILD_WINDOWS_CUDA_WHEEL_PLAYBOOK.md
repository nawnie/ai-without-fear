# Build Windows CUDA Wheel Playbook

## Goal

Build a risky source package once, turn it into a local wheel, test it in isolation, then install from the wheelhouse.

## 0. Choose a target

Example target: `windows-cp312-torch2.x-cu12x-sm89`.

## 1. Prepare build shell

Use **Developer PowerShell for VS 2022** or a shell where `cl.exe` works.

```powershell
cl
where cl
where nvcc
nvcc --version
python --version
python -m pip --version
```

## 2. Create clean build venv

```powershell
py -3.12 -m venv .venv-build
.\.venv-build\Scripts\Activate.ps1
python -m pip install --upgrade pip setuptools wheel build ninja cmake packaging
```

Install matching torch first using the selected PyTorch index. Do not let random package requirements replace it.

## 3. Export build variables

```powershell
$env:TORCH_CUDA_ARCH_LIST = '8.9'
$env:MAX_JOBS = '6'
$env:DISTUTILS_USE_SDK = '1'
```

## 4. Build wheel

```powershell
python -m pip wheel . -w .\dist-wheelhouse --no-build-isolation
```

Use `--no-build-isolation` only when you intentionally pre-installed exact build deps. Otherwise let pyproject isolation work.

## 5. Test wheel in second venv

```powershell
py -3.12 -m venv .venv-test
.\.venv-test\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install --no-index --find-links .\dist-wheelhouse package-name
python -c "import package_name; print('import ok')"
```

## 6. Write manifest

Store wheel filename, source repo/commit, Python version, torch version, torch CUDA version, `nvcc --version`, `cl.exe` version, `TORCH_CUDA_ARCH_LIST`, install command, and smoke test result.

## 7. Promote to AIWF wheelhouse

Only after the clean test passes.

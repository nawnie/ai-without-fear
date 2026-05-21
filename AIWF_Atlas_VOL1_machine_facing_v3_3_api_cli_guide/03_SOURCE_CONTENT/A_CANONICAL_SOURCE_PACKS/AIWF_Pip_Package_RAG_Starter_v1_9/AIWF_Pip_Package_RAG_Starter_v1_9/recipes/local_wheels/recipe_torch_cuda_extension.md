# Recipe: Torch/CUDA Extension Build Pattern

```powershell
python -m pip install --upgrade pip setuptools wheel ninja packaging
python -m pip install torch torchvision torchaudio --index-url <matching pytorch CUDA wheel index>
python -m pip wheel . -w .\wheelhouse\built\torch_cuda --no-deps --no-build-isolation
```

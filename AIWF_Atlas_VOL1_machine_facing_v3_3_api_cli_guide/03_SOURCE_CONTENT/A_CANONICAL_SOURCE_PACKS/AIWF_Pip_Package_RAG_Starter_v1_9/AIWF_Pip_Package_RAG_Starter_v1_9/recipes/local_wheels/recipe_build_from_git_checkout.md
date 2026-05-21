# Recipe: Build a Local Wheel From a Git Checkout

```powershell
git clone https://github.com/OWNER/REPO.git .\wheelhouse\source\REPO
cd .\wheelhouse\source\REPO
python -m pip install --upgrade pip setuptools wheel build ninja cmake packaging
python -m pip wheel . -w ..\..\built\current --no-deps
```

# Recipe: Build a Requirements Wheelhouse

```powershell
python -m pip wheel -r requirements.txt -w .\wheelhouse\built\current
python -m pip install --no-index --find-links .\wheelhouse\built\current -r requirements.txt
```

<#
AI Without Fear - Inventory Import Smoke Test
Reads pip_package_inventory.csv and attempts imports by import_name. This is intentionally a smoke test, not proof that a package works correctly.
#>
param(
    [string]$PythonExe = "python",
    [string]$InventoryCsv = ".\pip_package_inventory.csv"
)

$ErrorActionPreference = "Continue"

$code = @'
import csv, json, sys, importlib
from pathlib import Path
inventory = Path(r"__INVENTORY__")
results = []
with inventory.open("r", encoding="utf-8-sig", newline="") as f:
    reader = csv.DictReader(f)
    for row in reader:
        name = (row.get("import_name") or row.get("pip_name") or "").strip()
        if not name:
            continue
        info = {
            "package_id": row.get("package_id"),
            "pip_name": row.get("pip_name"),
            "import_name": name,
            "importable": False,
        }
        try:
            mod = importlib.import_module(name)
            info["importable"] = True
            info["version"] = getattr(mod, "__version__", "unknown")
        except Exception as e:
            info["error"] = repr(e)
        results.append(info)
print(json.dumps(results, indent=2))
'@

$escaped = (Resolve-Path $InventoryCsv).Path.Replace("\", "\\")
$code = $code.Replace("__INVENTORY__", $escaped)
& $PythonExe -c $code

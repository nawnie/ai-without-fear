param([string[]]$Imports = @("torch", "numpy", "PIL", "cv2"), [string]$PythonExe = "python")
$ErrorActionPreference = "Stop"
$mods = ($Imports | ConvertTo-Json -Compress).Replace('"','\"')
$code = "import importlib,json; mods=json.loads('$mods'); r={};`nfor m in mods:`n    try:`n        mod=importlib.import_module(m); r[m]=getattr(mod,'__version__','ok')`n    except Exception as e:`n        r[m]='ERROR: '+repr(e)`nprint(json.dumps(r, indent=2))"
& $PythonExe -c $code

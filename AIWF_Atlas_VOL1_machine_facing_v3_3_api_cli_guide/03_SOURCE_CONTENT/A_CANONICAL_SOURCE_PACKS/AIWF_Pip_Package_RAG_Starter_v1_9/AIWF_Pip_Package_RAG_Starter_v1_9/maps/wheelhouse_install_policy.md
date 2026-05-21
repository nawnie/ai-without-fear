# AIWF Wheelhouse Install Policy

## Policy levels

### Level 0: PyPI/install-index only
Use for stable pure-Python packages. No local wheel required.

### Level 1: Cache wheel
Use `pip wheel` to cache the exact public wheel used by a known-good install.

### Level 2: Build local wheel from source
Use when no matching wheel exists, a package must be patched, or a package repeatedly rebuilds during installs.

### Level 3: AIWF-supported wheel
Only after clean-venv install and smoke tests. This is the level suitable for one-click installers.

### Level 4: Publish/distribute
Only for code we have rights to redistribute and after license review. Many third-party AI wheels should remain local/private build artifacts.

## One-click installer rule
The one-click installer should prefer official trusted wheels first, AIWF-tested wheelhouse wheels second, and source builds only as an advanced fallback.

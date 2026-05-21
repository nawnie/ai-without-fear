# Python Wheel Tags and ABI Notes

## Why this matters
A wheel filename encodes compatibility. A wheel built for one Python ABI, OS, architecture, or platform tag is not automatically safe for another environment.

Example:
```text
some_package-1.0.0-cp312-cp312-win_amd64.whl
```

This is CPython 3.12, CPython 3.12 ABI, Windows AMD64.

## AIWF rule
Every wheelhouse manifest should record the exact target tags and environment. Do not mix wheels from unrelated Python versions in the same beginner-facing install folder.

## Source
- https://packaging.python.org/specifications/binary-distribution-format/

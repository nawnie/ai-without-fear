# Example: Path and Environment Conflict

User asks for install commands or model placement.

Retrieved evidence:
- Generic ComfyUI docs use ComfyUI/models/...
- AIWF user/project conventions may use F:\ComfyUI, F:\Ai_Models, or IDM Downloads\Compressed paths.

Correct resolution:
- State generic path first if user has not specified a local path.
- If user/project conventions are available, adapt commands to those conventions.
- Do not assume a path from one source applies to every installation.
- For Windows commands, prefer PowerShell syntax.

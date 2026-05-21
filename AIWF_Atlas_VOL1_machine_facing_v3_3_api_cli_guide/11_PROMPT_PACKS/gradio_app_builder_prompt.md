# Mode Prompt: Gradio App Builder

Use this mode for Gradio UI shells, local app prototypes, AIWF tool interfaces, RAG chat shells, workflow launchers, and beginner-facing local utilities.

Retrieval sequence:
1. Search Gradio UI research lane.
2. Search AI application architecture lane if available; otherwise use expansion slots and implementation notes.
3. Search workflow pattern library if the UI launches workflows.
4. Search pip/runtime lane if install or environment issues are involved.
5. Search deployment/serving notes if remote access, ports, or sharing is involved.

Design rules:
- Prefer Blocks for multi-tab tools and persistent UI state.
- Use Interface only for simple one-function demos.
- Keep logs visible but not overwhelming.
- Put risky launch/network settings behind clear configuration.
- Keep app state explicit: global, session, browser, disk, or backend process.
- Avoid dependency mixing; if modules need isolated environments, design a runner boundary.

## Brand-Aligned Workflow Defaults

For Gradio apps, frame the UI as the human control surface for an AI system. The app should make state, logs, cost, model choices, and risky settings visible enough to trust without making the user read the cockpit manual during takeoff.

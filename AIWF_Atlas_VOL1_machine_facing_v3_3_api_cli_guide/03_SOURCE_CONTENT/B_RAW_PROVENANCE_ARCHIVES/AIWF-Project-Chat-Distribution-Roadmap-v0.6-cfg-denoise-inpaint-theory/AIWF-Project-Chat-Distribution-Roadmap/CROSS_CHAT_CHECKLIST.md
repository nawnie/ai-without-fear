# AIWF — Cross-Chat Coordination Checklist

Use this at the start of each project chat.

## Identify the lane

- [ ] What repo does this chat serve?
- [ ] What files should this chat produce?
- [ ] What is out of scope?
- [ ] What existing projects might already solve this?
- [ ] What is the next GitHub-ready output?

## Before building

- [ ] Check ComfyUI built-ins
- [ ] Check ComfyUI-Manager
- [ ] Check ComfyUI-Doctor
- [ ] Check MTB
- [ ] Check Hugging Face
- [ ] Check Civitai
- [ ] Check GitHub
- [ ] Decide: use, wrap, document, or build missing piece

## Repo hygiene

- [ ] README exists
- [ ] CHANGELOG exists
- [ ] Changelog uses days only
- [ ] Install command exists
- [ ] Windows PowerShell path exists
- [ ] Examples exist
- [ ] Known limitations are documented
- [ ] No unstable Labs code in beta repo

## AIWF naming

- [ ] Public name uses `AIWF [Thing]`
- [ ] Repo name is short and readable
- [ ] README links back to parent AIWF brand
- [ ] Tool promise is clear in one sentence

## Beta quality bar

- [ ] Narrow scope
- [ ] Runs locally
- [ ] Has one-click or near-one-click command
- [ ] Produces a useful artifact
- [ ] Does not require perfect setup
- [ ] Fails gracefully
- [ ] Explains next action to the user


## Scope Firewall Checklist

Before any project chat starts work, confirm:

- [ ] `SENDOFF_MASTER.md` was pasted first.
- [ ] Only that chat's assigned handoff was pasted as active roadmap.
- [ ] Other project roadmaps were marked reference-only.
- [ ] The chat understands it should not work on other project lanes.
- [ ] Cross-project concerns will be sent as fenced Markdown titled `CROSS_PROJECT_NOTE.md`.
- [ ] No `.txt` files are used for suggestions.
- [ ] The chat returns to its assigned output after any cross-project note.

## Field Guide Agent Checklist

- [ ] Volume I remains the active Field Guide production focus.
- [ ] 8-agent structure is recognized for Field Guide work: 4 GPT-side, 4 Grok-side.
- [ ] Claude is reserved for the final editorial pass.
- [ ] Volume II / Training AI stays parked until 3.5 training becomes practical enough to document seriously.


## RAG Source Ledger Checklist

- [ ] Every RAG topic lane has a `00_SOURCE_LEDGER.md`.
- [ ] Every source has a type, date checked, stability label, source quality grade, and AIWF decision label.
- [ ] Every retrieval card lists source references.
- [ ] Tested claims are separated from untested notes.
- [ ] Open questions are tracked instead of answered with false confidence.
- [ ] Existing projects are marked USE, WRAP, DOCUMENT, BUILD_MISSING_PIECE, WATCH, or AVOID_FOR_NOW.

## ML theory/training retrieval check

Before adding a theory claim to AIWF docs or tooltips:

- identify whether it is Volume I intuition or Volume II depth
- tie it to a source ledger entry when possible
- separate stable mechanisms from fast-moving model-family behavior
- avoid universal sampler/CFG/LR/rank claims
- connect concepts to visible workflow failure signatures

## v0.6 Editing-Theory Cross-Check

Before generating or approving an inpaint/img2img workflow, verify:

- the mask reaches the sampler/latent path;
- denoise level matches the task intent;
- CFG is not being used as a fake quality slider;
- identity-sensitive edits have reference/face support;
- structure-sensitive edits have pose/depth/edge/control support;
- crop-and-stitch has enough overlap and feathering;
- repeated VAE encode/decode cycles are minimized;
- prompt language describes the edit in scene context.

---

## Consolidated near-duplicate retained material

This section was added during AIWF near-duplicate consolidation. The canonical file was kept, and only unique non-matching chunks from older/alternate copies were appended below so the duplicate copy could be removed without cutting information.

### Unique retained material from `CONTENT/AIWF-Project-Chat-Distribution-Roadmap-v0.5-comfyui-core-api-subgraph/AIWF-Project-Chat-Distribution-Roadmap/CROSS_CHAT_CHECKLIST.md`

## Schema-First Workflow Checklist
Before generating or repairing a ComfyUI workflow:
- [ ] Capture or request `comfyui_object_info.json` from the target install.
- [ ] Confirm every `class_type` exists.
- [ ] Confirm every linked input name exists.
- [ ] Confirm widget values are inside accepted ranges.
- [ ] Mark API/partner nodes separately from local nodes.
- [ ] Add or update `workflow_manifest.json`.
- [ ] Add branch output nodes for Partial Execution when useful.
- [ ] Keep a full inspectable workflow beside any Subgraph/App Mode version.

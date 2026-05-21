# AIWF Source Ledger / Evidence RAG

## Purpose

The AIWF Source Ledger / Evidence RAG tracks where every claim, workflow idea, node recommendation, and compatibility note came from.

This matters because AIWF is becoming large enough that we need to avoid:

> I think we saw that somewhere.

Instead, every useful fact should have a source trail.

The core principle:

> AIWF should not just answer; it should know why it believes the answer.

## Source Types

| Source type | What to track |
|---|---|
| GitHub repo | Repo URL, README claims, commit activity, issues, install notes |
| Hugging Face model | Model card, license, files, required loaders, examples |
| Civitai model/node | Model type, base model, license, trigger words, creator notes |
| Academic paper | Core technique, model family, limitations |
| ComfyUI workflow | Node packs used, required models, known working version |
| User test result | What Shawn tested, what worked, what failed |
| Error log | Traceback, environment, fix applied |
| AIWF manual note | Where the concept belongs in the guide |

## Tool Ideas

### AIWF Citation Builder

Automatically adds source links or “tested by us” notes to markdown reports.

### AIWF Confidence Meter

Labels knowledge as:

- confirmed by official repo
- confirmed by user test
- inferred from workflow structure
- unverified but likely
- outdated / needs retest

### AIWF Changelog Assistant

When we update a node report or workflow, it can say:

> This recommendation changed because repo X updated install instructions.

## Recommended RAG Fields

```json
{
  "claim_id": "",
  "claim_text": "",
  "claim_type": "",
  "source_type": "",
  "source_title": "",
  "source_url": "",
  "source_date_checked": "",
  "evidence_excerpt": "",
  "related_files": [],
  "related_workflows": [],
  "tested_by_user": false,
  "test_result": "",
  "confidence": "",
  "needs_recheck": false,
  "notes": ""
}
```

## Confidence Labels

| Label | Meaning |
|---|---|
| confirmed_official | Confirmed by official repo, model card, documentation, or paper |
| confirmed_user_test | Confirmed through Shawn's testing |
| inferred_workflow | Inferred from workflow structure or node behavior |
| likely_unverified | Likely, but not directly verified |
| outdated_needs_retest | Known or suspected to be outdated |
| contradicted | Conflicting evidence exists |

## Placement Recommendation

This becomes especially important for Volume II and the GitHub repos.

It makes the project look serious instead of like AI-generated notes, and it protects the project when fast-moving tools change.

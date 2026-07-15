# AI Without Fear - Community AI Readiness Lab

**Version:** 0.1 pilot build  
**Audience:** rural and resource-constrained nonprofits, libraries, community organizations, workforce partners, and adult learners  
**Format:** six 90-minute sessions, delivered in person, hybrid, or online  
**Primary outcome:** each participating organization leaves with a usable interim AI policy and one documented low-risk workflow

## Why this exists

AI Without Fear teaches people to understand, use, and govern artificial intelligence without handing over privacy, judgment, or responsibility.

The Field Guide gives us a deep technical foundation: plain-language terminology, model-aware prompting, settings discipline, repeatable workflows, troubleshooting, and the principle that tools change while principles transfer. This training pack converts those ideas into an organization-ready curriculum for people who do not need to become machine-learning engineers before lunch.

The core message is simple:

> AI is a force multiplier, not a substitute for human judgment.

The human supplies the goal, context, values, lived experience, and final decision. AI may help research, draft, organize, compare, explain, and test. The human remains accountable for what is used, shared, or acted upon.

## What is in this pack

| File | Purpose |
|---|---|
| `PILOT_CHARTER.md` | Defines the first 90-day pilot, audience, safeguards, metrics, and partner expectations |
| `CURRICULUM.md` | Full six-session curriculum with objectives, agenda, activities, and deliverables |
| `PARAMETERS_SESSION_1_2.md` | Required analogy-first parameter module and optional technical path for Sessions 1 and 2 |
| `FACILITATOR_GUIDE.md` | Delivery rules, room setup, accessibility, safety, and failure handling |
| `LEARNER_WORKBOOK.md` | Participant worksheets for every session |
| `ASSESSMENTS.md` | Pre/post assessment, scenarios, answer key, and scoring rubric |
| `NONPROFIT_AI_SAFETY_KIT.md` | Copy-ready policy, data, review, disclosure, incident, and tool-review templates |
| `SLIDE_DECK_OUTLINE.md` | A 48-slide production outline for the first facilitator deck |
| `SOURCE_MAP.md` | Maps Field Guide concepts into the training modules and identifies claims requiring current verification |
| `training_catalog.json` | Machine-readable module catalog for future LMS, website, or app integration |
| `CHANGELOG.md` | Version history |

## Program architecture

### Track A - Community AI Readiness Lab

The six-session pilot in this pack:

1. AI Without the Fog Machine
2. The Data Traffic Light
3. Prompt, Review, Verify
4. Tool and Vendor Check
5. The Policy Sprint
6. One Safe Workflow

Sessions 1 and 2 share the required parameter module in `PARAMETERS_SESSION_1_2.md`. It presents the mixing-board analogy and one-sentence definition in the room, then links to the full technical guide at `https://ai-wf.org/guides/parameters/` for learners who want more depth.

### Track B - AIWF Builder Electives

The existing Field Guide can later support technical electives:

- Setting up a local AI laboratory
- AI terminology without jargon
- Prompting across model families
- Language-model settings and reproducibility
- Image generation fundamentals
- Video generation fundamentals
- Troubleshooting and workflow discipline

Track B should use **AIWF Studio as the reference application**. Older platform-specific examples remain useful as provenance, but they are not the controlling public interface for new training.

## Source-of-truth order

1. Current official documentation for volatile technical, legal, privacy, security, model, package, and license claims
2. Current AIWF canonical policy and terminology files
3. The AI Without Fear Field Guide as a human teaching source
4. Archived examples and older platform-specific material as historical context

The Field Guide is a strong curriculum mine. It is not a time machine. Model defaults, package compatibility, and active grant or compliance claims must be checked before delivery.

## Pilot completion standard

A participant completes the program when their organization has:

- classified common information using the Data Traffic Light
- inventoried AI tools already in use
- drafted an interim AI policy
- assigned a human owner for AI tool approval
- documented one low-risk AI-assisted workflow
- completed a pre/post assessment and 30-day action plan

## Repository placement

Recommended path in the AI Without Fear repository:

```text
training/community-ai-readiness-lab/
```

This is the human training layer. The AIWF Atlas remains the machine-facing domain-memory layer.

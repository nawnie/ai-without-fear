# Community AI Readiness Lab - Six-Session Curriculum

## Delivery pattern

Each session is 90 minutes:

- 10 minutes - welcome, recap, and confidence check
- 20 minutes - plain-language concept lesson
- 35 minutes - guided activity
- 15 minutes - organizational application
- 10 minutes - debrief, assignment, and exit check

Every session follows the same learning loop:

> Understand -> Try -> Check -> Document

This adapts the Field Guide's broader workflow discipline: generate, select, refine, and finish. The point is repeatability, not lucky button weather.

---

# Session 1 - AI Without the Fog Machine

## Purpose

Replace fear, hype, and vague assumptions with a usable mental model.

## Learning objectives

Participants will be able to:

- describe generative AI as a system that predicts and constructs outputs from learned patterns
- distinguish an AI response from verified knowledge
- explain the human responsibilities that remain after AI is introduced
- identify at least four useful low-risk organizational tasks
- identify at least four situations where AI should not be used without additional review

## Core ideas

- AI is a tool and force multiplier, not a substitute for judgment.
- Fluent output can still be wrong.
- A model may generate, transform, classify, summarize, or retrieve, depending on the system.
- The quality of an answer depends on the model, instructions, context, tools, sources, and review process.
- Capability does not equal permission.

## Agenda

### 1. Opening question

Ask participants:

> Where is AI already touching your work, whether officially approved or not?

Collect answers without shaming. Shadow use is a governance signal, not a character flaw.

### 2. Mini-lesson: what AI does

Use three boxes:

1. **Input** - the prompt, file, image, or data given to the system
2. **Model and tools** - the system that transforms the input
3. **Output** - text, image, classification, recommendation, code, or action

Add a human-review gate between output and use.

### 3. Activity: useful, risky, or unclear

Participants sort task cards into three columns:

- useful now
- needs safeguards
- do not use yet

Example cards:

- draft three public event descriptions from already-approved facts
- summarize a public city-council agenda
- decide whether a client qualifies for emergency assistance
- rewrite a public handout at a lower reading level
- upload donor records to generate a fundraising plan
- brainstorm volunteer-recruitment themes
- automatically send AI-generated legal advice to clients

### 4. Organizational application

Each participant writes:

- one task AI might safely assist with
- one task where AI is already being used informally
- one task that should be prohibited or paused

## Take-home assignment

Interview one coworker or volunteer: “Where are you using AI now, and what information are you putting into it?” Do not ask for passwords, private prompts, or confidential examples.

## Exit check

Complete this sentence:

> AI output becomes organizational work only after ________.

Expected answer: human review, approval, or verification.

---

# Session 2 - The Data Traffic Light

## Purpose

Give participants a fast, memorable way to decide what may enter an AI system.

## Learning objectives

Participants will be able to:

- classify information as green, yellow, or red
- explain why public availability and organizational permission are different questions
- recognize combinations of harmless facts that become identifying when joined
- pause and escalate uncertain cases

## The model

### Green - generally safe for approved tools

Examples:

- public website text
- published event details
- public-domain or properly licensed material
- fictional examples
- sanitized templates
- already-approved public FAQs

### Yellow - internal or context-sensitive

Examples:

- unpublished plans
- internal procedures
- draft budgets without identifying details
- meeting notes
- vendor proposals
- non-public program statistics

Yellow data requires an approved tool, a defined purpose, and organizational permission.

### Red - do not enter without explicit authorization and appropriate controls

Examples:

- passwords, API keys, access tokens, or recovery codes
- health information
- student or child records
- donor and client identities
- personnel and disciplinary records
- banking, payment, tax, or credit information
- legal case details
- immigration status
- precise locations of vulnerable people
- confidential contracts or investigations

## Agenda

### 1. Demonstration

Show how a harmless-looking sentence can become sensitive when names, dates, location, and circumstances are combined.

### 2. Activity: classify the cards

Participants classify 20 examples, then compare answers in small groups.

### 3. The uncertainty rule

Teach:

> If you cannot confidently explain why the information is safe, treat it as yellow or red until reviewed.

### 4. Organizational application

Participants list five information types their organization handles and classify them.

## Take-home assignment

Complete the Data Traffic Light worksheet for one real workflow without copying the underlying data into the workbook.

## Exit check

Participants state who has authority to approve a yellow-data use. “Nobody yet” is an acceptable and useful discovery.

---

# Session 3 - Prompt, Review, Verify

## Purpose

Teach prompting as task specification and verification as part of the same workflow.

## Learning objectives

Participants will be able to:

- write a prompt containing role, task, context, constraints, and output format
- distinguish creative generation from factual retrieval
- identify claims that require external verification
- improve an output by changing one variable at a time

## Prompt frame

Use:

```text
Task:
Context:
Audience:
Constraints:
Source material:
Output format:
Verification request:
```

Example:

```text
Task: Draft a 150-word public event announcement.
Context: Use only the approved details below.
Audience: Adults in the county who may not know our organization.
Constraints: Plain language, no invented benefits, no urgency claims.
Source material: [approved public facts]
Output format: Headline, short paragraph, date/time/location block.
Verification request: End with a checklist of every factual claim used.
```

## Field Guide connection

The Field Guide teaches that different model families respond differently to instruction style and that important information should be placed early. For community training, the transferable lesson is:

- make the task explicit
- put critical constraints where they are hard to miss
- provide the source material the output is allowed to use
- request a structure that can be reviewed

## Verification ladder

1. **Names** - spelled correctly?
2. **Dates and times** - match the source?
3. **Numbers** - recomputed or checked?
4. **Quotations** - found in the original source?
5. **Links and citations** - open and support the claim?
6. **High-impact claims** - reviewed by a qualified human?
7. **Tone and accessibility** - appropriate for the audience?

## Agenda

### 1. Weak prompt / strong prompt comparison

Participants compare two prompts and predict which will be easier to review.

### 2. Guided prompt lab

Everyone uses the same public source paragraph to create a short announcement.

### 3. Red-team review

Pairs mark:

- unsupported additions
- altered facts
- vague language
- missing audience context
- claims that require verification

### 4. One-change rule

Participants revise one component only, then compare outputs. This borrows the Field Guide's parameter and seed discipline: when five things change at once, the lesson evaporates.

## Take-home assignment

Create one reusable prompt template for a low-risk task and list the facts a human must verify every time.

---

# Session 4 - Tool and Vendor Check

## Purpose

Prevent organizations from choosing tools solely because a button is shiny and the landing page says “enterprise.”

## Learning objectives

Participants will be able to:

- inventory AI tools already used by staff or volunteers
- compare tools using a consistent worksheet
- identify account, data, retention, training, export, deletion, and ownership questions
- separate a tool's capability from the organization's permission to use it

## Review categories

### Identity and ownership

- Who owns the account?
- Is it tied to a personal email address?
- Can the organization recover access?
- Can a departing worker remove organizational history?

### Data handling

- What data is collected?
- Are prompts or uploads retained?
- May submitted material be used to improve models?
- Are admin controls available?
- Is deletion supported?

### Output and risk

- Does the tool cite sources?
- Can it take actions or only generate drafts?
- Can the organization disable risky features?
- What happens when the system is unavailable?

### Cost and continuity

- What is free now but may become paid?
- Can work be exported?
- Is there a vendor lock-in risk?
- Is a human fallback documented?

## Agenda

### 1. Shadow-tool inventory

Participants list every AI tool they know is being used, including built-in features in office suites, browsers, phones, design tools, and customer systems.

### 2. Review one tool

Use public documentation and the Tool Review Worksheet. Do not rely on memory for current retention or training policies.

### 3. Decide

Classify the tool:

- approved for green data
- approved for defined yellow-data cases
- pilot only
- prohibited
- needs more information

## Take-home assignment

Complete one tool review and identify who should approve it.

---

# Session 5 - The Policy Sprint

## Purpose

Turn learning into an interim policy that can be used immediately and improved later.

## Learning objectives

Participants will be able to:

- define approved, restricted, and prohibited uses
- assign ownership for tool approval
- set human-review and disclosure rules
- define an incident-reporting path

## Minimum viable policy

Every policy should answer:

1. Why may the organization use AI?
2. Which tools are approved?
3. Which data may be used?
4. Which decisions may not be delegated?
5. Who reviews output?
6. When must AI assistance be disclosed?
7. How are incidents reported?
8. Who owns policy updates?

## Agenda

### 1. Policy anatomy

Review the one-page template.

### 2. Draft in sections

Participants draft:

- purpose
- approved uses
- prohibited uses
- data rules
- human review
- disclosure
- tool approval
- incident response

### 3. Scenario test

Test each draft against three cases:

- a volunteer uses a personal AI account for public social-media copy
- a manager uploads internal meeting notes
- a staff member uses AI to recommend which clients receive limited aid

### 4. Peer review

Peers ask: “Would a new employee know what to do on Monday morning?”

## Take-home assignment

Send the draft to leadership or the board with the included briefing template. Mark it “interim” until formally adopted.

---

# Session 6 - One Safe Workflow

## Purpose

Finish the program with a real, low-risk, documented workflow.

## Learning objectives

Participants will be able to:

- select a suitable workflow
- define inputs, outputs, tools, review, records, and fallback
- test the workflow with sanitized data
- document what worked and what failed

## Workflow selection test

A good pilot workflow is:

- low impact
- reversible
- based on green data
- easy for a human to review
- frequent enough to matter
- small enough to test in one session

Examples:

- draft public event descriptions from approved facts
- create reading-level variants of a public handout
- organize public research links into categories
- generate a first-draft volunteer checklist
- turn approved public FAQs into alternate formats

Avoid workflows that determine eligibility, diagnose, discipline, rank vulnerable people, make legal conclusions, or handle red data.

## The AIWF workflow loop

Adapt the Field Guide's production philosophy:

1. **Generate** - create several drafts or options
2. **Select** - choose the best candidate using explicit criteria
3. **Refine** - correct one issue at a time
4. **Finish** - complete human review, approval, disclosure, and recordkeeping

## Workflow document

Record:

- purpose
- owner
- approved tool
- allowed inputs
- prohibited inputs
- prompt or procedure
- required human checks
- approval step
- output location
- retention rule
- fallback process
- review date

## Agenda

### 1. Pick the workflow

Use the selection test.

### 2. Run a sanitized test

Generate at least three options.

### 3. Score and select

Use criteria such as factual accuracy, usefulness, accessibility, tone, and effort to correct.

### 4. Refine one variable at a time

Document every change.

### 5. Finish and brief

Complete the workflow sheet and prepare a five-minute explanation for leadership.

## Final deliverable

Each organization submits:

- interim policy
- tool inventory
- completed workflow sheet
- 30-day action plan

## Final reflection

Ask:

> What will your organization do differently next week because of this program?

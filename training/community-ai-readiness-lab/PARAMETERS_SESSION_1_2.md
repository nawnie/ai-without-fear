# Parameters Without the Fog

**Required module for:** Session 1 and Session 2  
**Public technical guide:** `https://ai-wf.org/guides/parameters/`

This module uses a layered explanation. Present the analogy and one-sentence definition to everyone. Keep the equations, tensors, embeddings, memorization discussion, and LoRA details behind the optional technical link unless the group asks for them.

The goal is understanding, not vocabulary collection.

---

# Core explanation

## Analogy first

Say:

> Picture a giant mixing board covered in tiny dials. Training shows the model example after example and nudges many dials at once. A parameter is one dial's learned numerical setting. One dial is not a fact or a decision; together, the settings shape how the model responds.

## One-sentence definition

> A parameter is a numerical value inside a model that the training process is allowed to adjust.

## Three distinctions learners should leave with

| Item | Plain-language meaning |
|---|---|
| Training example | Something used to help adjust the model during training |
| Parameter | One learned numerical setting inside the model |
| Prompt or upload | Information supplied to the system for the current task |

Do not teach a parameter as a training line, a stored sentence, a logic decision, or a synonym for text encoding.

---

# Session 1 insertion

## Placement

Use this module during **Mini-lesson: what AI does**, immediately after the Input -> Model and tools -> Output diagram and before the human-review gate.

## Time

7 to 10 minutes.

## Facilitator sequence

1. Show the mixing-board analogy.
2. Give the one-sentence definition.
3. Display three cards: **practice example**, **learned setting**, and **current input**.
4. Ask learners to match each card to training data, parameter, and prompt.
5. Add the human-review gate to the original diagram.
6. Point to the technical guide without opening it unless the group wants more depth.

## Suggested script

> The examples used during training are not the same thing as the settings learned from them. Think about practicing a dart throw. Each throw is an example. Your grip, stance, and aim change a little across many throws. Those learned adjustments are closer to parameters. The dart you throw right now is closer to the current input.

Then return to the model diagram:

```text
training examples -> adjust learned parameters

current input -> model using learned parameters -> output -> human review
```

## Quick check

Ask:

1. Is one sentence in a dataset the same thing as one parameter?
2. Is the prompt a user types right now a model parameter?
3. Does one parameter normally represent a complete rule or fact?

Expected answers:

1. No. A training example can influence many parameter updates.
2. No. It is current input or context.
3. No. Behavior emerges from many learned values and operations working together.

## Optional learner path

Put the guide URL or a QR code in the slide footer and speaker notes:

`https://ai-wf.org/guides/parameters/`

Do not put the full equation, LoRA matrix explanation, or memorization discussion on the introductory slide. The link is the trapdoor, not the front door.

---

# Session 2 insertion

## Placement

Use this bridge immediately before introducing the Green, Yellow, and Red categories.

## Time

5 to 8 minutes.

## Purpose

Session 1 explains what the model learned. Session 2 explains where organizational information may enter, remain, or move around the product using that model.

## Four information locations

1. **Training data** - examples used to adjust parameters during training or fine-tuning.
2. **Parameters** - learned numerical settings inside the model.
3. **Current input and context** - prompts, uploads, images, retrieved passages, and tool results supplied for a task.
4. **Output, logs, and history** - generated results and records saved by the app, service, connector, or organization.

Say:

> A prompt is not a parameter. That technical distinction does not make the prompt safe to upload. The Data Traffic Light applies before information enters the tool and before its output, logs, or history are stored or shared.

## Data-boundary activity

Read each example and ask learners to name both the **location** and the **Traffic Light color**.

| Example | Location | Likely classification |
|---|---|---|
| A published event date pasted into a prompt | Current input | Green |
| A client intake form uploaded to a chatbot | Current input | Red |
| A generated summary saved in a shared folder | Output or history | Depends on its contents and access |
| Sanitized examples used to train an internal adapter | Training data | Green only if the examples are truly approved and sanitized |
| A LoRA adapter file | Learned adapter parameters | Not a substitute for reviewing its source, license, behavior, or provenance |

## Privacy boundary

Never use the parameter distinction as reassurance that sensitive input disappears.

The facilitator should redirect to the practical questions:

- Is the tool approved?
- Is this information allowed?
- Does the exact plan retain prompts or uploads?
- Can the provider use submitted material under the current terms and settings?
- Are logs, connectors, exports, and shared histories controlled?
- Who is accountable for the final use?

Optional technical link for this section:

`https://ai-wf.org/guides/parameters/#data-boundaries`

---

# Depth ladder for facilitators

## Level 1: everyone

- mixing-board analogy
- one-sentence definition
- training example versus parameter versus current prompt

## Level 2: curious learners

Use the tiny model:

```text
y = wx + b
```

- `x` is the current input
- `w` and `b` are learned parameters
- `y` is the computed output

Training repeatedly adjusts `w` and `b` to reduce error.

## Level 3: technical learners

Explain only when useful:

- parameters are usually stored in multidimensional tensors
- weights and biases are common parameter types
- learned embedding tables contain parameters
- the embedding or activation computed for one current prompt is not a newly learned model parameter
- hyperparameters such as learning rate, batch size, steps, and LoRA rank are chosen settings rather than learned model parameters
- LoRA normally freezes the base weights and learns smaller low-rank adapter matrices

Use the public guide for this layer rather than expanding the main session slide.

---

# LoRA note

For groups discussing LoRA, say:

> A LoRA is a smaller set of learned adapter parameters that changes how selected parts of a base model behave. It normally contains learned numerical updates and configuration metadata, not a readable copy of every training caption or image.

Then add the boundary:

> That does not prove the adapter is safe, licensed, private, or free from memorization. Source, data rights, provenance, behavior, and intended use still require review.

---

# Common corrections

## Incorrect: "A parameter is a training line."

Better:

> A training line is an example. Training uses many examples to adjust many parameters.

## Incorrect: "A parameter is a logic decision."

Better:

> A parameter is a number. Model behavior emerges from many parameters and operations acting on the current input.

## Incorrect: "A parameter is text encoding."

Better:

> Learned embedding tables contain parameters, while the representation computed for one current prompt is an intermediate calculation.

## Incorrect: "The prompt becomes a model parameter immediately."

Better:

> The prompt is runtime input. Whether a service later retains or uses it for training is a separate product, plan, and settings question.

---

# Presentation rule

The main slide should contain only:

- the mixing-board visual
- the one-sentence definition
- the three-item distinction
- a small link or QR code to the technical guide

Put equations, tensors, LoRA mechanics, memorization, and source links on the guide page or in facilitator notes. Surface first, machine room second.

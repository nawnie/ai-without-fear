# AIWF Training Ladder — From Prompting to Model Adaptation

This is the AIWF teaching ladder for training and adaptation. It is written for retrieval first, not as a full tutorial.

## The main distinction

There are three very different things beginners often collapse into one word: “training.”

| User says | What may actually be happening | AIWF framing |
|---|---|---|
| “I trained the model by prompting it” | no weights changed | prompting / conditioning |
| “I trained an embedding” | small embedding vector changed | textual inversion / embedding learning |
| “I trained a LoRA” | adapter weights changed | parameter-efficient adaptation |
| “I fine-tuned the model” | many or all model weights changed | full or partial fine-tuning |
| “I aligned the model” | post-training preference/process changed behavior | SFT/RLHF/DPO family |

## Stage 0 — Prompting / conditioning

Weights changed: no.

What changes:

- prompt text
- negative prompt
- seed
- CFG/guidance
- scheduler/sampler
- image/mask/reference/control inputs

AIWF beginner line:

> Prompting steers the model during inference. It does not teach the model permanently.

## Stage 1 — Embedding / textual inversion

Weights changed: a small embedding.

Good for:

- compact concept handles
- style tokens
- narrow subject/style cues

Weakness:

- limited capacity
- can be fragile across base models

AIWF beginner line:

> Textual inversion teaches a special token a new meaning, but it does not rewrite the full model.

## Stage 2 — LoRA

Weights changed: small adapter weights.

Good for:

- style adaptation
- character/person/object identity cues
- task behavior
- portable add-ons

Key controls:

- dataset quality
- captions
- rank/dim
- learning rate
- repeats/epochs/steps
- target modules
- validation samples
- stopping point

AIWF beginner line:

> A LoRA is a small trained steering layer that rides on top of a base model.

Failure mode:

- too weak = concept does not appear
- too strong = overcooked style, identity collapse, artifacts
- bad dataset = learns background/pose/outfit instead of subject

## Stage 3 — DreamBooth / partial fine-tune

Weights changed: more of the diffusion model.

Good for:

- stronger subject binding
- cases where LoRA is not enough

Weakness:

- heavier compute
- higher overfit risk
- less portable
- more careful versioning needed

AIWF beginner line:

> DreamBooth is heavier personalization; it can bind a subject strongly, but it can also overcook faster.

## Stage 4 — Full fine-tune

Weights changed: many or all model weights.

Good for:

- domain-specific model creation
- broad behavior/style shift
- controlled production systems

Weakness:

- expensive
- easy to damage general ability
- needs serious dataset/eval discipline

AIWF beginner line:

> Full fine-tuning changes the model itself, not just an add-on.

## Stage 5 — Control model / adapter training

Weights changed: control/adaptation pathway.

Examples:

- ControlNet-style structural control
- IP/reference adapters
- task-specific conditioning modules

AIWF beginner line:

> Control training teaches the model how to obey a kind of guide, such as pose, depth, line art, or reference identity.

## Stage 6 — LLM post-training / alignment

Weights changed: adapters or model weights depending on method.

Common families:

- supervised fine-tuning
- PEFT / LoRA / QLoRA
- preference optimization such as DPO
- RLHF-like pipelines

AIWF beginner line:

> LLM post-training changes how a language model behaves after broad pretraining.

## AIWF default recommendation hierarchy

For beginners and local users:

1. First, see whether prompting, ControlNet/reference inputs, or workflow design solves the problem.
2. If it is a reusable subject/style/task, try LoRA before heavier fine-tuning.
3. Use DreamBooth/full fine-tuning only when LoRA and workflow control are not enough.
4. For LLMs, prefer PEFT/QLoRA-style adapters before full fine-tuning unless there is a strong reason and enough hardware.
5. Always test outputs during training; do not trust final loss alone.

## The “loss is not the whole truth” note

Loss tells you something about training behavior, but it does not guarantee that images, text, or workflow outputs are good.

AIWF retrieval answer should say:

> Use loss as an instrument panel, not a judge. Validate with samples.

## What belongs in Volume I

- What changes weights and what does not.
- Why LoRA is usually the beginner-friendly training path.
- Why dataset quality matters more than magic settings.
- Why overfitting happens.
- Why sample checkpoints matter.

## What belongs in Volume II

- optimizer details
- gradient accumulation
- batch size vs effective batch
- rank/alpha/module math
- learning-rate schedules
- loss functions
- validation methodology
- DPO/preference optimization
- quantized fine-tuning internals

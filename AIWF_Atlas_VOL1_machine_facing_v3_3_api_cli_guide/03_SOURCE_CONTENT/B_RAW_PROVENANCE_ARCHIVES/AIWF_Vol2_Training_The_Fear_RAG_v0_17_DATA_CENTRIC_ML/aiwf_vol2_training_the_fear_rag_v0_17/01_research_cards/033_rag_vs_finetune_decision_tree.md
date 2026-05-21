# RAG vs Fine-Tune vs LoRA — Decision Tree

## Purpose

Most people reach for training too early. AIWF Vol. 2 needs a hard decision framework so users do not waste GPU time baking facts into weights when retrieval, prompting, or a tool would be better.

## Core distinction

- **RAG gives the model information at runtime.**
- **Fine-tuning changes model behavior.**
- **LoRA/adapters add a narrow learned capability or style.**
- **Tools/APIs give the model actions or live data.**

## Decision question 1: Is the problem missing knowledge?

Examples:

- company docs
- hotel SOPs
- law/rule references
- product manuals
- ComfyUI node docs
- current prices, schedules, policies

Use:

1. RAG.
2. better chunking/metadata.
3. embedding or reranker tuning if retrieval fails.
4. tool/API calls for live data.

Do not fine-tune facts into weights unless the knowledge is stable, legally usable, and repeatedly needed in behavior.

## Decision question 2: Is the problem response style/format?

Examples:

- always answer in JSON.
- use a professional support tone.
- write concise troubleshooting steps.
- ask no more than one clarifying question.

Use:

1. system prompt.
2. examples/few-shot.
3. SFT LoRA if behavior must persist offline or across many prompts.

## Decision question 3: Is the problem skill/capability?

Examples:

- convert messy outage notes into structured reports.
- write ComfyUI workflow reasoning.
- classify datasets.
- generate captions in a house style.

Use:

1. SFT LoRA if examples are available.
2. RAG + SFT if skill depends on reference docs.
3. evaluation harness before training.

## Decision question 4: Is the problem taste/preference?

Examples:

- choose better vs worse support responses.
- avoid overexplaining.
- prefer safe uncertainty over confident hallucination.

Use:

1. DPO/ORPO/KTO after SFT baseline.
2. preference data with written criteria.
3. held-out preference evals.

## Decision question 5: Is the problem identity, voice, face, or likeness?

Use:

1. explicit consent ledger.
2. legal/right-of-publicity check.
3. model card disclosure.
4. watermark/provenance/disclosure where relevant.

Do not treat identity training as ordinary style training.

## Decision question 6: Is the target information current?

Examples:

- laws
- software install steps
- package versions
- sports scores
- prices
- model leaderboard positions
- active repo support

Use:

1. live search/tooling.
2. RAG with dated source docs.
3. source freshness metadata.

Avoid fine-tuning rapidly changing information. The model will become confidently stale.

## AIWF decision tree

```text
Need answer uses current/private docs? -> RAG/tooling.
Need consistent format/tone? -> Prompt/few-shot -> SFT LoRA if needed.
Need new narrow skill? -> SFT LoRA with examples + evals.
Need better preference/taste? -> DPO/ORPO/KTO after SFT.
Need visual style/identity? -> diffusion LoRA + consent/provenance.
Need video motion/style? -> video LoRA; expect heavy data/memory constraints.
Need voice? -> consented voice adaptation; strong disclosure rules.
Need broad new intelligence? -> not consumer hardware; use better base model or cloud research stack.
```

## When training is the wrong answer

Training is usually wrong when:

- the user has fewer than 50 strong examples.
- the task depends on current facts.
- the data includes private secrets that should not be memorized.
- there is no eval set.
- the target behavior can be solved by a system prompt.
- the base model is too weak.
- the user cannot define what “better” means.

## AIWF rule

Before a training run, require a one-paragraph training contract:

- target behavior
- base model
- data source
- legal right/consent
- training method
- eval method
- stop condition
- failure modes to watch

If the contract cannot be written, the training run is premature.

## Sources

- Hugging Face PEFT docs: https://huggingface.co/docs/peft/en/index
- TRL docs: https://huggingface.co/docs/trl/en/index
- RAGAS paper: https://arxiv.org/abs/2309.15217
- RAGAS: https://www.ragas.io/
- Model Cards docs: https://huggingface.co/docs/hub/model-cards

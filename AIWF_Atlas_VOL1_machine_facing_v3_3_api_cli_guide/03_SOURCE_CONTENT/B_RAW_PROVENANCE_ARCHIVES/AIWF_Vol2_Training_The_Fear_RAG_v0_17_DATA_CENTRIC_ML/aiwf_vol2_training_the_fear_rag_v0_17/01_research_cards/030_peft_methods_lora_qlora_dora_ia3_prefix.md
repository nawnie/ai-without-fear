# PEFT Methods — LoRA, QLoRA, DoRA, IA3, AdaLoRA, Prefix/Prompt Tuning

## Why this matters

Parameter-efficient fine-tuning is the center of consumer AI training. The user is usually not training a model from scratch. They are adapting a frozen base model.

PEFT is also the vocabulary bridge between chatbot training, diffusion LoRA training, and video LoRA training.

## Full fine-tune vs PEFT

### Full fine-tune

Changes most/all weights. Highest capacity, highest memory, highest overfit risk, highest distribution-shift risk, hardest to distribute.

Use when:

- you have enough data
- you need broad behavioral change
- you have eval infrastructure
- you can afford compute
- licensing allows derivative full checkpoints

Avoid on consumer hardware except small models.

### PEFT

Trains a small number of additional or selected parameters while freezing most of the base model.

Use when:

- consumer GPU
- style/identity/domain/task adaptation
- reversible adapters
- multiple skills/personas/styles on one base
- easier sharing and lower storage

## LoRA

LoRA freezes pretrained weights and injects low-rank trainable matrices into selected modules. The LoRA paper reports very large reductions in trainable parameters and memory requirement compared with full fine-tuning while preserving quality in many settings.

### Key settings

- rank / dimension: adapter capacity
- alpha: scaling strength
- dropout: regularization
- target modules: which layers get adapters
- learning rate
- adapter merge/unmerge strategy

### AIWF explanation

LoRA is a “skill patch.” It does not rewrite the whole brain. It adds narrow steering surfaces to the base model.

### Common mistake

People treat rank as “quality slider.” It is not. Higher rank can learn more, including garbage and memorization. Rank only helps if the dataset deserves the capacity.

## QLoRA

QLoRA trains LoRA adapters through a quantized frozen model. The base model sits in 4-bit form, reducing memory enough to train much larger LLMs on accessible hardware.

### Key techniques from QLoRA

- 4-bit NormalFloat (NF4)
- double quantization
- paged optimizers
- LoRA adapters trained while base remains quantized/frozen

### AIWF explanation

QLoRA is not “a stronger LoRA.” It is a memory trick that makes LoRA possible on bigger base models.

### Common mistake

Quantized training is not free quality. Low-bit base weights can increase sensitivity to LR, optimizer, context length, and data quality. Treat results as adapter training under compression, not magical full training.

## DoRA

DoRA decomposes pretrained weights into magnitude and direction components and applies LoRA-like updates to improve learning capacity and stability. It is often framed as a higher-performing alternative or upgrade path to LoRA without extra inference overhead after merge.

### AIWF teaching point

DoRA belongs in “try after LoRA baseline” territory. It is useful when LoRA underfits or is unstable, but it should not replace dataset cleanup.

## IA3

IA3 is a PEFT method that learns small vectors that rescale internal activations. It is lower-capacity and memory-light compared with LoRA.

Use when:

- task adaptation is narrow
- storage must be tiny
- you want minimal trainable params

Avoid when:

- style/identity/domain adaptation needs richer capacity
- LoRA is already cheap enough

## AdaLoRA

AdaLoRA allocates rank adaptively during training, shifting capacity toward more important components.

Use when:

- you want a more principled rank budget
- adapter parameter budget matters
- framework support is mature enough

AIWF caution: adaptive methods add knobs and complexity. Beginners should first learn fixed LoRA.

## Prefix tuning / prompt tuning

These methods train soft prompt vectors rather than weight adapters.

Use when:

- task is prompt-conditioned
- small storage matters
- you want non-invasive behavior steering

Avoid when:

- domain/style adaptation requires deeper representation changes
- target system does not support prompt/prefix modules cleanly

## Method selection map

| Goal | First method | Notes |
|---|---|---|
| Chatbot instruction style | LoRA/QLoRA SFT | QLoRA for larger bases |
| Personal/private assistant behavior | RAG + system prompt first; LoRA only after examples exist | Avoid training secrets into weights |
| Domain Q&A | RAG first; embedding/reranker fine-tune; then LoRA if style/reasoning needs adaptation | Fine-tune does not replace retrieval |
| Character roleplay | LoRA SFT + strict eval | High overfit/memorization risk |
| Image style | LoRA | Captioning quality dominates |
| Person/identity image | LoRA/DreamBooth-style; consent ledger required | Avoid non-consented identity training |
| Video motion/style | Video LoRA | Data and temporal consistency dominate |
| Voice | voice adaptation/few-shot TTS; explicit consent required | Do not train impersonation models without rights |

## AIWF default stack

1. Start with prompting/RAG.
2. If behavior must change, create eval set.
3. Use LoRA/QLoRA baseline.
4. Only then test DoRA/AdaLoRA/other variants.
5. Keep adapter separate until proven.
6. Document base model, data, license, evals, and failure modes.

## Sources

- LoRA paper: https://arxiv.org/abs/2106.09685
- QLoRA paper: https://arxiv.org/abs/2305.14314
- DoRA paper: https://arxiv.org/abs/2402.09353
- DoRA official repo: https://github.com/NVlabs/DoRA
- Hugging Face PEFT: https://huggingface.co/docs/peft/en/index
- Transformers PEFT integration: https://huggingface.co/docs/transformers/en/peft

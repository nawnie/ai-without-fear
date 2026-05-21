# LLM Dataset Formats and Chat Templates

## Scope
This card covers the practical dataset structures a consumer-hardware trainer will actually touch: raw text continuation, prompt-completion, instruction tuning, multi-turn chat, tool/function call traces, preference pairs, and multimodal message records.

## Why this matters
A model is trained to imitate token sequences. If the training format does not match the inference format, the model learns the wrong boundary markers, the wrong speaker turns, or the wrong assistant behavior. This is why “same template in training and inference” is not a cosmetic rule; it is a core quality rule.

## Common dataset types

### 1. Raw text / continued pretraining
Use when the goal is domain adaptation: internal manuals, field guides, documentation, books, logs, or code corpora. The dataset typically has a single `text` field.

Good for:
- vocabulary/domain adaptation,
- writing style exposure,
- documentation-heavy corpora,
- retrieval-augmented domain models when the model needs tone and terminology.

Bad for:
- making a chatbot follow instructions,
- creating reliable task behavior by itself,
- replacing RAG for facts that change.

### 2. Prompt-completion
A simple supervised format where input prompt and target output are separated. Good for tasks with clear input-output behavior.

Minimal JSONL pattern:
```json
{"prompt":"Summarize this maintenance note: ...","completion":"Room 214 needs PTAC filter cleaning and follow-up inspection."}
```

### 3. Alpaca / instruction format
Often uses `instruction`, optional `input`, and `output`. LLaMA-Factory explicitly supports Alpaca-style data as one of its main custom dataset paths.

Pattern:
```json
{
  "instruction": "Rewrite this guest note as a professional maintenance ticket.",
  "input": "AC making noise room 127 again",
  "output": "Room 127: guest reports recurring AC noise. Inspect PTAC fan, grille, and mounting vibration."
}
```

Best for:
- single-turn task training,
- beginner-friendly datasets,
- converting manuals into examples.

Risk:
- weaker for multi-turn persona, tool use, or chat behavior unless converted carefully.

### 4. ShareGPT / conversation format
Often represents multi-turn conversations as message lists. LLaMA-Factory and Axolotl support conversation-oriented formats, and TRL supports conversational datasets for SFT and preference trainers.

Modern generic pattern:
```json
{
  "messages": [
    {"role": "system", "content": "You are a careful AI training assistant."},
    {"role": "user", "content": "Why did my LoRA overfit?"},
    {"role": "assistant", "content": "The most likely causes are too many repeats, too high learning rate, too few images, or weak caption diversity."}
  ]
}
```

Best for:
- chatbot behavior,
- persona training,
- support assistant behavior,
- multi-turn correction examples.

Critical rule:
- Training and inference must use the same or compatible chat template.

### 5. Tool/function-call records
Tool-use datasets must preserve the exact message order: system, user, assistant tool call, tool response, assistant final answer. Do not flatten this into prose if the target framework supports structured tools.

Fields to preserve:
- tool name,
- tool arguments,
- tool result,
- assistant reasoning style policy if applicable,
- final answer.

Consumer-hardware guidance:
- Do small LoRA/QLoRA runs first.
- Use eval prompts that force tool selection and argument correctness.
- Avoid mixing tool schema versions in one dataset.

### 6. Preference datasets
DPO-style formats typically need a prompt plus chosen/rejected responses, or conversational equivalents. TRL’s DPOTrainer expects preference data and supports standard and conversational forms.

Pattern:
```json
{
  "prompt": "Explain LoRA rank to a beginner.",
  "chosen": "LoRA rank controls how much adapter capacity you give the model...",
  "rejected": "Rank is just quality. Set it high."
}
```

## Chat templates: the silent failure point
A chat template converts roles/messages into the exact token sequence seen by the model. Template failures cause:
- assistant answering as user,
- runaway role markers,
- failure to stop at end-of-turn,
- overtraining on user text,
- degraded instruction following.

AIWF rule:
> If the model is chat/instruct, treat the tokenizer chat template as part of the model, not as optional formatting.

## Input masking
Training every token can teach the model to predict user prompts. Many trainer configs let you mask user/input tokens so loss focuses on assistant outputs. Axolotl highlights this with `train_on_inputs: false` behavior for known prompt formats.

Use masking when:
- building assistant behavior,
- preserving user/assistant roles,
- training from long prompts.

Do not blindly mask when:
- doing continued pretraining,
- teaching exact prompt-completion transformations where input context matters differently.

## Validation checklist
- Every row has required fields.
- No empty assistant targets.
- No accidental markdown fences around JSONL.
- No mixed schemas in one file unless the loader supports it.
- Role names match the expected template.
- EOS/stop tokens are compatible.
- Training template equals inference template.
- `train_on_inputs` or equivalent is intentional.
- Eval set is not duplicated in train set.

## AIWF Dataset Doctor fields
- `detected_schema`
- `trainer_targets`
- `required_fields_missing`
- `role_name_mismatch`
- `empty_output_count`
- `template_required`
- `chat_template_detected`
- `input_masking_recommendation`
- `train_eval_leakage_score`

## Sources
- Hugging Face TRL dataset formats: https://huggingface.co/docs/trl/en/dataset_formats
- TRL SFTTrainer expected dataset format: https://huggingface.co/docs/trl/en/sft_trainer
- TRL DPOTrainer expected dataset format: https://huggingface.co/docs/trl/en/dpo_trainer
- LLaMA-Factory data README: https://github.com/hiyouga/LLaMA-Factory/blob/main/data/README.md
- Qwen LLaMA-Factory SFT data prep: https://qwen.readthedocs.io/en/v2.0/training/SFT/llama_factory.html
- Axolotl dataset formats: https://docs.axolotl.ai/docs/dataset-formats/
- Axolotl conversation/chat template docs: https://docs.axolotl.ai/docs/dataset-formats/conversation.html
- Axolotl template-free/input masking note: https://docs.axolotl.ai/docs/dataset-formats/template_free.html

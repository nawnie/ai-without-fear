# Multimodal/VLM Dataset Construction Patterns

## Scope
This card covers datasets for vision-language model fine-tuning: image-question-answer records, image instruction following, document understanding, OCR correction, visual classification, and tool-assisted multimodal tasks.

## Why this matters
VLM training is not the same as image LoRA training. Image LoRA captions teach a generator how to create visuals. VLM datasets teach a model how to answer about visuals.

## Common VLM record types

### Image captioning
```json
{
  "image": "images/0001.png",
  "messages": [
    {"role": "user", "content": "Describe this image."},
    {"role": "assistant", "content": "A small orange robot mascot looks frustrated beside an error screen."}
  ]
}
```

### Visual QA
```json
{
  "image": "images/0002.png",
  "messages": [
    {"role": "user", "content": "What is wrong in this ComfyUI screenshot?"},
    {"role": "assistant", "content": "The node is missing a required model input and the workflow cannot execute until that connection is restored."}
  ]
}
```

### OCR/document understanding
```json
{
  "image": "screenshots/receipt_001.png",
  "messages": [
    {"role": "user", "content": "Extract the room number and maintenance issue."},
    {"role": "assistant", "content": "Room 127; PTAC noise complaint."}
  ]
}
```

### Region-aware/grounded examples
Use when the target model and trainer support bounding boxes or region prompts. Florence-2-style workflows are relevant because Florence-2 supports prompt-based captioning, detection, and segmentation tasks.

## Dataset fields to preserve
- image path,
- question/instruction,
- answer,
- OCR text if available,
- bounding boxes if used,
- source/provenance,
- split,
- task family,
- answer type,
- safety/privacy notes.

## Task families for AIWF
- ComfyUI screenshot diagnosis,
- workflow graph explanation,
- model card screenshot parsing,
- training log interpretation,
- error message extraction,
- before/after image QA,
- caption audit,
- visual prompt generation.

## Consumer-hardware path
For most users, VLM fine-tuning should be adapter-based. Full fine-tuning is usually not the first consumer-hardware path. Start with:
- small dataset,
- one VLM family,
- one task family,
- QLoRA/LoRA if supported,
- strict validation prompts.

## Data hazards
- The model may learn to hallucinate from screenshots if answers include unsupported interpretation.
- OCR errors can become trained behavior.
- UI screenshots may contain private paths, usernames, API keys, or file names.
- Cropped images can remove important context.
- Mixed image resolutions may require processor-specific handling.

## VLM QA checks
- image file exists,
- image can be decoded,
- answer references visible content,
- OCR private data redacted,
- resolution within processor limits,
- no train/eval duplicate screenshots,
- question answerability score,
- task type balanced,
- answer style matches target assistant behavior.

## AIWF recommendation
Build a VLM dataset for AIWF’s own tooling later:
- screenshots of ComfyUI errors,
- node graph mistakes,
- training logs rendered as images,
- before/after image evaluations,
- caption mismatch examples.

But first build the Dataset Doctor to produce the manifest and quality gates.

## Sources
- Hugging Face VLM fine-tuning cookbook using TRL: https://huggingface.co/learn/cookbook/en/fine_tuning_vlm_trl
- TRL SFTTrainer docs: https://huggingface.co/docs/trl/en/sft_trainer
- Microsoft Florence-2 model card: https://huggingface.co/microsoft/Florence-2-base
- Salesforce LAVIS: https://github.com/salesforce/LAVIS
- Axolotl dataset formats: https://docs.axolotl.ai/docs/dataset-formats/
- Hugging Face Datasets processing docs: https://huggingface.co/docs/datasets/en/process

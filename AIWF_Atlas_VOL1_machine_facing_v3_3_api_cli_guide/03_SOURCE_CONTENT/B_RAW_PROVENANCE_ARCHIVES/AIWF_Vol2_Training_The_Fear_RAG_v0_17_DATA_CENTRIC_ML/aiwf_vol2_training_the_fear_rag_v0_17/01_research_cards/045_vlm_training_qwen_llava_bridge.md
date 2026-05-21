# Vision-Language Model Training — Qwen/LLaVA Bridge

## Scope

Vision-Language Model fine-tuning teaches a model to answer from images, screenshots, documents, UI captures, diagrams, charts, or video frames. For AIWF, this matters because Vol. 2 should cover more than text bots and image LoRAs.

## Current useful families

- Qwen-VL / Qwen2-VL / Qwen2.5-VL / Qwen3-VL ecosystem.
- LLaVA and LLaVA-NeXT family.
- Hugging Face TRL/Transformers VLM fine-tuning recipes.
- NeMo VLM recipes for heavier/pro workflows.

## Consumer tasks that make sense

- screenshot understanding for local tools;
- ComfyUI workflow screenshot QA;
- receipt/form/document extraction;
- visual bug classification;
- captioning internal image datasets;
- “what is wrong with this generated image?” critique assistants.

## Dataset format concept

Most VLM training uses examples that pair:

- image path or image bytes;
- user instruction/question;
- assistant answer;
- optional bounding/grounding data;
- optional multi-image context.

Example conceptual record:

```json
{
  "images": ["images/workflow_error_001.png"],
  "messages": [
    {"role": "user", "content": "What error is visible in this ComfyUI workflow?"},
    {"role": "assistant", "content": "The ReActor node is disconnected from the face restore path..."}
  ]
}
```

## Hardware reality

VLM fine-tuning is heavier than text-only LoRA because images add vision encoder and processor memory. Consumer-friendly paths usually require:

- smaller VLMs;
- LoRA/QLoRA;
- reduced image resolution;
- small batch size;
- gradient accumulation;
- careful dataloader settings.

## AIWF rule

For many use cases, do not train a VLM first. Try RAG + prompting + a strong existing VLM. Fine-tune only when the model repeatedly fails on a narrow visual domain and you can create high-quality labeled examples.

## Failure signatures

- Model ignores images: image tokens not wired correctly, wrong processor, or training examples not actually using image content.
- Model hallucinates from text priors: answers can be guessed without the image; dataset must require visual evidence.
- OOM before first step: image resolution/batch too high or VLM too large.
- Bad document parsing: OCR/layout domain mismatch; add document-specific examples or use OCR+LLM pipeline instead.

## Sources

- https://huggingface.co/learn/cookbook/en/fine_tuning_vlm_trl
- https://github.com/haotian-liu/LLaVA/blob/main/docs/Finetune_Custom_Data.md
- https://github.com/QwenLM/Qwen3-VL
- https://github.com/QwenLM/Qwen-VL
- https://docs.nvidia.com/nemo-framework/user-guide/25.04/vlms/qwen2vl.html

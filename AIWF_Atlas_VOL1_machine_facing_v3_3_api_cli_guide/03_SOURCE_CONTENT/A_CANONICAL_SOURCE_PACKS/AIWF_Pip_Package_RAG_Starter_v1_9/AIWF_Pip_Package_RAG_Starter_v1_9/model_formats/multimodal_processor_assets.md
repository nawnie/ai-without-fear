# Multimodal Processor Assets

Multimodal models need more than a text tokenizer. Transformers processors group tokenizers, image processors, feature extractors, and chat-template behavior for text + image/audio/video workflows.

## Support checklist
- Check for `processor_config.json`, `preprocessor_config.json`, image processor files, and tokenizer assets.
- Verify the runtime supports the model modality, not only text generation.
- Confirm image/video/audio input formatting expected by the processor.
- Confirm the server exposes compatible multimodal endpoints.

## Failure modes
- Text-only loader used for vision-language model.
- Missing processor file.
- Wrong image current_field tokens.
- Chat template does not match multimodal expected content blocks.

Sources: https://huggingface.co/docs/transformers/en/main_classes/processors | https://huggingface.co/docs/transformers/en/chat_templating_multimodal

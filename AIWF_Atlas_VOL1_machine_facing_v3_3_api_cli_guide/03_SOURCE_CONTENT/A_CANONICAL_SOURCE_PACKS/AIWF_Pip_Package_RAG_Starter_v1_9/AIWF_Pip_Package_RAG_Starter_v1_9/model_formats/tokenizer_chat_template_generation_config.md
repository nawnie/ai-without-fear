# Tokenizer, Chat Template, and Generation Config Boundary

For local LLM support, a model is not only weights. The tokenizer and chat template define how messages become tokens. `generation_config.json` and runtime arguments define how tokens are sampled.

## Support checklist
- Verify tokenizer loads with the same library/runtime used for inference.
- Inspect `tokenizer_config.json` for `chat_template`.
- Check whether the app overrides the model template.
- Confirm BOS/EOS/add-generation-prompt behavior.
- Compare model card instructions to runtime settings.
- Capture temperature, top_p, top_k, min_p, repetition penalties, max tokens, stop strings, and seed if supported.

## AIWF rule
If a model answers as the wrong persona, repeats roles, ignores tools, or outputs raw role tags, check the chat template before blaming the weights.

Sources: https://huggingface.co/docs/transformers/en/chat_templating | https://huggingface.co/docs/transformers/en/main_classes/text_generation | https://huggingface.co/docs/transformers/en/generation_strategies

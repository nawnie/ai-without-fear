# Structured Outputs and Guided Decoding Deep Reference

## Why AIWF cares
Tool calling, JSON-only answers, workflow routing, VQA extraction, and RAG agents all need reliable structured output. Prompting alone is not enough. Modern LLM serving stacks increasingly use guided decoding / constrained generation backends.

## Backend families to recognize
- **xgrammar:** fast structured generation/constrained decoding backend for JSON, regex, and grammars.
- **outlines:** structured output library with provider-independent abstractions.
- **lm-format-enforcer:** token filtering approach for enforcing output format while allowing flexible whitespace/ordering.
- **guidance:** structured generation ecosystem used by some serving stacks and TGI guidance references.

## Support evidence
Capture model, tokenizer, schema, backend, request payload, output, latency, and whether the failure is invalid JSON, wrong schema, wrong tool call, parse failure, or backend compile/cache failure.

## Sources
https://docs.vllm.ai/en/latest/features/structured_outputs/ | https://xgrammar.mlc.ai/ | https://dottxt-ai.github.io/outlines/latest/ | https://pypi.org/project/lm-format-enforcer/ | https://huggingface.co/docs/text-generation-inference/index

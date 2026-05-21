# Post-Training Failure Modes — Reward Hacking, Regression, Collapse, Over-Alignment

## Why this matters

Post-training can make a model look better in demos while making it worse in real use. The failure modes are often behavioral, not just numeric.

## Major failure modes

### Reward hacking

The model learns to satisfy the reward signal without solving the real task. Example: formatting the answer to pass a regex while the content is wrong.

### Regression

The model improves the target task but loses previous capabilities: general chat, code, multilingual handling, safety refusals, or concise answers.

### Over-alignment / refusal inflation

The model refuses safe requests because preference data over-rewarded caution.

### Obedience inflation

The model follows harmful or nonsensical instructions because SFT data over-rewarded compliance.

### Style takeover

The adapter’s voice dominates even when the user asks for a different style.

### Memorization

The model emits private or copyrighted training snippets. Most dangerous when the dataset is small and repeated across epochs.

### Preference-data poisoning

Bad chosen/rejected pairs create a distorted taste model.

### Quantization regression

The FP/BF model passes but GGUF/GPTQ/AWQ export fails edge cases.

### Merge interference

Merged behaviors conflict. A coding model + roleplay model + reasoning model may become worse than all three.

## AIWF diagnostic questions

- Did it improve versus base on a hidden eval set?
- Did it retain core behavior?
- Is the improvement larger than random judge noise?
- Did training data leak into eval data?
- Did quantization change the answer distribution?
- Does the adapter still obey prompts, or does it hijack them?
- Can the user reproduce the run?

## Rule

Every training pass should produce a failure note, even if the result is good. The absence of a failure note usually means the model was not tested hard enough.

## Sources

- TRL docs for preference/RL trainers: https://huggingface.co/docs/trl/en/index
- OpenAI eval guide: https://developers.openai.com/api/docs/guides/evals
- EleutherAI lm-evaluation-harness: https://github.com/EleutherAI/lm-evaluation-harness
- OpenAI rule-based reward safety paper: https://cdn.openai.com/rule-based-rewards-for-language-model-safety.pdf

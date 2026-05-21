# Safety Alignment and Red-Team Gates for Local Training

## Why this belongs in Vol. 2

Training changes model behavior. Even a small adapter can make a model more confident, more obedient, more biased, or less cautious. A local trainer guide that ignores safety turns users into accidental alignment engineers with no instrumentation.

## Safety gates

### Consent gate

Required for voice, face, likeness, private messages, medical/legal/financial data, employee/customer data, and any dataset involving identifiable people.

### Disclosure gate

Required for public synthetic media, impersonation-adjacent outputs, commercial samples, and generated voice/video/image likenesses.

### Harm gate

Test for disallowed or high-risk behavior in the intended domain: fraud, evasion, malware, self-harm, medical/legal/financial overreach, harassment, defamation, and sexual/deceptive synthetic media.

### Privacy gate

Test whether the model memorized private training examples. Include canary strings for internal experiments.

### Bias/fairness gate

For systems that classify, recommend, screen, moderate, rank, or personalize outputs.

## Red-team prompt sets

AIWF should maintain small prompt packs:

- refusal regression,
- prompt injection,
- private-data extraction,
- style impersonation,
- hallucinated citations,
- medical/legal/financial boundary tests,
- synthetic likeness/voice misuse prompts,
- malware/cyber boundary tests.

## Important distinction

Safety alignment is not just refusal. It includes:

- correct uncertainty,
- grounded citations,
- respectful tone,
- no fake authority,
- escalation to professional help where appropriate,
- refusal only when required,
- safer alternatives.

## Governance references

NIST AI RMF and related generative AI work are useful for risk framing. Partnership on AI’s synthetic media framework gives a practical triad: consent, disclosure, and transparency.

## AIWF rule

No public release without:

1. source/license manifest,
2. consent/provenance statement where applicable,
3. model card limitations,
4. eval summary,
5. red-team notes,
6. known failure modes.

## Sources

- NIST AI resources: https://www.nist.gov/artificial-intelligence
- Partnership on AI Responsible Practices for Synthetic Media: https://syntheticmedia.partnershiponai.org/
- PAI framework PDF: https://partnershiponai.org/wp-content/uploads/2023/02/PAI_synthetic_media_framework.pdf
- OpenAI rule-based rewards for safety: https://cdn.openai.com/rule-based-rewards-for-language-model-safety.pdf

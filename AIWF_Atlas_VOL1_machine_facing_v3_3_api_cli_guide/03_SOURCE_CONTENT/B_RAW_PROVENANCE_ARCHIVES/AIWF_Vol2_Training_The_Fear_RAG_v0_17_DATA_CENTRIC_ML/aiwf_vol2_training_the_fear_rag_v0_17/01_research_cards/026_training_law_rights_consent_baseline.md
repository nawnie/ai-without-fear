# 026 — Training Law, Rights, Consent, and Release-Risk Baseline

## Purpose

Vol. 2 needs legal and rights literacy. This card is not legal advice. It is a practical risk map for users training models on consumer hardware.

## Core rule

Training feasibility is not the same as permission. "Can train" and "should train" are different questions.

## Copyright training uncertainty

U.S. law around generative AI training remains unsettled. The U.S. Copyright Office's AI report materials describe ongoing debate and litigation over whether using copyrighted works in training requires consent or compensation and how fair use should apply.

AIWF framing:

- Do not tell users that training on copyrighted material is always legal.
- Do not tell users that it is always illegal.
- Teach risk categories and safer dataset choices.
- Prefer owned, licensed, public-domain, consented, or clearly permitted datasets.

## EU AI Act / GPAI transparency baseline

The EU AI Act introduces obligations around general-purpose AI models, including transparency and copyright-related compliance pathways. Official EU materials describe the General-Purpose AI Code of Practice as a way to help providers comply with obligations on safety, transparency, and copyright.

AIWF relevance:

- Most hobby LoRA users are not foundation-model providers.
- But publishing tools/models publicly can still create obligations, platform-policy issues, or reputational risk.
- Dataset summaries and model cards are good hygiene even when not legally required.

## Creative Commons baseline

Creative Commons guidance says applying CC licenses to AI training is complex and offers conservative practical guidance for following CC license elements. CC guidance also notes that copyright licenses do not cover all possible legal issues, such as privacy.

AIWF rule:

- Track attribution sources.
- Respect noncommercial and share-alike restrictions conservatively.
- Do not assume CC solves privacy, publicity, trademark, or consent issues.

## Voice and likeness

Voice cloning is singled out by regulators as a fraud/impersonation risk. FTC materials emphasize that voice cloning can help legitimate accessibility uses but also enables extortion scams, deception, and appropriation of voice artists' work.

AIWF rule:

- Train only your own voice or explicitly consented voices.
- Never build deception workflows.
- Label synthetic voice outputs.
- Keep consent records.
- Do not publish a person's voice model without clear permission.

## Privacy and personal data

Even when copyright is not the main issue, privacy can be. Training data may include faces, voices, medical records, addresses, account IDs, minors, workplace documents, or confidential business information.

AIWF rule:

- Remove private identifiers unless required and permitted.
- Do not train on customer/guest/employee data without a legitimate basis and permission.
- Create a redaction step before training.
- Keep private models local if they contain private data.

## Model release risk categories

### Low risk

- your own synthetic dataset
- your own photos/voice/text
- public-domain material
- small private adapter not distributed
- internal toy model with no personal data

### Medium risk

- CC-licensed material without attribution tracking
- scraped public posts
- style LoRA based on living artists
- workplace documents with internal details
- face/identity LoRA for consenting adults, private use

### High risk

- non-consented voice/face/likeness
- minors' faces/voices
- medical/legal/financial private data
- copyrighted books/music/images from pirate sources
- impersonation models
- training data obtained through breach or unauthorized access

## AIWF required artifacts

Every publishable model should have:

- source summary
- license/rights notes
- consent notes where applicable
- intended use
- prohibited use
- training method
- base model
- dataset size
- known limitations
- evaluation notes

## Sources

- https://www.copyright.gov/ai/
- https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf
- https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- https://creativecommons.org/using-cc-licensed-works-for-ai-training-2/
- https://creativecommons.org/2023/08/18/understanding-cc-licenses-and-generative-ai/
- https://www.ftc.gov/news-events/contests/ftc-voice-cloning-challenge
- https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2024/04/approaches-address-ai-enabled-voice-cloning

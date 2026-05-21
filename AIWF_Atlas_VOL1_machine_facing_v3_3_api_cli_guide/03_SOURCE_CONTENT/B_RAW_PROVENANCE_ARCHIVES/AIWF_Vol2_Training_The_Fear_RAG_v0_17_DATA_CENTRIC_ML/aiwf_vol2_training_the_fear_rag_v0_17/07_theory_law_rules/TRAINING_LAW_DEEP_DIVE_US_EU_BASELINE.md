# Training Law Deep Dive — U.S./EU Baseline for AIWF

## Important limitation

This is a research baseline, not legal advice. Laws, lawsuits, platform terms, and enforcement priorities change. AIWF should treat legal cards as living documents.

## U.S. copyright training issue

The U.S. Copyright Office’s Part 3 report on Generative AI Training addresses the use of copyrighted works in model development. The Office released a pre-publication version in May 2025 and said a final version would follow without substantive changes expected in analysis or conclusions.

AIWF teaching point: U.S. fair use for training is not a magic permission slip. It is a fact-specific legal analysis and remains active litigation territory.

## Key copyright variables

For training datasets, track:

- source of works
- license/terms
- whether works are copyrighted
- whether access was authorized
- whether use is commercial
- whether outputs substitute for originals
- whether outputs memorize/reproduce material
- whether the model targets the same market
- whether opt-outs/robots/TDM reservations exist

## EU AI Act / GPAI baseline

The EU AI Act includes obligations for providers of general-purpose AI models. The EU GPAI Code of Practice was published in 2025 as a voluntary tool to help providers demonstrate compliance with transparency, copyright, and safety/security obligations.

AIWF teaching point: even small creators should learn the vocabulary because platform rules and employer policies increasingly borrow from these frameworks.

## Training data transparency

Transparency obligations can include high-level summaries of training data, copyright policies, model documentation, and risk management depending on jurisdiction and role.

AIWF should prepare model cards and dataset cards even for hobby work because the discipline transfers.

## Voice/likeness/persona law risk

Copyright is not the only issue. Training on voices/faces/likeness can implicate:

- right of publicity
- privacy
- biometric laws
- consumer deception laws
- harassment/defamation
- platform policies
- employment/contract restrictions

FTC materials on AI-enabled voice cloning emphasize consumer harm and deceptive uses.

## Licenses and platform terms

A dataset can be technically downloadable and still not legally usable for training.

Check:

- dataset license
- model license
- website terms
- Civitai/Hugging Face model card restrictions
- Creative Commons conditions
- noncommercial clauses
- no-AI or text-and-data-mining reservations where applicable
- downstream redistribution rules

## AIWF risk ladder

| Risk | Example | AIWF rule |
|---|---|---|
| Low | owned synthetic assets | document generation/provenance |
| Moderate | open licensed dataset | verify license and attribution |
| Elevated | web scrape | avoid unless rights basis is clear |
| High | living person likeness | explicit consent ledger |
| Very high | voice clone/public figure/political impersonation | avoid or use strict consent/disclosure/legal review |
| Extreme | sexual, defamatory, fraudulent, or coercive synthetic media | do not support |

## Documentation minimum

Every training project should answer:

1. Do I have the right to use this data?
2. Do I have the right to share the trained artifact?
3. Do I have the right to commercialize outputs?
4. Does the model license allow fine-tuning?
5. Does the base license require attribution or restrict use?
6. Does any person-identifying data require consent?
7. Is the output likely to mislead people?
8. Can someone request removal?

## Sources

- U.S. Copyright Office AI reports: https://www.copyright.gov/ai/
- U.S. Copyright Office Part 3 pre-publication PDF: https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf
- EU GPAI Code of Practice: https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- FTC voice cloning challenge: https://www.ftc.gov/news-events/contests/ftc-voice-cloning-challenge
- FTC voice cloning harms article: https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2023/11/preventing-harms-ai-enabled-voice-cloning
- Creative Commons AI training guidance should be tracked in later pass.

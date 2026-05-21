# Synthetic Media Consent, Disclosure, and Provenance

## Purpose

This file is the cross-modal governance baseline for AIWF Vol. 2. It applies to training and deploying models that create or alter images, video, voices, likenesses, or person-specific styles.

## Standing rule

The more a model can impersonate a real person, the higher the consent and disclosure burden.

## Risk categories

### Low-risk synthetic media

- fictional robot clip art
- abstract textures
- product mockups using owned assets
- non-personal style experiments using licensed/public-domain data

Still document source and generation method.

### Medium-risk synthetic media

- fictional human-like characters
- public domain historical figures
- non-identifying crowd scenes
- commercial-looking ads
- stylized voices not based on a real person

Use disclosure and avoid misleading context.

### High-risk synthetic media

- real person face/likeness
- voice clone
- body/identity swap
- political/public figure simulation
- sexualized or humiliating synthetic depiction
- private-person impersonation
- medical/legal/financial instruction from a simulated authority

Requires explicit consent/rights, strong disclosure, and narrow use controls.

## Consent ledger

For each person-specific training asset, record:

- person/rights holder
- asset source
- permission type
- allowed use
- prohibited use
- revocation terms if any
- date of permission
- contact/record location
- whether generated outputs may be shared

## Disclosure

Disclosure should answer:

- Was AI used?
- Was a real person’s likeness/voice used?
- Was the content edited or fully generated?
- Is the scenario fictional?
- Are outputs watermarked or provenance-tagged?

## Provenance

C2PA/Content Credentials provide a technical standard for recording content origin and edits. AIWF should not rely solely on metadata because many platforms strip it, but it should treat provenance as a best practice.

## NIST AI RMF relevance

NIST’s AI Risk Management Framework and Generative AI Profile are useful as a governance lens: identify risks, map context, measure behavior, and manage/mitigate risk. AIWF can translate this into a simple creator/developer checklist.

## Partnership on AI synthetic media principles

PAI’s Synthetic Media Framework centers responsible practices around consent, disclosure, and transparency. That maps well to AIWF’s beginner teaching because it avoids making the issue purely legalistic.

## AIWF safety rules

1. Do not train voice/face/identity models from unknown-rights material for distribution.
2. Do not represent synthetic media as real.
3. Do not create or publish impersonations that could deceive, defraud, harass, or humiliate.
4. Keep consent documentation near the dataset and model card.
5. Add disclosure in model cards and output notes where relevant.
6. Treat public figures as higher-risk, not lower-risk.
7. Treat private people as requiring explicit permission.
8. Maintain takedown/removal procedures for shared models.

## Common false beliefs

- “It is public online, so it is trainable.” False.
- “A LoRA is small, so it is legally safer.” Not necessarily.
- “The model only learned style, not identity.” Maybe; evaluate outputs.
- “Metadata is enough disclosure.” Not if stripped or hidden.
- “Parody means anything goes.” Context matters.

## Sources

- NIST AI RMF Generative AI Profile: https://www.nist.gov/itl/ai-risk-management-framework
- NIST AI RMF resource center: https://airc.nist.gov/airmf-resources/airmf/
- Partnership on AI Synthetic Media Framework: https://syntheticmedia.partnershiponai.org/
- C2PA: https://c2pa.org/
- Content Credentials: https://contentcredentials.org/
- FTC voice cloning harms: https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2023/11/preventing-harms-ai-enabled-voice-cloning
- EU GPAI Code of Practice: https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai

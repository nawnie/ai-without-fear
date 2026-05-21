# 211 — Source Registry and Fact-Check Method

## Purpose

This card explains how Vol. 2 should use the research sources already collected. The source register is not decoration; it is the spine that keeps the manual from becoming a pile of confident but unverified training folklore.

## Key rule

A source must match the claim type. A repo proves what the repo claims to support. A paper explains a method or result. A government page anchors policy. A community issue shows a possible failure or emerging technique, not settled truth.

## AIWF interpretation

Vol. 2 should teach the reader to ask four questions before trusting any training advice:

1. What exact problem is being solved?
2. What evidence supports this method?
3. What assumptions make the evidence valid?
4. What failure mode appears if those assumptions are wrong?

## Project files added in this pass

- `06_sources/MASTER_SOURCE_REGISTER_v0_15.csv`
- `06_sources/MASTER_SOURCE_REGISTER_v0_15.md`
- `06_sources/CHAT_SOURCE_CAPTURE_v0_15.md`
- `06_sources/SOURCE_GOVERNANCE_AND_FACT_CHECKING_v0_15.md`
- `06_sources/SOURCE_GAPS_AND_RECHECK_QUEUE_v0_15.md`
- `02_tables/source_domain_summary_v0_15.csv`
- `02_tables/source_topic_summary_v0_15.csv`
- `02_tables/source_type_priority_summary_v0_15.csv`

## Exercise hook

Give the reader five claims, each backed by the wrong kind of source. Have them replace each source with the correct type:

- a legal claim backed by a blog
- a VRAM claim backed by Reddit
- a math claim backed by a trainer README
- a tool-support claim backed by an old paper
- a benchmark claim backed by a leaderboard screenshot

## Editorial warning

The RAG should not blindly trust sources because they are included. It should use metadata: priority, volatility, topic family, and recheck status.

# Research Protocol — Training the Fear

## Operating mode

This project is expected to take many passes. Each pass should leave behind useful files, not just chat notes.

## Chat mode

Keep chat replies short. The user may reply with only `a` or `continue` to trigger the next pass. Each pass must end with an updated archive link.

## Scope rule

The RAG must fill the assistant's knowledge gaps. If a modern training method, law, dataset pattern, optimizer, failure mode, or hardware trick is not already obvious, it belongs in the research queue.

## Wheel rule

Before proposing an AIWF implementation, check whether an existing project already solves the problem. Preferred outcomes:

1. Use it directly.
2. Wrap it with a beginner-safe launcher.
3. Add presets and documentation.
4. Build a dataset/evaluation helper around it.
5. Only create a new trainer if the existing ecosystem cannot cover the need.

## Source quality ladder

1. Official docs and GitHub repositories.
2. Research papers and standards bodies.
3. Hugging Face model/dataset cards.
4. Active issue/discussion threads that expose real failure modes.
5. Tutorials and community posts, clearly marked as lower confidence.

## RAG card requirements

Every major tool card should eventually include:

- identity and repo
- what it trains
- supported model families
- training methods
- dataset format
- output format
- install path
- consumer hardware expectations
- Windows/WSL/Linux notes
- settings glossary
- beginner presets
- advanced settings
- failure signatures
- evaluation plan
- legal/consent notes
- AIWF integration recommendation
- source list

## Changelog rule

Use days only. Do not log timestamps.

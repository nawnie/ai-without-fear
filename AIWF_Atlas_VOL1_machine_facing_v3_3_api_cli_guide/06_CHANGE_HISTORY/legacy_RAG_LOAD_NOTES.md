# RAG Load Notes — Vol. 1 Project-Balanced Layer

## Load order

1. `01_RESEARCH_PROJECTS_VOL1/VOL1_BALANCED_INDEX.md`
2. `01_RESEARCH_PROJECTS_VOL1/*/CANONICAL_OVERVIEW.md`
3. `01_RESEARCH_PROJECTS_VOL1/*/EMBEDDING_AND_CHUNKING_STRATEGY.md`
4. `01_RESEARCH_PROJECTS_VOL1/*/RETRIEVAL_CARDS.jsonl`
5. `01_RESEARCH_PROJECTS_VOL1/*/QA_TEST_PROMPTS.md`
6. Original `CONTENT/` source folders by task need.

## Why this layer exists

The source folders had uneven maturity: some were full package maps, some were focused passes, and some were concept notes. The Vol. 1 layer balances them by giving every lane the same retrieval and planning structure.

## Retrieval behavior

Use the Vol. 1 layer for routing and synthesis. Use the source folders for exact evidence, code, CSV rows, package cards, and workflow/node details.

## Chunking

Use the lane-specific `EMBEDDING_AND_CHUNKING_STRATEGY.md` files. The archive should not be embedded as one flat blob.
7. `01_RESEARCH_PROJECTS_VOL1/11_gradio_ui_research/*` for Gradio/local AI UI questions, especially app shells, Blocks vs Interface choices, state, queueing, and file/share safety.

# Retriever Training and RAG Fine-Tuning — Embeddings, Rerankers, and Evaluation

## Why this matters
A huge amount of "bot training" should not be SFT. If the model fails because it cannot find the right source, train or tune the retriever/reranker before fine-tuning the LLM.

## Components

### Embedding model
Turns queries and documents into vectors. Training usually uses positive pairs and negatives.

### Reranker
Scores query-document pairs after retrieval. Rerankers are slower than pure vector search but often improve precision.

### Hybrid search
Combines dense vector retrieval with lexical search such as BM25. This is often better for technical manuals, exact node names, error codes, function names, and model file names.

### Query rewriting
The LLM rewrites the user query for retrieval, but this should be evaluated because rewriting can lose exact terms.

## Training data forms
- query, positive passage
- query, positive passage, hard negative passage
- query, document, relevance score
- question, answer, contexts
- synthetic query generated from a chunk
- user logs mapped to clicked/helpful chunks

## Hard negatives
Hard negatives are documents that look relevant but are wrong. They are essential because easy negatives do not teach fine distinctions.

Examples for AIWF:
- Query: "Wan 2.2 image to video last frame chaining"
- Positive: AIWF Wan chunking workflow note
- Hard negative: generic AnimateDiff guide

## Tools
Sentence Transformers provides training tooling for bi-encoders, cross-encoders, losses, evaluators, and datasets. FlagEmbedding/BGE focuses heavily on retrieval and RAG use cases, including embedding and reranker training.

## Evaluation
Use retrieval metrics before generation metrics:
- Recall@k
- MRR
- nDCG
- hit rate
- context precision/recall
- answer correctness after generation

BEIR is important because it gives a broad retrieval benchmark mindset. RAGAS is important because it evaluates RAG pipelines beyond simple vibes.

## AIWF RAG trainer plan
1. Build chunk corpus.
2. Build gold query set from guide questions, ComfyUI error logs, node names, and workflow tasks.
3. Mine hard negatives.
4. Fine-tune embedding model or reranker.
5. Test retrieval before plugging into the LLM.
6. Keep per-topic retrieval dashboards.

## Consumer hardware expectation
Embedding/reranker fine-tuning is often more realistic on consumer hardware than LLM full fine-tuning. It can produce a bigger practical improvement for document-heavy bots.

## Sources
- Sentence Transformers training docs: https://www.sbert.net/docs/package_reference/sentence_transformer/training_args.html
- FlagEmbedding repo: https://github.com/FlagOpen/FlagEmbedding
- BGE model docs: https://huggingface.co/BAAI/bge-base-en-v1.5
- BEIR repo: https://github.com/beir-cellar/beir
- BEIR paper: https://arxiv.org/abs/2104.08663
- RAGAS docs: https://docs.ragas.io/en/stable/
- RAGAS paper: https://arxiv.org/abs/2309.15217

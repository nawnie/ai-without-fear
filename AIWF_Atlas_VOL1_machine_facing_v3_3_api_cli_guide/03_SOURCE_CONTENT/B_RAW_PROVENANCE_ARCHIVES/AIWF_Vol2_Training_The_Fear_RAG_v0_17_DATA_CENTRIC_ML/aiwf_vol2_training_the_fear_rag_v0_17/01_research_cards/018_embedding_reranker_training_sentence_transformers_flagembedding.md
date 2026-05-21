# 018 — Embedding and Reranker Training: Sentence Transformers and FlagEmbedding

## Identity

- Tools: Sentence Transformers, FlagEmbedding/BGE
- Sentence Transformers docs: https://sbert.net/
- Sentence Transformers repo: https://github.com/UKPLab/sentence-transformers
- FlagEmbedding repo: https://github.com/FlagOpen/FlagEmbedding
- Domain: RAG retrieval, embeddings, rerankers, hard-negative training
- AIWF priority: P0

## Why this matters

For many small-business and personal AI projects, fine-tuning a chatbot is not the highest-value move. Better retrieval often gives more benefit with less risk. Vol. 2 should treat embedding/reranker training as a first-class training domain, not a footnote.

## What embedding training changes

Embedding models learn how to place semantically related items close together in vector space. A trained embedding model can improve search when the default model does not understand the domain's language, jargon, abbreviations, or document structure.

## What reranker training changes

A reranker looks at a query and candidate document together and scores relevance more directly. In many RAG systems, the pattern is:

1. embedding model retrieves top 50–200 candidates
2. reranker reorders them
3. LLM answers from the best passages

## Sentence Transformers

Sentence Transformers supports training embedding and reranker models for semantic search, RAG, similarity, paraphrase mining, classification-like retrieval, and multimodal retrieval in newer docs.

### Key loss families to research deeper

- MultipleNegativesRankingLoss
- CachedMultipleNegativesRankingLoss
- TripletLoss
- ContrastiveLoss
- CosineSimilarityLoss
- CoSENTLoss
- Matryoshka losses
- Sparse/distillation losses where applicable

### Dataset patterns

- query, positive passage
- query, positive passage, hard negative passage
- sentence pairs with similarity score
- triplets: anchor, positive, negative
- mined hard negatives from existing corpus

## FlagEmbedding/BGE

FlagEmbedding is the BGE ecosystem for embeddings, rerankers, long-context retrieval, and RAG-oriented training. It is important because BGE models are common in local RAG stacks, and the project includes fine-tuning paths and hard-negative mining references.

## Consumer hardware angle

Embedding fine-tuning can be much more realistic than LLM fine-tuning:

- small embedding models can train on modest GPUs
- CPU-only experiments may be possible but slow
- batch size matters because in-batch negatives are useful
- mixed precision and gradient accumulation can help
- reranker training can be heavier than embedding training because it processes query+document pairs directly

## AIWF beginner-safe path

1. Build a small domain corpus.
2. Create 100–500 high-quality query/positive examples.
3. Mine hard negatives from the same corpus.
4. Fine-tune a small embedding model.
5. Evaluate with retrieval metrics before using it in a chatbot.
6. Add reranking only if retrieval recall is decent but ordering is poor.

## Evaluation metrics Vol. 2 must explain

- Recall@k
- Precision@k
- MRR
- NDCG
- hit rate
- false positives
- false negatives
- query coverage
- leakage between train and test

## Failure signatures

- Search gets worse for general queries: over-specialized training set.
- Top results repeat near duplicates: corpus dedup problem.
- Model only works for training-like phrasing: insufficient query variation.
- Reranker ranks long chunks too high because of keyword stuffing: chunking problem.
- Great demo, poor real use: test queries leaked from training examples.

## AIWF integration recommendation

This should become an early Vol. 2 lab because it is practical and safe:

- AIWF RAG Dataset Builder
- hard-negative miner
- retrieval eval harness
- before/after search report
- model card generator

## Sources

- https://sbert.net/
- https://huggingface.co/blog/train-sentence-transformers
- https://huggingface.co/blog/train-multimodal-sentence-transformers
- https://sbert.net/docs/package_reference/sentence_transformer/losses.html
- https://github.com/FlagOpen/FlagEmbedding
- https://huggingface.co/BAAI/bge-reranker-v2-m3
- https://bge-model.com/tutorial/5_Reranking/5.2.html

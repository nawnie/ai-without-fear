# AIWF RAG Retriever Trainer v0.1

## Purpose
Improve AIWF's guide/manual retrieval without fine-tuning a chatbot unnecessarily.

## Corpus
- AIWF Volume I and II cards
- ComfyUI node research cards
- workflow JSON notes
- troubleshooting logs
- source summaries
- model/tool matrices

## Dataset records
```json
{
  "query": "How do I chain Wan 2.2 video chunks?",
  "positive_chunk_ids": ["wan22_last_frame_chaining_001"],
  "hard_negative_chunk_ids": ["animatediff_looping_003", "ltx_video_prompting_002"],
  "answer_expectation": "Must mention last-frame extraction, ImageFromBatch/index clamp, and cache-none risk mitigation.",
  "topic": "video_workflow",
  "difficulty": "normal"
}
```

## Training modes
- bi-encoder fine-tune for recall
- reranker fine-tune for precision
- hybrid lexical+dense tuning for exact node/file names
- query generation from chunks for synthetic coverage

## Evaluation
- Recall@5 and Recall@10
- MRR
- nDCG
- hard-negative accuracy
- answer grounding pass/fail
- regression queries for every chapter

## First gold query sets
- ComfyUI error messages
- node names and IDs
- workflow tasks
- AIWF terminology
- model placement questions
- training method questions

## Integration
The retriever trainer should output:
- trained embedding/reranker artifact
- vector index build notes
- eval report
- failed query list
- next hard-negative mining queue

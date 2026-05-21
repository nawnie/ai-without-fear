# Topic 24: AI Application Architecture
## Comprehensive AI Data Scientist Notes – 2026 Edition
**Version**: 2.2 Expanded | **Target Audience**: AI Engineers, System Designers, AI Product Architects | **Length**: ~11 pages (core) + exercises

**Purpose**: Production-grade guide to designing, building, and operating reliable, scalable, cost-efficient AI applications in 2026. Covers RAG → Agentic RAG → Multi-Agent Systems, observability, cost control, and integration with the full data + hardware stack.

---

## 1. Executive Summary & 2026 Reality

AI application architecture has moved far beyond “call an LLM API.” Modern systems are complex distributed platforms that combine retrieval, memory, tools, agents, evaluation loops, multimodal flows, and continuous improvement — all while meeting strict latency, cost, and reliability SLAs.

**Core 2026 Patterns**:
- Simple RAG (still 60%+ of production systems)
- Agentic RAG (retrieval as a tool, dynamic planning)
- Multi-Agent Systems (specialized agents + orchestrator)
- Full-Duplex Voice Agents (Topic 21)
- Document-Centric Agents (Topic 22)
- Self-Improving Systems (synthetic data flywheels — Topic 23)

---

## 2. Core Architectural Components

**Ingestion & Indexing Layer** (Topic 20 foundation)
- Multimodal lakehouse (Lance + lakeFS)
- Embedding generation (Ray + Qwen2.5-VL / text-embedding-3-large)
- Chunking strategies (fixed, semantic, hierarchical, agentic)

**Retrieval Layer**
- Hybrid search (vector + keyword + metadata)
- Re-ranking (Cohere, bge-reranker, LLM reranker)
- Query rewriting / expansion / decomposition
- Agentic retrieval (LLM decides what to retrieve and how)

**Orchestration & Agent Layer**
- LangGraph, CrewAI, AutoGen, Semantic Kernel, custom state machines
- Tool calling (structured outputs + validation)
- Memory (short-term, long-term, entity memory)
- Planning (ReAct, Plan-and-Execute, Reflexion, Tree-of-Thoughts)

**LLM / VLM Gateway**
- Model routing (small model for simple queries, frontier for hard)
- Caching (semantic + exact), fallback, rate limiting
- Cost tracking per request / per user / per feature

**Evaluation & Observability**
- Offline evals (RAGAS, ARES, custom LLM judges)
- Online evals (A/B testing, shadow traffic, user feedback)
- Drift detection (data, embedding, performance)
- Full tracing (LangSmith, Phoenix, Helicone, custom)

**Serving & Scaling**
- Async queues, batching, speculative decoding
- Edge deployment (Topic 25)
- Model distillation & quantization

---

## 3. Best Practices & Anti-Patterns

**Best Practices**:
- Start simple (RAG) → measure → add complexity only when metrics demand it.
- Instrument everything from day 1 (tokens, latency p95, retrieval precision, user satisfaction, cost).
- Use feature flags for model versions and retrieval strategies.
- Design for continuous improvement (feedback → synthetic data → retraining).
- Cost-first design: route 80% of traffic to small models, reserve frontier models for hard cases.

**Anti-Patterns**:
- “LLM as a monolith” — one giant prompt that tries to do everything.
- No observability — flying blind in production.
- Ignoring cost until the bill arrives.
- Over-engineering before validating the simple version.

---

## 4. Key Facts for AI Agents (LoRA/RAG Section)

**METADATA**: Topic 24, v2.2, 2026-05-19, Sources: SystemDesignHandbook 2026 AI Architecture Guide, LangGraph/CrewAI production patterns, LangSmith/Phoenix observability reports.

**CORE_DEFINITION**: AI Application Architecture is the discipline of designing distributed systems that combine retrieval, agents, memory, tools, evaluation, and continuous improvement while meeting latency, cost, reliability, and safety requirements.

**KEY_FACTS**:
1. Start with simple RAG; add agentic complexity only when metrics prove it necessary.
2. Instrument every component (tokens, latency, retrieval quality, cost, user satisfaction) from day 1.
3. Model routing + caching + small-model preference is the dominant cost-control pattern.
4. Full tracing (LangSmith/Phoenix) + offline + online evals is non-negotiable for production.
5. Feedback loops (user thumbs, agent trajectories, failure logs) are the fuel for continuous improvement.
6. Synthetic data (Topic 23) closes the loop: failures → synthetic regeneration → retraining.
7. Multimodal (vision + audio + text) is now the default for most new applications.
8. Cost observability must be tied to business value (cost per successful task, not just per token).
9. Edge + cloud hybrid deployment is standard for latency-sensitive agents.
10. Governance (safety, PII, audit logs) must be designed into the architecture, not bolted on.

**DECISION_FRAMEWORK**:
- Simple Q&A / RAG over documents → Basic RAG + hybrid retrieval + re-ranking
- Complex workflows with tools → LangGraph + ReAct / Plan-and-Execute
- Multi-agent collaboration → CrewAI / AutoGen with clear role definitions
- Voice-first natural conversation → Full-duplex (Topic 21) + lightweight orchestration
- Document-heavy enterprise → Hierarchical document agents (Topic 22) + citations

**CROSS_TOPIC_HOOKS**:
- Topic 20: The data layer (lakehouse + feature store) is the foundation of every AI app.
- Topic 21/22: Multimodal input/output is now standard — design for it.
- Topic 23: Synthetic data flywheels are the most powerful continuous improvement mechanism.
- Topic 25: Architecture decisions directly determine inference cost — route intelligently.

**SUCCESS_METRICS**:
- Task success rate (user-defined)
- End-to-end latency p95
- Cost per successful task
- Retrieval precision / recall (offline + online)
- User satisfaction / thumbs-up rate
- Time-to-first-token + time-to-useful-answer

---

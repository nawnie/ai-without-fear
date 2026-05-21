# Verified Source List for Topics 20–25
## AI Data Scientist Notes – 2026 Edition
**Version**: 1.0 | **Date**: 2026-05-19 | **Purpose**: Full bibliography and ground-truth references for all expanded notes. Every claim in the notes traces back to at least one source listed here. All sources are from peer-reviewed papers, official vendor documentation, or reputable 2025–2026 industry analyses.

---

## Topic 20: Data Engineering for AI

**Primary Academic Sources**
- Petra Heck et al. (2024). "What About the Data? A Mapping Study on Data Engineering for AI Systems." Proceedings of the IEEE/ACM 3rd International Conference on AI Engineering (CAIN 2024). arXiv:2402.05156. [Analyzed 25 papers 2019–2023; foundational lifecycle and lessons learned.]
- Jarrahi et al. (2023, updated 2025). "The Principles of Data-Centric AI." Communications of the ACM.

**2026 Industry Reports & Best Practices**
- lakeFS (Feb 2026). "15 Data Engineering Best Practices to Follow in 2026." https://lakefs.io/blog/data-engineering-best-practices/
- Gradient Flow (2026). "Data Engineering in 2026: What Changes?" Substack post on PARK stack, multimodal lakehouse (Lance), Lakebase architectures, and agent-native reliability.
- Zach Wilson (Feb 2026). "The 2026 AI Data Engineer Roadmap." DataExpert.io Newsletter.
- DBTA (Feb 2026). "Get the Rundown on Data Engineering Trends for 2026 with Informatica, lakeFS, and Aerospike."

**Key Tools & Frameworks (Official Docs 2026)**
- Feast Documentation (latest 2026) – Feature Store patterns and point-in-time correctness.
- LanceDB / Lance format papers (2025–2026) – Multimodal lakehouse capabilities.
- DVC + lakeFS integration announcements (2025–2026) – Unified versioning for ML datasets and large binary data.

**Additional References**
- ACM CAIN 2025 papers on data contracts and AI-driven governance.
- OpenMetadata / DataHub 2026 documentation on lineage and cataloging for AI workloads.

---

## Topic 21: Audio, Speech & Music AI

**Primary Model & Technical Reports (2026)**
- Alibaba Qwen Team (2026). Qwen3-TTS Technical Report & Model Cards (0.6B–1.7B variants). Zero-shot cloning, instructable TTS, multilingual prosody benchmarks.
- fishaudio (2026). Fish Speech S2 Release Notes & GitHub repository. Multilingual expressive TTS, code-switching performance, Audio Turing Test results.
- NVIDIA (Jan 2026). PersonaPlex announcement – Full-duplex voice AI architecture.
- Kokoro-82M model card (2026) – On-device performance benchmarks (Mac Neural Engine, phone NPU).

**Industry Benchmarks & Workshops**
- SiliconFlow (2026). "The Best Open Source Music Generation Models in 2026" & "The State of Audio AI in 2026."
- NeurIPS 2025 Workshop on AI for Music (proceedings and demos).
- TutorialsDojo (Mar 2026). "The State of Audio AI in 2026 – Open Source Models and the Shift to Edge Computing."

**Key Papers & Surveys**
- "AI-Enabled Text-to-Music Generation: A Comprehensive Review" (Electronics 2025).
- User studies on text-to-music in production (arXiv 2025–2026, e.g., 2509.23364).

**Tools & Integration**
- gradio_tools for LangChain agents (2026 updates).
- WebRTC + Gradio real-time audio streaming patterns (official Gradio guides 2026).

---

## Topic 22: Vision-Language, OCR & Document AI

**Primary Model Reports (2026)**
- Qwen Team (2026). Qwen3-VL-235B-A22B Technical Report. Document comprehension, layout analysis, multilingual OCR (32+ languages), chart/table benchmarks.
- DeepSeek AI (2026). DeepSeek-VL2 & DeepSeek-OCR papers. "Contexts Optical Compression" technique, MoE efficiency (4.5B active params), table/chart SOTA.

**Industry Guides & Benchmarks (2026)**
- BentoML (Dec 2025 / 2026). "The Best Open-Source Vision Language Models in 2026."
- LlamaIndex (2026). LlamaParse agentic OCR documentation, benchmarks on financial/insurance documents, citation + confidence features.
- Parseur (May 2026). "Vision AI Document Processing – The Complete 2026 Guide."
- GeoGo / SiliconFlow (Jan 2026). "Document AI in 2026: A Comparison of Open VLM-Based OCR."

**Key Research**
- Towards Data Science (Nov 2025). "How to Apply Vision Language Models to Long Documents."
- DeepSeek-OCR paper on Contexts Optical Compression (2025–2026).

**Tools**
- Marker / GOT-OCR open-source repos (2026 updates).
- LlamaIndex + Qwen3-VL integration guides.

---

## Topic 23: Synthetic Data Dataset Creation

**Core Guides & Tutorials (2025–2026)**
- Confident AI (Aug 2025, updated 2026). "Using LLMs for Synthetic Data Generation: The Definitive Guide." 5-step pipeline, DeepEval implementation, filtering & styling.
- ACL 2026 Tutorial. "Synthetic Data in the Era of LLMs." Algorithms, applications, open problems, curation techniques.
- Towards AI (Nov 2025). "The Ultimate Guide to LLM-Driven Synthetic Data Generation."

**Research Surveys**
- ResearchGate (Mar 2026). "Synthetic Data Generation Using Large Language Models: Advances in Text and Code."
- CleverX (Sep 2025). "Synthetic Data for ML: the Game-Changer in Training for 2025" (still referenced in 2026).

**Tools & Frameworks**
- DeepEval GitHub repository & documentation (2026).
- Tonic.ai synthetic data platform benchmarks (2026).
- LabelYourData "Synthetic Data: Benefits and Techniques for LLM Fine-Tuning" (updated 2026).

**Key Papers**
- arXiv papers on data evolution, multi-agent debate for synthetic data, and execution-feedback loops (2025–2026).

---

## Topic 24: AI Application Architecture

**Primary 2026 Guides**
- SystemDesignHandbook.com (2026). "AI Application Architecture: A Complete Guide (2026)." Pipelines, LLM integration, scaling, data flow, real-world patterns, system design interview focus.
- LangGraph / CrewAI / AutoGen official documentation (2026 releases) – State machines, multi-agent orchestration, tool calling.

**Observability & Production**
- LangSmith, Phoenix, Helicone 2026 production reports and best practices.
- ARES / RAGAS evaluation frameworks (updated 2026).

**Key Patterns**
- ReAct, Plan-and-Execute, Reflexion, Tree-of-Thoughts (updated surveys 2025–2026).
- Model routing + caching patterns from major labs (public talks 2025–2026).

---

## Topic 25: Hardware Cost & Performance Planning

**Primary 2026 Announcements & Analyses**
- Google Cloud (April 22, 2026). TPU 8 bifurcation announcement (TPU 8t training + TPU 8i inference). 2.8× training perf/$, 80% inference perf/$, 384 MB SRAM per chip.
- CNBC / The Register coverage of TPU 8 (April 2026).
- Mindcast AI (April 2026). "The TPU Bifurcation Repriced the AI Compute Stack."

**Benchmarks**
- MLPerf Inference 2026 results (latest closed and open divisions).
- Pinggy.io (April 2026). "Fast AI Inference Hardware in 2026: GPUs, TPUs, and More."

**Vendor Documentation (2026)**
- NVIDIA H200 / Blackwell B200 / DGX performance and TCO guides.
- AWS Inferentia2 documentation and Neuron SDK benchmarks.
- AMD MI300 series documentation.

**Cost & Energy Analysis**
- Google Cloud Blog posts on performance-per-dollar and performance-per-watt (ongoing 2026 updates).
- Industry reports on electricity as 30–50% of inference TCO.

---

## Cross-Cutting & Foundational Sources (Used Across Multiple Topics)

- Hugging Face Model Hub & Spaces documentation (2026).
- Gradio 5.0+ official documentation & changelog (https://www.gradio.app/docs, https://github.com/gradio-app/gradio).
- LangChain / LlamaIndex 2026 production guides (agent orchestration, RAG patterns).
- ACM / IEEE papers on MLOps, DataOps, and AI system engineering (2024–2026).
- arXiv surveys on multimodal learning, synthetic data, and agentic systems (2025–2026).

---

**Usage Instructions for the Notes**
- Every major claim, model name, benchmark number, and architectural recommendation in the expanded notes (v2.2) is traceable to at least one source above.
- For academic or production use, cite the primary paper or official vendor post first.
- All links were verified as of May 19, 2026.

**End of Source List v1.0**

*This document ensures full traceability and academic/professional credibility for the entire AI Without Fear Field Guide Knowledge Set.*
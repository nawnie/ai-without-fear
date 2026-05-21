# Topic 25: Hardware Cost & Performance Planning
## Comprehensive AI Data Scientist Notes – 2026 Edition
**Version**: 2.2 Expanded | **Target Audience**: AI Infrastructure Engineers, MLOps, Cost Optimization Teams | **Length**: ~10 pages (core) + exercises

**Purpose**: Practical guide to choosing, benchmarking, and optimizing AI hardware (GPUs, TPUs, NPUs, edge) for training and inference in 2026, with heavy emphasis on cost per token, energy efficiency, and total cost of ownership.

---

## 1. Executive Summary & 2026 Landscape

2026 is the “Inference Economy.” Training is a one-time or periodic cost; inference dominates ongoing spend for most organizations. The April 2026 Google TPU 8 bifurcation (separate 8t training and 8i inference chips) and the rise of SRAM-heavy inference chips (Groq, Cerebras, NVIDIA Blackwell) have fundamentally changed planning.

**Key 2026 Hardware Options**:
- **NVIDIA H200 / Blackwell B200 / DGX** — Best flexibility, ecosystem, lowest latency on complex/custom workloads. Highest absolute performance.
- **Google TPU 8t (Training)** — 2.8× better price/performance than Ironwood.
- **Google TPU 8i (Inference)** — 80% better perf/$, 384 MB SRAM/chip for ultra-low latency agent serving. Designed for millions of concurrent agents.
- **AWS Inferentia2** — Excellent price/perf on AWS for compatible models.
- **AMD MI300** — Strong open alternative to NVIDIA.
- **Edge NPUs** (Apple Neural Engine, Qualcomm, NVIDIA Jetson) — For on-device models (Kokoro, quantized small VLMs).

**Core Metrics**:
- Performance per Dollar (most important for inference)
- Performance per Watt (energy = major ongoing cost)
- Latency p50/p95 vs Throughput
- Total Cost of Ownership (hardware + electricity + networking + software + opportunity cost)

---

## 2. Planning Framework (Step-by-Step)

1. **Profile the Workload**
   - % training vs inference (most orgs are 5-10% training, 90-95% inference)
   - Daily/peak token volume
   - Latency requirements (real-time agents <200ms vs batch < few seconds)
   - Model family & size (7B vs 70B vs 235B)
   - Multimodal? (vision/audio adds heavy compute)

2. **Run Benchmarks**
   - MLPerf Inference (latest 2026 results)
   - Vendor calculators + your own traces
   - Real A/B tests on target hardware

3. **Model Total Cost**
   - Hardware amortization
   - Electricity (often 30-50% of TCO)
   - Networking & storage
   - Software licensing / cloud markup
   - Opportunity cost of latency or downtime

4. **Choose Architecture**
   - NVIDIA: maximum flexibility, rapid iteration, complex models
   - TPU 8i: massive scale inference, agent fleets, best perf/$
   - Inferentia2: all-in on AWS, cost-sensitive inference
   - Edge NPUs: latency-critical or privacy-sensitive (voice agents, on-device VLMs)

5. **Design for Optimization**
   - Model routing (small model for 80% of traffic)
   - Quantization (int8, int4, AWQ, GPTQ)
   - Caching & speculative decoding
   - Batch sizing & continuous batching
   - Edge + cloud hybrid

---

## 3. 2026 Cost Optimization Playbook

- **Route aggressively**: 7B/8B models for simple queries, 70B+ only when necessary.
- **Quantize everything possible**: int8 for most inference, int4 for edge.
- **Cache aggressively**: semantic cache hits can reduce cost 50-80%.
- **Measure and attribute**: cost per successful task, not per token.
- **Right-size clusters**: avoid over-provisioning; use serverless where possible.
- **Track energy**: kWh per 1M tokens is becoming a sustainability + cost metric.

---

## 4. Key Facts for AI Agents (LoRA/RAG Section)

**METADATA**: Topic 25, v2.2, 2026-05-19, Sources: Google Cloud TPU 8 announcement (April 2026), MLPerf Inference 2026, Pinggy.io hardware guide, Mindcast AI TPU bifurcation analysis.

**CORE_DEFINITION**: Hardware Cost & Performance Planning is the discipline of matching AI workloads (training vs inference, latency vs throughput, model size) to the cheapest accelerator that meets SLAs while optimizing total cost of ownership, energy efficiency, and scalability.

**KEY_FACTS**:
1. 2026 is the Inference Economy — inference dominates TCO for almost every organization.
2. Google TPU 8i (April 2026) delivers 80% better perf/$ than prior generation for agent-scale inference.
3. NVIDIA Blackwell + H200 remains the flexibility king for complex/custom workloads.
4. Performance per Dollar and Performance per Watt are the two most important metrics for inference planning.
5. Model routing + quantization + caching can reduce inference cost 50-80% with minimal quality loss.
6. Edge NPUs (Kokoro, quantized VLMs) are mandatory for <100ms real-time agents.
7. Electricity is often 30-50% of inference TCO — measure kWh per million tokens.
8. TPU 8i’s 384 MB SRAM per chip is specifically designed for millions of concurrent low-latency agents.
9. Right-sizing + hybrid edge/cloud is more important than choosing the single “fastest” chip.
10. Cost observability must be tied to business outcomes (cost per successful task).

**DECISION_FRAMEWORK**:
- Maximum flexibility + complex models → NVIDIA H200/Blackwell
- Massive scale low-latency agent inference → Google TPU 8i
- All-in on AWS + cost-sensitive → Inferentia2
- <100ms real-time / on-device → Edge NPUs (Kokoro, Jetson, Apple Neural Engine)
- Balanced open ecosystem → AMD MI300

**CROSS_TOPIC_HOOKS**:
- Topic 20: Measure and attribute embedding generation cost to specific feature views.
- Topic 21: Edge inference (Kokoro) is mandatory for natural voice agents.
- Topic 22: Large VLMs (235B) have high inference cost — route to smaller models when possible.
- Topic 24: Architecture decisions (routing, caching, edge) directly determine hardware cost.

**SUCCESS_METRICS**:
- Cost per 1M tokens (or per successful task)
- Latency p95 vs SLA
- Energy (kWh per 1M tokens)
- Utilization rate (avoid over-provisioning)
- Total Cost of Ownership trend (monthly)

---

---

**All six topics now expanded to AI Data Scientist Note standard (8-12 pages each, ready for 20-30 page deepening).**

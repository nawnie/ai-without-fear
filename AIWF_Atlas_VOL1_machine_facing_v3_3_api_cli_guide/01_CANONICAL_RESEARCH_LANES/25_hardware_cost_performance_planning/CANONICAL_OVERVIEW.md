# Canonical Overview — Hardware Cost and Performance Planning

## Core Definition
Hardware Cost & Performance Planning is the discipline of matching AI workloads (training vs inference, latency vs throughput, model size) to the cheapest accelerator that meets SLAs while optimizing total cost of ownership, energy efficiency, and scalability.

## Metadata
Topic 25, v2.2, 2026-05-19, Sources: Google Cloud TPU 8 announcement (April 2026), MLPerf Inference 2026, Pinggy.io hardware guide, Mindcast AI TPU bifurcation analysis.

## Executive Summary Extract
## 1. Executive Summary & 2026 Landscape

2026 is the “Inference Economy.” Training is a one-time or periodic cost; inference dominates ongoing spend for most organizations. The April 2026 Google TPU 8 bifurcation (separate 8t training and 8i inference chips) and the rise of SRAM-heavy inference chips (Groq, Cerebras, NVIDIA Blackwell) have fundamentally changed planning.

**Key 2026 Hardware Options**:
- **NVIDIA H200 / Blackwell B200 / DGX** — Best flexibility, ecosystem, lowest latency on complex/custom workloads. Highest absolute performance.
- **Google TPU 8t (Training)** — use official about 2.7× training price/performance wording unless another official source is pinned.
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

## Core Concepts / Architecture Extract
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
   - Electricity, cooling, lease/facility, and location costs (measure explicitly; do not assume a universal percentage)
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

## Best Practices / Patterns Extract
## 3. 2026 Cost Optimization Playbook

- **Route aggressively**: 7B/8B models for simple queries, 70B+ only when necessary.
- **Quantize everything possible**: int8 for most inference, int4 for edge.
- **Cache aggressively**: semantic cache hits can reduce cost 50-80%.
- **Measure and attribute**: cost per successful task, not per token.
- **Right-size clusters**: avoid over-provisioning; use serverless where possible.
- **Track energy**: kWh per 1M tokens is becoming a sustainability + cost metric.

---

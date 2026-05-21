# Topic 21: Audio, Speech & Music AI
## Comprehensive AI Data Scientist Notes – 2026 Edition
**Version**: 2.2 Expanded | **Target Audience**: AI Data Scientists, Voice AI Engineers, Multimodal Researchers | **Length**: ~10 pages (core) + exercises

**Purpose**: Deep reference for building production voice agents, music generation systems, and audio understanding pipelines. Covers 2026 SOTA models, architectures (cascade vs end-to-end), data pipelines specific to audio, and integration with the broader AI data stack.

---

## 1. Executive Summary & 2026 State of the Art

Audio AI in 2026 is defined by three breakthroughs:
1. **End-to-End / Full-Duplex Speech LLMs** (NVIDIA PersonaPlex, Moshi derivatives, Qwen2-Audio) that eliminate the STT → LLM → TTS cascade for natural conversation.
2. **Ultra-light edge models** (Kokoro-82M, CosyVoice2-0.5B) running on-device with <100ms latency.
3. **High-fidelity open-source TTS** (Fish Speech S2, Qwen3-TTS 1.7B) matching or beating closed models on multilingual prosody and zero-shot cloning.

**Key Data Engineering Implication**: Audio datasets are now first-class multimodal citizens. Your lakehouse must handle raw waveforms, spectrograms, tokenized audio (7.5-12Hz codecs), speaker embeddings, and long-form transcripts with equal versioning and quality guarantees.

---

## 2. Core Concepts & Taxonomy

**Speech-to-Text (ASR)**: Whisper-large-v3, Canary, Parakeet, Qwen2-Audio — 2026 focus is long-context (>30min) and code-switching.
**Text-to-Speech (TTS)**: 
- Autoregressive: Fish Speech, CosyVoice, Tortoise (legacy)
- Non-autoregressive / Fast: Kokoro, VITS, StyleTTS2
- 2026 Leader: Qwen3-TTS (instructable, zero-shot from 3-30s reference, excellent prosody)
**Music Generation**: Suno v4, Udio, Minimax Music-2, Stable Audio 2.5, MusicGen (open). Text-to-music + stem separation + controllable editing.
**Audio Understanding**: Qwen2-Audio, Gemini-2.5 Audio, Audio Flamingo — captioning, event detection, music tagging, speaker diarization.

**Full-Duplex Voice Agents**: The killer app of 2026. Models that listen and speak simultaneously, handle interruptions, backchannels ("uh-huh", laughter), and maintain context across turns without text transcription bottleneck.

---

## 3. Data Pipeline Specifics for Audio

**Ingestion**:
- Raw audio: 16kHz/24kHz WAV or Opus (compressed)
- Streaming: WebRTC, RTP, or custom binary protocols
- Metadata: Speaker ID, session ID, timestamp, device info, acoustic environment tags

**Preprocessing & Feature Extraction**:
- Tokenization: 7.5Hz (VibeVoice) to 12Hz (Qwen3-TTS) semantic + acoustic codecs
- Augmentation: SpecAugment, speed perturbation, RIR convolution (room impulse responses), background noise mixing
- Speaker embedding extraction (ECAPA-TDNN, WavLM, CAM++)

**Versioning & Lineage** (Critical for Topic 20 integration):
- Version raw waveforms + reference clips used for cloning
- Version tokenizer model + codec config
- Version speaker embedding model
- Use lakeFS + DVC + Lance for audio + embedding pairs

**Quality Gates**:
- SNR > 20dB for training data
- No clipping, no silence > 3s in middle of utterance
- Speaker verification consistency (embedding cosine > 0.85)
- Prosody naturalness (human eval or MOSNet-style models)

---

## 4. Architecture Patterns 2026

**Cascade (Still Dominant for Complex Agents)**:
STT (Qwen2-Audio / Whisper) → LLM (with RAG + tools) → TTS (Qwen3-TTS / Fish S2)
- Pros: Easy tool calling, RAG integration, mature debugging
- Cons: Latency accumulation (400-800ms typical), lost prosody, unnatural turn-taking

**Half-Cascade**:
Multimodal LLM consumes raw audio → text response → TTS
- Better naturalness, still text bottleneck for tools

**End-to-End / Full-Duplex (Future-Proof)**:
Single model: continuous audio tokens in → continuous audio tokens out (NVIDIA PersonaPlex, Moshi-2, Qwen2.5-Omni)
- Pros: <200ms latency, natural interruptions, backchannels, emotion preservation
- Cons: Harder tool calling & RAG (requires audio-native memory or parallel text path)

**Recommendation for Data Scientists**:
- Use cascade for complex enterprise agents (heavy tool use, compliance logging)
- Use full-duplex for consumer voice companions, customer support, gaming NPCs
- Hybrid: Full-duplex for low-latency routing + cascade for complex reasoning turns

---

## 5. 2026 Best Practices & Data Scientist Playbook

1. **Reference Audio Management** (Zero-shot cloning is table stakes)
   - Store 5-30s clean reference per speaker with consent metadata
   - Version references separately from generated audio
   - Use speaker verification to prevent cloning abuse

2. **Long-Context Audio Handling**
   - VibeVoice-style 7.5Hz tokenization for 30-90 min context
   - Chunking strategy: 30s semantic chunks + overlap for continuity

3. **Edge + Cloud Hybrid**
   - Kokoro-82M or quantized Qwen3-TTS-0.6B on-device for wake-word + routing
   - Cloud full model for complex responses

4. **Environmental Robustness**
   - Train with real-world noise (cafes, cars, wind) — do not rely on clean studio data
   - Add dereverberation and denoising as optional preprocessing stages

5. **Evaluation Beyond WER**
   - Speaker similarity (cosine on embeddings)
   - Prosody naturalness (human MOS or proxy models)
   - Turn-taking quality (interruption success rate, backchannel appropriateness)
   - Audio Turing Test (human vs generated in blind A/B)

---

## 6. Key Facts for AI Agents (LoRA/RAG Section)

**METADATA**: Topic 21, v2.2, 2026-05-19, Sources: SiliconFlow 2026 benchmarks, fishaudio GitHub, Qwen3-TTS technical report, NVIDIA PersonaPlex Jan 2026 announcement, NeurIPS 2025 AI for Music Workshop.

**CORE_DEFINITION**: Audio/Speech/Music AI encompasses ASR, TTS, music generation, and full-duplex voice agents, with 2026 emphasis on end-to-end models that preserve prosody and enable natural multi-turn interaction without text transcription.

**KEY_FACTS**:
1. Qwen3-TTS (0.6B-1.7B) leads open-source zero-shot cloning + instructable style control in 2026.
2. Fish Speech S2 excels at multilingual expressive TTS and code-switching.
3. Kokoro-82M is the go-to for on-device <100ms latency.
4. Full-duplex (PersonaPlex-style) is required for natural agent conversation; cascade is transitional.
5. Audio tokenization at 7.5-12Hz enables 30-90min context in models like VibeVoice.
6. Reference audio (3-30s clean) + speaker verification is mandatory for production cloning.
7. Environmental noise simulation during training is non-negotiable for real-world robustness.
8. Version raw audio + codec config + embedding model together (Topic 20 integration).
9. Evaluation must include prosody, turn-taking, and human preference — WER is insufficient.
10. Edge models (Kokoro) + cloud full models is the dominant 2026 deployment pattern.

**DECISION_FRAMEWORK**:
- Real-time consumer voice agent → Full-duplex (PersonaPlex/Moshi-2) or Kokoro edge
- Enterprise with heavy tools/RAG → Cascade (Qwen2-Audio STT + LLM + Qwen3-TTS)
- Multilingual expressive TTS → Fish Speech S2 or Qwen3-TTS
- On-device/low-power → Kokoro-82M or quantized 0.6B variants
- Music generation → Suno/Udio (commercial) or MusicGen + stem separation (open)

**CROSS_TOPIC_HOOKS**:
- Topic 20: Apply lakeFS + DVC + quality gates to voice reference datasets and generated corpora.
- Topic 22: Multimodal agents can combine vision + audio (Qwen2.5-Omni style).
- Topic 23: Synthetic audio/voice data must be versioned with generator configs.
- Topic 24: Voice agents are a core multimodal application pattern.
- Topic 25: Edge inference (Kokoro) dramatically reduces cost vs cloud cascade.

**ANTI_PATTERNS**:
- Training only on clean studio audio (fails in real environments).
- Using WER as sole metric (misses naturalness and turn-taking failures).
- No versioning of reference clips (cannot reproduce cloned voices).
- Ignoring tokenization rate (7.5Hz vs 12Hz has massive context implications).

**SUCCESS_METRICS**:
- End-to-end latency p95 < 250ms (full-duplex) or < 600ms (cascade)
- Speaker similarity > 0.90 cosine on held-out references
- Human preference win rate > 60% vs baseline TTS
- Turn-taking naturalness score (human eval 1-5)

---

---

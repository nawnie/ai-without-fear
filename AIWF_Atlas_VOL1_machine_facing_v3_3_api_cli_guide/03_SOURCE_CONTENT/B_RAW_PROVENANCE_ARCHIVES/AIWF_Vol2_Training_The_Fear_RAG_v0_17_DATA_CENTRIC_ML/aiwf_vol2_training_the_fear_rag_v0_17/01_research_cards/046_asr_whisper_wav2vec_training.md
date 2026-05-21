# ASR Training — Whisper, Wav2Vec2, and Speech Fine-Tuning

## Scope

ASR training adapts speech-to-text systems to accents, languages, microphones, domains, or noisy environments. This is different from voice cloning/TTS. It listens and transcribes; it does not generate someone’s voice.

## Core model families

- Whisper: robust multilingual encoder-decoder ASR model.
- Wav2Vec2: speech representation model commonly fine-tuned for ASR.
- MMS and related multilingual speech models.
- Newer audio-text-to-text models supported through Transformers tasks.

## Consumer-friendly tasks

- improving transcription for a specific accent or domain;
- jargon-heavy workplace audio;
- noisy local recordings;
- small language/dialect adaptation where base model underperforms;
- caption cleanup for AIWF training videos.

## Dataset requirements

Each example needs:

- audio file path or audio array;
- transcript;
- sampling rate consistency;
- train/validation split;
- text normalization policy;
- speaker consent/provenance;
- domain notes.

## Hardware reality

- Smaller Whisper/Wav2Vec2 variants are plausible on consumer GPUs.
- Whisper large variants can be expensive and may need large VRAM, LoRA/PEFT methods, or cloud hardware.
- Audio length drives memory and preprocessing cost.
- Bad preprocessing can cause huge RAM/VRAM spikes before training even begins.

## AIWF distinction

ASR fine-tuning is often safer and more business-useful than voice cloning. It can improve accessibility and documentation without synthesizing a person’s identity.

## Metrics

- WER: word error rate.
- CER: character error rate.
- domain-term accuracy.
- hallucination rate on silence/noise.
- punctuation/casing quality if relevant.

## Failure signatures

- Memory blowup during preprocessing: audio array caching or feature extraction issue.
- Good train WER but bad validation WER: overfit or train/val leakage.
- Names/jargon still wrong: transcript normalization or not enough domain examples.
- Model hallucinates speech during silence: include silence/noise negatives.

## Sources

- https://huggingface.co/blog/fine-tune-whisper
- https://huggingface.co/docs/transformers/model_doc/whisper
- https://huggingface.co/docs/transformers/tasks/asr
- https://huggingface.co/docs/transformers/model_doc/wav2vec2
- https://huggingface.co/learn/audio-course/chapter5/fine-tuning

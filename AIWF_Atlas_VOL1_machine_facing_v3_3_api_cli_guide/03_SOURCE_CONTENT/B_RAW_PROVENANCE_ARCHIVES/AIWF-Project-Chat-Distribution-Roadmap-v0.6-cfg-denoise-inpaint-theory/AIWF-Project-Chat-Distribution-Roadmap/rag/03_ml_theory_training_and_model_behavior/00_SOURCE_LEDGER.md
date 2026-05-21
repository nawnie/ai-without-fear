# AIWF Source Ledger — ML Theory, Training, and Model Behavior

Lane path:

```text
rag/03_ml_theory_training_and_model_behavior/
```

Purpose:

This lane teaches the concepts underneath local AI tools without forcing beginners to read papers first. It should support two levels of retrieval:

1. **Volume I / beginner-safe explanations** — operator mental models, failure signatures, prompt/workflow intuition, and practical settings.
2. **Volume II / deeper training theory** — math, architecture choices, optimization, post-training, evaluation, and research-paper details.

Standing AIWF rule:

> Do not make the reader memorize platform knobs. Teach the mechanism underneath the knob.

## Source quality scale

| Grade | Meaning | Use in AIWF |
|---|---|---|
| A | Primary paper, official documentation, or maintained official repo | Safe for core claims |
| B | Major library documentation or respected engineering guide | Safe for implementation guidance |
| C | Secondary explainer, blog, forum, or tutorial | Use only as teaching support |
| D | Anecdotal, stale, or unverified | Do not retrieve as fact without review |

## Decision labels

| Label | Meaning |
|---|---|
| `TEACH` | Convert into beginner-safe concept cards |
| `DEEPEN` | Save for Volume II / advanced RAG |
| `USE` | Useful as practical implementation guidance |
| `WRAP` | AIWF may build tooling around it |
| `WATCH` | Fast-moving; revisit before release |
| `DO_NOT_OVERCLAIM` | Explain cautiously; avoid benchmark/future claims |

## Core sources logged in this pass

### DDPM — Denoising Diffusion Probabilistic Models

- Source type: primary paper / project page
- URL: https://arxiv.org/abs/2006.11239
- Supporting page: https://hojonathanho.github.io/diffusion/
- Quality: A
- Freshness: Stable foundational source; not a current benchmark source.
- AIWF decision: `TEACH`, `DEEPEN`
- Why it matters: Provides the core denoise-from-noise mental model behind diffusion image/video generation.
- Safe claims:
  - Diffusion models can be taught as a learned reverse process: start from noise and iteratively remove noise.
  - The sampler/settings conversation should be grounded in the idea that inference walks backward through a learned denoising process.
- Retrieval caution:
  - Do not use this source alone to explain modern latent/video/image-specific implementation details.

### Latent Diffusion Models / Stable Diffusion foundation

- Source type: primary paper + official project/repo
- URL: https://arxiv.org/abs/2112.10752
- Official project: https://ommer-lab.com/research/latent-diffusion-models/
- Official code: https://github.com/CompVis/latent-diffusion
- Quality: A
- Freshness: Stable foundation for Stable Diffusion-era latent workflows.
- AIWF decision: `TEACH`, `DEEPEN`
- Why it matters: Explains why Stable Diffusion-style tools operate in compressed latent space instead of directly manipulating full pixels for most of the denoising process.
- Safe claims:
  - Latent diffusion reduces compute by doing the denoising in a compressed representation.
  - VAE encode/decode mistakes can create visible artifacts because the image is being compressed into and reconstructed from latent space.
- Retrieval caution:
  - Modern model families may use different encoders, text encoders, or flow/transformer variants; do not treat SD 1.5 behavior as universal.

### Transformers / attention

- Source type: primary paper + official educational docs
- URL: https://arxiv.org/abs/1706.03762
- Supporting docs: https://huggingface.co/learn/llm-course/en/chapter1/4
- Quality: A for paper; B for course docs.
- Freshness: Stable foundational architecture.
- AIWF decision: `TEACH`, `DEEPEN`
- Why it matters: Attention is the shared conceptual bridge for LLMs, modern text encoders, vision-language models, and many newer diffusion/video backbones.
- Safe claims:
  - Transformers use attention rather than recurrent sequence processing as their main sequence modeling mechanism.
  - Attention can be taught as learned relevance between pieces of input, not as human consciousness.
- Retrieval caution:
  - Do not anthropomorphize attention; it is a computation pattern, not awareness.

### Tokenizers and numerical representation

- Source type: official course docs
- URL: https://huggingface.co/learn/llm-course/chapter2/4
- Quality: B
- Freshness: Stable concept; specific tokenizer implementations vary.
- AIWF decision: `TEACH`, `USE`
- Why it matters: Beginners need to understand that models do not read text directly; they process numerical token IDs.
- Safe claims:
  - Tokenizers translate text into numerical data that models can process.
  - Tokenization affects prompt behavior, context limits, and why spelling/phrasing can matter.
- Retrieval caution:
  - Avoid pretending one token always equals one word.

### Hugging Face Diffusers scheduler docs

- Source type: official library documentation
- URL: https://huggingface.co/docs/diffusers/en/api/schedulers/overview
- Quality: B
- Freshness: Watch before release; scheduler APIs and defaults change.
- AIWF decision: `TEACH`, `USE`, `WATCH`
- Why it matters: Schedulers are the practical bridge between diffusion theory and ComfyUI knobs like sampler, scheduler, steps, and denoise.
- Safe claims:
  - A scheduler takes model output and timestep information to produce the next denoised sample estimate.
  - Step count, timestep spacing, and scheduler choice affect speed/quality tradeoffs.
- Retrieval caution:
  - Do not claim a universal best sampler or scheduler.

### LoRA — Low-Rank Adaptation

- Source type: primary paper + official implementation ecosystem docs
- URL: https://arxiv.org/abs/2106.09685
- Diffusers LoRA training docs: https://huggingface.co/docs/diffusers/en/training/lora
- Quality: A for paper; B for docs.
- Freshness: Stable core idea; training best practices are model-family-specific.
- AIWF decision: `TEACH`, `USE`, `DEEPEN`
- Why it matters: LoRA is central to local personalization because it trains small adapter weights instead of retraining a full model.
- Safe claims:
  - LoRA freezes the base model and trains smaller low-rank adapter matrices.
  - LoRA is useful for subject/style/task adaptation with less storage and training cost than full fine-tuning.
- Retrieval caution:
  - LoRA settings do not transfer perfectly across SD 1.5, SDXL, Flux, WAN, LLMs, and other model families.

### DreamBooth and Textual Inversion

- Source type: official Diffusers docs
- DreamBooth URL: https://huggingface.co/docs/diffusers/training/dreambooth
- Textual Inversion URL: https://huggingface.co/docs/diffusers/en/training/text_inversion
- Quality: B
- Freshness: Stable concepts; exact scripts/settings can change.
- AIWF decision: `TEACH`, `USE`, `WATCH`
- Why it matters: These are beginner-visible personalization techniques that need clear comparison against LoRA.
- Safe claims:
  - Textual inversion learns embeddings tied to a special token.
  - DreamBooth trains a diffusion model on a small subject/style image set and associates it with a special prompt token.
- Retrieval caution:
  - Avoid presenting DreamBooth as always better than LoRA; it is heavier and more overfit-prone in beginner practice.

### PEFT / QLoRA / quantized fine-tuning

- Source type: official docs + primary paper
- PEFT docs: https://huggingface.co/docs/peft/en/index
- Quantization guide: https://huggingface.co/docs/peft/developer_guides/quantization
- QLoRA paper: https://arxiv.org/abs/2305.14314
- Quality: A/B
- Freshness: Watch; implementations and hardware support move quickly.
- AIWF decision: `TEACH`, `DEEPEN`, `WATCH`
- Why it matters: Explains how local users can adapt large language models without full-model training.
- Safe claims:
  - PEFT adapts large pretrained models by training a smaller number of extra parameters.
  - QLoRA combines quantized base models with LoRA-style adapter training to reduce memory requirements.
- Retrieval caution:
  - Keep exact VRAM claims tied to specific paper/library/model/hardware contexts.

### DPO — Direct Preference Optimization

- Source type: primary paper
- URL: https://arxiv.org/abs/2305.18290
- Quality: A
- Freshness: Stable algorithm family; post-training practice changes fast.
- AIWF decision: `DEEPEN`, `DO_NOT_OVERCLAIM`
- Why it matters: Useful for Volume II when explaining preference alignment without immediately jumping into full RLHF machinery.
- Safe claims:
  - DPO is a preference-optimization method that avoids explicit reward model training and reinforcement-learning loops in the original framing.
- Retrieval caution:
  - Do not teach DPO as beginner setup material for Volume I unless framed as optional advanced context.

### ControlNet

- Source type: primary paper
- URL: https://arxiv.org/abs/2302.05543
- Quality: A
- Freshness: Stable concept; modern variants differ.
- AIWF decision: `TEACH`, `USE`, `DEEPEN`
- Why it matters: ControlNet is the cleanest bridge between “prompting” and “spatial conditioning” for image workflows.
- Safe claims:
  - ControlNet adds spatial conditioning controls to pretrained text-to-image diffusion models.
  - Edge, depth, segmentation, pose, and other conditioning maps can guide structure separately from pure prompt text.
- Retrieval caution:
  - Do not collapse ControlNet, IP-Adapter, reference-only, pose transfer, and inpainting into one mechanism.

### DiT — Diffusion Transformers

- Source type: primary paper + official repo/project page
- URL: https://arxiv.org/abs/2212.09748
- Project page: https://www.wpeebles.com/DiT.html
- Repo: https://github.com/facebookresearch/DiT
- Quality: A
- Freshness: Stable foundational reference for transformer-backbone diffusion; modern descendants are moving quickly.
- AIWF decision: `TEACH`, `DEEPEN`, `WATCH`
- Why it matters: Explains why newer image/video models may behave differently from older U-Net Stable Diffusion workflows.
- Safe claims:
  - DiT replaces the commonly used U-Net diffusion backbone with a transformer operating on latent patches.
- Retrieval caution:
  - Do not assume every transformer diffusion model follows the same implementation details.

### Adam optimizer and dropout / overfitting controls

- Source type: primary papers
- Adam URL: https://arxiv.org/abs/1412.6980
- Dropout URL: https://jmlr.org/papers/v15/srivastava14a.html
- Quality: A
- Freshness: Stable foundations.
- AIWF decision: `TEACH`, `DEEPEN`
- Why it matters: Provides durable explanations for learning rate, optimizer behavior, overfitting, regularization, and why training curves are not magic meters.
- Safe claims:
  - Adam is an adaptive gradient-based optimizer commonly used in deep learning.
  - Dropout is a regularization technique intended to reduce overfitting by randomly dropping units during training.
- Retrieval caution:
  - These are foundations, not always the exact optimizer/regularizer used in every modern training stack.

## Current source gaps

These need future passes:

- Flow matching / rectified flow / diffusion-vs-flow explanations for modern image/video models.
- VAE artifacts and latent color/detail failures with source-backed examples.
- SD 1.5 vs SDXL vs Flux vs WAN vs LTX architecture comparison.
- Dataset curation, captions, regularization images, and class tokens for image LoRA training.
- Evaluation methods for small local models and workflow outputs.
- Copyright, licensing, and dataset provenance notes.

### Classifier-Free Diffusion Guidance

- Source type: primary paper
- URL: https://arxiv.org/abs/2207.12598
- Quality: A
- Freshness: Stable foundational source; modern model families may expose guidance differently.
- AIWF decision: `TEACH`, `DEEPEN`, `DO_NOT_OVERCLAIM`
- Why it matters: Provides the foundation for the CFG/guidance scale knob in Stable Diffusion-style workflows.
- Safe claims:
  - Classifier-free guidance combines conditional and unconditional model estimates to trade off prompt fidelity and diversity.
  - CFG should be taught as prompt pressure rather than general image quality.
- Retrieval caution:
  - Do not imply every modern architecture uses or responds to CFG identically.

### SDEdit / diffusion image editing

- Source type: primary paper + project page
- URL: https://arxiv.org/abs/2108.01073
- Project page: https://sde-image-editing.github.io/
- Quality: A
- Freshness: Stable conceptual source for img2img-style editing.
- AIWF decision: `TEACH`, `DEEPEN`
- Why it matters: Gives the cleanest beginner mental model for denoise strength: add noise to an input image, then denoise back through the model prior.
- Safe claims:
  - More initial noise gives the model more edit freedom.
  - Less initial noise preserves more of the source image.
- Retrieval caution:
  - Use it for the concept; verify exact settings in each UI or library.

### Diffusers img2img and inpainting docs

- Source type: official library documentation
- Img2img URL: https://huggingface.co/docs/diffusers/en/api/pipelines/stable_diffusion/img2img
- Inpaint URL: https://huggingface.co/docs/diffusers/using-diffusers/inpaint
- Quality: B
- Freshness: Watch before release; APIs and defaults change.
- AIWF decision: `TEACH`, `USE`, `WATCH`
- Why it matters: Provides practical implementation language for img2img strength and mask-based inpainting.
- Safe claims:
  - Img2img uses an initial image as the starting point for generation.
  - Inpainting edits selected image regions by using a mask, source image, and prompt.
- Retrieval caution:
  - Diffusers names and defaults should not be treated as universal across ComfyUI/A1111/Forge/Invoke.

### ComfyUI masked latent inpainting

- Source type: community documentation and ComfyUI discussion
- Manual URL: https://blenderneko.github.io/ComfyUI-docs/Core%20Nodes/Latent/inpaint/SetLatentNoiseMask/
- Discussion URL: https://github.com/Comfy-Org/ComfyUI/discussions/639
- Quality: B/C
- Freshness: Watch; ComfyUI moves quickly and docs can lag.
- AIWF decision: `TEACH`, `USE`, `WATCH`
- Why it matters: Important for explaining why a visible mask is not enough; the mask has to reach the latent/sampler path.
- Safe claims:
  - Set Latent Noise Mask attaches a mask to latent samples for inpainting-style sampler behavior.
- Retrieval caution:
  - Verify actual node schema before generating JSON workflows.


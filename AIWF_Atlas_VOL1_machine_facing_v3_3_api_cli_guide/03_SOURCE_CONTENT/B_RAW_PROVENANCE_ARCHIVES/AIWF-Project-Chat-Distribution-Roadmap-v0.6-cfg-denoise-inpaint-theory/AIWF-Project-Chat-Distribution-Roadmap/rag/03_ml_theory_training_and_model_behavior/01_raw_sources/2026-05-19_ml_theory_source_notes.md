# Raw Source Notes — ML Theory and Training Foundations

Date: 2026-05-19

Purpose: first source-backed pass for the AIWF ML theory/training RAG lane.

## What this pass is trying to solve

AIWF needs a theory layer that can answer questions like:

- Why do steps, sampler, scheduler, seed, denoise, CFG, and resolution change an image?
- Why does LoRA training work without retraining the whole model?
- Why does a model seem to understand prompt text sometimes and ignore it other times?
- Why do newer model families stop behaving like old SD 1.5 recipes?
- What concepts belong in Volume I, and what belongs in Volume II?

The correct answer is not “throw papers at beginners.” The correct answer is to build retrieval cards that translate mechanisms into operator mental models, then keep source links and deeper math available behind the card.

## Source group: diffusion foundations

Primary DDPM source:

- https://arxiv.org/abs/2006.11239
- https://hojonathanho.github.io/diffusion/

Useful AIWF framing:

- Diffusion generation can be taught as **noise → repeated denoise steps → final sample**.
- The model does not “draw” in one pass; it predicts how to move from noisy state toward a cleaner state.
- Steps are not generic quality points; steps are how many reverse-process updates you allow.

Beginner-safe analogy:

> The image starts as static. Each step is the model making a better guess at what should be kept and what should be removed.

Advanced note:

- Keep ELBO, Markov chains, variance schedules, score matching, and SDE/ODE framing out of Volume I unless heavily simplified.

## Source group: latent diffusion and VAE thinking

Primary LDM sources:

- https://arxiv.org/abs/2112.10752
- https://ommer-lab.com/research/latent-diffusion-models/
- https://github.com/CompVis/latent-diffusion

Useful AIWF framing:

- Stable Diffusion-style image generation mostly denoises in a compressed latent representation.
- The VAE is the compression/decompression bridge between visible pixels and latent space.
- A latent is not “the image”; it is a compact internal representation that can be decoded into an image.

Beginner-safe analogy:

> Pixel space is the full-size painting. Latent space is the compressed sketch the model can work on faster.

Failure signatures to connect later:

- bad VAE = color shifts, washed detail, strange texture, or decode artifacts
- excessive denoise in img2img/inpaint = identity/structure drift
- too little denoise = model cannot fix the target region

## Source group: schedulers, samplers, and inference knobs

Primary practical source:

- https://huggingface.co/docs/diffusers/en/api/schedulers/overview
- https://huggingface.co/docs/diffusers/using-diffusers/schedulers

Useful AIWF framing:

- Scheduler/sampler choice is not cosmetic; it changes the path through denoising timesteps.
- Steps interact with the scheduler. A 20-step run is not the same path as a 40-step run with every other step removed.
- “Best sampler” is workflow/model/task dependent.

Beginner-safe analogy:

> The model knows how to walk downhill from noise. The scheduler is the route plan.

## Source group: transformers, attention, and tokenization

Primary sources:

- https://arxiv.org/abs/1706.03762
- https://huggingface.co/learn/llm-course/en/chapter1/4
- https://huggingface.co/learn/llm-course/chapter2/4

Useful AIWF framing:

- A tokenizer turns text into numerical pieces before the model sees it.
- Attention computes relationships between pieces of input.
- Text encoders in image models create conditioning from prompt tokens; the diffusion model then uses that conditioning while denoising.

Beginner-safe analogy:

> The prompt is not read as English by the image model. It is converted into numbers, those numbers become conditioning, and the denoiser uses that conditioning while cleaning up noise.

Warnings:

- Do not call attention “understanding.”
- Do not teach tokens as words. Tokens can be words, word pieces, punctuation, spaces, or byte-level chunks depending on tokenizer.

## Source group: LoRA and personalization

Primary/supporting sources:

- https://arxiv.org/abs/2106.09685
- https://huggingface.co/docs/diffusers/en/training/lora
- https://huggingface.co/docs/diffusers/training/dreambooth
- https://huggingface.co/docs/diffusers/en/training/text_inversion

Useful AIWF framing:

- LoRA adds small trainable adapter weights while keeping the base model frozen.
- A LoRA should be taught as “a learned steering layer,” not as a full model.
- Textual inversion learns an embedding tied to a special token.
- DreamBooth is heavier personalization that trains the diffusion model on a small subject/style set.

Beginner-safe ladder:

1. Textual inversion: teach a token/embedding.
2. LoRA: teach a small adapter.
3. DreamBooth/full fine-tune: alter much more of the model.
4. ControlNet: teach a structural condition path.

Settings caution:

- Avoid exact universal LR/epoch/repeat promises.
- For user-facing replies, prefer “start low, inspect samples often, stop when identity improves before style overcooks.”
- When exact values are used, write standard decimals; for example, use `0.0001`, not scientific notation.

## Source group: PEFT, QLoRA, and LLM adaptation

Primary/supporting sources:

- https://huggingface.co/docs/peft/en/index
- https://huggingface.co/docs/peft/developer_guides/quantization
- https://arxiv.org/abs/2305.14314

Useful AIWF framing:

- PEFT is the family name for methods that adapt pretrained models without updating all model weights.
- QLoRA uses a quantized frozen base model plus trainable adapters to reduce memory requirements.
- This matters for local AI because consumer GPUs cannot usually full-fine-tune large modern LLMs.

Beginner-safe analogy:

> Full fine-tuning rewrites the book. PEFT adds sticky notes that teach the model a narrower behavior.

## Source group: preference alignment

Primary source:

- https://arxiv.org/abs/2305.18290

Useful AIWF framing:

- DPO is advanced post-training, not beginner setup.
- It belongs in Volume II or a later “training AI” lane.
- It can be explained as using preference pairs to move a model toward preferred responses without a separate explicit reward-model/RL loop in the original method.

## Source group: control and structure

Primary sources:

- https://arxiv.org/abs/2302.05543
- https://arxiv.org/abs/2212.09748
- https://www.wpeebles.com/DiT.html

Useful AIWF framing:

- ControlNet = structural conditioning layer for pretrained diffusion models.
- DiT = a diffusion family that uses transformer backbones over latent patches, helping explain why newer model behavior may not match old U-Net recipes.

Teaching distinction:

- Prompt = semantic/textual intent.
- ControlNet = external structural guide.
- IP/reference adapters = appearance/identity/style reference guidance.
- Inpainting mask = where edits are allowed.

Do not mix these into one generic “control” bucket in retrieval answers.

## Immediate AIWF build targets from this pass

- Create ML theory concept cards.
- Create beginner-safe glossary entries.
- Create Volume I vs Volume II boundary notes.
- Add theory hooks to workflow docs: steps, scheduler, denoise, CFG, latent/VAE, tokens, LoRA.
- Later: connect cards to ComfyUI tooltip overlay and EnvPack/workflow warnings.

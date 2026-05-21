# AIWF ML Theory Cards — Core Pass

These cards are written for RAG retrieval and tooltips. Keep each card focused enough that an assistant can retrieve it without dragging an entire chapter into context.

---

## Card: Diffusion Denoising Loop

**Use when user asks:** steps, sampler, scheduler, why generation starts from noise, why low step images look unfinished.

**Beginner answer:** Diffusion generation starts from noise and repeatedly predicts how to remove noise. Each step updates the noisy sample toward something more image-like.

**AIWF operator rule:** More steps give the process more chances to refine, but they do not guarantee better output forever. After the useful range for that model/scheduler, extra steps can waste time or even make results worse.

**Common failure connection:** Too few steps can look mushy, unfinished, or structurally confused. Too many steps can waste time or over-refine depending on sampler/model.

**Source anchors:** DDPM; Diffusers scheduler docs.

---

## Card: Latent Space

**Use when user asks:** VAE, latent, why ComfyUI has latent image nodes, why SD is not editing pixels directly.

**Beginner answer:** Latent space is a compressed working space. Stable Diffusion-style models usually denoise the compressed latent first, then decode it back into visible pixels.

**AIWF operator rule:** When something goes wrong in latent space, the visible image can show decode artifacts, color shifts, weak detail, or identity drift.

**Common failure connection:** Wrong/mismatched VAE or bad latent handling can make images washed out, too contrasty, oddly colored, or texture-damaged.

**Source anchors:** Latent Diffusion Models paper; CompVis latent-diffusion repo.

---

## Card: VAE Bridge

**Use when user asks:** VAE encode/decode, blurry output, color shifts, why swapping VAE matters.

**Beginner answer:** A VAE is the bridge between visible pixels and model latents. It compresses images into latent space and decodes latents back into an image.

**AIWF operator rule:** VAE choice matters most when the workflow repeatedly encodes/decodes or when the base model expects a specific VAE.

**Common failure connection:** Bad or mismatched VAE can show as strange colors, flat contrast, blurry detail, or decode artifacts.

**Source anchors:** Latent Diffusion Models.

---

## Card: Scheduler Route

**Use when user asks:** scheduler, sampler, steps, why one sampler works better than another.

**Beginner answer:** The scheduler controls the route through denoising timesteps. It decides how the model moves from noise toward the final output.

**AIWF operator rule:** Sampler/scheduler choice is model- and task-dependent. There is no universal best setting.

**Common failure connection:** Wrong scheduler expectations can make a model look weak even when the model is fine.

**Source anchors:** Hugging Face Diffusers scheduler docs.

---

## Card: Tokenization

**Use when user asks:** why prompt wording matters, why misspellings matter, why prompt order can matter, context limits.

**Beginner answer:** A tokenizer converts text into numerical chunks the model can process. Models do not directly read English words; they process token IDs and embeddings.

**AIWF operator rule:** One token is not always one word. Strange spelling, rare names, punctuation, and long prompts can change how the model sees the text.

**Common failure connection:** A model may ignore or distort prompt concepts if the tokenizer/text encoder handles them poorly or if the model was not trained on that concept.

**Source anchors:** Hugging Face tokenizer course docs.

---

## Card: Attention

**Use when user asks:** attention, transformers, why modern models connect concepts, why text and image pieces interact.

**Beginner answer:** Attention is a learned relevance calculation between pieces of input. It helps the model decide which pieces matter to each other.

**AIWF operator rule:** Attention is not awareness. It is a math mechanism that helps process relationships.

**Common failure connection:** If too many concepts compete, the model can bind the wrong attributes to the wrong subject.

**Source anchors:** Attention Is All You Need; Hugging Face transformer course.

---

## Card: CFG Guidance

**Use when user asks:** CFG, prompt adherence, why high CFG makes images ugly, why low CFG ignores prompt.

**Beginner answer:** CFG controls how strongly generation is pushed toward prompt conditioning. Higher CFG can increase prompt adherence, but too high can create harsh artifacts or unnatural images.

**AIWF operator rule:** CFG is a steering strength, not a quality slider.

**Common failure connection:** Too low can drift from prompt. Too high can cause crunchy texture, blown contrast, bad anatomy, or over-literal results.

**Source anchors:** classifier-free guidance concept; diffusion/scheduler docs. Needs a future dedicated source pass.

---

## Card: Denoise Strength

**Use when user asks:** img2img, inpainting, old photo restoration, identity drift, why output changed too much.

**Beginner answer:** Denoise strength controls how much noise is injected before the model redraws. More denoise allows bigger changes; less denoise preserves more of the original.

**AIWF operator rule:** Denoise is an edit-permission knob. Higher values give the model permission to rewrite; lower values force it to preserve.

**Common failure connection:** Too high changes identity or structure. Too low cannot fix damage or make the requested change.

**Source anchors:** diffusion/img2img mechanism; needs future implementation-specific source pass.

---

## Card: LoRA Adapter

**Use when user asks:** LoRA, training a person/style, why LoRA is smaller than checkpoint, why strength matters.

**Beginner answer:** A LoRA is a small trainable adapter added to a frozen base model. It teaches a narrower behavior without retraining the whole model.

**AIWF operator rule:** LoRA strength controls how hard that adapter steers the base model during inference.

**Common failure connection:** Weak strength may not show the concept. Strong strength can overcook style, identity, or artifacts.

**Source anchors:** LoRA paper; Diffusers LoRA docs; PEFT docs.

---

## Card: Overfitting

**Use when user asks:** LoRA looks same every time, model memorized outfit/background, bad training result, loss looked good but samples are bad.

**Beginner answer:** Overfitting means the model learned the training examples too narrowly instead of learning a flexible concept.

**AIWF operator rule:** In image LoRA training, sample outputs matter more than loss alone. Stop when the concept is useful, not when the loss looks impressive.

**Common failure connection:** Same pose, same background, same clothing, repeated artifacts, loss goes down but samples get less flexible.

**Source anchors:** Dropout/overfitting foundation; LoRA/DreamBooth training docs.

---

## Card: PEFT and QLoRA

**Use when user asks:** training LLMs locally, why full fine-tuning is hard, what QLoRA means, why quantization helps.

**Beginner answer:** PEFT methods adapt a large pretrained model by training a smaller set of extra parameters. QLoRA combines quantized base-model loading with LoRA-style adapter training to reduce memory use.

**AIWF operator rule:** Quantization can make training/running possible locally, but it does not make every model cheap or easy.

**Common failure connection:** Out-of-memory errors, slow training, adapter loads but behavior barely changes, quantization/backend mismatch.

**Source anchors:** PEFT docs; QLoRA paper; Hugging Face quantization guide.

---

## Card: ControlNet Structural Conditioning

**Use when user asks:** pose control, depth map, canny, lineart, why prompt alone will not hold structure.

**Beginner answer:** ControlNet adds an external structural guide to a pretrained diffusion model. The prompt says what; the control map helps say where/how.

**AIWF operator rule:** ControlNet is not the same as identity reference or inpainting mask. It is a structural conditioning path.

**Common failure connection:** Too weak = pose/structure ignored. Too strong = stiff image, artifacts, or prompt flexibility lost.

**Source anchors:** ControlNet paper.

---

## Card: DiT / Newer Model Backbones

**Use when user asks:** why Flux/WAN/newer models do not act like SD 1.5, why old sampler settings do not transfer.

**Beginner answer:** Some newer diffusion models use transformer-style backbones or other modern generative approaches instead of the older U-Net Stable Diffusion recipe.

**AIWF operator rule:** Do not blindly transfer SD 1.5 settings to every model family.

**Common failure connection:** Old CFG, scheduler, resolution, or LoRA habits produce bad results on newer architectures.

**Source anchors:** DiT paper/project; future flow-matching pass needed.

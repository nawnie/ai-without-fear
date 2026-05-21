# AIWF ML Theory Concept Map

This file turns papers and docs into AIWF retrieval-friendly teaching structure.

## Volume I rule

Volume I should teach **mechanisms as operator intuition**.

It should not require:

- calculus
- probability derivations
- optimizer proofs
- paper-level notation
- benchmark chasing

It should give the reader enough understanding to troubleshoot real workflows.

## Volume II rule

Volume II can add:

- loss functions
- gradients and optimization details
- architecture diagrams
- training curves and evaluation
- dataset math
- alignment/post-training
- flow matching and modern generative modeling theory

## Concept ladder

| Beginner question | Volume I concept | Volume II depth |
|---|---|---|
| Why does generation start from noise? | diffusion denoising loop | Markov process, score matching, SDE/ODE views |
| Why does Stable Diffusion use latents? | compressed working space | autoencoders, KL/reg losses, latent scaling |
| Why do schedulers matter? | route through denoising steps | discretization, timestep schedules, solvers |
| Why does prompt wording matter? | tokenization and conditioning | tokenizer vocab, embeddings, cross-attention |
| Why does CFG change adherence? | prompt push vs freedom | conditional/unconditional guidance math |
| Why does denoise strength affect identity? | edit strength / how much noise is reintroduced | img2img latent interpolation and noise schedules |
| Why does a LoRA change style or identity? | small adapter steering a frozen base model | low-rank matrices, rank, alpha, target modules |
| Why does training overcook? | overfitting | validation loss, regularization, data leakage |
| Why do newer models feel different? | architecture and training data changed | U-Net vs transformer/DiT, flow matching, text encoder changes |

## Beginner-safe definitions

### Model

A model is a trained pattern system. It does not contain pictures like a folder of files. It contains learned weights that transform inputs into outputs.

### Weight

A weight is a learned number inside the model. Training changes weights; inference uses them.

### Parameter

A parameter is a learnable value in the model. Large models have many parameters, but more parameters do not automatically mean better results for every task.

### Latent

A latent is a compressed internal representation. In Stable Diffusion-style workflows, much of the denoising happens in latent space before the result is decoded back into pixels.

### VAE

A VAE is the bridge between visible images and latent representations. It encodes images into latents and decodes latents back into images. A mismatched or weak VAE can cause visible artifacts.

### Token

A token is a numerical chunk of text used by the model. One token is not always one word.

### Embedding

An embedding is a learned numerical representation of a token, image feature, or concept. In prompting, embeddings are one way text becomes model-usable conditioning.

### Attention

Attention is a learned relevance mechanism between pieces of input. It is not awareness, emotion, or human attention.

### Text encoder

A text encoder converts prompt tokens into conditioning information. Image/video generators use that conditioning while producing the sample.

### Diffusion

Diffusion generation starts from noise and repeatedly predicts how to remove noise. The final output emerges from many denoising updates.

### Scheduler

A scheduler controls how inference moves through denoising timesteps. It is part of the route the model follows from noise to sample.

### Sampler

In UI language, sampler often refers to the numerical method or strategy used to step through denoising. In practice, sampler and scheduler choices are intertwined and implementation-specific.

### Seed

A seed initializes randomness. Same seed plus same model, workflow, settings, and environment should be more repeatable, but exact determinism can break across backends, versions, or hardware settings.

### CFG

CFG is guidance strength. Higher values usually push harder toward prompt conditioning but can create artifacts or rigidity. Lower values usually allow more natural variation but can reduce prompt adherence.

### Denoise strength

Denoise strength controls how much of an existing image is re-noised before generation. Higher denoise allows larger edits but increases drift. Lower denoise preserves more but may fail to change enough.

### LoRA

A LoRA is a small adapter trained on top of a frozen base model. It can teach style, subject, or task behavior without shipping a whole checkpoint.

### Overfitting

Overfitting happens when training memorizes too narrowly and performs poorly outside the training examples. In image LoRA practice, it often shows as repeated outfits, backgrounds, poses, or texture artifacts.

### Regularization

Regularization means training choices that reduce overfitting and improve generalization. In beginner image training, this can include better datasets, captions, validation samples, stopping earlier, or sometimes regularization/class images.

## AIWF workflow hook map

| Workflow control | Concept card it should retrieve |
|---|---|
| Steps | diffusion loop, scheduler route, diminishing returns |
| Sampler / scheduler | scheduler route, solver behavior, model-specific presets |
| CFG | guidance strength, prompt adherence vs artifacts |
| Denoise | edit strength, identity drift, latent re-noising |
| VAE | latent decode/encode, color/detail artifacts |
| Seed | reproducibility and controlled variation |
| LoRA strength | adapter steering strength, overcooked style/identity |
| ControlNet strength | structure conditioning strength |
| Mask blur/grow | inpaint boundary handling |
| Resolution | latent grid size, training distribution, VRAM cost |

## High-value failure signatures

### “The prompt is ignored”

Likely concepts:

- tokenizer/text encoder conditioning
- weak or conflicting prompt
- CFG too low or too high
- model was not trained for that concept
- competing ControlNet/reference/inpaint constraints

### “The face changed too much”

Likely concepts:

- denoise too high
- identity reference too weak
- crop area too broad
- inpaint region gave model permission to redraw identity
- face restoration model overrode identity

### “It looks fried/crunchy”

Likely concepts:

- CFG too high
- too many detail/upscale passes
- bad VAE or decode artifacts
- overtrained LoRA
- sharpening/restoration model over-applied

### “My LoRA only makes the same image”

Likely concepts:

- overfitting
- weak dataset variety
- captions too repetitive
- too many repeats/epochs
- learning rate too high
- no validation checkpoint review

### “Newer models do not follow my SD 1.5 settings”

Likely concepts:

- architecture changed
- text encoder changed
- training distribution changed
- sampler/scheduler expectations changed
- U-Net recipes do not always transfer to DiT/flow/video families

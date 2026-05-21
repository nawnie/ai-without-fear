# Pass 16 Exercises — Architecture and Representation Learning

## Exercise ladder

### 1. Shape before model
For five datasets, write the input tensor shape, target shape, baseline, and likely high-capacity model.

### 2. Bias detector
Given a model family, list its built-in assumptions. Example: CNN = locality and translation sharing; transformer = token relation modeling with position injection.

### 3. Representation audit
Create embeddings for a small corpus. Inspect nearest neighbors, clusters, duplicates, and false friends. Write what the embedding appears to think similarity means.

### 4. Residual learning memo
Explain why residual connections help optimization. Then explain LoRA as a small residual update to a frozen model.

### 5. Generative objective comparison
Compare DDPM, latent diffusion, and flow matching in three rows: training target, sampling path, trainer compatibility risk.

### 6. Consumer hardware feasibility worksheet
Estimate which jobs fit a 16GB GPU: SDXL LoRA, 7B QLoRA, video LoRA, full SDXL training, VLM projector tuning, image embedding fine-tune.

### 7. Architecture failure diagnosis
Given output symptoms, identify whether the likely cause is data, objective, architecture, optimization, hardware, or evaluation.

## Expected exit skill
The reader should be able to look at a training project and say: “This is a data-shape + objective + architecture + hardware problem,” not “Which magic trainer setting do I copy?”

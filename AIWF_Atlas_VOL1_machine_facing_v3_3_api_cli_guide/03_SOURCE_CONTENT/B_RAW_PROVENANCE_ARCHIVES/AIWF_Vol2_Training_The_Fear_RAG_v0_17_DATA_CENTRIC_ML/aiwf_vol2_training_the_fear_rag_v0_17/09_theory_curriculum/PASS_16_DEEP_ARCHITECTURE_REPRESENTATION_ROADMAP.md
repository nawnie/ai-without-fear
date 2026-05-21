# Pass 16 Roadmap — Deep Learning Architecture and Representation Learning

## Purpose
This pass adds the architecture layer between mathematical/statistical learning and practical trainer usage. Vol. 2 should teach readers to identify what a model is structurally built to learn before they touch a GUI, config, or LoRA rank.

## Teaching sequence
1. MLPs and learned features.
2. Embeddings and representation geometry.
3. CNNs, locality, receptive fields.
4. ResNets and residual learning.
5. U-Nets and encoder-decoder reconstruction.
6. RNN/LSTM/GRU as state-based sequence models.
7. Transformers and attention.
8. Positional information and token geometry.
9. ViT and image patch tokens.
10. Autoencoders/VAEs and latent space.
11. GANs as adversarial training.
12. Diffusion as denoising dynamics.
13. Latent diffusion as compressed generative modeling.
14. Flow matching as vector-field/path learning.
15. SSM/Mamba as long-sequence alternatives.
16. Multimodal fusion and cross-attention.
17. Self-supervised learning objectives.
18. Transfer learning, freezing, adapters, and consumer hardware.

## Author rule
Every architecture explanation should answer:

- What shape of data does it expect?
- What assumption does it bake in?
- What objective usually trains it?
- What does it memorize or generalize badly?
- What breaks first on consumer hardware?
- What should a beginner inspect first when it fails?

## Vol. 2 bridge
This pass should be used before advanced trainer chapters. It gives authors and AI editors the language to explain why SDXL LoRA, QLoRA, RAG retriever training, VLM projector tuning, and video LoRA are different jobs rather than one generic “training” process.

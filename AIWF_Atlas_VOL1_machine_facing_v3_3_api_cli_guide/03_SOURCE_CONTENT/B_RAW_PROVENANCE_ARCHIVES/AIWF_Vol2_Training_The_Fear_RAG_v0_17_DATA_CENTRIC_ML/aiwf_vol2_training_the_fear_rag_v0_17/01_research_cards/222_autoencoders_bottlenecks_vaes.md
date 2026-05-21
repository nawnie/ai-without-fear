# 222 — Autoencoders, Bottlenecks, and VAEs

## Why this matters for Vol. 2
Autoencoders explain compression, latent spaces, reconstruction loss, VAEs, latent diffusion, embedding bottlenecks, and why some generated details get lost.

## Core facts
- Autoencoders learn to encode inputs into a latent representation and decode them back.
- Bottlenecks force compression and can discard information.
- VAEs add probabilistic structure and regularization to latent space.
- A good latent space can make generative training cheaper but may limit fine detail.

## AIWF rules of thumb
- Teach latent space as “compressed working room.”
- Do not say latent equals imagination; it is a learned representation with losses and limits.
- In image generation, VAE artifacts and compression affect training and output quality.

## Exercise / lab hook
Train or simulate a tiny autoencoder on images; compare reconstruction as latent dimension changes.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

# 116 — Diffusion, Flow, and Generative Modeling

## Core claim

Modern image/video generation trains models to move between noise and structured data distributions.

## Diffusion intuition

Forward process: gradually corrupt data with noise.

Reverse process: learn to remove noise step by step.

The model learns a denoising or score-like function that guides samples back toward the data distribution.

## Latent diffusion

Instead of denoising pixels directly, latent diffusion works in a compressed latent space. This reduces compute and memory requirements.

## Guidance

Classifier-free guidance changes how strongly conditioning pulls the sample. High guidance can improve prompt adherence but also distort quality.

## Flow/rectified-flow intuition

Flow-style methods learn a path from noise to data more directly. They are increasingly important in newer generative model families.

## LoRA training link

Image LoRA training does not teach the full model from scratch. It learns a small adapter that changes how the base model represents a style, identity, object, or concept.

## Reader exercise

Train or inspect two small image LoRA runs with different caption quality. Compare prompt adherence and overfitting.

# 215 — CNNs, Receptive Fields, and Locality Bias

## Why this matters for Vol. 2
Even in a transformer era, CNN concepts explain image priors, U-Nets, VAEs, diffusion backbones, segmentation, ControlNet preprocessors, and many video/image trainers.

## Core facts
- Convolution shares weights across spatial locations.
- Receptive field grows with kernel size, stride, dilation, pooling, and depth.
- CNNs assume local patterns matter and can recur across the image.
- Pooling/downsampling trades detail for abstraction.
- Many diffusion U-Nets still rely on convolutional locality plus attention blocks.

## AIWF rules of thumb
- Teach CNNs as “pattern detectors that reuse the same detector across space.”
- Failure mode: too much downsampling destroys small details; too little context misses global structure.
- For restoration/inpainting, receptive field and skip paths determine whether local details reconnect to the whole image.

## Exercise / lab hook
Visualize activation maps or occlusion sensitivity on a toy CNN; show how a small patch can change classification.

## Source anchors
- Deep Learning book — https://www.deeplearningbook.org/
- Dive into Deep Learning — https://d2l.ai/
- CS231n notes — https://cs231n.github.io/


## RAG tags
architecture, representation_learning, deep_learning, consumer_training, vol2_theory

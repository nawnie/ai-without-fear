# Master Theory Roadmap — AI Without Fear Vol. 2

Snapshot target: March 2026.

## Goal

Vol. 2 is not a trainer manual. It is the bridge from “I can use AI tools” to “I understand how learning systems are built, evaluated, repaired, and governed.”

The reader should not need a formal math degree to begin, but by the end they should be able to read trainer configs, papers, logs, model cards, eval reports, and dataset audits without treating them as magic.

## The ladder

### Stage 0 — Tools are not training

The reader must separate four things that beginners collapse together:

- data preparation
- objective design
- optimization
- evaluation

Most bad training comes from confusing one failure for another. A low loss is not proof of learning. A pretty sample is not proof of generalization. A bigger model is not proof of better fit. A cleaner UI is not proof of a safe workflow.

### Stage 1 — Math as operational language

Required concepts:

- vectors, matrices, tensors, dot products, norms
- derivatives, gradients, Jacobian intuition
- probability distributions, expectation, variance, conditional probability
- entropy, cross-entropy, KL divergence, mutual information
- loss functions as measurable mistakes
- optimization as controlled parameter movement

AIWF framing: math is the dashboard. You do not have to worship it, but you cannot fly blind.

### Stage 2 — Classical ML before deep learning

Required concepts:

- train/validation/test split
- supervised, unsupervised, semi-supervised, self-supervised learning
- linear regression, logistic regression, softmax regression
- k-nearest neighbors, naive Bayes
- decision trees, random forests, gradient boosting
- support vector machines and kernels
- clustering and dimensionality reduction
- bias, variance, leakage, calibration, and error analysis

Why it matters: deep learning did not erase these ideas. It scaled, recombined, and automated parts of them.

### Stage 3 — Neural network mechanics

Required concepts:

- layers, activations, parameters, gradients
- backpropagation
- initialization
- normalization
- regularization
- dropout
- residual connections
- optimizers and learning-rate schedules
- mixed precision and numerical stability

AIWF framing: a neural network is not “thinking”; it is a differentiable system being shaped by examples, loss, and optimizer dynamics.

### Stage 4 — Representation learning

Required concepts:

- embeddings
- latent spaces
- metric learning
- contrastive learning
- self-supervised objectives
- transfer learning
- adapters and low-rank updates

This stage connects classical features to modern AI: the system learns useful coordinates for meaning, style, identity, action, or structure.

### Stage 5 — Modern foundation models

Required concepts:

- tokenization
- attention and transformers
- pretraining vs post-training
- instruction tuning
- preference optimization
- retrieval-augmented generation
- multimodal encoders
- diffusion and flow matching
- video and temporal consistency
- voice/audio representations

### Stage 6 — Evaluation and failure science

Required concepts:

- metrics vs behavior
- offline evals vs human evals
- calibration and uncertainty
- distribution shift
- robustness
- red teaming
- privacy leakage and memorization tests
- benchmark contamination
- reproducibility and ablation studies

AIWF framing: training without evaluation is gambling with a progress bar.

### Stage 7 — Law, rights, and deployment responsibility

Required concepts:

- copyright and dataset provenance
- consent for identity, likeness, and voice
- model cards and dataset cards
- safety documentation
- AI governance frameworks
- deployment monitoring
- drift, rollback, and incident response

## End state

A reader who completes Vol. 2 should be able to:

- choose between RAG, finetuning, LoRA, distillation, quantization, and prompt engineering
- build a small training dataset and explain its failure risks
- read a loss curve and identify likely causes of instability
- run an ablation instead of guessing
- evaluate a model beyond cherry-picked outputs
- document data provenance and release risks
- explain why a model improved or failed in technically defensible language

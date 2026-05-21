# TensorRT-LLM and TensorRT-RTX boundaries

TensorRT-LLM and TensorRT-RTX are not generic replacements for every TensorRT install.

## TensorRT-LLM

TensorRT-LLM is an LLM inference stack. It includes model definitions, runtime APIs, quantization paths, plugins, serving/deployment concepts, and often Linux/container-first workflows. Treat it as a product/toolkit ecosystem.

Support posture: prefer official containers or clean Linux environment for serious builds; treat Windows use as advanced unless the specific release path documents it; do not install into ComfyUI just because a user wants faster text generation.

## TensorRT-RTX

TensorRT-RTX is RTX-focused and JIT/deployment oriented. It may overlap with Torch-TensorRT and standard TensorRT workflows but should remain a distinct family in the RAG.

Support posture: use only when docs/workflow specifically target TensorRT-RTX; do not mix RTX and standard TensorRT packages by accident.

## AIWF rule

A support system must ask "which TensorRT family is this workflow actually using?" before suggesting install commands.

# ONNX graph surgery and Polygraphy debugging

ONNX export problems are usually graph problems, not model-quality problems.

## ONNX GraphSurgeon use cases

- Replace unsupported ops before TensorRT parsing.
- Fold or insert constants.
- Rename tensors to improve diagnostics.
- Remove unused nodes.
- Prepare TensorRT plugin nodes.
- Force graph outputs at intermediate tensors for debugging.

## Polygraphy use cases

- Compare outputs across frameworks/runtimes.
- Run ONNX Runtime and TensorRT on the same input.
- Detect which layer introduces divergence.
- Reduce a model to a minimal failing graph.
- Benchmark TensorRT engines.
- Capture support-grade logs instead of vague screenshots.

## AIWF diagnostic flow

1. Export ONNX and validate with `onnx.checker` if available.
2. Run with ONNX Runtime CPU or CUDA provider.
3. Run Polygraphy comparison if TensorRT diverges.
4. Use ONNX GraphSurgeon only after preserving the original ONNX.
5. Store original, modified graph, commands, and numeric comparison.

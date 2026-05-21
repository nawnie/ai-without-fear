# Concept Map — Python/Pip Runtime Dependencies and Local AI Environment Support

## Primary concept chain

```text
user task -> lane classification -> concept card -> source/provenance check -> validation step -> answer/workflow/action
```

## Concepts and relationships

| Concept | Related concepts | Retrieval role |
|---|---|---|
| venv island | wheelhouse, ABI boundary | query anchor / metadata facet |
| wheelhouse | ABI boundary, CUDA wheel family | query anchor / metadata facet |
| ABI boundary | CUDA wheel family, provider mismatch | query anchor / metadata facet |
| CUDA wheel family | provider mismatch, native build toolchain | query anchor / metadata facet |
| provider mismatch | native build toolchain, import smoke test | query anchor / metadata facet |
| native build toolchain | import smoke test, package cluster | query anchor / metadata facet |
| import smoke test | package cluster, external binary dependency | query anchor / metadata facet |
| package cluster | external binary dependency, venv island | query anchor / metadata facet |
| external binary dependency | venv island, wheelhouse | query anchor / metadata facet |

## Cross-lane links

- RP08 — Compatibility Matrix RAG
- RP09 — Failure Signature Atlas RAG

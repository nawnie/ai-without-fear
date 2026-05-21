# Retrieval Recipe — ComfyUI Datatype Conversion

Use this recipe when a user asks how to change a node input/output type or why a socket connection fails.

## Retrieval order

1. `31_comfyui_datatype_conversion_boundaries`
2. `26_comfyui_advanced_node_io_datatypes`
3. `27_comfyui_custom_node_development_patterns`
4. official source anchors in `03_SOURCE_CONTENT/A_CANONICAL_SOURCE_PACKS/comfyui_advanced_pass02_datatype_boundaries`
5. specific node source code or workflow JSON only after the datatype contract is understood

## Answer order

1. State the datatype contract.
2. Identify the shape/object mismatch.
3. Explain whether VAE Encode/Decode is the correct boundary.
4. Give a minimal safe code pattern.
5. Warn about workflow compatibility and downstream sockets.
6. Recommend a new node instead of mutating the old one when existing workflows may break.

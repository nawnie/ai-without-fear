# comfyui_controlnet_aux — Pass 02B Deep Schema

Dynamic router/helper nodes are schema-confirmed: `AIO_Preprocessor`, `ControlNetPreprocessorSelector`, `ExecuteAllControlNetPreprocessors`, and `ControlNetAuxSimpleAddText`.

AIWF rule: use `AIO_Preprocessor` for broad examples only; do per-wrapper sweeps before exact production workflows for OpenPose, depth, lineart, tile, segmentation, optical flow, or specialized preprocessors.

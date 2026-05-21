param(
  [string]$ModelRoot = "F:\Ai_Models",
  [string]$OutFile = ".\extra_model_paths.yaml"
)

$root = $ModelRoot -replace "\\","/"
@"
aiwf_models:
  base_path: $root
  is_default: true
  checkpoints: checkpoints
  loras: loras
  vae: vae
  controlnet: controlnet
  clip_vision: clip_vision
  text_encoders: |
    text_encoders
    clip
  diffusion_models: |
    diffusion_models
    unet
  embeddings: embeddings
  upscale_models: upscale_models
  vae_approx: vae_approx
  ipadapter: ipadapter
  insightface: insightface
  sams: sams
  ultralytics: ultralytics
  animatediff_models: animatediff_models
  facerestore_models: facerestore_models
  audio_encoders: audio_encoders
  style_models: style_models
  gligen: gligen
  model_patches: model_patches
"@ | Set-Content -Encoding utf8 $OutFile
Write-Host "Wrote $OutFile"

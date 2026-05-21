param(
  [string]$ComfyRoot = "F:\ComfyUI",
  [string]$ModelRoot = "F:\Ai_Models",
  [switch]$Json
)

$ErrorActionPreference = "Continue"
$folders = @(
  "checkpoints","loras","vae","controlnet","clip_vision","text_encoders","clip",
  "diffusion_models","unet","embeddings","upscale_models","vae_approx","ipadapter",
  "insightface","sams","ultralytics","animatediff_models","facerestore_models",
  "audio_encoders","style_models","gligen","model_patches"
)

$exts = @("*.safetensors","*.ckpt","*.pt","*.pth","*.bin","*.onnx","*.gguf")
$results = @()
foreach ($folder in $folders) {
  $path = Join-Path $ModelRoot $folder
  $exists = Test-Path $path
  $count = 0
  $examples = @()
  if ($exists) {
    foreach ($ext in $exts) {
      $files = Get-ChildItem -Path $path -Filter $ext -File -Recurse -ErrorAction SilentlyContinue
      $count += @($files).Count
      $examples += $files | Select-Object -First 3 -ExpandProperty FullName
    }
  }
  $results += [pscustomobject]@{ folder=$folder; path=$path; exists=$exists; file_count=$count; examples=($examples | Select-Object -First 5) }
}

$yaml = Join-Path $ComfyRoot "extra_model_paths.yaml"
$yamlExample = Join-Path $ComfyRoot "extra_model_paths.yaml.example"
$report = [pscustomobject]@{
  comfy_root = $ComfyRoot
  model_root = $ModelRoot
  extra_model_paths_yaml_exists = (Test-Path $yaml)
  extra_model_paths_example_exists = (Test-Path $yamlExample)
  folders = $results
}

if ($Json) { $report | ConvertTo-Json -Depth 6 } else { $report | Format-List; $results | Format-Table -AutoSize }

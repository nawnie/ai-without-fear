<#
Creates a minimal Triton model repository skeleton.
#>
param(
  [string]$OutputDir = ".\models",
  [string]$ModelName = "python_identity",
  [ValidateSet("python","tensorrt_plan","onnx")][string]$Kind = "python"
)
$base = Join-Path $OutputDir $ModelName
New-Item -ItemType Directory -Force -Path (Join-Path $base "1") | Out-Null
if ($Kind -eq "python") {
@"
name: "$ModelName"
backend: "python"
max_batch_size: 0
input [ { name: "INPUT" data_type: TYPE_FP32 dims: [ -1 ] } ]
output [ { name: "OUTPUT" data_type: TYPE_FP32 dims: [ -1 ] } ]
"@ | Out-File (Join-Path $base "config.pbtxt") -Encoding utf8
@"
import triton_python_backend_utils as pb_utils
class TritonPythonModel:
    def execute(self, requests):
        responses=[]
        for request in requests:
            x = pb_utils.get_input_tensor_by_name(request, "INPUT")
            responses.append(pb_utils.InferenceResponse(output_tensors=[pb_utils.Tensor("OUTPUT", x.as_numpy())]))
        return responses
"@ | Out-File (Join-Path $base "1\model.py") -Encoding utf8
}
elseif ($Kind -eq "tensorrt_plan") {
@"
name: "$ModelName"
platform: "tensorrt_plan"
max_batch_size: 1
input [ { name: "input" data_type: TYPE_FP32 dims: [ 3, 224, 224 ] } ]
output [ { name: "output" data_type: TYPE_FP32 dims: [ 1000 ] } ]
instance_group [ { kind: KIND_GPU count: 1 } ]
"@ | Out-File (Join-Path $base "config.pbtxt") -Encoding utf8
"Drop model.plan into this folder." | Out-File (Join-Path $base "1\README_DROP_MODEL_PLAN_HERE.txt") -Encoding utf8
}
else {
@"
name: "$ModelName"
platform: "onnxruntime_onnx"
max_batch_size: 0
input [ { name: "input" data_type: TYPE_FP32 dims: [ -1 ] } ]
output [ { name: "output" data_type: TYPE_FP32 dims: [ -1 ] } ]
"@ | Out-File (Join-Path $base "config.pbtxt") -Encoding utf8
"Drop model.onnx into this folder." | Out-File (Join-Path $base "1\README_DROP_MODEL_ONNX_HERE.txt") -Encoding utf8
}
Write-Host "Created Triton model skeleton at $base"

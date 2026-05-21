from diffusers import StableDiffusionXLPipeline
import torch

checkpoint_path = r"F:\Ai_Models\checkpoints\example_model.safetensors"
config_path = r"F:\Ai_Models\diffusers_configs\sdxl_base_config"

pipe = StableDiffusionXLPipeline.from_single_file(
    checkpoint_path,
    config=config_path,
    local_files_only=True,
    torch_dtype=torch.float16,
).to("cuda")

image = pipe("a test image").images[0]
image.save("single_file_smoke.png")

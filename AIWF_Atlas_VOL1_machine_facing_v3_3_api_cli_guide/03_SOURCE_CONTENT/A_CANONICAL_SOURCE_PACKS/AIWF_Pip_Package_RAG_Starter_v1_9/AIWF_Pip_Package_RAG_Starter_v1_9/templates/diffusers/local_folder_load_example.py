from diffusers import DiffusionPipeline
import torch

model_dir = r"F:\Ai_Models\diffusers\example_model_folder"

pipe = DiffusionPipeline.from_pretrained(
    model_dir,
    local_files_only=True,
    torch_dtype=torch.float16,
).to("cuda")

image = pipe("a test image").images[0]
image.save("diffusers_folder_smoke.png")

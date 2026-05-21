# ComfyUI Custom Nodes — 2026 State of the Art Field Report
## For the "AI Without Fear" Modern Tier Workflow Library

**TL;DR**
- For modern local video, **Wan 2.2 (open weights, July 28 2025)** plus the **Lightx2v 4-step Lightning LoRA (August 2025)** is the unambiguous 2026 starting point in ComfyUI — it has displaced HunyuanVideo, CogVideoX, Mochi and LTX-Video as the default recommendation, and you should build your modern-tier video workflows on the **native ComfyUI Wan 2.2 nodes** (no wrapper required for the basic case). Wan 2.5 / 2.6 / 2.7 exist but are API-only as of May 2026; Wan 2.2 remains the latest open-weight option for local ComfyUI.
- For everything else (IP-Adapter, AnimateDiff, advanced inpainting, face restoration, advanced upscaling), the ecosystem has stabilized: most flagship custom-node repos are now in **maintenance mode** (cubiq's IPAdapter_plus and ComfyUI_essentials, Kosinkadink's AnimateDiff-Evolved, kijai's SUPIR), with the original authors having moved on. The node class_type strings are stable and safe to embed in workflow JSONs.
- The 2026 "essentials" install set is: **ComfyUI-Manager, rgthree-comfy, ComfyUI-Custom-Scripts (pythongosssss), ComfyUI-KJNodes (kijai), ComfyUI-Impact-Pack (ltdrdata), ComfyUI-VideoHelperSuite (Kosinkadink), and comfyui_controlnet_aux (Fannovel16)**. Both `ComfyUI_essentials` (cubiq) and `was-node-suite-comfyui` (WASasquatch) still install cleanly but their original repos are abandoned/archived — pin to current commits and treat as legacy.

---

## Key Findings

### 1. Modern Video Generation — Wan 2.2 is the answer in 2026

The video generation landscape consolidated dramatically in late 2025. As of May 2026:

| Model | Status | Recommendation |
|---|---|---|
| **Wan 2.2** (Alibaba, Jul 28 2025) | Open weights, native ComfyUI support | **★ Primary recommendation** |
| **Wan 2.2-Animate** (Sep 19 2025) | Open weights, native ComfyUI | Use for character animation / replacement |
| **Wan 2.2-S2V** (Aug 26 2025) | Open weights | Niche: audio-driven video |
| **Wan 2.5 / 2.6 / 2.7** | API-only (Alibaba Cloud) | **Skip — not local** |
| **HunyuanVideo** (Tencent, Dec 2024) | Open weights, 13B | Still strong; heavier than Wan |
| **LTX-Video / LTX-2** (Lightricks) | Open weights, built into ComfyUI core | Fast iteration; lower fidelity than Wan |
| **CogVideoX-5B** (Zhipu) | Open weights | Largely superseded |
| **Mochi 1** (Genmo, 10B) | Open weights, Apache 2.0 | Largely superseded |

**Wan 2.2 architecture**: Mixture-of-Experts diffusion with separate "high noise expert" and "low noise expert" sub-models that activate at different denoising timesteps. [ComfyUI Wiki](https://comfyui-wiki.com/en/news/2025-07-28-wan2-2-open-source-release) [ComfyUI Wiki](https://comfyui-wiki.com/en/tutorial/advanced/video/wan2.2/wan2-2) Comes in three open variants:
- **TI2V-5B** — single 5B model, both text-to-video and image-to-video. **Fits in 8 GB VRAM** [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2) with ComfyUI native offloading. [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2) Native ComfyUI support since v0.3.45.
- **T2V-A14B** — 14B parameters split into high-noise + low-noise experts.
- **I2V-A14B** — image-to-video variant.

#### 1a. Native ComfyUI Wan 2.2 — exact node class_type strings (verified from official workflow JSONs)

**Source**: official workflow templates at `https://github.com/Comfy-Org/workflow_templates/tree/main/templates`, linked from `https://docs.comfy.org/tutorials/video/wan/wan2_2`.

**Wan 2.2 5B TI2V workflow** (`video_wan2_2_5B_ti2v.json`) — full ordered class_type list:
1. `UNETLoader` — loads `wan2.2_ti2v_5B_fp16.safetensors` [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_5B_ti2v.json) [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2)
2. `CLIPLoader` — loads `umt5_xxl_fp8_e4m3fn_scaled.safetensors`, [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2) type `"wan"` [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_5B_ti2v.json)
3. `VAELoader` — loads `wan2.2_vae.safetensors` [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_5B_ti2v.json) [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2)
4. `ModelSamplingSD3` — `shift = 8` [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_5B_ti2v.json)
5. `CLIPTextEncode` (positive)
6. `CLIPTextEncode` (negative)
7. `LoadImage` (optional, bypassed by default; enable with Ctrl+B for I2V) [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2)
8. `Wan22ImageToVideoLatent` — widgets: `1280, 704, 121, 1` (width, height, length, batch) [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_5B_ti2v.json)
9. `KSampler` — 20 steps, cfg 5, `uni_pc` sampler, `simple` scheduler, denoise 1.0 [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_5B_ti2v.json)
10. `VAEDecode`
11. `CreateVideo` — fps 24 [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_5B_ti2v.json)
12. `SaveVideo`

**Wan 2.2 14B T2V workflow** (`video_wan2_2_14B_t2v.json`) — adds two `LoraLoaderModelOnly` nodes (high/low noise Lightning LoRAs), two `UNETLoader` nodes, two `ModelSamplingSD3` (shift 5), and chained `KSampler` nodes (high-noise then low-noise). Uses `EmptyHunyuanLatentVideo` for the empty latent.

**Wan 2.2 14B FLF2V workflow** uses the `WanFirstLastFrameToVideo` class_type for first-and-last-frame guided video.

**Verification of strings you asked about**:
- `Wan22ImageToVideoLatent` — ✓ confirmed (5B TI2V); note the double "2"
- `WanFirstLastFrameToVideo` — ✓ confirmed (14B FLF2V)
- `WanImageToVideo` — ✓ exists, used in Wan **2.1** workflows; **not** present in the Wan **2.2** native templates (5B uses `Wan22ImageToVideoLatent`; 14B I2V uses `EmptyHunyuanLatentVideo` with start_image-fed latent)
- `ModelSamplingSD3` — ✓ confirmed, with `shift=8` for 5B and `shift=5` for 14B

#### 1b. kijai's wrapper — ComfyUI-WanVideoWrapper (only use if you need cutting-edge features)

Repo: `https://github.com/kijai/ComfyUI-WanVideoWrapper` (6.4k stars / 631 forks as of May 2026, actively updated). Use only when you need features not in core ComfyUI (custom samplers, ATI, MultiTalk, Fantasy Talking, advanced block-swap memory tricks). Author Kijai explicitly positions this as his "personal sandbox… idea isn't to compete or even offer alternatives to everything available in native workflows." [GitHub](https://github.com/kijai/ComfyUI-WanVideoWrapper)

Wrapper class_types (category `WanVideoWrapper`):
- `WanVideoModelLoader`
- `WanVideoVAELoader`
- `LoadWanVideoT5TextEncoder`
- `WanVideoTextEncode`
- `WanVideoClipVisionEncode`
- `WanVideoSampler`
- `WanVideoDecode`
- `WanVideoLoraSelect`
- `WanVideoBlockSwap`
- `WanVideoEmptyEmbeds`

Standard wrapper graph: `WanVideoModelLoader → WanVideoLoraSelect → WanVideoBlockSwap → WanVideoSampler`, plus `LoadWanVideoT5TextEncoder → WanVideoTextEncode → text_embeds`, with `WanVideoVAELoader + WanVideoClipVisionEncode → image_embeds`, ending in `samples + WanVideoVAELoader → WanVideoDecode → images`. [DeepWiki](https://deepwiki.com/kijai/ComfyUI-WanVideoWrapper/3-comfyui-nodes)

#### 1c. Required Wan 2.2 model files (place in standard ComfyUI dirs)

**For native 5B (recommended for beginners)** — total ~14 GB:
- `ComfyUI/models/diffusion_models/wan2.2_ti2v_5B_fp16.safetensors` — from `huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged` [comfy](https://docs.comfy.org/tutorials/video/wan/wan2_2)
- `ComfyUI/models/text_encoders/umt5_xxl_fp8_e4m3fn_scaled.safetensors`
- `ComfyUI/models/vae/wan2.2_vae.safetensors`

**For native 14B** — replace diffusion model with:
- `wan2.2_t2v_high_noise_14B_fp8_scaled.safetensors` + `wan2.2_t2v_low_noise_14B_fp8_scaled.safetensors` [comfy](https://docs.comfy.org/tutorials/video/wan/wan2_2) (or `_i2v_` variants)
- VAE: `wan_2.1_vae.safetensors` (note: the 14B uses the 2.1 VAE, [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2) not 2.2)

**Lightning 4-step acceleration LoRAs** (place in `ComfyUI/models/loras/`):
- `wan2.2_t2v_lightx2v_4steps_lora_v1.1_high_noise.safetensors` — `https://huggingface.co/Comfy-Org/Wan_2.2_ComfyUI_Repackaged/resolve/main/split_files/loras/wan2.2_t2v_lightx2v_4steps_lora_v1.1_high_noise.safetensors` [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_14B_t2v.json)
- `wan2.2_t2v_lightx2v_4steps_lora_v1.1_low_noise.safetensors` — same path with `_low_noise`
- Upstream source: `https://huggingface.co/lightx2v/Wan2.2-Lightning` (current canonical folder: `Wan2.2-T2V-A14B-4steps-lora-rank64-Seko-V1.1/`; older sub-paths now return 404)

#### 1d. Realistic generation times on a 24 GB GPU (RTX 4090-class)

From the official ComfyUI 14B workflow's embedded benchmark note (RTX 4090D 24 GB, 640×640):
- **Wan 2.2 14B fp8_scaled, 20 steps, no Lightning**: **~513–536 seconds (~9 minutes)** per generation, 84 % VRAM [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_14B_t2v.json)
- **Wan 2.2 14B fp8_scaled + Lightning 4-step LoRA**: **~71–108 seconds (~1.5 minutes)** per generation, 89 % VRAM [githubusercontent](https://raw.githubusercontent.com/Comfy-Org/workflow_templates/refs/heads/main/templates/video_wan2_2_14B_t2v.json) — about a 7× speedup
- **Wan 2.2 5B** at 480p: well under 9 minutes per 5-second clip on a 4090 (often <2 min with offloading). The Wan2.2 GitHub README states verbatim: *"Without specific optimization, TI2V-5B can generate a 5-second 720P video in under 9 minutes on a single consumer-grade GPU, ranking among the fastest 720P@24fps video generation models."* [GitHub](https://github.com/Wan-Video/Wan2.2) [GitHub](https://github.com/pmshst/Wan2.2)

**24 GB cards can NOT run Wan 2.2 14B in fp16 at full precision** — you need fp8_scaled or GGUF quantization [Spheron](https://www.spheron.network/blog/deploy-wan-2-5-gpu-cloud/) (handled by ComfyUI-GGUF custom node for community variants).

#### 1e. Beginner recommendation for Modern Tier

Start with **Wan 2.2 5B native** (if Lightning is available for 5B; otherwise default 20 steps). Reasons:
- One model file vs. two for 14B
- Fits in 8 GB VRAM (broadest hardware reach)
- Uses only native ComfyUI nodes — no custom node package required for the basic case (just ComfyUI-VideoHelperSuite if you want better video previews/export, but `SaveVideo` is now core)
- The same workflow can do both T2V and I2V by toggling `LoadImage` with Ctrl+B [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2)

Graduate to **14B + Lightning** when the user wants higher fidelity and accepts ~1.5–2 min per generation.

---

### 2. IP-Adapter Ecosystem — cubiq's package is now maintenance-only

Repo: `https://github.com/cubiq/ComfyUI_IPAdapter_plus` (~5.8k stars / 449 forks as of May 2026). **Critical status note**: as of 2025-04-14, the author placed it in **"maintenance only" mode** with this README banner:

> "2025.04.14 - I do not use ComfyUI as my main way to interact with Gen AI anymore as a result I'm setting the repository in 'maintenance only' mode. If there are crucial updates or PRs I might still consider merging them but I do not plan any consistent work on this repo." [GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

The package still works and is the de facto reference implementation. No widely-adopted replacement has emerged for SD1.5 / SDXL identity/style transfer in 2026. For Flux and Wan, IP-Adapter as a concept has been superseded by **reference image conditioning built into the models themselves** — Wan 2.2-Animate and Wan 2.2 I2V take a reference image natively; Flux has Flux Redux for similar functionality. Use IP-Adapter for SDXL / SD1.5 workflows specifically.

**Verified current node class_type strings** (all from `cubiq/ComfyUI_IPAdapter_plus`):
- `IPAdapterUnifiedLoader` — ✓ current; preferred for beginners (auto-loads model + CLIP vision based on a preset name) [RunComfy](https://www.runcomfy.com/comfyui-nodes/ComfyUI_IPAdapter_plus/IPAdapterUnifiedLoader)
- `IPAdapterUnifiedLoaderFaceID` — ✓ current; auto-loads FaceID model + matching LoRA [DeepWiki](https://deepwiki.com/cubiq/ComfyUI_IPAdapter_plus/5-example-workflows)
- `IPAdapterUnifiedLoaderCommunity` — ✓ current; for community composition models [RunComfy](https://www.runcomfy.com/comfyui-nodes/ComfyUI_IPAdapter_plus/IPAdapterUnifiedLoaderCommunity)
- `IPAdapterModelLoader` — ✓ current; manual loader
- `IPAdapter` — ✓ current; simple application
- `IPAdapterAdvanced` — ✓ current; full-featured application with weight types
- `IPAdapterFaceID` — ✓ current; FaceID application
- `IPAdapterFaceIDKolors` — ✓ current
- `IPAdapterStyleComposition`, `IPAdapterStyleCompositionBatch` — ✓ current
- `IPAdapterPreciseStyleTransfer`, `IPAdapterPreciseComposition` — ✓ current
- `IPAdapterRegionalConditioning` — ✓ current
- `IPAdapterTiled`, `IPAdapterTiledBatch` — ✓ current
- `IPAdapterBatch`, `IPAdapterEmbeds`, `IPAdapterEmbedsBatch` — ✓ current
- `IPAdapterEncoder`, `IPAdapterSaveEmbeds`, `IPAdapterLoadEmbeds` — ✓ current
- `IPAdapterCombineEmbeds`, `IPAdapterCombineParams`, `IPAdapterCombineWeights` — ✓ current
- `IPAdapterFromParams`, `IPAdapterMS`, `IPAdapterNoise` — ✓ current
- `IPAdapterClipVisionEnhancer`, `IPAdapterClipVisionEnhancerBatch` — ✓ current
- `IPAdapterInsightFaceLoader` — ✓ current; loads InsightFace for FaceID variants
- `IPAdapterWeights`, `IPAdapterWeightsFromStrategy`, `IPAdapterPromptScheduleFromWeightsStrategy` — ✓ current
- `PrepImageForClipVision` — ✓ current; preprocessing helper

There are no widely-known deprecated class_types in current cubiq/ComfyUI_IPAdapter_plus — only the FaceID Plus v1 SD1.5 LoRA (`ip-adapter-faceid-plus_sd15_lora.safetensors`) [GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus) is marked deprecated at the model-file level.

**FaceID variants — 2026 best practice**:
- **FaceID Portrait** (SD1.5) and **FaceID Portrait SDXL** — best for portrait/identity preservation
- **FaceID Plus v2** — replaces the deprecated Plus v1; the recommended FaceID variant for SD1.5
- **FaceID SDXL** — for SDXL workflows
- For SDXL faces in 2026, many users prefer running **PuLID** or **InstantID** (separate node packs) over IP-Adapter FaceID — but if you want a single consistent ecosystem inside the IPAdapter package, FaceID Plus v2 (SD1.5) and FaceID SDXL remain the standard.

**Required model files for SDXL IP-Adapter** (most common setup):
- `ComfyUI/models/clip_vision/CLIP-ViT-H-14-laion2B-s32B-b79K.safetensors` (used by STANDARD, PLUS, PLUS FACE, FULL presets) — from `https://huggingface.co/h94/IP-Adapter/tree/main/models/image_encoder`
- `ComfyUI/models/clip_vision/CLIP-ViT-bigG-14-laion2B-39B-b160k.safetensors` (used by VIT-G presets)
- `ComfyUI/models/ipadapter/ip-adapter_sdxl_vit-h.safetensors` and/or `ip-adapter-plus_sdxl_vit-h.safetensors`, `ip-adapter-plus-face_sdxl_vit-h.safetensors` — from h94/IP-Adapter
- For FaceID: `insightface` Python package required; [GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus) model files in `ComfyUI/models/ipadapter/` named like `ip-adapter-faceid-plusv2_sdxl.bin`, plus paired LoRA in `ComfyUI/models/loras/`

**Beginner-friendly capability**: `IPAdapterUnifiedLoader` + `IPAdapterAdvanced` with the `PLUS (high strength)` preset. Two nodes, plug-and-play.

---

### 3. AnimateDiff / Animation — still works, increasingly legacy in 2026

Repo: `https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved`. Last meaningful update **March 2025**. [RunComfy](https://www.runcomfy.com/comfyui-nodes/ComfyUI-AnimateDiff-Evolved/ADE_AnimateDiffLoaderV1Advanced) ~3.4k stars. Still loads and runs, but several internal nodes (`ADE_AnimateDiffLoaderV1Advanced`, `AnimateDiffLoaderV1`) [ComfyAI](https://comfyai.run/documentation/AnimateDiffLoaderV1) are now explicitly labeled `[DEPRECATED]` in the node UI.

**2026 verdict**: AnimateDiff-Evolved is **legacy for new SDXL / Flux video work** — most practitioners now use Wan 2.2 instead. AnimateDiff still has three legitimate niches:
1. **Low-VRAM hardware (8 GB)** where Wan 14B is impossible and Wan 5B is slow
2. **Workflows tied to a specific SD1.5 checkpoint or LoRA library** (AnimateDiff is SD1.5-native; Wan is its own architecture)
3. **AnimateDiff-Lightning** for very fast 4-step generation when style preservation of an SD1.5 model matters

The Civitai article at `civitai.com/articles/19005/build-an-sdxl-img2vid-workflow-with-animatediffand-why-wan-22-is-the-answer` frames the transition verbatim: *"AnimateDiff is a motion adapter designed for SD 1.5, not SDXL... If you want true SDXL-level animation, you need WAN 2.2."* [Civitai](https://civitai.com/articles/19005/build-an-sdxl-img2vid-workflow-with-animatediffand-why-wan-22-is-the-answer)

**Verified current node class_type strings** (from Kosinkadink/ComfyUI-AnimateDiff-Evolved, category `AnimateDiff 🎭🅐🅓`):
- **Gen1 (all-in-one)**: `ADE_AnimateDiffLoaderGen1` (display "AnimateDiff Loader 🎭🅐🅓①"), [RunComfy](https://www.runcomfy.com/comfyui-nodes/ComfyUI-AnimateDiff-Evolved/ADE_AnimateDiffLoaderGen1) `ADE_AnimateDiffLoaderWithContext` (variant)
- **Gen2 (modular)**:
  - `ADE_LoadAnimateDiffModel` — loads the motion module
  - `ADE_ApplyAnimateDiffModel` — applies it to the diffusion model
  - `ADE_UseEvolvedSampling` — replaces the model with evolved-sampling-wrapped version
- **Context (for >16 frame animations)**:
  - `ADE_StandardStaticContextOptions`
  - `ADE_StandardUniformContextOptions`
  - `ADE_LoopedUniformContextOptions`
  - `ADE_ViewsOnlyContextOptions`
- **Sample settings**: `ADE_AnimateDiffSamplingSettings`, `ADE_NoiseLayerAdd`, `ADE_NoiseLayerReplace`, `ADE_NoiseLayerAddWeighted`
- **Keyframes**: `ADE_AnimateDiffKeyframe`
- **Motion LoRA**: `ADE_AnimateDiffLoRALoader`
- **PIA (Personalized Image Animation)**: `ADE_ApplyAnimateDiffModelWithCameraCtrl`, `ADE_PIA_AnimateDiffKeyframe`, etc.

**Motion module recommendations (2026)**:
- **`mm_sd_v15_v2.ckpt`** — best-quality SD1.5 v2 motion module; the default starting point
- **`v3_sd15_mm.ckpt`** — v3 motion module, often better motion at slight quality cost
- **`AnimateDiff-Lightning_4step.safetensors`** (ByteDance) — 4-step distilled motion for fast iteration [Hugging Face](https://huggingface.co/ByteDance/AnimateDiff-Lightning)
- **HotshotXL** — the SDXL motion module; never reached parity with SD1.5 v2; do not recommend in 2026
- Stabilized fine-tunes by manshoety on Hugging Face [GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) are still useful for reduced flicker
- All go in `ComfyUI/custom_nodes/ComfyUI-AnimateDiff-Evolved/models/` (or use `extra_model_paths.yaml` with id `animatediff_models`) [GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

**Best-practice AnimateDiff + ControlNet combination** uses **ComfyUI-Advanced-ControlNet** (also by Kosinkadink), which provides `ControlNetLoaderAdvanced`, `ACN_AdvancedControlNetApply` and supports SparseCtrl. Connect ControlNet preprocessors from `comfyui_controlnet_aux` (Fannovel16) [GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) → Advanced-ControlNet → KSampler model input (which has Evolved Sampling injected via AnimateDiff Gen2 nodes).

**Beginner-friendly capability**: a Gen1 `ADE_AnimateDiffLoaderGen1` with `mm_sd_v15_v2.ckpt` motion module + `ADE_StandardUniformContextOptions` (context length 16, overlap 4) + any SD1.5 checkpoint + `VHS_VideoCombine` to export. Three custom nodes total, very approachable.

---

### 4. Inpainting Advanced — three layers stack cleanly

#### 4a. ComfyUI-Inpaint-CropAndStitch (lquesada) — speed and quality of masked-only sampling

Repo: `https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch`. Active as of March 2025.

**Verified current node class_type strings**:
- `InpaintCrop` — the user-facing display "✂️ Inpaint Crop"
- `InpaintStitch` — display "✂️ Inpaint Stitch"
- `InpaintCropImproved` — internal class name; alias also exposed
- `InpaintStitchImproved` — internal class name; alias also exposed
- `InpaintExtendOutpaint` — for outpainting; the "Extend Image for Outpainting" feature
- `InpaintResize` — "Resize Image Before Inpainting"

**Note on naming**: the repo internally exports `InpaintCropImproved` / `InpaintStitchImproved` from `__init__.py`, [GitHub](https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch/blob/main/__init__.py) but old workflow JSONs use `InpaintCrop` / `InpaintStitch`. Both work; the README's docs use the human-friendly `✂️ Inpaint Crop` / `✂️ Inpaint Stitch` labels.

Old node names ("Crop", "Stitch", standalone "Extend Image for Outpainting", standalone "Resize Image Before Inpainting") are marked **obsolete** in node titles but still function for backward compatibility. **For new workflows, use `InpaintCrop` and `InpaintStitch` only** (with the new resize/outpaint features now integrated into Crop).

**Best practice**: chain `InpaintCrop → KSampler → InpaintStitch`, use `InpaintModelConditioning` (core ComfyUI node) instead of `VAE Encode (for Inpainting)` so you can set denoise < 1.0. [GitHub](https://github.com/lquesada/ComfyUI-Inpaint-CropAndStitch/blob/main/README.md) For SDXL set crop target to 1024×1024.

#### 4b. comfyui-inpaint-nodes (Acly) — Fooocus inpaint head, LaMa/MAT prefill

Repo: `https://github.com/Acly/comfyui-inpaint-nodes`. Active as of March 2025. **Still recommended in 2026** for SDXL inpainting where you want Fooocus-quality output without using Fooocus.

**Verified current node class_type strings**:
- `INPAINT_LoadFooocusInpaint` — display "Load Fooocus Inpaint"
- `INPAINT_ApplyFooocusInpaint` — display "Apply Fooocus Inpaint"
- `INPAINT_VAEEncodeInpaintConditioning` — display "VAE Encode & Inpaint Conditioning"
- `INPAINT_MaskedFill` — fills masked area with content before inpainting (`fill` mode: neutral, telea, navier-stokes)
- `INPAINT_LoadInpaintModel` — for LaMa, MAT models
- `INPAINT_InpaintWithModel` — applies LaMa / MAT
- `INPAINT_ExpandMask`, `INPAINT_DenoiseToCompositingMask` — mask helpers
- `INPAINT_MaskedBlur`, `INPAINT_ColorMatchImage` — post-processing helpers

**Required model files**:
- `ComfyUI/models/inpaint/fooocus_inpaint_head.pth` — from `https://huggingface.co/lllyasviel/fooocus_inpaint/tree/main` [GitHub](https://github.com/Acly/comfyui-inpaint-nodes)
- `ComfyUI/models/inpaint/inpaint_v26.fooocus.patch` (latest Fooocus inpaint patch version)
- For LaMa prefill: `big-lama.pt` from `https://github.com/Sanster/models/releases/download/add_big_lama/big-lama.pt` [Ecosyste.ms](https://awesome.ecosyste.ms/projects/github.com/acly/comfyui-inpaint-nodes)
- For MAT prefill: `MAT_Places512_G_fp16.safetensors` from `https://huggingface.co/Acly/MAT/resolve/main/MAT_Places512_G_fp16.safetensors` [Ecosyste.ms](https://awesome.ecosyste.ms/projects/github.com/acly/comfyui-inpaint-nodes)

**Caveat**: Fooocus inpaint patch only works on **non-distilled SDXL checkpoints**. Turbo, Lightning, Hyper merges do NOT work. Verified per the README: *"Make sure to use the regular version of a checkpoint to create an inpaint model - distilled merges (Turbo, Lightning, Hyper) do not work."* [GitHub](https://github.com/Acly/comfyui-inpaint-nodes)

#### 4c. DifferentialDiffusion — core ComfyUI in 2026

The `DifferentialDiffusion` node is **a built-in ComfyUI core node** (no custom pack needed). It is documented at `https://docs.comfy.org/built-in-nodes/DifferentialDiffusion`. Use it after a `Gaussian Blur Mask` (from KJNodes or core) to enable per-pixel denoise strength via gradient mask, eliminating hard seams. [Promptus AI](https://www.promptus.ai/blog/master-differential-diffusion-comfyui-pro-results)

**Caveat**: Per an October 2025 GitHub issue (`ltdrdata/ComfyUI-Impact-Pack#1131`), a ComfyUI core refactor in October 2025 temporarily broke FaceDetailer's internal use of DifferentialDiffusion with the error `AttributeError: 'DifferentialDiffusion' object has no attribute 'execute'`. [GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack/issues/1131) This has since been patched, but if a user is on an old Impact-Pack version it's worth knowing.

#### 4d. SAM2 segmentation for automatic mask creation

Repo: `https://github.com/kijai/ComfyUI-segment-anything-2` (kijai). Last meaningful update March 2025.

**Verified current node class_type strings**:
- `DownloadAndLoadSAM2Model` — loads from `https://huggingface.co/Kijai/sam2-safetensors/tree/main` to `ComfyUI/models/sam2` [GitHub](https://github.com/kijai/ComfyUI-segment-anything-2)
- `Sam2Segmentation` — single-image segmentation from points / bboxes
- `Sam2VideoSegmentation` — propagates a mask across video frames
- `Sam2AutoSegmentation` — automatic mask generation

**Pair with `PointsEditor` from ComfyUI-KJNodes** (kijai's own node pack) to click-pick points in the workflow UI. [GitHub](https://github.com/kijai/ComfyUI-segment-anything-2) Models: `sam2_hiera_tiny.safetensors` (fastest), `sam2_hiera_small`, `sam2_hiera_base_plus`, `sam2_hiera_large`. Tiny is fine for most cases.

**Beginner-friendly capability**: `LoadImage → Sam2Segmentation` with bounding-box input → mask output → straight into `InpaintCrop`. Skips the manual masking step entirely.

---

### 5. Face Restoration — the 2026 landscape is messy

#### 5a. ComfyUI-ReActor — still maintained, but ethical/legal warnings apply

Repo: `https://github.com/Gourieff/ComfyUI-ReActor`. Active (~1.78k stars, v0.6.x as of mid-2025). The "controversy" you remember was the **SFW-only neutering**: the package was renamed from `comfyui-reactor-node` to `comfyui-reactor` and an NSFW content detector was added that refuses to process flagged images. The package is **MIT-licensed itself**, but its dependency **InsightFace has a split license**:

> "The code of InsightFace is released under the MIT License. There is no limitation for both academic and commercial usage. The training data containing the annotation (and the models trained with these data) are available for non-commercial research purposes only. Both manual-downloading models from our github repo and auto-downloading models with our python-library follow the above license policy (which is for non-commercial research purposes only)." [GitHub](https://github.com/deepinsight/insightface) — from the InsightFace README at `github.com/deepinsight/insightface`

**This is the licensing fact to flag in any teaching note**: the InsightFace *code* is MIT, but the **models** (and any models trained on InsightFace's labeled training data) are non-commercial-research-only. ReActor distributes/auto-downloads such models, so commercial face-swap use requires you to source or train commercial-licensed replacement face-recognition models.

**Verified current node class_type strings**:
- `ReActorFaceSwap` — main face-swap node [RunComfy](https://www.runcomfy.com/comfyui-nodes/comfyui-reactor-node)
- `ReActorFaceSwapOpt` — optimized variant [RunComfy](https://www.runcomfy.com/comfyui-nodes/comfyui-reactor-node)
- `ReActorOptions` — additional options bundle [RunComfy](https://www.runcomfy.com/comfyui-nodes/comfyui-reactor-node)
- `ReActorLoadFaceModel`, `ReActorSaveFaceModel`, `ReActorBuildFaceModel` — face-model persistence (`.safetensors` files in `ComfyUI/models/reactor/faces/`) [GitHub](https://github.com/Gourieff/ComfyUI-ReActor/blob/main/README.md)
- `ReActorMaskHelper` — face masking with `face_yolov8m.pt` + `sam_vit_b_01ec64.pth` [GitHub](https://github.com/Gourieff/ComfyUI-ReActor)
- `ReActorImageDublicator` — image batch duplication for video [GitHub](https://github.com/Gourieff/ComfyUI-ReActor)
- `ReActorFaceBoost` — face-restoration enhancement [RunComfy](https://www.runcomfy.com/comfyui-nodes/comfyui-reactor-node)
- `ImageRGBA2RGB` — RGBA→RGB conversion [RunComfy](https://www.runcomfy.com/comfyui-nodes/comfyui-reactor-node)

**Ethical recommendation for AI Without Fear**: do not lead with ReActor in beginner workflows. Use it only with clear teaching notes about (1) consent, (2) the InsightFace non-commercial restriction on the models, (3) deepfake harms. Many practitioners now skip it entirely and use **PuLID** or **InstantID** for identity transfer instead, which preserve identity without literal face replacement.

#### 5b. ComfyUI-Impact-Pack (ltdrdata) — FaceDetailer is the 2026 default

Repo: `https://github.com/ltdrdata/ComfyUI-Impact-Pack`. Actively maintained as of late 2025 (last update tagged 2025-11-03). ~3.1k stars. The single most useful node in here is **`FaceDetailer`**.

**Verified current node class_type strings**:
- `FaceDetailer` — auto-detects faces, processes them at higher resolution, blends back. **The 2026 default for face quality.**
- `FaceDetailerPipe` — pipe variant for 2-pass workflows [GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)
- `DetailerForEach`, `DetailerForEachPipe`, `DetailerForEachDebug`, `DetailerForEachDebugPipe` — SEGS-based detailing
- `MaskDetailer (pipe)` — inpaints masked area as a Detailer-style operation [GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)
- `SEGSDetailer`, `SEGSPaste`, `SEGSPreview`, `SEGSFilter` — segmentation-based detail workflow
- `UltralyticsDetectorProvider` — provides YOLO-based detectors (requires `ComfyUI-Impact-Subpack`) [GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)
- `SAMLoader` — for SAM-1 segmentation in the Impact pipeline
- `BboxDetectorSEGS`, `SegmDetectorSEGS`, `BboxDetectorCombined_v2`, `SegmDetectorCombined_v2` — detector adapters [RunComfy](https://www.runcomfy.com/comfyui-nodes/ComfyUI-Impact-Pack)
- `ToBasicPipe`, `FromBasicPipe`, `ToDetailerPipe`, `FromDetailerPipe` — pipe converters
- Iterative upscaler: `PixelKSampleUpscalerProvider`, `IterativeImageUpscale`, `IterativeLatentUpscale`

**Required models for FaceDetailer**:
- `ComfyUI/models/ultralytics/bbox/face_yolov8m.pt` — face detector
- `ComfyUI/models/sams/sam_vit_b_01ec64.pth` — SAM segmenter

You also need **ComfyUI-Impact-Subpack** (ltdrdata/ComfyUI-Impact-Subpack) installed alongside, which provides `UltralyticsDetectorProvider`.

**Beginner-friendly recommendation for AI Without Fear**: **lead with `FaceDetailer` for face quality, not ReActor**. FaceDetailer doesn't swap identity, it just upresses the face region with the same model that generated the image. No ethical/licensing landmines. Two-node footprint after the main generation: `UltralyticsDetectorProvider → FaceDetailer`.

#### 5c. CodeFormer, GFPGAN

Both are integrated as face-restoration backends inside ReActor (`ReActorFaceBoost` and the face-restore options in `ReActorFaceSwap`). They are not commonly used as standalone nodes in 2026; FaceDetailer with a good SDXL / Flux model produces better results than CodeFormer / GFPGAN postprocessing.

---

### 6. Advanced Upscaling

#### 6a. ComfyUI-SUPIR (kijai) — high quality but legacy

Repo: `https://github.com/kijai/ComfyUI-SUPIR`. **Last meaningful update August 2024**; explicitly marked as superseded:

> "SUPIR is now available to use in ComfyUI core after this PR... These nodes won't be updated beyond simple breaking bugfixes." [GitHub](https://github.com/kijai/ComfyUI-SUPIR)

That said, the wrapper still produces excellent results in 2026 for photorealistic restoration. Use the **v2 nodes**, not the legacy ones.

**Verified current node class_type strings** (kijai/ComfyUI-SUPIR):
- `SUPIR_model_loader_v2` — current model loader [RunComfy](https://www.runcomfy.com/comfyui-nodes/ComfyUI-SUPIR/SUPIR_model_loader_v2) (takes a MODEL + CLIP + VAE input from a separately-loaded SDXL checkpoint)
- `SUPIR_model_loader_v2_clip` — variant that loads CLIP from the SDXL checkpoint file directly [RunComfy](https://www.runcomfy.com/comfyui-nodes/ComfyUI-SUPIR/SUPIR_model_loader_v2_clip)
- `SUPIR_first_stage` — denoise-encoder VAE pass (optional; can be skipped or replaced with a regular upscaler) [GitHub](https://github.com/kijai/ComfyUI-SUPIR)
- `SUPIR_conditioner` — encodes positive/negative prompt for SUPIR's special conditioning format
- `SUPIR_sample` — SUPIR sampling node
- `SUPIR_encode` / `SUPIR_decode` — VAE wrappers
- `SUPIR_tiles` — tiling helper
- **Legacy** (don't use in new workflows): `SUPIR_model_loader`, [InstaSD](https://www.instasd.com/comfyui/custom-nodes/comfyui-supir/supir_model_loader) `SUPIR_Upscale` (single combined node, marked legacy)

**Required model files**:
- `ComfyUI/models/checkpoints/SUPIR-v0F_fp16.safetensors` (light-degradation variant, [GitHub](https://github.com/kijai/ComfyUI-SUPIR) better detail retention) OR `SUPIR-v0Q_fp16.safetensors` (default training, more aggressive restoration) — from `https://huggingface.co/Kijai/SUPIR_pruned/tree/main` [GitHub](https://github.com/kijai/ComfyUI-SUPIR)
- An SDXL checkpoint (any standard one works; Juggernaut and RealVisXL are popular choices for restoration)

**License caveat**: SUPIR weights are non-commercial-use-only per the original paper. [InstaSD](https://www.instasd.com/comfyui/custom-nodes/comfyui-supir/supir_model_loader)

#### 6b. ComfyUI_UltimateSDUpscale (ssitu) — the workhorse

Repo: `https://github.com/ssitu/ComfyUI_UltimateSDUpscale`. ~1.4k stars, still maintained. **The 2026 default for general-purpose tiled upscaling with denoise.**

**Verified current node class_type strings**:
- `UltimateSDUpscale` — main node, [GitHub](https://github.com/ssitu/ComfyUI_UltimateSDUpscale/blob/main/README.md) takes an image + model + positive/negative + upscale_model + upscale_by parameter
- `UltimateSDUpscaleNoUpscale` — for when image is already upscaled and you just want tiled sampling [GitHub](https://github.com/ssitu/ComfyUI_UltimateSDUpscale/blob/main/README.md)
- `UltimateSDUpscaleCustomSample` — adds custom_sampler + custom_sigmas inputs [GitHub](https://github.com/ssitu/ComfyUI_UltimateSDUpscale/blob/main/README.md) for advanced flow-matching samplers (Flux, SD3)

**Required model files**: any upscale model goes in `ComfyUI/models/upscale_models/`. Standard recommendations:
- `4x-UltraSharp.pth` (sharp output, slight over-sharpening) — `https://huggingface.co/lokCX/4x-Ultrasharp`
- `4x_NMKD-Siax_200k.pth` (balanced)
- `4x_foolhardy_Remacri.pth` (popular for photoreal)
- `RealESRGAN_x4plus.pth` and `RealESRGAN_x4plus_anime_6B.pth` for anime — from `xinntao/Real-ESRGAN` releases

For an optional tile-ControlNet pass: `control_v11u_sd15_tile_fp16.safetensors` (SD1.5) or `controlnet-tile-sdxl-1.0.safetensors` (SDXL).

**Beginner workflow**: `LoadImage → UltimateSDUpscale (upscale_by=2.0, tile=512, denoise=0.25, tile_padding=32)`. One custom node. The stock `ImageUpscaleWithModel` + plain `KSampler` cannot do tiled-with-denoise at scale; this is the value-add.

#### 6c. Iterative latent upscaling — current best practice

For workflows where you want iterative latent-space upscaling (without going back to pixel space), use Impact Pack's `IterativeLatentUpscale` or kijai's KJNodes equivalents. The pattern is:
1. Generate at base resolution (e.g., 1024×1024 SDXL)
2. `LatentUpscaleBy` (core) by 1.25–1.5×
3. `KSampler` with denoise 0.4–0.5
4. Repeat 2–3 once or twice
5. Final `VAEDecode`

This is the lowest-VRAM path to higher resolutions but produces softer output than tiled pixel-space (UltimateSDUpscale).

#### 6d. Real-ESRGAN through stock vs. custom

Stock ComfyUI's `UpscaleModelLoader` + `ImageUpscaleWithModel` is fine for **deterministic pixel-space upscaling** with no generative re-rendering. **The custom-node value-add is denoised re-rendering during upscale** (UltimateSDUpscale, SUPIR), not the upscaling itself. For your foundation tier, stock is sufficient; for modern tier, use UltimateSDUpscale.

---

## Details: Recommended "Essentials" Install List for 2026

After cross-referencing GitHub stars, recent activity, and several 2025-26 listicles, here is the install set I recommend you require for the modern tier (in dependency order):

| Pack | Repo | Status | Why |
|---|---|---|---|
| **ComfyUI-Manager** | `Comfy-Org/ComfyUI-Manager` (formerly `ltdrdata/ComfyUI-Manager`) | Maintained, official | Non-negotiable. One-click install of all other custom nodes. [Apatero Blog](https://www.apatero.com/blog/ultimate-comfyui-custom-nodes-guide-20-essential-nodes-2025) |
| **rgthree-comfy** | `rgthree/rgthree-comfy` | Maintained (last update April 2025) | Better Reroute nodes, Seed control, Context Switch, Power Lora Loader, progress bar. [ComfyOnline](https://www.comfyonline.app/comfyui-nodes/nodes/Any-Switch-rgthree) Cleaner workflows. |
| **ComfyUI-Custom-Scripts** | `pythongosssss/ComfyUI-Custom-Scripts` | Maintained | LoRA autocomplete, image feed, workflow utility scripts. |
| **ComfyUI-KJNodes** | `kijai/ComfyUI-KJNodes` | Actively maintained (most active node pack of 2025-26 by kijai) | PointsEditor for SAM2, Color Match, Gaussian Blur Mask, hundreds of utility nodes. Used as a dependency by many video workflows. |
| **ComfyUI-Impact-Pack** | `ltdrdata/ComfyUI-Impact-Pack` + `ComfyUI-Impact-Subpack` | Actively maintained | FaceDetailer, SEGS pipeline, IterativeUpscale. |
| **ComfyUI-VideoHelperSuite** | `Kosinkadink/ComfyUI-VideoHelperSuite` | Actively maintained | `VHS_LoadVideo`, `VHS_VideoCombine`, audio handling. [GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved) Required for AnimateDiff and most video workflows even though ComfyUI now has core `LoadVideo`/`SaveVideo`. |
| **comfyui_controlnet_aux** | `Fannovel16/comfyui_controlnet_aux` | Maintained | ControlNet preprocessors (DepthAnything v2, OpenPose, Canny variants, lineart, MLSD, etc.) that are not in core ComfyUI. |
| **ComfyUI-GGUF** | `city96/ComfyUI-GGUF` | Maintained | Required for loading GGUF-quantized Wan / Flux models on low-VRAM cards. |

**Status of older "essentials" picks**:
- `cubiq/ComfyUI_essentials` — **maintenance-only since 2025-04-14**. [GitHub](https://github.com/cubiq/ComfyUI_essentials) Many of its features (Simple Image Resize, Mask Blur) have migrated to ComfyUI core. Still install it (workflows reference its nodes), but don't depend on it for new development. An actively-maintained fork exists at `comfyorg/comfyui-essentials`. [Apatero Blog](https://www.apatero.com/blog/ultimate-comfyui-custom-nodes-guide-20-essential-nodes-2025)
- `was-node-suite-comfyui` (WASasquatch) — **original repo archived**. An actively-maintained fork at `ltdrdata/was-node-suite-comfyui` is available. [Apatero Blog](https://www.apatero.com/blog/ultimate-comfyui-custom-nodes-guide-20-essential-nodes-2025) Massive (200+ nodes); install if older workflows you load need it, but don't lead beginners into it.

---

## Recommendations (Decision-Ready)

### For your Modern Tier video workflows
1. **Default video workflow**: Wan 2.2 5B TI2V (native ComfyUI, no custom pack required beyond VideoHelperSuite). Use exactly the node sequence in §1a. This is the most beginner-friendly modern-tier capability.
2. **Faster/higher-quality variant**: Wan 2.2 14B T2V + Lightning 4-step LoRA. Document the 24 GB VRAM requirement clearly.
3. **Skip in 2026**: HunyuanVideo, Mochi 1, CogVideoX. Mention them only as historical context.
4. **Skip entirely**: Wan 2.5 / 2.6 / 2.7 — they're API-only and the field manual is local-only.

### For IP-Adapter
1. Use `IPAdapterUnifiedLoader` + `IPAdapterAdvanced` as the canonical pair. One workflow demonstrating PLUS, one demonstrating FaceID Plus v2.
2. **Note in teaching text** that cubiq's package is in maintenance mode but the API is stable — embed class_types confidently.
3. For Flux / Wan workflows, **do not use IP-Adapter** — use the model's native reference conditioning instead.

### For AnimateDiff
1. Provide one "legacy SD1.5 animation" workflow using AnimateDiff Gen2 nodes (`ADE_LoadAnimateDiffModel` → `ADE_ApplyAnimateDiffModel` → `ADE_UseEvolvedSampling`) with `mm_sd_v15_v2.ckpt` + ContextOptions for >16 frame output.
2. **Frame it as legacy** in the teaching notes: "If you have an SD1.5 checkpoint you love or only 8 GB VRAM, AnimateDiff is still useful. Otherwise, prefer Wan 2.2."

### For Inpainting
1. Modern Tier baseline workflow: `LoadImage → MaskEditor → InpaintCrop → InpaintModelConditioning + Fooocus inpaint patch → KSampler → InpaintStitch → SaveImage`.
2. Demo `DifferentialDiffusion` + Gaussian-blurred mask for seamless edits as a second workflow.
3. Optional SAM2 workflow showing automatic mask generation from a click point.

### For Face Quality
1. **Lead with FaceDetailer** (Impact Pack). Document the YOLOv8 + SAM model downloads.
2. **Treat ReActor as advanced/with-warning**, not a default. Provide it only with clear consent/ethics teaching notes and the InsightFace "models are non-commercial" caveat. Strongly consider omitting it from the beginner-facing modern tier.

### For Upscaling
1. **UltimateSDUpscale** as the modern-tier default upscaler workflow. One node, well-understood, broad applicability.
2. **SUPIR as advanced/optional**. Note that the wrapper is in bugfix-only maintenance and that SUPIR is now in core ComfyUI (though the kijai wrapper still has more sampler options).

### Benchmarks/thresholds that would change these recommendations
- If Alibaba releases Wan 2.5+ open-weight in 2026, re-evaluate. Until then, Wan 2.2 stays.
- If a new face-quality node displaces FaceDetailer (e.g., a Flux-native face detailer), update. As of May 2026 nothing has.
- If `cubiq/ComfyUI_IPAdapter_plus` stops working with a new ComfyUI core release, migrate to a community fork — none exists yet that I would recommend.
- If the original `cubiq/ComfyUI_essentials` becomes unloadable, switch to the `comfyorg/comfyui-essentials` fork (already exists and is being kept current).

---

## Caveats

- **Custom node packs are a moving target.** All class_type strings in this report were verified against the current README / source as of late 2025 / May 2026, but ComfyUI custom nodes are not under any compatibility guarantee. Pin commit hashes for the modern tier if you want long-term reproducibility of the embedded workflow JSONs.
- **The `cubiq` and `kijai` maintenance status** is the single biggest risk vector for the modern tier. Cubiq (IPAdapter_plus, ComfyUI_essentials) is on maintenance-only since April 2025. [Floyo](https://www.floyo.ai/all-comfyui-nodes/comfyui_essentials-cubiq) Kijai (SUPIR, WanVideoWrapper, KJNodes, segment-anything-2) is still actively building — but he is a one-person operation. A community fork might become the canonical path for any of these.
- **Wan 2.2 native vs. wrapper**: I recommend native for the modern tier because it has fewer dependencies and the class_types are core ComfyUI (won't break with custom-node API changes). The kijai wrapper has more features but is a single-author dependency.
- **Licensing landmines to flag in teaching notes**: InsightFace models (FaceID variants of IP-Adapter, all of ReActor) are non-commercial-research-only — note the InsightFace *code* is MIT but the *models* are not. SUPIR weights are non-commercial. Wan 2.2 base weights are Apache 2.0 (commercial OK). [ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2) LTX-Video uses OpenRail-M. [ComfyUI Blog](https://blog.comfy.org/p/ltx-video-095-day-1-support-in-comfyui) Always re-verify the license on the specific weights you ship.
- **What I did not directly verify**: I did not retrieve actual recent r/comfyui or r/StableDiffusion threads in this research pass; the "AnimateDiff is legacy" framing comes from current node documentation (deprecation labels) and blog posts (Civitai article #19005), not from primary Reddit user sentiment. If you want firmer evidence of community sentiment, sample those subreddits before writing the teaching notes that depend on it.
- **Generation-time figures** are from the official ComfyUI 14B workflow's embedded benchmark note (RTX 4090D, 24 GB, 640×640). Real-world performance varies with prompt length, frame count, resolution, and what else the system is doing. Treat these as "ballpark on a clean system," not as guarantees.
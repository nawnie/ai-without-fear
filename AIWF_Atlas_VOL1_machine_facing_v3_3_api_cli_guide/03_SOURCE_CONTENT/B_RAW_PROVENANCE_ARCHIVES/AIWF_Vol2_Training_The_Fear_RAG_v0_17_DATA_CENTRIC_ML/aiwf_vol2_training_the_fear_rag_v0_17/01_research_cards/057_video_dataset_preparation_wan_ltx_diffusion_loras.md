# Video Dataset Preparation for Wan, LTX, and Diffusion Video LoRAs

## Scope
This card covers the dataset preparation layer for consumer/enthusiast video LoRA training: clip selection, captions, frame counts, buckets, motion consistency, reference video pairs, and validation prompts.

## Core problem
Video training data is not “images plus time.” It carries motion, camera movement, temporal consistency, frame count, FPS, compression artifacts, and scene cuts. A bad clip can poison a small video LoRA faster than a bad image poisons an image LoRA.

## Main video training targets
- Motion LoRA: teaches a motion pattern or camera behavior.
- Style LoRA: teaches visual style across time.
- Character/subject video LoRA: attempts identity consistency, usually harder.
- IC-LoRA/video-to-video transformation: paired reference/target data where the structure or conditioning matters.
- Domain adaptation: narrow footage type, camera style, scene type.

## Clip selection rules
Good clips:
- single scene,
- stable subject or intentional motion,
- clear action,
- limited cuts,
- consistent FPS,
- not over-compressed,
- enough variation across examples.

Bad clips:
- multiple hard cuts,
- watermarks/logos if not desired,
- random camera shake unless training camera shake,
- very long clips with multiple actions,
- mixed resolutions without bucket support,
- captions that describe the first frame only.

## Frame count and bucketing
Modern video trainers may group videos by resolution and frame count. SimpleTuner documentation describes buckets such as `1280x720@100`, grouping by training resolution and rounded frame counts. This matters because video memory cost scales with spatial and temporal dimensions.

AIWF translation:
- normalize clips intentionally,
- know the frame count before training,
- do not mix every resolution and duration randomly,
- treat buckets as memory planning, not just organization.

## Captioning video
Video captions need to describe:
- subject,
- action/motion,
- camera movement,
- scene/environment,
- temporal change,
- style if relevant.

Weak caption:
`a woman walking`

Better caption:
`a woman in a red coat walks slowly toward the camera through a rainy neon street, handheld camera, reflections on wet pavement`

For motion LoRA, action words matter more than static clothing details.

## Wan-specific notes
musubi-tuner is a key active trainer for Wan2.1/2.2 LoRA training and related architectures. The repository is under development and unofficial relative to the original model families. For AIWF, this means docs must be versioned and presets should be treated as fast-moving.

Practical rule:
- Keep Wan video LoRA cards separate by trainer version and model family.
- Do not mix Wan 1.3B and 14B expectations.
- Always record clip frame count, resolution, and caption format.

## LTX-specific notes
LTX-2 Trainer documentation states it enables LoRA, full fine-tuning, and video-to-video transformations/IC-LoRA on custom datasets. IC-LoRA requires paired/reference-style data, not just random clips.

Practical rule:
- Standard LoRA: clip + caption.
- IC-LoRA: target clip + corresponding reference/conditioning clip/image structure.

## Dataset directory pattern
```text
dataset_video_lora/
  clips/
    clip_0001.mp4
    clip_0002.mp4
  captions/
    clip_0001.txt
    clip_0002.txt
  metadata.csv
  splits/
    train.txt
    validation.txt
  provenance/
    source_manifest.csv
```

`metadata.csv` fields:
- clip_id,
- path,
- caption_path,
- source,
- permission,
- fps,
- frame_count,
- duration_seconds,
- width,
- height,
- aspect_ratio,
- scene_cut_count,
- motion_type,
- subject_type,
- split,
- notes.

## AIWF Dataset Doctor video checks
- corrupt video,
- FPS mismatch,
- duration outlier,
- frame count outlier,
- resolution outlier,
- hard cut detection,
- missing caption,
- caption lacks motion verb,
- near-duplicate clip,
- train/eval same source leakage,
- watermark/logo warning,
- audio present when not needed,
- reference/target pair missing for IC-LoRA.

## Consumer hardware guidance
Video LoRA training on 16GB VRAM is possible only in constrained cases and depends heavily on trainer/model/resolution/frame count. The default beginner lesson should teach dataset prep and small controlled experiments first, not promise that every Wan/LTX model can be trained locally.

## Sources
- musubi-tuner GitHub: https://github.com/kohya-ss/musubi-tuner
- musubi-tuner Wan training discussion: https://github.com/kohya-ss/musubi-tuner/discussions/182
- SimpleTuner dataloader/video bucketing docs: https://github.com/bghira/SimpleTuner/blob/main/documentation/DATALOADER.md
- SimpleTuner options/cache warnings: https://github.com/bghira/SimpleTuner/blob/main/documentation/OPTIONS.md
- LTX-2 Trainer docs: https://docs.ltx.video/open-source-model/ltx-2-trainer/ltx-2-training
- LTX-2 trainer README: https://github.com/Lightricks/LTX-2/blob/main/packages/ltx-trainer/README.md
- LTX-2 dataset preparation guide: https://huggingface.co/spaces/Lightricks/ltx-2/blob/main/packages/ltx-trainer/docs/dataset-preparation.md
- DiffSynth-Studio GitHub: https://github.com/modelscope/diffsynth-studio

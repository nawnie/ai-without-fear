# RAG Nodepack Block — Pass 02M Animation, Pose, Audio, and Cache Systems

## Research mode

Light coverage by default. This pass adds broad compatibility knowledge for animation / pose / lipsync / temporal-control packs. These are not promoted to default AIWF workflow targets unless later testing proves they beat simpler native or already-indexed paths.

## Covered block

This pass covers Steerable Motion, FizzNodes, RyanOnTheInside, Jovimetrix, Deforum, Depthflow, DepthCrafter, MotionDiff, MimicMotion variants, AnimateAnyone Evolved, MusePose, MagicAnimate, ToonCrafter, HelloMeme, Sonic, EchoMimic, LatentSync, MuseTalk, DeepFuze, TeaCache, and MagCache.

## Main conclusions

- **DepthCrafter** is the strongest practical node in this pass for AIWF near-term workflows because video depth maps can feed control, masking, and 2.5D motion workflows.
- **RyanOnTheInside** and **Jovimetrix** are high-value advanced animation packs, but too broad for automatic workflow JSON without a dense follow-up.
- **MimicMotion / AnimateAnyone / MusePose / MagicAnimate / ToonCrafter** are useful pose-animation compatibility knowledge; most are model-heavy or legacy compared with native Wan and LivePortrait-style stacks.
- **Sonic / LatentSync / MuseTalk / EchoMimic / DeepFuze** should remain warning-only until isolated environment testing because they are audio/video/identity-sensitive and may auto-download or mutate temp/dependency state.
- **TeaCache / MagCache** are important 2026 acceleration concepts, but require dense review before recommending settings because caching can affect output fidelity and model compatibility.

## Strong later dense-review candidates

1. DepthCrafter — video depth maps for control and 2.5D workflows.
2. RyanOnTheInside — audio-reactive / temporal mask / flex systems.
3. LatentSync / Sonic — lipsync/talking-head path comparison.
4. TeaCache / MagCache — acceleration policy and quality-risk testing.
5. MimicMotionWrapper — pose-driven human animation if AIWF adds pose-video workflows.

## Workflow generation policy

Do not generate workflow JSON from this pass by default. Treat rows as RAG/compatibility knowledge unless `workflow_generation_policy` is later upgraded after local ComfyUI testing.

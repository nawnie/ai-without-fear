# Source Log — Pass 05

## Dataset formats and trainer compatibility
- Hugging Face TRL dataset formats: https://huggingface.co/docs/trl/en/dataset_formats
- TRL SFTTrainer: https://huggingface.co/docs/trl/en/sft_trainer
- TRL DPOTrainer: https://huggingface.co/docs/trl/en/dpo_trainer
- LLaMA-Factory data README: https://github.com/hiyouga/LLaMA-Factory/blob/main/data/README.md
- Qwen LLaMA-Factory SFT guide: https://qwen.readthedocs.io/en/v2.0/training/SFT/llama_factory.html
- Axolotl dataset formats: https://docs.axolotl.ai/docs/dataset-formats/
- Axolotl conversation templates: https://docs.axolotl.ai/docs/dataset-formats/conversation.html
- Axolotl template-free/input masking: https://docs.axolotl.ai/docs/dataset-formats/template_free.html

## Data cleaning, deduplication, privacy
- Hugging Face Datasets processing: https://huggingface.co/docs/datasets/en/process
- Microsoft Presidio GitHub: https://github.com/microsoft/presidio
- Microsoft Presidio docs: https://microsoft.github.io/presidio/
- Presidio text anonymization: https://microsoft.github.io/presidio/text_anonymization/
- cleanlab docs: https://docs.cleanlab.ai/
- cleanlab GitHub: https://github.com/cleanlab/cleanlab
- Milvus MinHash LSH deduplication: https://milvus.io/blog/minhash-lsh-in-milvus-the-secret-weapon-for-fighting-duplicates-in-llm-training-data.md

## Synthetic data and preference data
- Self-Instruct GitHub: https://github.com/yizhongw/self-instruct
- Self-Instruct paper: https://arxiv.org/abs/2212.10560
- WizardLM Evol-Instruct paper: https://arxiv.org/abs/2304.12244
- WizardLM GitHub: https://github.com/nlpxucan/WizardLM
- Distilabel docs: https://distilabel.argilla.io/
- Distilabel GitHub: https://github.com/argilla-io/distilabel
- Hugging Face Distilabel integration: https://huggingface.co/docs/hub/en/datasets-distilabel
- Mistral synthetic DPO cookbook: https://docs.mistral.ai/resources/cookbooks/third_party-argilla-distilabel_synthetic_dpo_dataset

## Captioning and multimodal
- Salesforce LAVIS GitHub: https://github.com/salesforce/LAVIS
- LAVIS BLIP captioning notebook: https://github.com/salesforce/LAVIS/blob/main/examples/blip_image_captioning.ipynb
- Hugging Face BLIP-2 blog: https://huggingface.co/blog/blip-2
- Microsoft Florence-2 base model card: https://huggingface.co/microsoft/Florence-2-base
- SmilingWolf Hugging Face: https://huggingface.co/SmilingWolf
- Hugging Face VLM fine-tuning cookbook: https://huggingface.co/learn/cookbook/en/fine_tuning_vlm_trl

## Video data
- musubi-tuner GitHub: https://github.com/kohya-ss/musubi-tuner
- musubi-tuner Wan discussion: https://github.com/kohya-ss/musubi-tuner/discussions/182
- SimpleTuner dataloader docs: https://github.com/bghira/SimpleTuner/blob/main/documentation/DATALOADER.md
- SimpleTuner options/cache docs: https://github.com/bghira/SimpleTuner/blob/main/documentation/OPTIONS.md
- LTX-2 Trainer docs: https://docs.ltx.video/open-source-model/ltx-2-trainer/ltx-2-training
- LTX-2 trainer README: https://github.com/Lightricks/LTX-2/blob/main/packages/ltx-trainer/README.md
- LTX-2 dataset preparation: https://huggingface.co/spaces/Lightricks/ltx-2/blob/main/packages/ltx-trainer/docs/dataset-preparation.md
- DiffSynth-Studio GitHub: https://github.com/modelscope/diffsynth-studio

## Experiment tracking and reproducibility
- W&B experiment tracking: https://docs.wandb.ai/models/track
- W&B integrations: https://docs.wandb.ai/models/integrations
- MLflow: https://mlflow.org/
- MLflow docs: https://www.mlflow.org/docs/latest/index.html
- MLflow Model Registry: https://mlflow.org/docs/latest/ml/model-registry/
- TensorBoard: https://www.tensorflow.org/tensorboard
- TensorBoard getting started: https://www.tensorflow.org/tensorboard/get_started
- PyTorch TensorBoard tutorial: https://docs.pytorch.org/tutorials/recipes/recipes/tensorboard_with_pytorch.html
- Hugging Face model cards: https://huggingface.co/docs/hub/model-cards

# What Is a Model Parameter?

## The short answer

A parameter is a numerical value inside a model that training is allowed to adjust, commonly stored in tensors such as weights and biases.

## A useful mental picture

Picture a large mixing board covered in small dials. Training shows the model example after example and nudges many dials at once. A parameter is one dial's learned numerical setting. Together, the settings shape how the model responds.

## The mechanics

For `y = wx + b`, `x` is the input, `y` is the output, and learned `w` and `b` are parameters. Training repeats a loop: receive an example, predict, measure error, calculate adjustment directions with backpropagation, then let an optimizer nudge many parameters.

One example can affect many parameters, and one parameter can be affected by many examples. There is no normal one-line-to-one-parameter mapping.

## Important distinctions

| Layer | What it is | Remember |
| --- | --- | --- |
| Training data | Examples used in pretraining, fine-tuning, or adapter training | Examples influence updates; an example is not one parameter. |
| Parameters | Learned tensors such as weights, biases, and embedding tables | They shape behavior collectively. |
| Prompt and context | Text, images, files, retrieval, or tool results supplied for a task | Runtime input; retention depends on the product, plan, and settings. |
| Current activations | Intermediate representations calculated while processing input | Calculations for the run, not newly trained parameters. |
| Output, logs, history | Results and records saved by an app, connector, or organization | Storage, access, deletion, and disclosure are governance questions. |

## Parameters and privacy

A prompt is not a parameter, but that does not make it safe to upload. Use the approved tool, follow local rules, check exact retention settings, and keep a human review step.

## LoRA in plain language

Full fine-tuning changes many base-model parameters. Low-Rank Adaptation (LoRA) usually freezes the base model and trains smaller low-rank matrices for selected weights. A LoRA contains learned adapter parameters and configuration metadata, not one training caption per parameter.

More parameters can affect capacity, file size, memory use, and computation. Parameter count is not a direct intelligence score.

## Technical sources

- PyTorch: Parameter — https://docs.pytorch.org/docs/stable/generated/torch.nn.parameter.Parameter.html
- LoRA paper — https://arxiv.org/abs/2106.09685
- Hugging Face PEFT: LoRA — https://huggingface.co/docs/peft/main/package_reference/lora
- Extracting Training Data from Large Language Models — https://arxiv.org/abs/2012.07805

Product retention, training, account, and privacy behavior can change. Check the exact service, plan, and settings before delivery.

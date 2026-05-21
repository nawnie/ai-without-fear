# Vol. 1 -> Vol. 2 Bridge Notes

## Bridge thesis

Vol. 1 taught the reader to control AI systems from the outside.
Vol. 2 teaches the reader how AI systems change from the inside.

The bridge chapter should remind readers:

- In Vol. 1, you learned settings.
- In Vol. 2, you learn objectives.
- In Vol. 1, you learned prompts.
- In Vol. 2, you learn datasets.
- In Vol. 1, you learned workflows.
- In Vol. 2, you learn training pipelines.
- In Vol. 1, you learned failure signatures in outputs.
- In Vol. 2, you learn failure signatures in data, loss curves, metrics, and releases.

## Suggested opening for Vol. 2

You already know the outside of the machine.

You know prompts change behavior. You know settings change output. You know workflows are loops, not single buttons. You know that a good result is usually generated, selected, refined, and finished.

Now we go underneath that.

Training is how models learn patterns from data. Fine-tuning is how we steer a model toward a narrower behavior. Evaluation is how we find out whether the steering actually worked. Release discipline is how we avoid fooling ourselves or harming someone else.

This volume is not about making one lucky LoRA. It is about learning the system behind training.

## Concept continuity table

| Vol. 1 concept | Vol. 2 continuation |
|---|---|
| Prompt | Training example / instruction pair |
| Negative prompt | Loss pressure / preference signal / refusal data |
| CFG/guidance | Objective strength / reward pressure / steering strength |
| Denoise | Degree of change from prior state |
| Seed | Reproducibility / random initialization |
| Sampler | Optimization trajectory metaphor |
| Model checkpoint | Learned weights / base distribution |
| LoRA | Low-rank adapter / parameter-efficient update |
| ControlNet | Structured conditioning / inductive bias |
| Workflow JSON | Reproducible training run pack |
| Failure atlas | Evaluation + diagnostic suite |
| Model card | Release accountability |

## Vol. 2 must avoid these traps

- Treating fine-tuning as knowledge upload.
- Treating loss as quality.
- Treating validation scores as truth without split review.
- Treating synthetic data as free data.
- Treating model merging as alchemy without evals.
- Treating legal/consent issues as footnotes.
- Treating consumer hardware limits as an afterthought.

## Vol. 2 should repeatedly reinforce

Training is not magic. It is pressure applied through data, objectives, and optimization. The model changes in the direction you reward, not necessarily in the direction you intended.

# 117 — Reinforcement Learning Foundations

## Core claim

Reinforcement learning trains behavior through interaction, reward, and long-term consequence. It is powerful and fragile.

## Core terms

- agent: learner/decision-maker
- environment: world the agent acts in
- state: information available at a step
- action: choice made by the agent
- reward: scalar feedback
- policy: action strategy
- value function: expected future return
- exploration/exploitation: trying new actions vs using known good ones

## Main method families

- value-based methods
- policy-gradient methods
- actor-critic methods
- model-based RL
- offline RL

## LLM post-training connection

RLHF and RLAIF adapt behavior using preference/reward signals. Direct preference methods such as DPO simplify parts of this pipeline but still depend heavily on data quality and evaluation.

## Failure risks

- reward hacking
- specification gaming
- unstable optimization
- judge-model bias
- preference-data noise
- behavior improvement in one dimension with regression elsewhere

## Reader exercise

Build a toy bandit problem. Show exploration/exploitation tradeoff and reward hacking with a badly designed reward.

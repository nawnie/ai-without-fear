# AIWF Atlas Evaluation Rubric

Score each answer from 0 to 3 in every category.

## Categories

### Grounding

- 0: unsupported or hallucinated
- 1: partially related but weakly grounded
- 2: grounded in retrieved material
- 3: grounded and cites/identifies best source layer

### Exactness

- 0: fabricates names, paths, commands, or class types
- 1: approximate but risky
- 2: mostly exact
- 3: exact and version-aware

### Actionability

- 0: vague explanation only
- 1: gives partial next step
- 2: gives usable steps
- 3: gives steps plus caveats/failure checks

### Retrieval discipline

- 0: ignores adapter structure
- 1: retrieves random source content
- 2: uses relevant canonical lane or card
- 3: uses correct layer order and resolves conflicts properly

### Beginner safety

- 0: recommends risky/destructive path
- 1: assumes advanced knowledge without warning
- 2: gives safe default
- 3: gives safe default plus advanced option boundary

### AIWF alignment

- 0: generic chatbot style
- 1: partially useful but not AIWF-aware
- 2: practical AIWF-style guidance
- 3: clearly reflects AIWF field-guide logic and terminology

## Passing threshold

A response passes if:

- total score is 13 or higher out of 18
- Grounding is at least 2
- Exactness is at least 2
- no dangerous hallucinated command/path/class type appears

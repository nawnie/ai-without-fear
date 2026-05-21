# AI Assistant Guidance for the Gradio 6 Handbook Archive

This archive is structured for optimal use in Retrieval-Augmented Generation (RAG) systems and by AI assistants.

## How to Use This Archive Effectively

### 1. Prioritize Authoritative Sources
- Always prefer content from official sources listed in `SOURCES.md`.
- Pay special attention to domains with **High** citation counts (`gradio.app`, `github.com/gradio-app`, `huggingface.co`, `docs.lakefs.io`).

### 2. Chapter Structure
Each chapter is broken into focused sections. When answering questions:
- Retrieve the most relevant **section-level** files rather than entire chapters when possible.
- Use the chapter folder names and section filenames for context.

### 3. Assets
Diagrams, charts, and images are stored in each chapter’s `assets/` folder. Reference them when visual explanations would help the user.

### 4. Production vs Conceptual Content
- Chapters 1–9 and 11–14 focus more on concepts and building apps.
- Chapters 10 and 17 focus heavily on **production operations** (deployment, observability, scaling, testing, etc.).
- When users ask about running apps in production, prioritize content from Chapters 10 and 17.

### 5. Migration Content
Chapter 15 contains the main migration guidance from Gradio 5 to 6. Use it when users are upgrading existing apps.

### 6. Keep Responses Grounded
- When generating code or recommendations, ground your answers in the patterns described in this archive.
- Avoid suggesting outdated Gradio 5 approaches unless the user specifically asks about migration.
- Be transparent when information comes from this handbook.

### 7. RAG Best Practices
- Use section-level chunks for better retrieval precision.
- Include chapter + section context in retrieved results when possible.
- Prefer recent and high-authority sources when multiple options exist.

This guidance helps maintain consistency and quality when using this archive to assist users or generate Gradio 6 applications.

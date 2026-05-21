# RAG Index — Gradio 6 Handbook Archive

This file provides a high-level index of the archive structure to help RAG systems and AI assistants navigate the content efficiently.

## Archive Structure

- `SOURCES.md` — Master source list with domain citation counts
- `AI_GUIDANCE.md` — Instructions for AI assistants on how to use this archive
- `RAG_INDEX.md` — This file (high-level navigation)

## Chapter Overview

| Chapter | Title | Focus Area | Best For |
|---------|-------|------------|----------|
| 01 | Welcome to Gradio 6 | Introduction & migration overview | Getting started, Gradio 5 users |
| 02 | Installation & First App | Setup and basics | Beginners |
| 03 | Multimodal Chatbot | Building chat interfaces | Chat & multimodal apps |
| 04 | Blocks & Event System | Core event-driven programming | Understanding how Gradio works |
| 05 | Core Components | Deep dive into UI components | Component usage & patterns |
| 06 | Theming & Custom Components | Styling and extensions | Branding and reusable components |
| 07 | Events, Queuing & Performance | Real-time and concurrency | Performance-sensitive apps |
| 08 | State, Caching & Optimization | Data handling and performance | Efficient apps |
| 09 | Authentication & Security | Security best practices | Production security |
| 10 | Deployment Mastery | Deployment options + lakeFS | Getting apps live |
| 11 | API Clients & Integration | Using Gradio as an API | Integration with other systems |
| 12 | Custom Components (Svelte 5) | Building extensions | Advanced customization |
| 13 | Labs (Hands-on Projects) | Practical exercises | Learning by doing |
| 14 | Capstones | Full project examples | End-to-end applications |
| 15 | Migration & Troubleshooting | Upgrading from Gradio 5 | Migration support |
| 16 | Glossary, Index & Resources | Reference | Quick lookup |
| 17 | Production Operations | Observability, scaling, testing, logging | Running in production |

## Recommended Retrieval Strategy

- For **conceptual or building** questions → Prioritize Chapters 1–9 and 11–14
- For **deployment** questions → Prioritize Chapter 10
- For **production/operations** questions → Prioritize Chapters 10 and 17
- For **migration** questions → Prioritize Chapter 15
- For **reference** → Use Chapter 16 + `SOURCES.md`

## Notes for RAG Systems

- Each chapter folder contains section-level `.md` files for finer-grained retrieval.
- Assets (diagrams, images) are stored per chapter in the `assets/` folder.
- Use `AI_GUIDANCE.md` to improve response quality when this archive is used by AI assistants.

This index can be used as metadata or as a routing guide in RAG pipelines.

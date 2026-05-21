# Agent Systems, Tool Use, and MCP — Expanded Research Notes

## Purpose
Teach the assistant when to answer directly, when to retrieve, when to call tools, and how to reason about agent loops, permissions, state, and MCP-style external context.

## Canonical summary
Agent systems are not just chatbots with bigger prompts. They are stateful software systems where the model selects tools, receives tool outputs, and continues reasoning. MCP is an open standard for connecting AI applications to data sources and tools through clients and servers. The adapter should prefer explicit tool schemas, validation, limited permissions, and state-machine orchestration over unbounded autonomous loops.

## In scope
- tool/function calling
- structured outputs
- MCP clients and servers
- resources, tools, and prompt surfaces
- planner-executor patterns
- state machines and LangGraph-style workflows
- agent memory boundaries
- tool permission and sandboxing

## Core concepts
- tool calling
- function calling
- structured output
- JSON schema
- MCP server
- MCP client
- resources
- prompts
- planner
- executor
- ReAct
- Plan-and-Execute
- LangGraph
- stateful agent
- human approval gate

## AIWF interpretation
This topic is part of the adapter's machine-memory layer. It should help an AI assistant retrieve, reason, and answer with better domain maturity than a raw small model. Use this note as source content, but prefer the canonical lane files for direct answer routing.

## Source anchors
- Anthropic Model Context Protocol announcement: https://www.anthropic.com/news/model-context-protocol
- OpenAI function calling guide: https://developers.openai.com/api/docs/guides/function-calling
- OpenAI structured outputs guide: https://developers.openai.com/api/docs/guides/structured-outputs
- LangGraph overview: https://docs.langchain.com/oss/python/langgraph/overview
- LangChain project: https://github.com/langchain-ai/langchain

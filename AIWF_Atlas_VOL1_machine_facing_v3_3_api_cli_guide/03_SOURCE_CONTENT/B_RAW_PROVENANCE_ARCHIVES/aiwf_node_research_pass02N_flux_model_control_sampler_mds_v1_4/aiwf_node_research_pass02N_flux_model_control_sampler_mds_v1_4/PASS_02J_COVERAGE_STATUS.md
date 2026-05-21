# PASS 02J Coverage Status

**Date:** 2026-05-19

## Summary

This pass did not continue broad pack discovery. It analyzed and added the uploaded 2026 Modern Tier Field Report as a decision overlay.

## Counts

- Base Pass 02I node/index rows: 632
- Added native/core Wan rows: 11
- New Pass 02 total rows: 643
- Decision-layer rows: 10
- Original list rows: 291
- Covered original rows: 100
- Untouched original rows left: 189
- Retry/stale rows still left: 2
- Total original-list left including retry/stale: 191

## Why Original Coverage Did Not Move Much

The field report is not primarily a new-pack list. It mostly reprioritizes packs we already covered and adds **core/native Wan 2.2** as a modern-tier workflow default. Because native ComfyUI core nodes are outside the original custom-node pack list, they add RAG value without reducing the custom-node backlog.

## Remaining Stale/Retry Rows

- `shadowcz007/comfyui-liveportrait`
- `ZHO-ZHO-ZHO/comfyui-portrait-master-zh-cn`

Both remain stale/unresolved and should not block workflow planning.

## New High-Value Additions

- Core native Wan 2.2 path.
- Modern-tier decision layer.
- Workflow build-order recommendations.
- Guardrails against using wrapper/legacy/identity-sensitive packs as defaults.

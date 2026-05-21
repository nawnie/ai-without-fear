# SQLAlchemy

## RAG identity

- **pip name:** `SQLAlchemy`
- **import name:** `sqlalchemy`
- **category:** `database_orm`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `>=2.0.0`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Database toolkit/ORM used by apps that maintain internal state. For ComfyUI, pair with Alembic and avoid random downgrades.

## Where this package came from

ComfyUI upstream requirements.txt; database ORM/runtime dependency.

## Install / compatibility notes

SQLAlchemy 2.x is a distinct API family. Downgrading below upstream minimum can break app state/migrations.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://www.sqlalchemy.org/
- https://pypi.org/project/SQLAlchemy/

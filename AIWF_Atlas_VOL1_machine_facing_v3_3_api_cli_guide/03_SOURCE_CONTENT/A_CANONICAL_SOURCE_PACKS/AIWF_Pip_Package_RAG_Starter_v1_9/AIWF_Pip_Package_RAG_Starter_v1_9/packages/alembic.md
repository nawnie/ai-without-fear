# alembic

## RAG identity

- **pip name:** `alembic`
- **import name:** `alembic`
- **category:** `database_migration`
- **confidence:** `upstream_confirmed`
- **priority:** `medium`
- **version seen:** `not pinned`
- **documented batch:** `v0.7-comfyui-runtime-grounding`

## Why AI Without Fear cares

Database migration/versioning layer; paired with SQLAlchemy for internal app state/schema migration.

## Where this package came from

ComfyUI upstream requirements.txt; database migration dependency.

## Install / compatibility notes

If database/schema errors appear, do not treat this as a model issue. Check SQLAlchemy/Alembic versions and local DB files.

## Windows risk

`low`

## RAG usage rules

- Do not treat this as a model file, checkpoint, LoRA, or ComfyUI workflow JSON.
- Resolve import name vs pip name before writing troubleshooting steps.
- When imported from upstream ComfyUI requirements, prefer matching the upstream ComfyUI requirement instead of inventing a separate pin.
- If this package appears in both `pip freeze` and a custom node `requirements.txt`, record both sources; do not overwrite one with the other.

## Source URLs

- https://github.com/Comfy-Org/ComfyUI/blob/master/requirements.txt
- https://alembic.sqlalchemy.org/
- https://pypi.org/project/alembic/

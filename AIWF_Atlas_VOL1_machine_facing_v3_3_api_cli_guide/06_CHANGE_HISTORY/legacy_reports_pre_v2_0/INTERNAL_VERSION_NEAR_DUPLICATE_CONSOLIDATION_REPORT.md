# Internal Version Near-Duplicate Consolidation Report

## Summary

- Input root: `AIWF_CS_Knowledge_Data_Archive_v0_2_near_consolidated`
- Output root: `AIWF_CS_Knowledge_Data_Archive_v0_3_internal_near_consolidated`
- Internal version groups consolidated: 12
- Older internal version files removed after merge: 38

## Policy

- Files were grouped only when they lived in the same folder and had the same basename after removing a trailing version suffix like `_v0_17`.
- The newest versioned filename was kept as canonical.
- Older versions were removed only after unique chunks/rows were merged into the canonical file.
- CSV files were merged by unique rows; Markdown/text files were merged by unique chunks.
- This pass avoids merging unrelated package cards that merely share a template.

## Consolidated groups

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/coverage_dashboard.md`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_17.md`
- Removed: 9
- Unique chunks/rows added: 49
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_16.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_15.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_14.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_13.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_12.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_11.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_10.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_9.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/COVERAGE_DASHBOARD_v0_8.md`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/file_manifest_current.txt`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_17.txt`
- Removed: 8
- Unique chunks/rows added: 10
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_16.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_15.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_14.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_13.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_12.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_11.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_10.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/FILE_MANIFEST_CURRENT_v0_9.txt`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/next_pass_queue.md`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/NEXT_PASS_QUEUE_v0_17.md`
- Removed: 1
- Unique chunks/rows added: 2
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/NEXT_PASS_QUEUE_v0_16.md`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/archive_manifests/file_manifest.txt`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/archive_manifests/FILE_MANIFEST_v0_7.txt`
- Removed: 3
- Unique chunks/rows added: 4
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/archive_manifests/FILE_MANIFEST_v0_6.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/archive_manifests/FILE_MANIFEST_v0_5.txt`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/00_project_control/archive_manifests/FILE_MANIFEST_v0_4.txt`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/pass_status_matrix.csv`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/pass_status_matrix_v0_12.csv`
- Removed: 2
- Unique chunks/rows added: 22
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/pass_status_matrix_v0_11.csv`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/pass_status_matrix_v0_9.csv`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_domain_summary.csv`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_domain_summary_v0_17.csv`
- Removed: 2
- Unique chunks/rows added: 5
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_domain_summary_v0_16.csv`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_domain_summary_v0_15.csv`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_topic_summary.csv`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_topic_summary_v0_17.csv`
- Removed: 2
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_topic_summary_v0_16.csv`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_topic_summary_v0_15.csv`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_type_priority_summary.csv`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_type_priority_summary_v0_17.csv`
- Removed: 2
- Unique chunks/rows added: 21
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_type_priority_summary_v0_16.csv`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/02_tables/source_type_priority_summary_v0_15.csv`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/04_future_passes/next_pass_queue.md`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/04_future_passes/NEXT_PASS_QUEUE_v0_15.md`
- Removed: 3
- Unique chunks/rows added: 24
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/04_future_passes/NEXT_PASS_QUEUE_v0_13.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/04_future_passes/NEXT_PASS_QUEUE_v0_12.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/04_future_passes/NEXT_PASS_QUEUE_v0_11.md`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/05_specs/aiwf_dataset_doctor.md`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/05_specs/AIWF_Dataset_Doctor_v0_3.md`
- Removed: 2
- Unique chunks/rows added: 42
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/05_specs/AIWF_Dataset_Doctor_v0_2.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/05_specs/AIWF_Dataset_Doctor_v0_1.md`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/06_sources/master_source_register.csv`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/06_sources/MASTER_SOURCE_REGISTER_v0_17.csv`
- Removed: 2
- Unique chunks/rows added: 0
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/06_sources/MASTER_SOURCE_REGISTER_v0_16.csv`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/06_sources/MASTER_SOURCE_REGISTER_v0_15.csv`

### `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/06_sources/master_source_register.md`

- Kept canonical: `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/06_sources/MASTER_SOURCE_REGISTER_v0_17.md`
- Removed: 2
- Unique chunks/rows added: 37
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/06_sources/MASTER_SOURCE_REGISTER_v0_16.md`
  - `CONTENT/AIWF_Vol2_Training_The_Fear_RAG_v0_17_DATA_CENTRIC_ML/aiwf_vol2_training_the_fear_rag_v0_17/06_sources/MASTER_SOURCE_REGISTER_v0_15.md`


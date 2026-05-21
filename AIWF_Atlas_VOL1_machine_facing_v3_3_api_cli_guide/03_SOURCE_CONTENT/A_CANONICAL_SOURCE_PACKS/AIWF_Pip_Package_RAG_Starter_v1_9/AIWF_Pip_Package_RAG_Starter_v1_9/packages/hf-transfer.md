# hf-transfer

## Role in AIWF
`hf-transfer` is a Hugging Face Hub download acceleration tool for power users with very high bandwidth. It belongs in the RAG because large local model support often fails at the download/cache layer before inference begins.

## Support boundary
This is not the general default downloader. The official repo warns that it is a power-user tool, does not aim for normal usability, and lacks regular progress UX.

## Install / runtime notes
Use only when normal `huggingface_hub` downloads are the bottleneck and the user understands the tradeoff. Capture the exact environment variable/settings used during support.

## Windows risk
Medium. Rust-backed tooling can introduce wheel/build or platform issues.

## Sources
- https://github.com/huggingface/hf_transfer
- https://huggingface.co/docs/huggingface_hub/en/guides/download

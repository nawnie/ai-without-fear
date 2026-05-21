# Svelte 5 Best Practices for Custom Components

When building custom components in Gradio 6:

- Use Svelte 5 runes (`$state`, `$derived`, `$effect`) instead of older syntax
- Keep the Python side simple (preprocess, postprocess, get_config)
- Test thoroughly with `gradio cc dev`
- Version your components alongside your main app using lakeFS when possible

This approach leads to more maintainable and performant custom components.
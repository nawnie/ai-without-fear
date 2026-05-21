# Progress and Long-Running Tasks

For AI generation apps, always use `gr.Progress()` to show progress during long-running tasks. You can also stream partial results back to the user using async generators and event chaining.
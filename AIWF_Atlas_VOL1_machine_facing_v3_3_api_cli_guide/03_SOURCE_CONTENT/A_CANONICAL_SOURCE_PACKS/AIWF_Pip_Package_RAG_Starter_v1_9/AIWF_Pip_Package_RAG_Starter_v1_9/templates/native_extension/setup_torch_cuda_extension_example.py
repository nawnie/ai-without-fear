from setuptools import setup
from torch.utils.cpp_extension import BuildExtension, CUDAExtension

setup(
    name="aiwf_torch_cuda_extension_example",
    ext_modules=[CUDAExtension(name="aiwf_torch_cuda_extension_example", sources=["src/example.cpp", "src/example_kernel.cu"])],
    cmdclass={"build_ext": BuildExtension},
)

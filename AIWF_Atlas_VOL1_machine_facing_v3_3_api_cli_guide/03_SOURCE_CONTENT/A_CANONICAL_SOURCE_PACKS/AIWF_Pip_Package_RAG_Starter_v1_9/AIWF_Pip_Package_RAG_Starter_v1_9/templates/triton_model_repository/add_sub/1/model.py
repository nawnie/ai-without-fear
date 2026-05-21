import triton_python_backend_utils as pb_utils
import numpy as np

class TritonPythonModel:
    def execute(self, requests):
        responses = []
        for request in requests:
            a = pb_utils.get_input_tensor_by_name(request, "INPUT0").as_numpy()
            b = pb_utils.get_input_tensor_by_name(request, "INPUT1").as_numpy()
            out0 = pb_utils.Tensor("OUTPUT0", a + b)
            out1 = pb_utils.Tensor("OUTPUT1", a - b)
            responses.append(pb_utils.InferenceResponse(output_tensors=[out0, out1]))
        return responses

import triton_python_backend_utils as pb_utils

class TritonPythonModel:
    def initialize(self, args):
        pass

    def execute(self, requests):
        responses = []
        for request in requests:
            x = pb_utils.get_input_tensor_by_name(request, "INPUT")
            responses.append(pb_utils.InferenceResponse(output_tensors=[pb_utils.Tensor("OUTPUT", x.as_numpy())]))
        return responses

    def finalize(self):
        pass

variable "lambda_function_name" {
  description = "The name of the lambda function."
  type = string
  default = "test_lambda"
}

variable "step_function_name" {
  description = "The name of the step function."
  type = string
  default = "test_step_function"
}
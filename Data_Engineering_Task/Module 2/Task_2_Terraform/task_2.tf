# terraform {
#   required_providers {
#     aws = {
#       source  = "hashicorp/aws"
#       version = "~> 4.0"
#     }
#   }
# }

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
  access_key = "AKIAUUOECTXDKU6HOIJ5"
  secret_key = "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"
}



resource "aws_iam_role" "lambda_roles" {
  name = "${var.Basic_pyhon_function}-assume-role"

  assume_role_policy = <<EOF
{
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

# zipping the code for terra lambda function
data "archive_file" "basic_python_code_zip" {
type        = "zip"
source_dir  = "${path.module}/terra_python/"
output_path = "${path.module}/terra_python/basic_code.zip"
}

resource "aws_lambda_function" "terra_lambda" {
  filename      = "${path.module}/terra_python/basic_code.zip"
  function_name = var.Basic_pyhon_function
  role          = aws_iam_role.lambda_roles.arn
  
  handler       = "basic_code.basic_code"
#   source_code_hash = filebase64sha256("data.archive_file.basic_python_code_zip.output_path.${path.module}/terra_python/basic_code.zip")
#   source_code_hash = filebase64sha256("${path.module}/terra_python/basic_code.zip")
#   source_code_hash = data.archive_file.basic_python_code_zip.output_base64sha256

  runtime = "python3.9"
  description = "lambda function from terraform"
}

variable "Basic_pyhon_function" {
  description = "The name of the lambda function."
  type = string
  default = "Basic_lambda_function"
}

resource "aws_sfn_state_machine" "sfn_state_machine" {
  name       = var.step_function_name
  role_arn   = aws_iam_role.step_function_role.arn

  definition = <<EOF
{
  "Comment": "A Basic code example of the Amazon States Language using an AWS Lambda Function",
  "StartAt": "My_Basic_code",
  "States": {
    "My_Basic_code": {
      "Type": "Choice",
      "Resource": "${aws_lambda_function.terra_lambda.arn}",
      "End": true
    }
  }
}
EOF
}

resource "aws_iam_role" "step_function_role" {
  name = "${var.step_function_name}-role"
  assume_role_policy = <<-EOF
  {
    "Statement": [
      {
        "Action": "sts:AssumeRole",
        "Principal": {
          "Service": "states.amazonaws.com"
        },
        "Effect": "Allow",
        "Sid": "StepFunctionAssumeRole"
      }
    ]
  }
  EOF
}

variable "step_function_name" {
  description = "The name of the step function."
  type = string
  default = "Basic_step_function"
}
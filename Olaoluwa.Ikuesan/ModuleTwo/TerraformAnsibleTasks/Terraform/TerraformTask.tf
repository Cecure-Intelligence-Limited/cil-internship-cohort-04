# Set up configurations and providers

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
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

resource "aws_lambda_function" "test_lambda" {

  # Define Lambda function parameters
  filename      = "lambda_function.zip"
  function_name = "test"
  role          = aws_iam_role.iam_for_lambda.arn
  handler       = "index.test"

  
  source_code_hash = filebase64sha256("lambda_function.zip")
  runtime = "python3.9"
}

resource "aws_sfn_state_machine" "step_function_task" {
  name     = "step_function_task"
  role_arn = aws_iam_role.iam_for_lambda.arn

  definition = <<EOF
{
  "Comment": "An AWS Step Function Task with AWS Lambda Function",
  "StartAt": "StepFunctionTask",
  "States": {
    "StepFunctionTask": {
      "Type": "Task",
      "Resource": "${aws_lambda_function.test_lambda.arn}",
      "End": true
    }
  }
}
EOF
}
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  shared_credentials_files = ["/home/presh/.aws/credentials"]
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "AWSLambdaRole2"
  description = "This role gives permission to create lambda and step functions"
  max_session_duration = 3600
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
  managed_policy_arns = ["arn:aws:iam::aws:policy/AWSStepFunctionsFullAccess","arn:aws:iam::aws:policy/CloudWatchFullAccess"]
}

data "archive_file" "zip_python_file" {
  type = "zip"
  source_file = "${path.module}/lambda.py"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_lambda_function" "lambda_function" {
  function_name = "lambdafunction02"
  filename = data.archive_file.zip_python_file.output_path
  source_code_hash = data.archive_file.zip_python_file.output_base64sha256
  runtime = "python3.9"
  role = aws_iam_role.iam_for_lambda.arn
  handler = "lambda.lambda_handler"
  description = "Amazon lambda function with HashiCorp Terraform"
}

resource "aws_sfn_state_machine" "sfn_state_machine" {
  name = "stepfunction"
  role_arn = aws_iam_role.iam_for_lambda.arn
  definition = <<EOF
      {
        "StartAt": "HelloWorld",
        "States": {
            "HelloWorld": {
                "Type": "Task",
                "Resource": "${aws_lambda_function.lambda_function.arn}",
                "End": true
            }
        }
    }
  EOF
}
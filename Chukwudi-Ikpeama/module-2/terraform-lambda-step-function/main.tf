# Define variable for AWS Region
variable "aws_region"{
    default = "us-east-1"
}

# Define variable for AWS Credential file
variable "shared_credentials_files" {
  default = ["~/.aws/credentials"]
  type = list(string)
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Define AWS Provider
provider "aws" {
  region     = var.aws_region
  shared_credentials_files = var.shared_credentials_files
}

# Define IAM role and assign to AWS state machine
resource "aws_iam_role" "stepfunction_lambda_role" {
  name = "StepFunctionLambdaRole"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "states.amazonaws.com"
        }
      },
    ]
  })
}

# Define Lambda Invocation Policy for IAM role
resource "aws_iam_role_policy" "stepfunction_lambda_policy" {
  name = "StepFunctionLambdaPolicy"
  role = aws_iam_role.stepfunction_lambda_role.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = ["lambda:InvokeFunction"]
        Effect = "Allow"
        Resource = ["*"]
      },
    ]
  })
}

# Define IAM role for lambda function
resource "aws_iam_role" "lambda_role" {
  name = "IAMLambdaRole"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

# Define ProccessSuccess Lambda Function
resource "aws_lambda_function" "process_success_lambda" {
  filename      = "lambda_function_payload.zip"
  function_name = "ProcessSuccess"
  role          = aws_iam_role.lambda_role.arn
  handler       = "process_success.processSuccess"
  source_code_hash = filebase64sha256("lambda_function_payload.zip")

  runtime = "python3.7"
}

# Define ProccessFailure Lambda Function
resource "aws_lambda_function" "process_failure_lambda" {
  filename      = "lambda_function_payload.zip"
  function_name = "ProcessFailure"
  role          = aws_iam_role.lambda_role.arn
  handler       = "process_failure.processFailure"
  source_code_hash = filebase64sha256("lambda_function_payload.zip")

  runtime = "python3.7"
}

# Define ProcessTransaction State Machine
resource "aws_sfn_state_machine" "sfn_process_transaction_state_machine" {
  name     = "ProcessTransactionStateMachine"
  role_arn = aws_iam_role.stepfunction_lambda_role.arn

  definition = jsonencode({
                  Comment = "An example of the Amazon States Language using an AWS Lambda Function"
                  StartAt = "ProcessTransaction"
                  States = {
                    ProcessTransaction = {
                      Type = "Choice"
                      Choices = [
                        {
                          Variable = "$.Status"
                          StringEquals =  "SUCCESS"
                          Next = "ProcessSuccess"
                        },
                        {
                          Variable = "$.Status"
                          StringEquals = "FAILED"
                          Next = "ProcessFailure"
                        }
                      ]
                    },
                    ProcessSuccess = {
                      Type = "Task"
                      Resource = aws_lambda_function.process_success_lambda.arn
                      End = true
                    },
                    ProcessFailure = {
                      Type = "Task"
                      Resource = aws_lambda_function.process_failure_lambda.arn
                      End = true
                    }
                  }
                })
}

# Terraform Template to Provision Lambda Functions Attached to a Step Function

This Project Project uses Terraform Template to Provision Lambda Functions attached to a step function.

## Project Directory Structure

```
📦terraform-lambda-step-function  
 ┣ 📜ReadME.md  
 ┣ 📜lambda_function_payload.zip  
 ┗ 📜main.tf 
 ``` 

📜 ***lambda-function-payload.zip***

This is a zip file containing our two .py file, each containing a python function to be executed  by our Lambda Function

^|_^ *process-success.py*

```python
from datetime import datetime as dt

def processSuccess(value, context):
    print("Processing...")
    result = {}

    result['Status'] = value['Status']
    result['When'] = dt.now().strftime("%d-%m-%Y %H:%M:%S")
    result['Message'] = "This transaction was successful!"

    return result

```

^|_^ *process-failure.py*

```python
from datetime import datetime as dt

def processFailure(value, context):
    print("Processing...")
    result = {}

    result['Status'] = value['Status']
    result['When'] = dt.now().strftime("%d-%m-%Y %H:%M:%S")
    result['Message'] = "This transaction failed!"

    return result
```

📜 ***main.tf***

This is the Terraform Template File

```terraform
# Define variable for AWS Region
variable "aws_region"{
    default = "us-east-1"
}

# Define variable for AWS Credential file
variable "shared_credentials_files" {
  default = ["~/.aws/credentials"]
  type = list(string)
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
```

## Deploying the Resources

- [x] Initialize working directory with Terraform configuration files

```shell
$ terraform init
```

- [x] Preview all actions Terraform would take to modify the infrastructure defined as code

```shell
$ terraform plan
```

- [x] Apply planned changes to each resources using the provider's (AWS in this case) API

```shell
$ terraform apply
```

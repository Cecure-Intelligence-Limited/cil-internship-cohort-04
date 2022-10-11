
// Create archives for AWS Lambda functions which will be used for Step Function

data "archive_file" "archive-process-purchase-lambda" {
  type        = "zip"
  output_path = "../process-purchase-lambda/archive.zip"
  source_file = "../process-purchase-lambda/index.py"
}

data "archive_file" "archive-process-refund-lambda" {
  type        = "zip"
  output_path = "../process-refund-lambda/archive.zip"
  source_file = "../process-refund-lambda/index.py"
}



// Create IAM role for AWS Lambda

resource "aws_iam_role" "iam_for_lambda" {
  name = "stepFunctionSampleLambdaIAM"

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

// Create AWS Lambda functions

resource "aws_lambda_function" "process-purchase-lambda" {
  filename         = "../process-purchase-lambda/archive.zip"
  function_name    = "step-functions-process-purchase"
  role             = "${aws_iam_role.iam_for_lambda.arn}"
  handler          = "index.handler"
  runtime          = "python3.7"
}

resource "aws_lambda_function" "process-refund-lambda" {
  filename         = "../process-refund-lambda/archive.zip"
  function_name    = "step-functions-process-refund"
  role             = "${aws_iam_role.iam_for_lambda.arn}"
  handler          = "index.handler"
  runtime          = "python3.7"
}
provider "aws" {
  region = "us-east-1"
}

# Casual lambda AWS IAM role, policy and policy attachment 
resource "aws_iam_role" "casual_lambda_role" {
name   = "myLambdaCasualRole"
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
resource "aws_iam_policy" "iam_policy_for_casual_lambda" {
 
 name         = "myLambdaCasualRolePolicy"
 path         = "/"
 description  = "AWS IAM Policy for managing aws casual lambda role"
 policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": "sts:AssumeRole",
     "Resource": "*",
     "Effect": "Allow"
   }
 ]
}
EOF
}
 
resource "aws_iam_role_policy_attachment" "attach_casual_iam_policy_to_iam_role" {
 role        = aws_iam_role.casual_lambda_role.name
 policy_arn  = aws_iam_policy.iam_policy_for_casual_lambda.arn
}

# Member lambda AWS IAM role, policy and policy attachment 
resource "aws_iam_role" "member_lambda_role" {
name   = "myLambdaMemberRole"
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
resource "aws_iam_policy" "iam_policy_for_member_lambda" {
 
 name         = "myLambdaMemberRolePolicy"
 path         = "/"
 description  = "AWS IAM Policy for managing aws lambda role"
 policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": "sts:AssumeRole",
     "Resource": "*",
     "Effect": "Allow"
   }
 ]
}
EOF
}
 
resource "aws_iam_role_policy_attachment" "attach_member_iam_policy_to_iam_role" {
 role        = aws_iam_role.member_lambda_role.name
 policy_arn  = aws_iam_policy.iam_policy_for_member_lambda.arn
}

# zipping the python file for the casual and member lambda function
data "archive_file" "zip_the_casualpy_code" {
type        = "zip"
source_file = "${path.module}/casualLambdaFunction.py" 
output_path = "casualLambda.zip"
}
data "archive_file" "zip_the_memberpy_code" {
type        = "zip"
source_file = "${path.module}/memberLambdaFunction.py" 
output_path = "memberLambda.zip"
}

# creating the casual and member lambda function
resource "aws_lambda_function" "terraform_casual_lambda_func" {
filename                       = "casualLambda.zip"
function_name                  = "myLambdaCasualFunction"
role                           = aws_iam_role.casual_lambda_role.arn
handler                        = "casualLambdaFunction.lambda_handler"
runtime                        = "python3.8"
depends_on                     = [aws_iam_role_policy_attachment.attach_casual_iam_policy_to_iam_role]
}
 
resource "aws_lambda_function" "terraform_member_lambda_func" {
filename                       = "memberLambda.zip"
function_name                  = "myLambdaMemberFunction"
role                           = aws_iam_role.member_lambda_role.arn
handler                        = "memberLambdaFunction.lambda_handler"
runtime                        = "python3.8"
depends_on                     = [aws_iam_role_policy_attachment.attach_member_iam_policy_to_iam_role]
}

# step fuction with casual and member lambda fuction attached and step function AWS IAM role
resource "aws_iam_role" "step_role" {
name   = "myStepRole"
assume_role_policy = <<EOF
{
 "Version": "2012-10-17",
 "Statement": [
   {
     "Action": "sts:AssumeRole",
     "Principal": {
       "Service": "states.amazonaws.com"
     },
     "Effect": "Allow",
     "Sid": ""
   }
 ]
}
EOF
}

resource "aws_sfn_state_machine" "sfn_state_machine" {
  name     = "myLambdaStateMachine"
  role_arn = aws_iam_role.step_role.arn

  definition = <<EOF
{
  "Comment": "User Processor State Machine",
  "StartAt": "ProcessUser",
  "States": {
    "ProcessUser": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.UserType",
          "StringEquals": "CASUAL",
          "Next": "ProcessCasual"
        },
        {
          "Variable": "$.UserType",
          "StringEquals": "MEMBER",
          "Next": "ProcessMemeber"
        }
      ]
    },
    "ProcessCasual": {
      "Type": "Task",
      "Resource": "${aws_lambda_function.terraform_casual_lambda_func.arn}",
      "End": true
    },
    "ProcessMemeber": {
      "Type": "Task",
      "Resource": "${aws_lambda_function.terraform_member_lambda_func.arn}",
      "End": true
    }
  }
}
EOF
}


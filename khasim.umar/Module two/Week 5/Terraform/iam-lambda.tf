provider "aws" {
    region = "us-east-1"
    access_key = "AKIAT4E6HAXLBPXAZ3L6"
    secret_key = "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"
   }
resource "aws_iam_role_policy" "lambda_policy" {
  name = "lambda_policy"
  role = "${aws_iam_role.lambda_role.id}"

 
  policy = "${file("iam/iam-lambda-policy.json")}"
}

resource "aws_iam_role" "lambda_role" {
  name = "lambda_role"

  assume_role_policy = "${file("iam/lambda-assume-policy.json")}"
}
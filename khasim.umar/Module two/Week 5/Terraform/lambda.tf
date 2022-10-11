
locals {
  lambda_zip_location = "outputs/welcome.zip"
}

data "archive_file" "CIL-4" {
  type        = "zip"
  source_file = "welcome.py"
  output_path = "${local.lambda_zip_location}"
}

resource "aws_lambda_function" "provision_lambda" {
  # Thhe file has to be in the current working directory. Include a path.module in the filename.
  filename      = "${local.lambda_zip_location}"
  function_name = "welcome"
  role          = aws_iam_role.lambda_role.arn
  handler       = "welcome.hello"

  # source_code_hash = "${base64sha256(file("lambda_function_payload.zip"))}"


  source_code_hash = "${filebase64sha256(local.lambda_zip_location)}"
  
  runtime = "python3.9"
}
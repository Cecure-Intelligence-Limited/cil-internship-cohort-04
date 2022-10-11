GO here: Main.tf

Change line 6 to an existing bucket in your AWS account. e.g

5  backend "s3" {
6    bucket = "udapeople-udacityproject3"
7    key    = "udapeople-udacityproject3.tfstate"
8    region = "us-east-2"

Go here: LambdaFunction/AWSLambda.tf

Under resource s3, change the bucket name to a unique name as s3 bucket names must be unique across all accounts and regions. Ensure that the correct region where the bucket is, is selected.



Two ways to run make this work:


1. Configure your terminal with an AWS IAM account with appropriate priviledges.
  Run Terraform init, Terraform plan and then Terraform Apply.

2. Push this repository to github. Set the repo secrets under the settings of the repository:

e.g   env:	
      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
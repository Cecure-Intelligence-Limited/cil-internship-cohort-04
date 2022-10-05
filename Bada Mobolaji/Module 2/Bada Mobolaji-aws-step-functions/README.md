# Sample Project for AWS Step Functions

This is to demonstrate the usage of several AWS Lambda functions to create a workflow on AWS Step Function. Terraform configuration files are also provided to simplify the process of setting up the required AWS resources.

# AWS Step Function
- This is a choice based step function.
- Either of the lambda Function can be triggered based on the input feed into the function.
# AWS Lambda Function
- process-purchase-lambda - This is triggered when input = {"TransactionType": "PURCHASE"} , it displays the type,time of transaction and customized message.
- process-refund-lambda - This is triggered when input = {"TransactionType": "REFUND"} , it displays the type,time of transaction and customized message.

# Terraform - Prerequisite
- To use terraform, go to [here](https://learn.hashicorp.com/terraform/getting-started/install.html) to install and learn Terraform by Hashicorp.
    - For homebrew user: `brew install terraform`
- AWS user (programmatic access) with AdministratorAccess. Copy the `access key ID` and `secret access key` to setup the `awscli` later.
- Install `awscli` from official [guide](https://docs.aws.amazon.com/cli/latest/userguide/install-linux-al2017.html)
    - For homebrew user: `brew install awscli`
- Using the `access key ID` and `secret access key`, follow this [guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html) to step a new profile for your `awscli`.
# please note
- I used "aws configure --profile myaws" inside my terminal to set the profile name, myaws is feed into main.ft as the profile. 
- An error would occur if the profile is not set yet.

# Terraform - Guide
 - After `git clone`, change directory to `cd ./terraform/`.
 - Then, `terraform init` to initializes various local settings and data that will be used by subsequent commands.
 - Update the variables in `variables.tf` for the Step Functions sample.
 - Then, `terraform apply` to provision the Lambda functions and Step Function state machine for this project.
 - Then, terraform state list 
    1. data.archive_file.archive-process-purchase-lambda
    2. data.archive_file.archive-process-refund-lambda
    3. aws_iam_policy.policy_invoke_lambda
    4. aws_iam_policy.policy_publish_sns
    5. aws_iam_role.iam_for_lambda
    6. aws_iam_role.iam_for_sfn
    7. aws_iam_role_policy_attachment.iam_for_sfn_attach_policy_invoke_lambda
    8. aws_iam_role_policy_attachment.iam_for_sfn_attach_policy_publish_sns
    9. aws_lambda_function.process-purchase-lambda
    10. aws_lambda_function.process-refund-lambda
    11. aws_sfn_state_machine.sfn_state_machine

 - Finally, `terraform destroy` to remove the Lambda functions and Step Function state machine.


# Reference
- [AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html)
- [AWS State Language Official Documentation](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html)
- [Terraform Guide](https://learn.hashicorp.com/terraform/getting-started/install.html)

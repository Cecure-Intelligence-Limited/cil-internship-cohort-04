resource "aws_sfn_state_machine" "sfn_state_machine" {
  name     = "myStateMachine"
  role_arn = "arn:aws:iam::711328479423:role/StepFunctionRole"

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
      "Resource": "arn:aws:lambda:us-east-1:711328479423:function:casualLambdaFunction",
      "End": true
    },
    "ProcessMemeber": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:711328479423:function:memberLambdaFunction",
      "End": true
    }
  }
}
EOF
}


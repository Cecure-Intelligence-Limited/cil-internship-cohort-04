# CloudFormation Template to Provision Lambda Function and S3 Bucket

The AWS CloudFormation template comes either as a YAML file or a JSON file. In this project, both format has been provided. Any of the file can be used to provison an AWS S3 Bucket and a Lambda Function.  

## 1. Start a new project with following directory tree

```
📦s3bucket-lambda-cloudformation
 ┣ 📜ReadME.md
 ┣ 📜lambda-s3-cloudformation.json
 ┗ 📜lambda-s3-cloudformation.yaml
```

📜 ***lambda-s3-cloudformation.json***

```json
{
    "AWSTemplateFormatVersion": "2010-09-09",
    "Resources": {
        "S3Bucket": {
            "Type": "AWS::S3::Bucket",
            "Properties": {
                "BucketName": "chuxyzbucketdemos001"
            }
        },
        "HelloLambdaRole": {
            "Type": "AWS::IAM::Role",
            "Properties": {
                "RoleName": "HelloLambdaRole",
                "AssumeRolePolicyDocument": {
                    "Statement": [
                        {
                        "Effect": "Allow",
                        "Principal": {
                            "Service": "lambda.amazonaws.com"
                        },
                        "Action": "sts:AssumeRole"
                        }
                    ]
                }
            }
        },
        "HelloLambdaFunction": {
            "Type": "AWS::Lambda::Function",
            "Properties": {
                "FunctionName": "HelloLambdaFunction",
                "Role": {
                    "Fn::GetAtt": ["HelloLambdaRole","Arn"]
                },
                "Runtime": "python3.7",
                "Handler": "index.my_handler",
                "Code": {
                    "ZipFile": "def my_handler(event, context):\n  message = \"Hello Lambda World! You passed: \" +event['value']\n  return message\n"
                }
            }
        } 
    }
}
```

📜 ***lambda-s3-cloudformation.yaml***

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Resources:
  S3Bucket:
    Type: 'AWS::S3::Bucket'
    Properties:
      BucketName: chuxyzbucketdemos001
  HelloLambdaRole:
    Type: 'AWS::IAM::Role'
    Properties:
      RoleName: HelloLambdaRole
      AssumeRolePolicyDocument:
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: 'sts:AssumeRole'
  HelloLambdaFunction:
    Type: 'AWS::Lambda::Function'
    Properties:
      FunctionName: HelloLambdaFunction
      Role: !GetAtt
        - HelloLambdaRole
        - Arn
      Runtime: python3.7
      Handler: index.my_handler
      Code:
        ZipFile: |
          def my_handler(event, context):
            message = "Hello Lambda World! You passed: " + event['value']
            return message

```

## 2. Deploying the CloudFormation Stack

The CloudFormation Stack can be created through the AWS console or AWS CLI on local machine:

##### - Using AWS CLI

```shell
$ aws cloudformation deploy --template-file lambda-s3-cloudformation.json --stack-name LambdaS3CloudFormation --capabilities CAPABILITY_NAMED_IAM
```  

Where `lambda-s3-cloudformation.json` is the file containing our template, `LambdaS3CloudFormation` is the desired name for the stack. Also, if a named IAM role is used in our stack, the `--capabilities` flag must be included with a value of `CAPABILITY_NAMED_IAM`.


##### - Using AWS Console

- Find and Open **CloudFormation** Service in AWS Cloud Console
- Select **Create Stack**
- At **Prerequisite - Prepare template** section, select **Template is ready**
- At **Specify template** section, select **Upload a template file**
- Click **Choose File** to browse and pick template file
- Click **Next** and follow subsequent prompts...

## 3. Deleting the Stack

When you are done with a stack. you may wish to discard it so as to free up some reources from your AWS account. To clean up the stack, the following command can be executed on CLI.

```shell
$ aws cloudformation delete-stack --stack-name LambdaS3CloudFormation
```  

Where `LambdaS3CloudFormation` is the name given to the stack during creation.

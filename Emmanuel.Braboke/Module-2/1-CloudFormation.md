## cloudformation template to provision Lambda Function and S3 bucket
```
{
    "AWSTemplateFormatVersion": "2010-09-09",
    "Description": "CloudFormation template to provision Lambda Function and S3 Bucket",

    "Resources": {
        "MYBucket": {
            "Type": "AWS::S3::Bucket",
            "Description": "S3 bucket"
        },

        "LambdaFunction": {
            "Type": "AWS::Lambda::Function",
            "Description": "Lambda Function",
            "Properties":{
            "Handler": "index.handler",
                "Code": {
                    "ZipFile": "exports.handler = async (event) => {\n// TODO implement\nconst response = {\n    statusCode: 200,\n    body: JSON.stringify('Hello from Lambda!'),\n}\nreturn response\n}\n"
                },
                "Role": "arn:aws:iam::705399197672:role/lambda_basic_execution",
                "Runtime": "nodejs16.x"
        }
    }

    },

 "Outputs": {
    "MYBucket": {
        "Description": "created S3 bucket",
        "Value": {"Ref": "MYBucket"}
    },

    "LambdaFunction": {
        "Description": "Created Lambda function",
        "Value": {"Ref": "LambdaFunction"}
    }
 }
    
}

```
### Lambda function and S3 Bucket

![Lambda function and S3 Bucket](/images/cloudformation.jpg)


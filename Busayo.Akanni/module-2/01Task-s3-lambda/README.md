s3-lambda

Requirements
------------

To run this, you will need:

* The AWS CLI (`pip install awscli`)

Usage
-----

1. aws cloudformation create-stack \
    --stack-name s3-lambda.yaml \
    --template-file path-to-file \

    aws cloudformation deploy --template-file Busayo.Akanni/module-2/01Task-s3-lambda/s3-lambda.yaml --stack-name s3-lambda-stack


2. You can also log into your AWS Console, create a stack and upload the s3-lambda.yaml file under the stack. An s3 bucket will be created. As well as a simple lambda function.

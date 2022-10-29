 
# Cloudformation with Lambda and S3 Bucket.
 
# Lambda
Here are a few more details about the Lambda function properties that we have:

I named the **The Resource** as “HelloLambdaFunction”.

I chose the to be the same as my Resource name for the sake of a clean code.

I created the HelloLambdaRole role so I could supply it here. Since CloudFormation wants the role’s ARN (a long string AWS assigns each resource), not the friendly name I gave it...and since don’t know the role’s ARN because I haven't created it yet, I use a handy intrinsic function: !GetAtt(‘Get Attribute’), supplying it **my name and the attribute keyword Arn.** The intrinsic function will return the new role’s ARN. <br>

**Runtime** is the programming language I used for my function. Note that python 3.6 has be deprecated on the console as at when I created this.
**The Handler** specifies what function, within the Lambda code, should be invoked.



# S3 :: Bucket 
In this cloudformation template, I created an S3 bucket using CloudFormation template. I used the existing role I created for my lambda template, even though I know I could create another role. I then created the basic stack and updated the stack gradually to enable some of the features like;

- Versioning
- Encryption
- Preventing public access to the bucket
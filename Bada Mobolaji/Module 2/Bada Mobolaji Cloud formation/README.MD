The Format Version helps to identify the capabilities of the template.  The most up to date version as I write is 2010-09-09.

The second line is the Description, which is used to help you and others understand what the template does.

The next section we are doing to declare is the Resources section.  Every template needs to at least define one resource.

We have defined what resource we want to be created and some of the properties that we want to have with that resource.  For this S3 Bucket we have enabled:

1. Versioning: this enables multiple versions of all the objects in the bucket to protect against accidental deletion.
2. Encryption: enabling this ensures that all objects are encrypted when stored within the bucket.
3. Private Only: we have set it so this bucket can't be accessed by anyone from the public.

The third and final section of this template we are going to define is the Outputs.

This last section of the template will return us the name of the S3 Bucket that is created.  With the output section, we can use this to help us pass information to other automation tasks or for reference.


In order for the Lambda to function, you need to grant it the necessary privileges.

We first create a role, giving it the privileges, then grant the role to the Lambda function.

To test if the lambda function works 

Copy the command below into the cloud shell to manually invoke the lambda function. (It would return my bio-data and a Dry  joke)

aws lambda invoke \
--invocation-type RequestResponse \
--function-name NamesLambdaFunction \
--log-type Tail outputfile.txt;  more outputfile.txt


from __future__ import print_function
import boto3
import urllib.parse
import time, urllib
import json
print ("Loading Function..")
s3 = boto3.client('s3')
def lambda_handler(event, context):

    source_bucket = event['Records'][0]['s3']['bucket']['name']
    object_key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
    target_bucket = 'cil-secondary-bucket'
    copy_source = {'Bucket': source_bucket, 'Key': object_key}
    try:
        response = s3.copy_object(Bucket=target_bucket, Key=object_key, CopySource=copy_source)
        return response['ContentType']
    except Exception as e:
        print(e)
        print('Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.'.format(key, bucket))
        raise e

# Each time an object is uploaded into the original s3 bucket, the lambda is triggered to backup an object into the secondary bucket
# original uploaded into the original bucket.
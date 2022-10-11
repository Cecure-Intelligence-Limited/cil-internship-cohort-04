from __future__ import print_function
import json
import urllib
import datetime
import boto3

print("Loading function...")

def process_purchase(message, context):
    
    
    print("Received message from Step Function:")
    print(message)
    
    
    response = {}
    response["TransactionType"] = message["TransactionType"]
    response["Timestamp"] = datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S")
    response["Message"] = "Hello from lambda, land inside the ProcessPurchase function"
    
    return response

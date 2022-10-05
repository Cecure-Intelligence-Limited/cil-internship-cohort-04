import datetime
import json
import boto3
import urllib

print('Loading Function...')

def process_casual(event, context):
	print("Received message from step Functions:")
	print(event)

	response = {}
	response["UserType"] = event["UserType"]
	response["Timestamp"] = datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S")
	response["Event"] = f'Welcome {event} User'
	return response

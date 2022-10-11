import json
import datetime
import urllib

print ("Loading refund function")
def handler(message, context):

    # input example
    # {"TransactionType": "REFUND"}

    print("received messsage from step function:")
    print(message)

    response = {}
    response['TransactionType'] = message['TransactionType']
    response['Timestamp'] = datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S")
    response['Message'] = "process refund lambda created by Bolaji for cecure-intelligence internship"


    return response
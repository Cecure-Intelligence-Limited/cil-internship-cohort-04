def checkNumber(event, context):
    if event['value'] % 2 == 0:
        return "Even"
    return "Odd"
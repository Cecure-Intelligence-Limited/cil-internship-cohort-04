def helloworld(event, context):
    if event["greeting"] == "Hello World": 
        return "Hello world"
    else:
        return "Hi"
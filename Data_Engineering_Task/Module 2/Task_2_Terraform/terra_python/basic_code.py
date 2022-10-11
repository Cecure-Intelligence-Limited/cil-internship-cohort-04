def basic_code(event, context):
    if event["name"] == "Janet":
        return "favoured one"
    elif event["name"] == "Mark":
        return "Senior I hail"
    else:
        return "Good to meet you" 
import json

def ansible_lambda(event, context):
	return f"Hello {event} to my Ansible Lambda World!"
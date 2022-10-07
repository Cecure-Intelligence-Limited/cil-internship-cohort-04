# Lambda Function Deployment with Ansible

### 1. Packages Installation
- Install ansible and and other associated packages

```
$ python3 -m pip install --user ansible
$ pip install boto
$ pip install boto3
$ pip install botocore
```
### 2. Create Project Directory ***ansible-lambda***

- Directory Structure:

```
📦ansible-lambda
┣ 📜check-number.zip
┣ 📜iam-lambda-policy.json
┣ 📜playbook.yaml
┗ 📜script.py
```

### 3. Create Project Files

📜 ***check-number.zip***   
This is a zip file that contains a python .py file where executable function of our lambda function is written.


📜 ***iam-lambda-policy.json***   
This JSON format file defines the IAM Role permission for our lambda function

```json
{
    "Version": "2008-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "lambda.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```

📜 ***playbook.yaml***   
This file contains the declaratuive statement for AWS Resource deployment

```yaml
- hosts: localhost
  vars:
    iam_role_name: AnsibleLambdaRole
    lambda_fn_name: CheckNumberLambdaFunction
  tasks:
    - name: Create AnsibleIAMLambdaRole
      register: lambda_iam_return_value
      community.aws.iam_role:
        name: "{{ iam_role_name }}"
        assume_role_policy_document: "{{ lookup('file','iam-lambda-policy.json') }}"
        state: present
    - name: Show {{ iam_role_name }}.arn
      debug:
        msg: "{{ lambda_iam_return_value.arn }}"
    - name: Create {{ lambda_fn_name }}
      community.aws.lambda:
        name: "{{ lambda_fn_name }}"
        state: present
        zip_file: 'check-number.zip'
        runtime: 'python3.7'
        role: "{{ lambda_iam_return_value.arn }}"
        handler: 'script.checkNumber'
        tags:
          Name: "{{ lambda_fn_name }}"

```

📜 ***script.py***   
This file has no purpose in this location as it is already zipped in *check-number.zip* file. But we kept a copy in the project directory to be able to view its content in a repository.

```python
def checkNumber(event, context):
    if event['value'] % 2 == 0:
        return "Even"
    return "Odd"
```

### 4. Deploy the Resources

```
$ cd <Project-Directory>
$ ansible-playbook  playbook.yaml
```
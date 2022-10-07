## Deploy a lambda function with ansible

```

---
- name: Deploying lambda function with ansible
  hosts: localhost
  connection: local
  strategy: free
  gather_facts: False

  vars:
       aws_profile: default
       zip_file: index.zip
       temp_file: index.js
       lambda_role: arn:aws:iam::705399197672:role/lambda_basic_execution

  tasks:
    - name: creating a zip file
      archive:
               path: "{{temp_file}}"
               format: zip
               dest: "{{zip_file}}"

    - name: creating lambda function
      lambda:   
              name: "lamda func"
              state: present
              zip_file: "{{zip_file}}"
              runtime: "nodejs16.x"
              role: "{{lambda_role}}" 
              handler: "index.handler"
              profile: "{{aws_profile}}"
              description: "Deploying lamda function with ansible"

```

# Lambda function
![Lambda function](/images/ansible.jpg)
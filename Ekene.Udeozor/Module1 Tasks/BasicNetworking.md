The name server IP address is gotten by using the "ping" command on command prompt.
By pinging facebook.com, Google.com and tesla.com, I was able to get their ns IP addresses.

* The ns IP address of Facebook is 102.132.101.35.
* The ns IP address for Google is 142.250.184.174.
* The ns IP address for Tesla is 23.201.26.71


    10.10.10.0
    192.168.0.0
    172.168.1.0

Private IPv4 addresses, also known as RFC 1918 addresses were introduced as a means of conserving IPV4 addresses. This way, an organization can have a single public IP address. Then use IP addresses within the private IPV4 address range within the organization.


10.10.10.0 subnets:
* 10.10.10.0 /26  subnet mask: 255.255.255.192
* 10.10.10.64 /26 subnet mask: 255.255.255.192
* 10.10.10.128 /26 subnet mask: 255.255.255.192
* 10.10.10.192 /26 subnet mask: 255.255.255.192

192.168.0.0 subnets:
* 192.168.0.0 /18 subnet mask: 255.255.192.0
* 192.168.0.64 /18 subnet mask: 255.255.192.0
* 192.168.0.128 /18 subnet mask: 255.255.192.0
* 192.168.0.192 /18 subnet mask: 255.255.192.0

172.168.1.0 subnets:
* 172.168.1.0 /26 subnet mask: 255.255.255.192
* 172.168.1.64 /26 subnet mask: 255.255.255.192
* 172.168.1.128 /26 subnet mask: 255.255.255.192
* 172.168.1.192 /26 subnet mask: 255.255.255.192

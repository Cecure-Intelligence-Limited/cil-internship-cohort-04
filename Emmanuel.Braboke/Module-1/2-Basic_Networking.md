## What are the NS IP addresses for Google, Facebook and Tesla?

- Google - 216.58.223.206
- Facebook - 102.132.101.35
- Tesla - 104.75.172.54

## Breakdown the following RFC 1918 IPv4 address range into exact 4 subnetwork with no address left over.10.10.10.0, 192.168.0.0, 172.168.1.0.

### 10.10.10.0
This address is a class A IP addres it falls in the range of 0 - 126.
The subnet mask of class A IP address is **255.0.0.0**
The *CIDR (Classless Inter-Domain Routing* is  **10.10.10.0/8** by default.When its having 4 subnets its **10.10.10.0/10**

Therefore the subnet mask is **255.192.0.0**
The number of subnet is - 2² = 4
Host address - 2²² - 2 = 4194302 host

To get the next new Network ID, Broadcast ID and Host range:
subtract 192 from 256, which gives 64

Network ID - 10.64.0.0

Broadcast ID - 10.127.255.255

Host Range - (10.64.0.1 - 10.127.255.254)

Similarly for;

### 192.168.0.0
This is a class C IP address (192 - 223)

The subnet mask for type C address is **255.255.255.0**
Host address - 2⁶-2 = 62

when its having 4 subnet **192.168.0.0/26**
The subnet mask is **255.255.255.192**

The next new Network ID, Broadcast ID and Host range are

Network ID: 192.168.0.64

Broadcast ID: 192.168.0.127

Host Range: (192.168.0.65 - 192.168.0.126)

### 172.168.1.0
This is a class B ip address (128 - 191)

The subnet mask is **255.255.192.0**

The Network ID -  172.168.64.0

Broadcast ID - 172.168.127.225

Host Range -  (172.168.64.1 - 172.168.127.254)

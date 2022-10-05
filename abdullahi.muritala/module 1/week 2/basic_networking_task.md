# Basic Networking Tasks

## Q2a: What are the NS IP addresses for Google, Facebook, and Tesla?

The nameserver record (or NS record) is a DNS record that contains the name of the authoritative name server within a domain or DNS zone [[source](https://menandmice.com/glossary/dns-ns-record)]. Basically, when a user requests an IP address, it can find the IP address of their intended destination from an NS record via a DNS lookup.

I sent the domain name a ping from my bash terminal to acquire the NS IP addresses of the companies in question.

- Google: 216.58.223.206
- Facebook: 102.132.101.35
- Tesla: 184.50.204.169

## Q2b: Break down the following RFC 1918 IPv4 address range into exactly 4 subnetworks with no address left over.

- 10.10.10.0
- 192.168.0.0
- 172.168.1.0

Private IPv4 addresses, also known as RFC 1918 addresses, are used to conserve IPv4 addresses from depleting. This way, an organization can have a single public IP address. Then use the dedicated private addresses for their internal devices. Because the size of each organization differs, the needs are also different. Subnetting allows the network engineer to prioritize either host IPs or more subnets, depending on the organization's needs.

### i.) 10.10.10.0

This is a class A IP address. It has a default subnet mask of 255.0.0.0, which translates to a CIDR of /8

Divided into 4 Subnet addresses without any address left over:

#### 1. 10.0.0.0:

- The usable address range for this subnet is (10.0.0.1 to 10.63.255.254).
- The Broadcast ID is 10.63.255.255

#### 2. 10.64.0.0:

- The usable address range for this subnet is (10.64.0.1 to 10.127.255.254).
- The Broadcast ID is 10.127.255.255

#### 3. 10.128.0.0:

- The usable address range for this subnet is (10.128.0.1 to 10.191.255.254).
- The Broadcast ID is 10.191.255.255

#### 4. 10.192.0.0:

- The usable address range for this subnet is (10.192.0.1 to 10.255.255.254).
- The Broadcast ID is 10.255.255.255

### ii.) 192.168.0.0

This is a class C IP address. It has a default subnet mask of 255.255.255.0, which translates to a CIDR of /24.

Divided into 4 Subnet addresses without any address left over:

#### 1. 192.168.0.0:

- The usable address range for this subnet is (192.168.0.1 to 192.168.0.62).
- The Broadcast ID is 192.168.0.63

#### 2. 192.168.0.64:

- The usable address range for this subnet is (192.168.0.65 to 192.168.0.126).
- The Broadcast ID is 192.168.0.127

#### 3. 192.168.0.128:

- The usable address range for this subnet is (192.168.0.129 to 192.168.0.190).
- The Broadcast ID is 192.168.0.191

#### 4. 192.168.0.192:

- The usable address range for this subnet is (192.168.0.193 to 192.168.0.254).
- The Broadcast ID is 192.168.0.255

### iii.) 172.168.1.0

This is a class B IP address. It has a default subnet mask of 255.255.0.0, which translates to a CIDR of /16

Divided into 4 Subnet addresses without any address left over:

#### 1. 172.168.0.0:

- The usable address range for this subnet is (172.168.0.1 to 172.168.63.254).
- The Broadcast ID is 172.168.63.255

#### 2. 172.168.64.0:

- The usable address range for this subnet is (172.168.64.1 to 172.168.127.254).
- The Broadcast ID is 172.168.127.255

#### 3. 172.168.128.0:

- The usable address range for this subnet is (172.168.128.1 to 172.168.191.254).
- The Broadcast ID is 172.168.191.255

#### 4. 172.168.192.0:

- The usable address range for this subnet is (172.168.192.1 to 172.168.255.254).
- The Broadcast ID is 172.168.255.255

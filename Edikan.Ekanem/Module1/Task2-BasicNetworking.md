# CIL Module 1-Group 5 Tuesday task

> ## **TASK 1:**

What is the NS IP addresses for Google, Facebook and Tesla?

> ## **ANSWER:**

NS stands for **'nameserver'**, and the nameserver record indicates which DNS server is authoritative for that domain (i.e., which server contains the actual DNS records). Basically, NS records tell the Internet where to go to find out a domain's IP address. A domain often has multiple NS records which can indicate primary and secondary nameservers for that domain. Without properly configured NS records, users will be unable to load a website or application.

You can ping a domain name and find the corresponding IP address.

NSlookup is a network tool for querying a DNS (Domain Name System) to obtain a domain name, an IP address, or for any other DNS record for a website.

>## **Google –**

**Server:** google.com

**Addresses:** 
- 2c0f:fb50:4003:801::200e
- 216.58.223.206
 
>## **Facebook –**

**Server:** facebook.com

**Addresses:**
- 2a03:2880:f138:83:face:b00c:0:25de
- 102.132.101.35

>## **Tesla –**

**Server:** tesla.com

**Addresses:**
- 23.201.26.71
- 184.30.18.203
- 96.16.108.43
- 23.9.66.10
- 104.119.104.74
- 184.85.228.70
- 184.50.204.169

___

> ## **TASK 2:**

Breakdown the following RFC 1918 IPv4 address range into exactly 4 subnetworks with no address left over:
- 10.10.10.0
- 192.168.0.0
- 172.168.1.0

> ## **ANSWER:**

RFC 1918 describes the use of IP address space deemed private by IANA, the Internet Assigned Numbers Authority. Private address space is available for use by any organization and is guaranteed to be not routable in the public Internet. What this means in practice is that any host machine which is assigned a private address defined by RFC 1918 cannot be reached "directly" by any other machine not in the hosting organization’s local network.

RFC 1918 defines the following address ranges as private:
- 10.0.0.0/8 *(addresses 10.0.0.0 through 10.255.255.255 inclusive)*
- 172.16.0.0/12 *(addresses 172.16.0.0 through 172.31.255.255 inclusive)*
- 192.168.0.0/16 *(addresses 192.168.0.0 through 192.168.255.255 inclusive).* The addresses in these ranges are not routable in the Internet and may be freely used by any organization for local purposes only.

With an IPv4 IP address, there are five classes of available IP ranges: **Class A**, **Class B**, **Class C**, **Class D** and **Class E**, while only **A**, **B**, and **C** are commonly used.

Each class allows for a range of valid IP addresses, shown in the following table:

| Class   | Address Range                | Supports |
| :---    | :----:                       | :---     |
| Class A | 1.0.0.1 to 126.255.255.254   | Supports 16 million hosts on each of 127 networks. Use a default subnet mask of 255.0.0.0 |
| Class B | 128.1.0.1 to 191.255.255.254 | Supports 65,000 hosts on each of 16,000 networks. Use a default subnet mask of 255.255.0.0 |
| Class C | 192.0.1.1 to 223.255.254.254 | Supports 254 hosts on each of 2 million networks. Use a default subnet mask of 255.255.255.0 |
| Class D | 224.0.0.0 to 239.255.255.255 | Reserved for multicast groups. |
| Class E | 240.0.0.0 to 254.255.255.254 | Reserved for future use, or research and development purposes.|

Ranges **127.x.x.x** are reserved for the loopback or localhost, for example, 127.0.0.1 is the loopback address.

Range **255.255.255.255** broadcasts to all hosts on the local network.

The first part of an IP address is used as a **network address**, the last part as a **host address**.


A **Class A** subnet mask reflects the network portion in the first octet and leaves octets 2, 3, and 4 for the network manager to divide into hosts and subnets as needed. Class A is for networks with more than 65,536 hosts.

A **Class B** subnet mask claims the first two octets for the network, leaving the remaining part of the address, the 16 bits of octets 3 and 4, for the subnet and host part. Class B is for networks with 256 to 65,534 hosts.

A **Class C** subnet mask, the network portion is the first three octets with the hosts and subnets in just the remaining 8 bits of octet 4. Class C is for smaller networks with fewer than 254 hosts.

Class A, B, and C networks have natural masks, or default subnet masks:
- **Class A:** 255.0.0.0
- **Class B:** 255.255.0.0
- **Class C**: 255.255.255.0
 
Subnetting divides one network into smaller networks.

## **Subnetting Chart Table**

| Subnet        | 1       | 2       | 4       | 8       | 16      | 32      | 64      | 128     | 256   |
|  :---         |  :----: |  :----: |  :----: |  :----: |  :----: |  :----: |  :----: |  :----: |  :--- |
| Host ID       | 256     | 128     | 64      | 32      | 16      | 8       | 4       | 2       | 1     |
| Subnet mask A | /8      | /9      | /10     | /11     | /12     | /13     | /14     | /15     | /16   |
| Subnet mask B | /16     | /17     | /18     | /19     | /20     | /21     | /22     | /23     | /24   |
| Subnet mask C | /24     | /25     | /26     | /27     | /28     | /29     | /30     | /31     | /32   |

## **IP address breakdown to 4 subnets:**

___

> 10.10.10.0 – **class A** – *default subnet/subnet mask of 255.0.0.0/8*

10.10.10.0 will have a subnet mask of /10 (255.192.0.0) for 4 subnets therefore subnet address will be:

| Network ID | Host ID Range               | Broadcast ID   |
|  :---      | :----:                      | :---           |
| 10.0.0.0   | 10.0.0.1 – 10.63.255.254    | 10.63.255.255  |
| 10.64.0.0  | 10.64.0.1 – 10.127.255.254  | 10.127.255.255 |
| 10.128.0.0 | 10.128.0.1 – 10.191.255.254 | 10.191.255.255 |
| 10.192.0.0 | 10.192.0.1 – 10.255.255.254 | 10.255.255.255 |

> 192.168.0.0 - **class C** - *default subnet/subnet mask of 255.255.255.0/24*

192.168.0.0 will have a subnet mask of /26 (255.225.225.192) for 4 subnets therefore subnet address will be:

| Network ID    | Host ID Range                 | Broadcast ID  |
|  :---         | :----:                        | :---          |
| 192.168.0.0   | 192.168.0.1 – 192.168.0.62    | 192.168.0.63  |
| 192.168.0.64  | 192.168.0.65 – 192.168.0.126  | 192.168.0.127 |
| 192.168.0.128 | 192.168.0.129 – 192.168.0.190 | 192.168.0.191 |
| 192.168.0.192 | 192.168.0.193 – 192.168.0.254 | 192.168.0.255 |

> 172.168.1.0 – **class B** – *default subnet/subnet mask of 255.255.0.0/16*

172.168.1.0 will have a subnet mask of /18 (255.225.192.0) for 4 subnets therefore subnet address will be:

| Network ID    | Host ID Range                   | Broadcast ID    |
|  :---         | :----:                          | :---            |
| 172.168.0.0   | 172.168.0.1 – 172.168.63.254    | 172.168.63.255  |
| 172.168.64.0  | 172.168.64.1 – 172.168.127.254  | 172.168.127.255 |
| 172.168.128.0 | 172.168.128.1 – 172.168.191.254 | 172.168.191.255 |
| 172.168.192.0 | 172.168.192.1 – 172.168.255.254 | 172.168.255.255 |

## **NOTE:**
1. We get the **Network ID** by adding **64** to its previous one.
2. The last **Host ID** is reserved for its **Broadcast ID**. It can also be said that it is the next subnets Network ID minus 1.
3. A subnets **Host ID Range** is any ID between its **Network ID and Broadcast ID**.
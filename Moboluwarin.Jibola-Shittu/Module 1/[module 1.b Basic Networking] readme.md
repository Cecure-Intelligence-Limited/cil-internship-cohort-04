Question 1:
What are the NS IP addresses for Google, Facebook and Tesla? 

<h1 style="text-align: center;"> Answer 1 </h1>

To find the NS IP addresses for Google, Facebook and Tesla, I employed the `nslookup –type=ns [enter query]` command using the cmd interface on my local windows 10 machine. Note that the **enter query part** will contain the domain name without the square brackets.
Here are my findings
a.) Google
    google.com
    google.com      nameserver = ns3.google.com
    google.com      nameserver = ns4.google.com
    google.com      nameserver = ns2.google.com
    google.com      nameserver = ns1.google.com
    NS IP Addresses
    ns3.google.com  internet address = 216.239.36.10
    ns3.google.com  AAAA IPv6 address = 2001:4860:4802:36::a
    ns4.google.com  internet address = 216.239.38.10
    ns4.google.com  AAAA IPv6 address = 2001:4860:4802:38::a
    ns2.google.com  internet address = 216.239.34.10
    ns2.google.com  AAAA IPv6 address = 2001:4860:4802:34::a
    ns1.google.com  internet address = 216.239.32.10
    ns1.google.com  AAAA IPv6 address = 2001:4860:4802:32::a

b.) Facebook
    facebook.com
    facebook.com    nameserver = b.ns.facebook.com
    facebook.com    nameserver = a.ns.facebook.com
    facebook.com    nameserver = c.ns.facebook.com
    facebook.com    nameserver = d.ns.facebook.com
    NS IP Addresses
    Addresses: 
    b.ns.facebook.com IPv4 address: 129.134.31.12
    b.ns.facebook.com IPv6 address: 2a03:2880:f0fd:c:face:b00c:0:35
    a.ns.facebook.com IPv4 address: 129.134.30.12
    a.ns.facebook.com IPv6 address: 2a03:2880:f0fc:c:face:b00c:0:35
    c.ns.facebook.com IPv4 address: 185.89.218.12
    c.ns.facebook.com IPv6 address: 2a03:2880:f1fc:c:face:b00c:0:35
    d.ns.facebook.com IPv4 address: 185.89.219.12
    d.ns.facebook.com IPv6 address: 2a03:2880:f1fd:c:face:b00c:0:35

c. Tesla
    tesla.com
    tesla.com       nameserver = a10-67.akam.net
    tesla.com       nameserver = a28-65.akam.net
    tesla.com       nameserver = a1-12.akam.net
    tesla.com       nameserver = a12-64.akam.net
    tesla.com       nameserver = a7-66.akam.net
    tesla.com       nameserver = edns69.ultradns.com
    tesla.com       nameserver = a9-67.akam.net
    NS IP Addresses
    Addresses: 
    a10-67.akam.net IPv4 address: 96.7.50.67
    a28-65.akam.net IPv4 address: 95.100.173.65
    a1-12.akam.net IPv4 address: 193.108.91.12
    a1-12.akam.net Ipv6 address: 2600:1401:2::c
    a12-64.akam.net IPv4 address: 184.26.160.64
    a12-64.akam.net Ipv6 address: 2600:1480:f000::40
    a7-66.akam.net IPv4 address: 23.61.199.66
    a7-66.akam.net Ipv6 address: 2600:1406:32::42
    edns69.ultradns.com IPv4 address: 204.74.66.69
    edns69.ultradns.com Ipv6 address: 2001:502:f3ff::245
    a9-67.akam.net IPv4 address: 204.74.66.69
    a9-67.akam.net Ipv6 address: 2001:502:f3ff::245



* * *
- - -


Question 2:
Breakdown the following RFC 1918 IPv4 address range into exactly 4 subnetwork with no address left over.” 

<h1 style="text-align: center;"> Answer 2 </h1>

# Breakdown of  RFC 1918 IPv4 address range into exactly 4 subnetwork with no address left over

The break down was done using the asumption from this CIDR:

10.10.10.0/8

192.168.64.0/24

172.168.1.0/16

#### For 10.10.10.0
This is an IPv4 class A (range of 0-127)
10.10.10.0 default subnet mask is /8 occupies first octet is filled with 1s but we extend and take 2 bits from the remaining host bits to form our network.
hence we denote as 10.10.10.0/10 subnet mask = 255.192.0.0

|S/NO| Network  ID   | Broadcast           | USABLE IP
|----| ------------- | ------------------- | ---------
|1   | 10.0.0.0/10   | 10.63.255.255/10    | 10.0.0.1/10 - 10.63.255.254/10
|2   | 10.64.0.0/10  | 10.127.255.255/10   | 10.64.0.1/10 - 10.127.255.254/10
|3   | 10.128.0.0/10 | 10.191.255.255/10   | 10.128.0.1/10 - 10.191.255.254/10
|4   | 10.192.0.0/10 | 10.255.255.255/10   | 10.192.0.1/10 - 10.255.255.254/10

#### For 192.168.0.0
This is an IPv4 class C(range 192-223)
192.168.0.0 default subnet mask is /24 occupies three preceding octets is filled with 1s but we extend and take 2 bits from the remaining host bits to form our network.
hence we denote as 192.168.0.0/26 subnet mask = 255.255.255.192

|S/NO| Network  ID     | Broadcast           | USABLE IP
|----| --------------- | ------------------- | ---------
|1   | 192.168.0.0/10  | 192.168.0.63/10     | 192.168.0.1/10 - 192.168.0.62/10
|2   | 192.168.0.64/10 | 192.168.0.127/10    | 192.168.0.65/10 - 192.168.0.126/10
|3   | 192.168.0.128/10| 192.168.0.191/10    | 192.168.0.129/10 - 192.168.0.190/10
|4   | 192.168.0.192/10| 192.168.0.255/10    | 192.168.0.193/10 - 192.168.0.254/10

#### For 172.168.1.0
This is an IPv4 class B(range 128 - 191)
172.168.1.0 default subnet mask is /16 occupies two preceding octets is filled with 1s but we extend and take 2 bits from the remaining host bits to form our network.
hence we denote as 172.168.1.0/18 subnet mask = 255.255.192.0

|S/NO| Network  ID     | Broadcast           | USABLE IP
|----| --------------- | ------------------- | ---------
|1   | 172.168.0.0/10  | 172.168.63.255/10   | 172.168.0.1/10 - 172.168.63.254/10
|2   | 172.168.64.0/10 | 172.168.127.225/10  | 172.168.64.1/10 - 172.168.127.254/10
|3   | 172.168.128.0/10| 172.168.191.255/10  | 172.168.128.1/10 - 172.168.128.1/10
|4   | 172.168.192.0/10| 172.168.255.255/10  | 172.168.192.1/10 - 172.168.255.254/10

Q1a. What are the NS IP addresses for Google, Facebook and Tesla? Breakdown the
following RFC 1918 IPv4 address range into exactly 4 subnets with no address
left over.
#Solution
NS IP addresses for Google Public DNS__
via IPv4 | 8.8.8.8 |8.8.4.4
--- | --- | ---
via IPv6 | 2001:4860:4860::8888 | 2001:4860:4860:
google.com | IPv4: 216.58.208.110    | IPv6: 2a00:1450:400e:80e::200e
--- | --- | ---


facebook.com | IPv4: 157.240.201.35    |  IPv6:2a03:2880:f145:82:face:b00c:0:25de


tesla.com | 184.50.204.169 |  184.30.18.203

Q1b.Breakdown the following RFC 1918 IPv4 address range into exactly 4 subnets with no address left over.

1. 10.10.10.0
2. 192.168.0.0
3. 172.168.1.0

#Solution
IP = 10.10.10.0
IP class = A
Subnet mask = 255.192.0.0
CLDR = /10
Subnet = 255.192.0.0/10
Binary subnet mask = 11111111.11000000.00000000.00000000
Network address = 10.0.0.0
Usable host IP range = 10.0.0.1 - 10.63.255.254
Broadcast addresses = 10.63.255.255
Total number of host = 4,194,304
Usable host = 4,194,302
 All 4 of the possible network for 10.10.10.0/10
 Network address|    Usable host range        | Broadcast address
    10.0.0.0    | 10.0.0.1 - 10.63.255.254    | 10.63.255.255
    10.64.0.0   | 10.64.0.1 - 10.127.255.254  | 10.127.255.254
    10.128.0.0  | 10.128.0.1 - 10.191.255.254 | 10.191.255.255
    10.192.0.0  | 10.192.0.1 - 10.255.255.254 | 10.255.255.255


IP = 192.168.0.0
IP class = C
Subnet mask = 255.255.255.192
CLDR = /26
Subnet = 255.255.255.192/26
Binary subnet mask = 11111111.11111111.11111111.11000000
Network address = 192.168.0.0
Usable host IP range = 192.168.0.1 - 192.168.0.62
Broadcast addresses = 192.168.0.63
Total number of host = 64
Usable host = 62

  All 4 of the possible network for 255.255.255.192/26
  Network address|    Usable host range        | Broadcast address
    192.168.0.0   | 192.168.0.1 - 192.168.0.62    | 192.168.0.63
    192.168.0.64  | 192.168.0.65 - 192.168.0.126  | 192.168.0.127
    192.168.0.128 | 192.168.0.129 - 192.168.0.190 | 192.168.0.191
    192.168.0.192 | 192.168.0.193 - 192.168.0.254 | 192.168.0.255



IP = 172.168.1.0
IP class = B
Subnet mask = 255.255.192.0
CLDR = /18
Subnet = 255.255.192.0/18
Binary subnet mask = 11111111.11111111.11000000.00000000
Network address = 	172.168.0.0
Usable host IP range = 	172.168.0.0
Broadcast addresses = 172.168.63.255
Total number of host = 16,384
Usable host = 16,382

  All 4 of the possible network for 255.255.192.0/18
  Network address |    Usable host range            | Broadcast address
    172.168.0.0   | 172.168.0.1 - 172.168.63.254    | 172.168.63.255
    172.168.64.0  | 172.168.64.1 - 172.168.127.254  | 172.168.127.255
    172.168.128.0 | 172.168.128.1 - 172.168.191.254 | 172.168.191.255
    172.168.192.0 | 172.168.192.1 - 172.168.255.254 | 172.168.255.255

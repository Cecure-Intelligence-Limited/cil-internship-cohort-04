NS is an acronym that means NameSaver which indicates which DNS server is authoritative for that domain (i.e., which server contains the actual DNS records). Basically, NS records tell the Internet where to go to find out a domain's IP address. A domain often has multiple NS records which can indicate primary and secondary nameservers for that domain. Without properly configured NS records, users will be unable to load a website or application. You can ping a domain name and find the corresponding IP address. 
NS_lookup is a network tool for querying a DNS (Domain Name System) to obtain a domain name, an IP address, or for any other DNS record for a website.
GOOGLE
Server: google.com 
Addresses: 2c0f:fb50:4003:801::200e, 
216.58.223.206

FACEBOOK
Server: facebook.com 
Addresses: 2a03:2880:f138:83:face:b00c:0:25de, 102.132.101.35

TESLA
Server: tesla.com 
Addresses: 23.201.26.71, 
184.30.18.203, 96.16.108.43, 23.9.66.10, 104.119.104.74, 184.85.228.70, 184.50.204.169 

Breakdown of RFC 1918 IPv4 address range into exactly 4 subnetworks with no address left over.
10.10.10.0 
192.168.0.0 
172.168.1.0 

RFC 1918 describes the use of IP address space deemed private by IANA, the Internet Assigned Numbers Authority. Private address space is available for use by any organization and is guaranteed to be not routable on the public Internet. What this means in practice is that any host machine that is assigned a private address defined by RFC 1918 cannot be reached "directly" by any other machine not in the hosting organization’s local network.

RFC 1918 Subnets
The RFC1918 address space includes the following networks:
10.0.0.0 – 10.255.255.255 (10/8 prefix)
172.16.0.0 – 172.31.255.255 (172.16/12 prefix)
192.168.0.0 – 192.168.255.255 (192.168/16 prefix)

The ten-dot network (10/8) is typically used within large organizations that have thousands of hosts. The 172 and 192 subnets are more common within smaller organizations or home networks. For instance, a personal computer from home is probably configured via DHCP with a 192 address.

SUBNETTING CHART TABLE
Subnet	1	2	4	8	16	32	64	128	256
Host ID	256	128	64	32	16	8	4	2	1
Subnet Mask A	/8	/9	/10	/11	/12	/13	/14	/15	/16
Subnet Mask B	/16	/17	/18	/19	/20	/21	/22	/23	/24
Subnet Mask C	/24	/25	/26	/27	/28	/29	/30	/31	/32

Breaking the IP Address into 4 Subnets
10.10.10.0 belongs to the A class with the default subnet/subnet mask of 255.0.0.0/8. Therefore 10.10.10.0 will have a subnet mask of /10 (255.192.0.0) for 4 subnets resulting in the following subnet addresses.
Network ID	Host ID	Broadcast ID
10.0.0.0 	10.0.0.1 – 10.63.255.254 	10.63.255.255 
10.64.0.0 	10.64.0.1 – 10.127.255.254 	10.127.255.255 
10.128.0.0 	10.128.0.1 – 10.191.255.254 	10.191.255.255 
10.192.0.0 	10.192.0.1 – 10.255.255.254 	10.255.255.255 
 
172.168.1.0 belongs to the B class with the default subnet mask of 255.255.0.0/16. Therefore 172.168.1.0 will have a subnet mask of /18 (255.225.192.0) for 4 subnets resulting in the following subnet addresses.
Network ID	Host ID	Broadcast ID
172.168.0.0 	172.168.0.1 – 172.168.63.254 	172.168.63.255 
172.168.64.0 	172.168.64.1 – 172.168.127.254 	172.168.127.255 
172.168.128.0 	172.168.128.1 – 172.168.191.254 	172.168.191.255 
172.168.192.0 	172.168.192.1 – 172.168.255.254 	172.168.255.255 
 
192.168.0.0 belongs to the C class subnet mask of /26 (255.225.225.192) for 4 resulting in the following subnet addresses.
Network ID	Host ID	Broadcast ID
192.168.0.0 	192.168.0.1 – 192.168.0.62 	192.168.0.63 
192.168.0.64 	192.168.0.65 – 192.168.0.126 	192.168.0.127 
192.168.0.128 	192.168.0.129 – 192.168.0.190 	192.168.0.191 
192.168.0.192 	192.168.0.193 – 192.168.0.254 	192.168.0.255
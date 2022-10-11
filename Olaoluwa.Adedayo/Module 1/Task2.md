## **Task 2**
According to [nslookup.io](https://www.nslookup.io/domains/google.com/dns-records/#google) IP address lookup for Google:
- Google DNS - 142.250.179.206
- Cloudfare DNS - 142.251.39.110


According to [nslookup.io](https://www.nslookup.io/domains/facebook.com/dns-records/#google) IP address lookup for Facebook:
- Google DNS - 185.60.216.35
- Cloudfare DNS - 157.240.201.35

According to [nslookup.io](https://www.nslookup.io/domains/Tesla.com/dns-records/#google) IP address lookup for Tesla:
- Google DNS - 184.85.228.70
- Cloudfare DNS - 184.50.204.169




## **Subnetting**
**Network 10.10.10.0 into exactly 4 subnets.**

|            |             |            
|------------|-------------|
| Network ID | 10.10.10.0 |
|Broadcast IP | 10.10.10.63 |
| First Host IP | 10.10.10.1 |
| Last Host IP | 10.10.10.62 |
|Next Network ID | 10.10.10.64 |
| # IP Address | 64 |
| CIDR/Subnet | 255.255.255.192 |


|            |             |
|------------|-------------|
| Network ID | 10.10.10.64 |
|Broadcast IP | 10.10.10.127 |
| First Host IP | 10.10.10.65 |
| Last Host IP | 10.10.10.126 |
|Next Network ID | 10.10.10.128 |
| # IP Address | 64 |
| CIDR/Subnet | 255.255.255.192 |


|            |             |
|------------|-------------|
| Network ID | 10.10.10.128 |
|Broadcast IP | 10.10.10.191 |
| First Host IP | 10.10.10.129 |
| Last Host IP | 10.10.10.190 |
|Next Network ID | 10.10.10.192 |
| # IP Address | 64 |
| CIDR/Subnet | 255.255.255.192 |

|            |             |
|------------|-------------|
| Network ID | 10.10.10.192 |
|Broadcast IP | 10.10.10.255 |
| First Host IP | 10.10.10.193 |
| Last Host IP | 10.10.10.254 |
|Next Network ID | 10.10.11.0 |
| # IP Address | 64 |
| CIDR/Subnet | 255.255.255.192 |


**Network 172.168.1.0 into exactly 4 subnets.**

|            |             |            
|------------|-------------|
| Network ID | 172.168.1.0 |
|Broadcast IP | 172.168.1.63 |
| First Host IP | 172.168.1.1 |
| Last Host IP | 172.168.1.62 |
|Next Network ID | 172.168.1.64 |
| # IP Address | 64 |
| CIDR/Subnet | 255.255.255.192 |


|            |             |
|------------|-------------|
| Network ID | 172.168.1.64 |
|Broadcast IP |172.168.1.127 |
| First Host IP | 172.168.165 |
| Last Host IP | 172.168.1.126 |
|Next Network ID | 172.168.1.128 |
| # IP Address | 64 |
| CIDR/Subnet | 255.255.255.192 |


|            |             |
|------------|-------------|
| Network ID | 172.168.1.128 |
|Broadcast IP | 172.168.1.191 |
| First Host IP | 172.168.1.129 |
| Last Host IP | 172.168.1.190 |
|Next Network ID | 172.168.1.192 |
| # IP Address | 64 |
| CIDR/Subnet | 172.168.1.192 |

|            |             |
|------------|-------------|
| Network ID | 172.168.1.192 |
|Broadcast IP | 172.168.1.255 |
| First Host IP | 172.168.1.193 |
| Last Host IP | 172.168.1.254 |
|Next Network ID | 172.168.2.0 |
| # IP Address | 64 |
| CIDR/Subnet | 255.255.255.192 |
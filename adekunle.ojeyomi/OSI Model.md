### Question 1. Describe any layered process you are familiar with similar to the OSI model

# TCP/IP

TCP refers to Transmission Control Protocol. TCP/IP follow a horizontal approach and TCP/IP uses both section ad presentation layer in the application layer itself

## Network Access Layer:

This layer corresponds to the combination of Data Link Layer and Physical Layer of the OSI model. It looks out for hardware addressing and the protolcols present in this layer allows for the physical transmission of data.

## Internet Layer:

This layer parallels the functions of OSI's Network layer. It defines te protocols which are responsible for logical transmission of data over the entire network. The main protocols residing at the layer are:

### 1. IP: 

stands for Internet Protocol and it is responsible for delivering packets from the source host to the destination host by looking at the addresses in the packet headers. IP has two versions: IPv4 and IPv6. IPv4 is the one that most of the websites are using currently but IPV6 is going as the number of IPv4 addresses are limited in number when copared t the number of users

### 2. ICMP: 

stands for Internet Control Message Protocol. It is encapsulated witin IP datagrams and it is responsible for providing hosts with information about network problems.

### 3. ARP: 

stands for Address Resolution Protolcol. Its job is to find the hardware address of a host from a known IP address. ARP has several types: Reverse ARP, Proxy ARP, Gratuitous ARP and Inverse ARP.

## Host-to-host Layer:

This layer is analogous to the transport layer of the OSI model. It is responsible for end to end communication and error-free delivery of data. It shields the upper layer applications from the complexities of data. The two main protocols present in this layer are: 

### 1. Tranmission Control Protocol (TCP):

It is known to provide reliable and error-free communication between end systems. It performs sequencing and segmentation of data. It also has acknowlegdement feature and controls the flow of the data through flow control mechanism. It is a very effective protocol but had alot of overhead due to such features. Increase overhead leads to increased cost.

### 2. User Datagram Protocol (UDP):

It is the go-to protocol if your aapplication does not require a reliable transport as it is very cost effective. Unlike TCP, which is connection-oriented protocol, UDP is connectionless.

## Application Layer:

This layer performs the function of top three layers of the OSI model: Application, Presentation and Section Layer. It is responsibe for node-to-node communication and control user interface specifications. Some of the protocols present in this layer are: HTTP, HTTPS, FTP, TFTP, Telnet, SSH, SMTP. SMMP, NTP, DNS, DHCP, NFS, X Windows, LPD. 

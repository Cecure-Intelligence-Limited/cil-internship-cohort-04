
# TCP/IP Model

**TCP/IP Model** is a layered model that bears similarities to the OSI Model. 
The OSI model is 7 layered (Application, Presentation, Session, Network, 
Transport, Data Link and Physical) as shown below:


## OSI Layer
The OSI Layer can be summarized as follows

| **OSI Layer**  |
| :------------: |
| Application    |
| Presentation   |
| Session        |
| Network        |
| Transport      |
| Data Link      |
| Physical       |


## TCP/IP Model

The TCP/IP model is 4 layered (Application, Internet, Transport, Link). Some other representation of the TCP/IP model is 5 layered (Application, Network, Transport, Data Link and Physical). In this case, the *Internet* layer is changed to *Network*, and the *Link* layer is splitted into two layers (*Data Link* and *Physical*).

| **4 Layer**    | **5 Layer**  |
| -------------- | ------------ |
| Application    | Application  |
| Internet       | Network      |
| Transport      | Transport    |
| Network Access | Data Link    |
|                | Physical     |

### 1. Network Access Layer
The Network Access Layer corresponds to the combination of Data Link Layer and Physical Layer of the OSI model. It is responsible for hardware addressing and the protocols present in this layer allows for the physical transmission of data.

### 2. Internet Layer
The Internet Layer parallels the functions of OSI’s Network layer. It defines the protocols which are responsible for logical transmission of data over the entire network. The main protocols residing at this layer are :

- IP (Internet Protocol)
- ICMP (Internet Control Message Protocol)
- ARP (Address Resolution Protocol) 

### 3. Transport Layer
The Transport Layer is responsible for end-to-end communication and error-free delivery of data. It shields the upper-layer applications from the complexities of data. The two main protocols present in this layer are :

- **Transmission Control Protocol (TCP)** – a transport protocol that provides reliable and error-free communication between end systems. It performs sequencing and segmentation of data. It also has acknowledgment feature and controls the flow of the data through flow control mechanism. It is a very effective protocol but has a lot of overhead due to such features. Increased overhead leads to increased cost.

- **User Datagram Protocol (UDP)** – a transport protocol employed in applications where reliable transmission of data is not required, making it very cost-effective. Unlike TCP, which is connection-oriented protocol, UDP is connectionless.

### 4. Application Layer
The Application Layer in the TCP/IP model is responsible for node-to-node communication and controls user-interface specifications. Some of the protocols present in this layer includes: HTTP, HTTPS, FTP, TFTP, Telnet, SSH, SMTP, SNMP, NTP, DNS, DHCP, NFS, X Window, LPD.


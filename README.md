# Cecure Intelligence limited 
[We build modern digital products with experienced development teams.](https://cecureintel.com/)


# Module 1 practicals for Cohort-4
This is to facilitate the broad understanding of the various domains.
These domains are 
* Data Engineering
* business analysis
* Cloud Engineering
* Front-end developer

<p> Paragraph ---- Feel free to correct my errors and add more contents 😉. <p/>



# Question 1. Describe any layered process you are familiar with similar to the OSI model

### The application layer
The Application Layer is topmost layer in the Open System Interconnection (OSI) model.
This layer also requests various types of information from its bottom layer, which is the presentation layer. The Application Layer interface interacts directly with the application and provides common application services.
To ensure smooth communication, application layer protocols are implemented the same on source host and destination host.

##### Functions of Application Layer :

1. This layer allows users to interact with other software applications.
2. Data is presented visually in this layer, allowing users to truly understand data rather than remembering or visualizing it in binary format (0's or 1’s).
3. This layer serves as a portal through which users and application processes can access network services.
4. This layer provides services such as e-mail, file transfer, distributing results to users, directory services, network resources, and so on.
5. The protocols which are used in this application layer depend upon what information users wish to send or receive.

##### Some examples of protocols  provided by the application layer

1. Telnet -  This protocol is used for managing files over the Internet. 
2. HTTP(S)- . It is the foundation of the World Wide Web (WWW).This protocol was designed particularly for the communications between the web browsers and web servers
3. DNS- This service translates the domain name (selected by user) into the corresponding IP address. 
4. NFS - This stands for Network File System. This protocol allows remote hosts to mount files over a network and interact with those file systems as though they are mounted locally.

### The Transport Layer -

Provide a logical connection between two hosts. It controls reliability of communication through segmentation, flow control and error control. 
Segmentation is the process of breaking up a large data into smaller data unit called a segment, each segment contain port and sequence number for segment rearrangement and assembly when it get to the destination host. 
Flow control it control amount of data being transported by increasing or decreasing the rate of data transfer between devices with different Mbps rate. 
 Error control used automatic repeat request to retransmit the loss or corrupted data with a group of checksum to verified Transport layer protocols are TCP and UDP .
Transmission control protocol (TCP) its a connection- oriented transmission, it wait for an acknowledgement from the remote host (feedback). It is reliable but very slow compared to UDP.
 User datagram protocol its a connectionless transmission. its not reliable because it does not require a feedback but very fast.


### The Physical Layer 
The physical layer is bottom-most layer of the Open System Interconnection (OSI) Model, which represents the system physically and electrically. It is made up of various network components such as power plugs, connectors, receivers, and cable types, among others. The Physical Layer transports data bits from one device (such as a computer) to another (s).

##### Functions of Physical Layer :
1. This layer is classified as a Hardware Layer (since the hardware layer is responsible for all the physical connection establishment and processing too).
2. Hubs, Ethernet, modems device is used in this layer.
3. It also includes a switching mechanism that allows data packets to be routed from one port (the sender port) to the leading destination port.


# Question 2. What are the NS IP addresses for Google, Facebook and Tesla? 


NS stands for ‘nameserver,’ and the nameserver record indicates which DNS server is authoritative for that domain (i.e. which server contains the actual DNS records).

__NS IP addresses for Google Public DNS__ 
via IPv4 | 8.8.8.8 |8.8.4.4
--- | --- | ---
via IPv6 | 2001:4860:4860::8888 | 2001:4860:4860::8844

google.com | IPv4: 216.58.208.110    | IPv6: 2a00:1450:400e:80e::200e
--- | --- | ---
facebook.com | IPv4: 157.240.201.35    |  IPv6: 2a03:2880:f145:82:face:b00c:0:25de
tesla.com | 184.50.204.169 |  184.30.18.203   

# Question 3. Breakdown the following RFC 1918 IPv4 address range into exactly 4 subnetwork with no address left over.”
#### 1. 10.10.10.0
#### 2. 192.168.0.0
#### 3. 172.168.1.0


---

## For 10.10.10.0

This is an IPv4 class A (range of 0-127)

To get the value of the subnet mask we can use a simple table

Subnet | 1 | 2 | 👉🏾 4 | 8 | 16 | 32 | 64 | 128 | 256 |
---| --- | --- | --- | --- | --- | --- | --- | --- | --- |
Host | 256 | 128 | 👉🏾 64 | 32 | 16 | 8 | 4 | 2 | 1 |
subnet mask | 8 | 9 | 👉🏾 10 | 11 | 12 | 13 | 14 | 15 | 16 |

so for 4 subnetwork the value is 10 i.e __10.10.10.0/10__
subnet mask = __255.192.0.0__ (in binary format)

And each subnetwork is within range of __64__

S/NO| Network ID | Broadcast ID | Useable IP Address
---| --- | --- | --- 
1 | 10.0.0.0/10 | 10.63.255.255/10 | 10.0.0.1/10 - 10.63.255.254/10
2 | 10.64.0.0/10 | 10.127.255.255/10 | 10.64.0.1/10 - 10.127.255.254/10
3 | 10.128.0.0/10 | 10.191.255.255/10 | 10.128.0.1/10 - 10.191.255.254/10
4 | 10.192.0.0/10 | 10.255.255.255/10 | 10.192.0.1/10 - 10.255.255.254/10

---

## For 192.168.0.0

This is an IPv4 class C (range of 192-223)

To get the value of the subnet mask we can use a simple table

Subnet | 1 | 2 | 👉🏾 4 | 8 | 16 | 32 | 64 | 128 | 256 |
---| --- | --- | --- | --- | --- | --- | --- | --- | --- |
Host | 256 | 128 | 👉🏾 64 | 32 | 16 | 8 | 4 | 2 | 1 |
subnet mask | 24 | 25 | 👉🏾 26 | 27 | 28 | 29 | 30 | 31 | 32 |

so for 4 subnetwork the value is 26 i.e __192.168.0.0/26__
subnet mask = __255.255.255.192__ (in binary format)

And each subnetwork is within range of __64__

S/NO| Network ID | Broadcast ID | Useable IP Address
---| --- | --- | --- 
1 | 192.168.0.0/10 | 192.168.0.63/10 | 192.168.0.1/10 - 192.168.0.62/10
2 | 192.168.0.64/10 | 192.168.0.127/10 | 192.168.0.65/10 - 192.168.0.126/10
3 | 192.168.0.128/10 | 192.168.0.191/10 | 192.168.0.129/10 - 192.168.0.190/10
4 | 192.168.0.192/10 | 192.168.0.255/10 | 192.168.0.193/10 - 192.168.0.254/10

---

## For 172.168.1.0

This is an IPv4 class B (range of 128-191)

To get the value of the subnet mask we can use a simple table

Subnet | 1 | 2 | 👉🏾 4 | 8 | 16 | 32 | 64 | 128 | 256 |
---| --- | --- | --- | --- | --- | --- | --- | --- | --- |
Host | 256 | 128 | 👉🏾 64 | 32 | 16 | 8 | 4 | 2 | 1 |
subnet mask | 16 | 17 | 👉🏾 18 | 19 | 20 | 21 | 22 | 23 | 24 |

so for 4 subnetwork the value is 18 i.e __172.168.1.0/18__
subnet mask = __255.255.192.0__ (in binary format)

And each subnetwork is within range of __64__

S/NO| Network ID | Broadcast ID | Useable IP Address
---| --- | --- | --- 
1 | 172.168.0.0/10 | 172.168.63.255/10 | 172.168.0.1/10 - 172.168.63.254/10
2 | 172.168.64.0/10 | 172.168.127.255/10 |  172.168.64.1/10 - 172.168.127.254/10
3 | 172.168.128.0/10 | 172.168.191.255/10 | 172.168.128.1/10 - 172.168.191.254/10
4 | 172.168.192.0/10 | 172.168.255.255/10 | 172.168.192.1/10 - 172.168.255.254/10



# 1. Describe what you understand by Scrum, and elaborate on some of it's benefits in software development.

Scrum is an agile framework for addressing complex adaptive problems while producing high-value products in a productive and creative manner.
Scrum is a lightweight framework that assists individuals, teams, and organizations in creating value by providing adaptive solutions to complex problems.

Scrum necessitates the presence of a Scrum Master in order to foster an environment in which:
1. A Product Owner adds work to a Product Backlog for a complex problem.
2. During a Sprint, the Scrum Team converts a selection of work into a value increment.
3. The Scrum Team and its stakeholders review the results and make adjustments for the following Sprint.
4. Repeat

Benefits of Scrum methodology
1. __Quality products__ - The Scrum process incorporates feedback and continuous improvement during the Sprint retrospective. 
2. __Teamwork__ - Scrum fosters cohesive software development teams that communicate effectively, meet deadlines, and collaborate to solve problems. Members trust and respect one another and recognize the value of their time. This could imply limiting the daily Scrum to a specific timeframe. 
3. __Flexibility__ -Scrum teams must adapt their tools and processes to changing circumstances as they occur. Product definitions can change as development progresses, and effective teams can implement those changes in a few iterations.
4. __Reduced risk__ - Scrum focuses on a predictable, sustainable delivery pace and consistent feedback that gives teams a chance to mitigate risk early and often. Short sprints let teams fail fast if an idea doesn't work, keeping the risk of failure manageable.
5. __Reduced time to market__ - Scrum aims to deliver products and features in predictable increments through the use of well-defined sprints. It is not necessary to complete the entire product before releasing features. 
6. __Increased ROI__ - The combined benefits of Scrum result in a higher ROI. Constant feedback results in fewer costly mistakes later in the process as well as a better product with fewer defects. Reduced time to market and incremental releases increase revenue more quickly.


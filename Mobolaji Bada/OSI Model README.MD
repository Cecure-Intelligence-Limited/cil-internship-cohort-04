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

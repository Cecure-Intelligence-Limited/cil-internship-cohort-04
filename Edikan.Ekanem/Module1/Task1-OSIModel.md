# CIL Module 1-Group 5 Monday task


> ## **TASK:**

Describe any layered process you are familiar with similar to the OSI model.

> ## **ANSWER:**

**TCP/IP model:** Like the OSI model, the TCP/IP model is layered and is used in the same fashion but with fewer layers. As the modern Internet and most communications use the Internet Protocol (IP), the TCP/IP model is technically more in line with modern network implementations.

It's layers include:
- Application Layer
- Transport Layer
- Internet (Network) Layer
- Data link Layer

**APPLICATION LAYER:** The application layer is the highest layer in the TCP/IP model and is related to the **session**, **presentation** and **application** layers of the OSI model. DefinIt defines the protocols and standards that an application requires to connect to the network. It provides services for network application with the help of a protocol to perform user activities. The application layer of the TCP/IP model is used to handle all process-to-process communication functions. These functions are carried out by different multiple layers when referencing the OSI model. There are a number of different functions which are carried out by this layer, including; session establishment, maintenance and termination, character code translations, data conversion, compression and encryption, remote access, network management and electronic messaging to name a few. Common protocols include Named Pipes, HTTP, SMTP and many others. All network applications are dependent on application layer protocol to function. It forms the basis for various network services. E.g. Telnet, NetBIOS, MIME, TLS, SSL, FTP, HTTP/HTTPS, SMTP, DHCP, DNS etc.

**TRANSPORT LAYER:** The Transport layer is the next layer and is typically related directly with its namesake layer in the OSI model. Transport layer builds on the network layer in order to provide data transport from a process on a source system machine to a process on a destination system. It is hosted using single or multiple networks, and also maintains the quality of service functions. It determines how much data should be sent, where and at what rate. This layer builds on the message which are received from the application layer. It helps ensure that data units are delivered error-free and in sequence. Transport layer helps you to control the reliability of a link through flow control, error control, and segmentation or de-segmentation. The transport layer also offers an acknowledgment of the successful data transmission and sends the next data in case no errors occurred. **TCP** is the best-known example of the transport layer.

**INTERNET LAYER:** The internet layer is also known as **network layer**. The main function of this layer is to send the packets from any network and any computer to their destination irrespective of the route they take. The Internet layer offers the functional and procedural method for transferring variable length of data sequences from one node to another with the help of various networks. It uses **IP protocol**. Data unit in network layer is called **packet** and data packets contain the IP address of sender/ receiver. Layer-management protocols that belong to the network layer are: Routing protocols, Multicast group management, Network-layer address assignment.

**DATA LINK LAYER:** The data link layer is also referred to in some texts as the **network interface layer**. The link layer combines the physical and data link layer functions into a single layer. It is the lowest layer of the TCP/IP model. It defines standards and protocols for data transmission and physical connectivity. Data link controls how data is sent and received. It uses **MAC (Media Access Control)** to form a frame. This is the layer where switching resides. Data from application layer has been segmented by transport layer and placed into packets by network layer and framed by data link layer to a sequence of 0 and 1 (Binary). This layer is responsible for the transmission of the data between two devices on the same network. The data link layer includes frame physical network functions like modulation, line coding and bit synchronization, frame synchronization and error detection, and LLC and MAC sublayer functions. Common protocols include; the Address Resolution Protocol (ARP), Neighbor Discovery Protocol (NDP), IEEE 802.3 and IEEE 802.11.
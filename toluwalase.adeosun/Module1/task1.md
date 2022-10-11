# TASK ONE

## THE TCP/IP MODEL

TCP/IP stands for Transmission Control Protocol/ Internet Protocol. TCP/IP Stack is specifically designed as a model to offer highly reliable and end-to-end byte stream over an unreliable internet work. 

The functionality of the TCP IP model is divided into four layers, and each includes specific protocols.

TCP/IP is a layered server architecture system in which each layer is defined according to a specific function to perform. All these four TCP IP layers work collaboratively to transmit the data from one layer to another.

- Application Layer
- Transport Layer
- Internet Layer
- Network Interface

### THE APPLICATION LAYER
The application layer is the group of applications that let the user access the network. For most of us that means email, messaging apps, and cloud storage programs. This is what the end-user sees and interacts with when sending and receiving data.

### THE TRANSPORT LAYER
The transport layer provides a reliable data connection between two communicating devices. It’s like sending an insured package: The transport layer divides the data in packets, acknowledges the packets it has received from the sender, and ensures that the recipient acknowledges the packets it receives.

###  THE INTERNET LAYER
The internet layer, also known as the network layer, controls the flow and routing of traffic to ensure data is sent speedily and accurately. This layer is also responsible for reassembling the data packet at its destination. If there’s lots of internet traffic, the internet layer may take a little longer to send a file, but there will be a smaller chance of an error corrupting that file.

### THE NETWORK INTERFACE LAYER
The network access layer, also known as the data link layer, handles the physical infrastructure that lets computers communicate with one another over the internet. This covers ethernet cables, wireless networks, network interface cards, device drivers in your computer, and so on.

The network access layer also includes the technical infrastructure — such as the code that converts digital data into transmittable signals — that makes network connection possible.


## FEATURES OF THE TCP/IP MODEL

Here, are the essential characteristics of TCP IP protocol:

- Support for a flexible TCP/IP architecture
- Adding more system to a network is easy.
- In TCP IP protocols suite, the network remains intact until the source, and destination machines were functioning properly.
- TCP is a connection-oriented protocol.
- TCP offers reliability and ensures that data which arrives out of sequence should put back into order.
- TCP allows you to implement flow control, so sender never overpowers a receiver with data.


## DIFFRENCES AND SIMILARITIES BETWEEN THE OSI AND TCP/IP MODELS

The TCP/IP and OSI are network reference models. The process of developing both models began in the early 1970s and ended in the late 1970s. Both models were published in the early 1980s. Manufacturers manufactured devices to support one model or both models in the 1990s. By the late 1990s, the TCP/IP model became a common option and the OSI model was rejected due to a slower formal standardization process than the TCP/IP model. Leading manufacturers abandoned their proprietary networking model in favor of the TCP/IP model in the 2000s. Nowadays, only the TCP/IP model is used. Almost all modern computer networks are built using the TCP/IP model. All modern networking devices support the TCP/IP model.

## Similarities between the TCP/IP model and the OSI model
- Both are logical models.
- Both define standards for networking.
- Both provide a framework for creating and implementing networking standards and devices.
- Both divide the network communication process into layers.
- In both models, a single layer defines a particular functionality and sets standards for that functionality only.
- Both models allow a manufacturer to make devices and network components that can coexist and work with the devices and components made by other manufacturers.
- Both models simplify the troubleshooting process by dividing complex functions into simpler components.
- Instead of defining the already defined standards and protocols, both models referenced them. For example, the Ethernet standards were already defined by IEEE before the creation of these models. So instead of defining them again both models used them as IEEE Ethernet standards.
  
## Differences between the OSI model and the TCP/IP model

- The OSI Layer model has seven layers while the TCP/IP model has four layers.
- The OSI Layer model is no longer used while the TCP/IP is still used in computer networking.
- To define the functionalities of upper layers, the OSI model uses three separate layers (Application, Presentation, and Session) while the TCP/IP model uses a single layer (Application).
- Just like the upper layers, the OSI model uses two separate layers (Physical and Data-link) to define the functionalities of the bottom layers while the TCP/IP uses a single layer (Link layer) for the same.
- To define the routing protocols and standards, the OSI model uses the Network layer while the TCP/IP model uses the Internet layer.
- The OSI model is well documented than the TCP/IP model.
- The OSI model explains every standard and protocol in detail while the TCP/IP model provides a summarized version of the same.

## REFERENCES
 https://www.guru99.com/tcp-ip-model.html
https://www.computernetworkingnotes.com/ccna-study-guide/similarities-and-differences-between-osi-and-tcp-ip-model.html
https://www.imperva.com/learn/application-security/osi-model/
https://www.avg.com/en/signal/what-is-tcp-ip
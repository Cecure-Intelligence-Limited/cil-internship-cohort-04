Question:
Describe any layered process you are familiar with similar to the OSI model

<h1 style="text-align: center;"> Answer </h1>

<h1 style="text-align: center;"> The TCP/IP Model </h1>

The TCP/IP and OSI are similar in the sense that they both are network reference models.
The TCP/IP Model helps to determine how a computer should be connected to the internet an how to transmit data between such computers. It also aids in synthesizing a virtual network in which multiple computers are interconnected.
TCP/IP stands for Transmission Control Protocol/ Internet Protocol. It is specifically designed as a model to offer highly reliable and end-to-end byte stream over an unreliable internetwork.

The updated TCP/IP model is structured in 5 layers in lieu of the 4 layers of the original TCP/IP model. The layers are shown below

![fig1](/assets/images/module_1a_fig1.png)

###### Application Layer
This layer defines the protocols and standards that an application requires to connect to the network. For example, an application layer protocol HTTP defines how a web browser can fetch a web page from a web server. The Application layer does not define any application. It only defines the standards, services, and protocols that an application needs to connect to a remote computer. HTTP, HTTPS, SNMP, NTP, SSH, FTP, TFTP, Telnet, DHCP, and DNS are examples of application layer protocols.

###### Transport Layer

This layer is also known as the host-to-host layer. It provides a logical connection between two hosts. The main functions of this layer are the following: -
- Segmentation
- Reliability
- Flow control
- Connection multiplexing

###### Internet or Network Layer

In the original TCP/IP model, this layer is defined as the Internet layer. In the updated version, it is renamed to the Network layer. The main functions of this layer are addressing and routing. For these functions, it uses IP protocol.
The main functions of this layer are the following: -
- Addressing
- Routing

###### Link Layer (Data Link and Physical Layer)

This layer defines standards and protocols for data transmission and physical connectivity. It also provides hardware addressing that is used to locate a device in the local network. Switching and connecting devices are the two main functions of this layer.

Broadly, switching is just like routing, but it works with the hardware address instead of the software address. Switches are used for switching. Besides switching, it also defines standards and protocols which are used for physical connectivity.

In the original TCP/IP model, both functions are defined in the Link layer. In the updated version, both functions are defined separately. Functions and standards which are directly related to the physical transmission are defined in the Physical layer. Functions and standards which are indirectly related to physical transmission are defined in the Data link layer.

In the updated version, switching is defined in the Data link layer while standards and protocols related to the physical transmission are defined in the Physical layer.

###### Reference to other networking models

When the TCP/IP model was in the development phase, many standards and protocols had already been defined in other networking models. Developers of the TCP/IP model, instead of defining these standards and protocols again, referenced them in the TCP/IP model with their respective model names such as Ethernet standards and IEEE standards.

Whenever you see a standard mentioned with its model-name such as Ethernet standard or IEEE standard in TCP/IP model, you should consider it as a referenced standard. A referenced standard or protocol is a standard or protocol that is originally defined in another networking model.

The TCP/IP and OSI are network reference models.

###### Similarities between the TCP/IP model and the OSI model

- Both are logical models.
- Both define standards for networking.
- Both provide a framework for creating and implementing networking standards and devices.
- Both divide the network communication process into layers.
- In both models, a single layer defines a particular functionality and sets standards for that functionality only.
- Both models allow a manufacturer to make devices and network components that can coexist and work with the devices and components made by other manufacturers.
- Both models simplify the troubleshooting process by dividing complex functions into simpler components.
- Instead of defining the already defined standards and protocols, both models referenced them. For example, the Ethernet standards were already defined by IEEE before the creation of these models. So instead of defining them again both models used them as IEEE Ethernet standards.

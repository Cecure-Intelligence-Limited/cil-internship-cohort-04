## **Types of Database**

#### **Relational Database**
Relational db is a tool for storing various types of information that are related to each other in various ways.
They typically, organize data in tables consisting of rows and columns, much like spreadsheet programs.
Relation db are managed by  software systems know as Relational DataBase Management Systems (RDBMS), they makes it possible to interact with the data.
Relational databases abstract operations through what’s known as Structured Query Language (SQL). SQL has been standardized across RDBMS systems to perform CRUD (and other) operations in a consistent way, so the same SQL statements can be executed by _any _RDBMS that supports the standard.

###### - __Use Case__
- Relational databases are ideal for complex data analysis and operations.
- One use of a relational database is connecting tables, a business will have both data sets but they may be siloed. A relational database brings these together.
- A relational database also allows for a subset of data to be viewed. This means you can hide certain data if some users only need access to a specific set of columns or rows.

###### - __Benefits__
- relational databases present  more structured
- SQL statements themselves are often simple enough to be human-readable
- ACID ( Atomicity, Consistency, Isolation, and Durability)  guarantees
- Atomicity a transaction either succeeds as a complete unit of work, performing its various CRUD and other operations, and is logged as a single commit to the relational database, or fails similarly.
- Consistency it requires the data to always be in a consistent internal state when a transaction starts and when it ends.
-  Isolation ensures that the “view” across the entire system remains consistent and unchanged by other operations while a given transaction is in process, as if it were running all by itself.
- Durability requires simply that any successfully committed transaction’s details are permanently recorded once completed. The underlying data representation changes must be applied in their entirety so that no loss occurs—even in case of caching, hard drive or other system failures.

#### Graph Database


#### **Centralised Database**
According to wikipedia, A centralized database (sometimes abbreviated CDB) is a database that is located, stored, and maintained in a single location, and usually accessed using an internet connection such as a LAN or WAN. This location is most often a central computer or database system, for example a desktop or server CPU, or a mainframe computer. This type of database contains application procedures that help the users to access the data even from a remote location.

###### __Use Case__
- centralized database would be used by an organization (e.g. a business company) or an institution (e.g. a university.)
- they are used in situations where, various kinds of authentication procedures are applied for the verification and validation of end users,  likewise, a registration number is provided by the application procedures which keeps a track and record of data usage.

###### __Benefits__
- Data integrity is maximized and data redundancy is minimised,[6] as the single storing place of all the data also implies that a given set of data only has one primary record. This aids in the maintaining of data as accurate and as consistent as possible and enhances data reliability.
- Generally bigger data security, as the single data storage location implies only a one possible place from which the database can be attacked and sets of data can be stolen or tampered with
- Better data preservation than other types of databases due to often-included fault-tolerant setup.
- Easier for using by the end-user due to the simplicity of having a single database design.
- Generally easier data portability and database administration.
- More cost effective than other types of database systems as labor, power supply and maintenance costs are all minimized.
- Data kept in the same location is easier to be changed, re-organized, mirrored, or analyzed.
- All the information can be accessed at the same time from the same location
- Updates to any given set of data are immediately received by every end-user.

#### **Distributed Database**
These are database in which data is stored across different physical locations. It may be stored in multiple computers located in the same physical location (e.g. a data centre); or maybe dispersed over a network of interconnected computers. There are two kinds of distributed database (DDB), viz. __homogenous and heterogeneous__. The databases which have same underlying hardware and run over same operating systems and application procedures are known as __homogeneous DDB__, for eg. All physical locations in a DDB. Whereas, the operating systems, underlying hardware as well as application procedures can be different at various sites of a DDB which is known as __heterogeneous DDB__.

Two processes ensure that the distributed databases remain up-to-date and current: __Replication and Duplication__. Both replication and duplication can keep the data current in all distributive locations

Replication involves using specialized software that looks for changes in the distributive database. Once the changes have been identified, the replication process makes all the databases look the same

Duplication, on the other hand, has less complexity. It identifies one database as a master and then duplicates that database

###### __Use Case__
- distributed databases lie at the heart of every organization's data infrastructure. 
- end-users interacting with a web service or a mobile application might not see a distributed database in action — it is the distributed database working hard in the background that is powering many of these use-cases.

###### __Benefits__
- Tunability, If performance problems arise in a distributed architecture, it is much easier not only to identify problems but also to solve them without the risk of compromising other components.
- Platform Autonomy, Since applications and databases do not reside on the same machines, there is no particular reason why they even need to reside on the same type of machine. This openness allows DBAs, developers, and desktop users to choose their platforms without being restricted by anybody else’s preferences or requirements. 
- Fault Tolerance, The failure of a single component in a distributed architecture is much less drastic than in an environment in which databases and applications are housed on the same machine.
- Scalability, DDB are modular by design and can be easily extended on-demand, meaning getting more out of your system when the system is increased with more resources. 
- Location Transparency, means that neither applications nor users need to be concerned with the logistics of where data actually resides or how it is distributed. Also, data can be relocated from one database instance to another with minimal impact on users and applications.
- Site Autonomy, Distributed databases allow various locations to share their data without conceding administrative control. And, any given site in a distributed database environment can follow its own administrative procedures and upgrade paths, within reason.
- Enhanced Security, the components of the distributed architecture are completely independent of one another, which means that every site can be maintained independently. You can share data without sharing accounts and passwords. Each site can have its own administrators and its own sets of accounts, and private data can be kept private.

#### **Personal Database**
A personal database (Pdb) is one that is designed for a single person. It is typically stored on a personal computer and has a very simple design, consisting of only a few tables. Personal databases are not typically suitable for complex operations, large amounts of data or business operations.

###### __Use Case__
- Pdb's are used to store frequently used, unique, or customized information.
- Pdb's are a quick and convenient method of accessing frequently used material information in any project or study.

###### __Benefits__
- Fast processing, Based on the local computer the data can be processed more fast and reliable in terms of handling.
- Higher security, Data is stored in personal computer does not need any special security arrangement for authorization of data.

#### **End User Database**
An end user database is simply a software which helps store data created by an end user. Examples of such software could include, word processors, spreadsheet managers etc. Any database software which allows the end user to create and manage data comes under this category. The end user is usually not concerned about the transaction or operations done at various levels and is only aware of the product which may be a software or an application. Therefore, this is a shared database which is specifically designed for the end user, just like different levels’ managers. Summary of whole information is collected in this database.

#### **Commercial Database**
These are the paid versions of the huge databases designed uniquely for the users who want to access the information for help. These databases are subject specific, and one cannot afford to maintain such a huge information. Access to such databases is provided through commercial links.In Commercial Database it is guaranteed that technical support is provided. In this Installation and updates are Administrated by software Vendor. For examples: Oracle, IBM DB2 etc.

###### __Benefits__
- There is a single point of contact for any issues that arise. That implies, you pay for specific needs, and there is a party to blame if difficulties develop.
- The licensing is usually obvious, and it comes with a guarantee. 
- Developers typically have a thorough plan in place for the programme and release updates as needed. This allows businesses to save money on the costs of technical outages and failures.

#### **NoSQL Database**
NoSQL DB are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide flexible schemas and scale easily with large amounts of data and high user loads.
They are used for large sets of distributed data. There are some big data performance issues which are not effectively handled by relational databases, such kind of issues are easily managed by NoSQL databases. There are very efficient in analyzing large size unstructured data that may be stored at multiple virtual servers of the cloud.

###### __Benefits__
- Fast-paced Agile development
- Storage of structured and semi-structured data
- Huge volumes of data
- Requirements for scale-out architecture
- Modern application paradigms like microservices and real-time streaming

#### **Operational Database**
An operational database (ODB) is a database that is used to manage and store data in real time. An operational database is the source for a data warehouse. Elements in an operational database can be added and removed on the fly. ODB is a database that stores data inside of an enterprise. They can contain things like payroll records, customer information and employee data. They are critical to data warehousing and business analytics operations.
The key characteristic of operational databases is their orientation toward real-time operations, compared with conventional databases that rely on batch processing.

###### __Use Case__
- Analytical Abilities: It can provide the real-time analytical ability to help in any decision-making process. It can incorporate various applications to enhance the analytical abilities as per user needs without changing the state of the database.
- Internet of Things: It helps in harnessing the true potential of IoT through real-time monitoring, reviewing and providing apt solutions by itself.
- Fault Tolerant: By inculcating with Distributed databases, it can create a fault resistant system where if one of the components goes offline or is malfunctioning, it won’t affect the entire system.
- Scalability: Modern operational database systems are ever ready to scale on request and with the added advantage of high concurrency and low latency. Businesses can adopt the “Use as you grow “principle.
- Big Data: Operational Database with distributed systems and NoSQL based system can harness the true potential with big data using technologies like Hadoop along with operational DBMS like Cassandra or MongoDB

#### **Cloud Databases**
A cloud database is a database service built and accessed through a cloud platform. It serves many of the same functions as a traditional database with the added flexibility of cloud computing. Users install software on a cloud infrastructure to implement the database. A cloud database is a database that has been optimized or built for such a virtualized environment.
There are two common deployment models: users can run databases on the cloud independently, using a virtual machine image, or they can purchase access to a database service, maintained by a cloud database provider. 

###### __Benefits__
- the ability to pay for storage capacity and bandwidth on a per-user basis
- scalability on demand
- high availability
- gives enterprises the opportunity to support business applications in a software-as-a-service deployment
- Can support relational databases and NoSQL databases
- Disaster recovery, data is kept secure through backups on remote servers.
- Ease of access, users can access cloud databases from virtually anywhere, using a vendor’s API or web interface.

#### **Object-Oriented Databases**
An object-oriented database OOD is a collection of object-oriented programming and relational database. There are various items which are created using object-oriented programming languages like C++, Java which can be stored in relational databases, but OOD are well-suited for those items.
An OOD is organized around objects rather than actions, and data rather than logic. For example, a multimedia record in a relational database can be a definable data object, as opposed to an alphanumeric value. With an OOD, data objects are stored with all of their properties in the database. When your program terminates, the objects continue to persist, stored in the OOD.

###### __Use Case__
- OODs are most often used with object-oriented programming languages like Java, Kotlin, C#, Node JS (React), and Swift. Industries that use OODs are typically those built on an object-oriented language and wanting to boost productivity while working with complex data structures.
- OODs focuses on embedded use in devices, packaged software, and real-time systems.

###### __Benefits__
- OOD's provide persistent storage to objects. Imagine creating objects in your program and saving them as it is in a database and reading back from the database.
- OOD bring permanent persistent to objects. Objects can be stored in persistent storage forever.
-  Reading and mapping an object database data to the objects is direct without any API or OR tool. Hence faster data access and better performance.
- Some object database can be used in multiple languages.


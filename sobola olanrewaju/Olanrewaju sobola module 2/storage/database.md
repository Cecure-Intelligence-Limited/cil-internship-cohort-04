# Comparison Betweeen Database Management System by their Use Cases.

## What is a Database?
A database is a large collection of data typically stored in computer systems. This data is organised in a way that makes it possible to quickly find and manage desired pieces of information. example:
* a list of names in alphabetical order
* an ascending list of numeric stock codes
You can store information in the database in different ways, known as database models.

The relational database model is the most widely used database model. It uses relations and sets to store the data. In practice, this looks like data is organised in tables. To access information from a database, you typically need a database management system.Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database. Without talking too much about the Database lets look into the different type of Database Management Systems and their UseCases because not all data are meant to be stored the same way, for example, an institutional data cannot be stored the same DBMS as data gotten from an eccommerce application.

## What is a database management system?
A database management system is a software designed to allow you to create, update, analyse, retrieve and store data in a computer system.

# Four types of database management systems
A relational database management system is one of four common types of systems you can use to manage your business data. The other three include:

* hierarchical database systems
* network database systems
* object-oriented database systems
**Hierarchical database model**  resembles a tree structure, similar to a folder architecture in your computer system. The relationships between records are pre-defined in a one to one manner, between 'parent and child' nodes. They require the user to pass a hierarchy in order to access needed data. Due to limitations, such databases may be confined to specific uses. 

**Network database models** also have a hierarchical structure. However, instead of using a single-parent tree hierarchy, this model supports many to many relationships, as child tables can have more than one parent.

**Object-oriented databases,** the information is represented as objects, with different types of relationships possible between two or more objects. Such databases use an object-oriented programming language for development.

## Database schema
it is an integral part of application or software development, especially those that revolve around data and databases. In short, the database schema is a term used for a structure or layout defining a set of data.
In other words, it describes how the data will be organized and connected. Hence, a database schema may include schema objects like tables, views, fields, relationships, packages, indexes, types, and many other elements.
Database designers create database schemas to establish important elements, attributes, and connections from a specific data group.
It comes in the form of a schema diagram that explains to a database administrator how the data will be stored in a relational or non-relational database. Also, the size and complexity of the diagram depend on the project.
Furthermore, database schemas are necessary for designing database management systems (DBMS) and relational database management systems (RDBMS) like MySQL, PostgreSQL, and Oracle.

## Centralized Database
A centralized database is stored at a single location such as a mainframe computer. It is maintained and modified from that location only and usually accessed using an internet connection such as a LAN or WAN. The centralized database is used by organisations such as colleges, companies, banks etc. Users access a centralized database through a computer network which is able to give them access to the central CPU, which in turn maintains to the database itself. Data integrity is maximized and data redundancy is minimised,as the single storing place of all the data also implies that a given set of data only has one primary record. This aids in the maintaining of data as accurate and as consistent as possible and enhances data reliability.Searches of the database can be fast because the search engine does not need to check multiple locations to return results. In a database upgrade to handle more information, servers can be added to the database site easily, and the company will not have to balance the needs of a distributed database.

## Distributed Database
A distributed database is an integrated collection of databases that is physically distributed across sites in a computer network. A distributed database management system is the software system that manages a distributed database such that the distribution aspects are transparent to the users. To form a distributed database system , the files must be structured, logically interrelated, and physically distributed across multiple sites. In addition, there must be a common interface to access the distributed data. Often distributed databases are used by organizations that have numerous offices or storefronts in different geographical locations. Typically an individual branch is interacting primarily with the data that pertain to its own operations, with a much less frequent need for general company data. Building infrastructure is similar to investing: diversify to reduce your chances of loss. Specifically, if a failure occurs in one distribution area, the entire database does not experience a setback.

## Cloud Database
A cloud database is a database service built and accessed through a cloud platform. It serves many of the same functions as a traditional database with the added flexibility of cloud computing. Users install software on a cloud infrastructure to implement the database. It typically runs on a cloud computing platform and access to the database is provided as-a-service. There are two common ways users use Cloud Database, users can run databases on the cloud independently, using a virtual machine image, or they can purchase access to a database service, maintained by a cloud database provider. Encryption is an essential part of any cloud database, as all information needs to be protected as it is transmitted online. various Major cloud providers makes use of different types of cloud database e.g AWS dynamoDB, GCP big Table e.t.c

## Commercial database
A commercial database is any that is designed by a commercial business. Businesses develop feature-rich databases, which they then sell to their customers. Commercial databases can vary in terms of composition or the technology they use. The defining trait of commercial databases is having users pay to use them, unlike open source databases.These are the paid versions of the huge databases designed uniquely for the users who want to access the information for help. These databases are subject specific, and one cannot afford to maintain such a huge information. Access to such databases is provided through commercial links. The most popuplar commercial database are Oracle, MicrosoftSQL Server, IBM Db2 e.t.c.

## Open Source Database
An open source database is any database application with a codebase that is free to view, download, modify, distribute, and reuse. Open source licenses give developers the freedom to build new applications using existing database technologies. In contrast to Commercial Database, anyone can view and access the source code for open source databases. There are no licensing fees so the total cost of ownership (TCO) is lower for open source databases than for commercial databases. You can download and modify source code to power your apps free of charge and without vendor lock-in. On the flip side, though, you’re responsible for maintaining and securing your implementation of the open source database. There are several ways to choose the right database for your needs. You can analyze documentation or contact the company if documentation isn’t available publicly yet. You can also use online forums and blogs as well as the source code to help you determine which open source database may be a good fit for you. Examples of commonly used open source relational databases include: MySQL,PostgreSQL,MongodDb,CouchDb.

## End-user database
End-user is a term used in product development that refers to the person who uses the product. An end-user database is, therefore, a database that is primarily used by a single person. A good example of this type of database is a spreadsheet stored on your local computer.

## Graph database
graph database (GDB) is a database that uses graph structures for semantic queries with nodes, edges, and properties to represent and store data. A key concept of the system is the graph (or edge or relationship). The graph relates the data items in the store to a collection of nodes and edges, the edges representing the relationships between the nodes. The relationships allow data in the store to be linked together directly and, in many cases, retrieved with one operation. Graph databases hold the relationships between data as a priority. Querying relationships is fast because they are perpetually stored in the database. Relationships can be intuitively visualized using graph databases, making them useful for heavily inter-connected data. examples of Graph databases include: Cassandra, Neo4j e.t.c.
    To qualify for inclusion in the Graph Database category, a product must:
1. Provide data storage
2. Record and represent data in a topographical schema
3. Allow users to retrieve the data using query language

## NoSQL Database
NoSQL databases (aka "not only SQL") are non-tabular databases and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph. They provide flexible schemas and scale easily with large amounts of data and high user loads. As storage costs rapidly decreased, the amount of data that applications needed to store and query increased. This data came in all shapes and sizes — structured, semi-structured, and polymorphic — and defining the schema in advance became nearly impossible. NoSQL databases allow developers to store huge amounts of unstructured data, giving them a lot of flexibility. Motivations for this approach include simplicity of design, simpler "horizontal" scaling to clusters of machines (which is a problem for relational databases), finer control over availability and limiting the object-relational impedance mismatch.The concept of NoSQL databases became popular with Internet giants like Google, Facebook, Amazon, etc. who deal with huge volumes of data. The system response time becomes slow when you use RDBMS for massive volumes of data. Examples of NoSQL DBMS are MongoDB, Cassandra, ElasticSearch, Amazon DynamoDB, HBase, e.t.c.

## Relational database
These are another major type of database, opposite of NoSQL. With a relational database, information is stored structured about other data. A good representation of a relational database would be the connection between a person shopping online and their shopping cart. Relational databases are often preferred when you are concerned about the integrity of your data, or when you're not particularly focused on scalability. A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables. In a relational database, each row in the table is a record with a unique ID called the key. The columns of the table hold attributes of the data, and each record usually has a value for each attribute, making it easy to establish the relationships among data points.
   Here’s a simple example of two tables a small business might use to process orders for its products. The first table is a customer info table, so each record includes a customer’s name, address, shipping and billing information, phone number, and other contact information. Each bit of information (each attribute) is in its own column, and the database assigns a unique ID (a key) to each row. In the second table—a customer order table—each record includes the ID of the customer that placed the order, the product ordered, the quantity, the selected size and color, and so on—but not the customer’s name or contact information.
      These two tables have only one thing in common: the ID column (the key). But because of that common column, the relational database can create a relationship between the two tables. Then, when the company’s order processing application submits an order to the database, the database can go to the customer order table, pull the correct information about the product order, and use the customer ID from that table to look up the customer’s billing and shipping information in the customer info table. The warehouse can then pull the correct product, the customer can receive timely delivery of the order, and the company can get paid.

## Personal Database
Personal database system is the local database system which is only for one user to store and manage the data and information on their own personal system. There are number of applications are used in local computer to design and managed personal database system. Personal database management system is based on small database consisting of few tables in local or personal computer. It is easily to handle and manage. There is no need to install other devices to access and control the data and information. Based on the local computer the data can be processed more fast and reliable in terms of handling, higher Security but only has the abiliy to store small amounts of data.

## Operational database
An operational database is a database that stores data inside of an enterprise. They can contain things like payroll records, customer information and employee data. They are critical to data warehousing and business analytics operations.

The key characteristic of operational databases is their orientation toward real-time operations, compared with conventional databases that rely on batch processing. With operational databases, records can be added, removed and modified in real time. Operational database management systems can be based on SQL but a growing number are using NoSQL and nonstructured data.
   
## Object-oriented database
An object-oriented database (OOD) is a database system that can work with complex data objects — that is, objects that mirror those used in object-oriented programming languages.
 In object-oriented programming, everything is an object, and many objects are quite complex, having different properties and methods. An object-oriented database management system works in concert with an object-oriented programming language to facilitate the storage and retrieval of object-oriented data.
    You might be thinking, “Wait, I use objects in my programming all the time. And I use a database. So, does that mean the database I use is an OOD?” Probably not, and the reason has to do with one of the main features of OOD: object data persistence.
    When your program is running, you might have an object—for example, an instance of a task. That object has properties like a name and status. It might also have some methods like update_task() or get_task_history(). Somewhere early in your program, you initialized that task object, and now you have access to it because it is stored in memory.
    What happens when your program terminates execution? Your object… is gone. That data object was transient, not persistent. The next time your program starts up, you’ll need to retrieve those data values (like name and status) from your database all over again in order to initialize a new task object instance.
    With an OOD, data objects are stored with all of their properties in the database. When your program terminates, the objects continue to persist, stored in the OOD. When your program starts up again, it can retrieve an object with the properties from the database. The process of storing and retrieving a complex data object with an OOD is transparent to the user of the database.
    This is quite different from relational databases (like MySQL or SQLite) but not significantly from document databases (like MongoDB). In relational databases, the developer needs to compose an object from the results of a set of queries, while in document databases the mapping of the document fields to the class properties should be almost transparent.

## HOW TO CHOOSE A DATABASE
Businesses with simple database requirements often use standard office tools, such as spreadsheets. However, if you use large amounts of data or have complex business needs, you may need to consider more capable database systems that offer better functionality.
There are several types of business databases. Choosing the right one for your business isn't always straightforward.

# To find the right type of database for your business, you will need to consider:

* the type of data you will use, eg numeric, addresses, multimedia, etc
* the structure or model you want the data to have
* where you want to store it
* how you plan to manage it
* what you intend to use it for
* how consistent your data will be
* what querying mechanism you require
Businesses in specific industries - eg manufacturing, publishing or insurance - will have database solutions specifically targeted at their precise needs and requirements.
It is worth seeking out products that could meet the particular needs of your business sector. Ask your trade association or trading partners for recommendations. You can also use the internet to research popular database products.

# When choosing a database system for your business, you should ask yourself the following questions:

How will you use your information? If you have a small amount of information that requires updating or filtering of certain types of data, then a standard spreadsheet package is likely to meet your needs.

How many people will share and access the information? While a spreadsheet may be viewed by several people at once, without using a cloud based multi-user spreadsheet application, generally only one person at a time can edit a spreadsheet. If several people require access and the ability to amend records at the same time you should consider a relational database management system (RDBMS).

What is your budget? Small flat file database packages are generally inexpensive. However, they may be limited in their capabilities. Usually, only one person can access and amend the data at a time and they are unlikely to offer sophisticated data processing options. If you need a large or powerful database application, you should consider an RDBMS. Prices can vary, with fees often based on the number of users. Most packages allow you to purchase additional licenses as your requirements grow. Some RDBMS packages are also available to download free of charge as open source software. You simply download the software once and install it as many times as you need.

Are your needs likely to change or develop? Open source software gives you access to the source code, providing you with the opportunity to develop the software as your business requirements change. However, this is likely to be a job for an IT professional. You could use the services of an IT consultant or use your own in-house skills. You should also check the software licence to see what your legal obligations are.
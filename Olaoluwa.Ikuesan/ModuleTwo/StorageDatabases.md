# **Storage and Databases**

A Database is an organized collection of interrelated data stored in a computer.

### **Importance of Database**
Databases have a number of importance, amongst which are:

- It gives us a highly efficient method for handling large amount of different types of data with ease.
- It allows large amount of data to be stored systematically and these data to be easily retrieved, filtered, sorted and updated efficiently and accurately.

### **Types of Database Model**
A Database model determines the logical structure of a database and fundamentally determines in which manner data can be stored, organized and manipulated.

There are **five common types** of database model that are useful for different types of data or information. Depending upon your specific needs, one of these models can be used.
1. Hierarchical databases.
2. Network databases.
3. Relational databases.
4. Object-oriented databases.
5. NoSQL Databases

### ***Hierarchical databases***
It is one of the oldest database model developed by IBM for information Management System. In a hierarchical database model, the data is organized into a tree-like structure. In simple language we can say that it is a set of organized data in tree structure.
This type of Database model is rarely used nowadays. Its structure is like a tree with nodes representing records and branches representing fields. The windows registry used in Windows XP is an example of a hierarchical database. Configuration settings are stored as tree structures with nodes.

#### **Use Cases and Advantages**
- The model allows us easy addition and deletion of new information.
- Data at the top of the Hierarchy is very fast to access.
- It worked well with linear data storage mediums such as tapes.
- It relates well to anything that works through a one to many relationships. For example; there is a president with many managers below them, and those managers have many employees below them, but each employee has only one manager.

#### **Disadvantages**
- It requires data to be repetitively stored in many different entities.
- Now a day there is no longer use of linear data storage mediums such as tapes.
- Searching for data requires the DBMS to run through the entire model from top to bottom until the required information is found, making queries very slow.
- This model support only one to many relationships, many to many relationships are not supported.

### ***Network databases***
This is looks like a Hierarchical database model due to which many time it is called as modified version of Hierarchical database. Network database model organised data more like a graph and can have more than one parent node. The network model is a database model conceived as a flexible way of representing objects and their relationships.

#### **Use Cases and Advantages**
- The network model is conceptually simple and easy to design.
- The network model can represent redundancy in data more effectively than in the hierarchical model.
- The network model can handle the one to many and many to many relationships which is real help in modelling the real-life situations.
- The data access is easier and flexible than the hierarchical model.
- The network model is better than the hierarchical model in isolating the programs from the complex physical storage details.

#### **Disadvantages**
- All the records are maintained using pointers and hence the whole database structure becomes very complex.
- The insertion, deletion and updating operations of any record require the large number of pointers adjustments.
- The structural changes to the database is very difficult.

### ***Relational Databases***
A relational database is developed by **E. F. Codd in 1970.** The various software systems used to maintain relational databases are known as a relational database management system (RDBMS). In this model, data is organised in rows and column structure i.e., two-dimensional tables and the relationship is maintained by storing a common field. It consists of three major components.

In relational model, three key terms are heavily used such as relations, attributes, and domains. A relation nothing but is a table with rows and columns. The named columns of the relation are called as attributes, and finally the domain is nothing but the set of values the attributes can take. The following figure gives us the overview of rational database model.

#### **Terminology used in Relational Model**
- **Tuple:** Each row in a table is known as tuple.
- **Cardinality of a relation:** The number of tuples in a relation determines its cardinality. In this case, the relation has a cardinality of 4.
- **Degree of a relation:** Each column in the tuple is called an attribute. The number of attributes in a relation determines its degree.
    - **Keys of a relation**
        - Primary key: It is the key that uniquely identifies a table. It doesn’t have null values.
        - Foreign key: It refers to the primary key of some other table.it permits only those values which appear in the primary key of the table to which it refers.

#### **Examples of relational databases**
- **Oracle:** Oracle Database is commonly referred to as Oracle RDBMS or simply as Oracle. It is a multi-model database management system produced and marketed by Oracle Corporation.
- **MySQL:** MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL). MySQL runs on virtually all platforms, including Linux, UNIX, and Windows.
- **Microsoft SQL Server:** Microsoft SQL Server is an RDBMS that supports a wide variety of transaction processing, business intelligence, and analytics applications in corporate IT environments.
- **PostgreSQL:** PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance.
- **DB2:** DB2 is an RDBMS designed to store, analyze, and retrieve data efficiently.

#### **Use Cases and Advantages**
- Relational model is one of the most popular used database model.
- In relational model, changes in the database structure do not affect the data access.
- The revision of any information as tables consisting of rows and columns is much easier to understand.
- The relational database supports both data independence and structure independence concept which makes the database design, maintenance, administration and usage much easier than the other models.
- In this we can write complex query to accesses or modify the data from database.
- It is easier to maintain security as compare to other models.

#### **Disadvantages**
- Mapping of objects in relational database is very difficult.
- Object oriented paradigm is missing in relation model.
- Data Integrity is difficult to ensure with Relational database.
- Relational Model is not suitable for huge database but suitable for small database.
- Hardware overheads are incurred which make it costly.
- Ease of design can lead to bad design.
- Relational database system hides the implementation complexities and the physical data storage details from the users.

### ***Object-oriented databases***
An object database is a system in which information is represented in the form of objects as used in object-oriented programming. Object oriented databases are different from relational databases which are table-oriented. The object-oriented data model is based on the object-oriented- programming language concept, which is now in wide use. Inheritance, polymorphism, overloading. object-identity, encapsulation and information hiding with methods to provide an interface to objects, are among the key concepts of object-oriented programming that have found applications in data modelling. The object-oriented data model also supports a rich type system, including structured and collection types.
#### **Use Cases and Advantages**
- Object database can handle different types of data while relational data base handles a single data. Unlike traditional databases like hierarchical, network or relational, the object-oriented databases can handle the different types of data, for example, **pictures, voice video, including text, numbers** and so on.
- Object-oriented databases provide us code reusability, real world modelling, and improved reliability and flexibility.
- The object-oriented database is having low maintenance costs as compared to other model because most of the tasks within the system are encapsulated, they may be reused and incorporated into new tasks.
#### **Disadvantages**
- There is no universally defined data model for an OODBMS, and most models lack a theoretical foundation.
- In comparison to RDBMSs the use of OODBMS is still relatively limited.
- There is a Lack of support for security in OODBMSs that do not provide adequate security mechanisms.
- The system more complex than that of traditional DBMSs.
### ***NoSQL Databases***
The most impactful developments in database technology came with the rise of what are called the NoSQL databases.
NoSQL as a category can be a little confusing. These days that term is taken to mean *not only SQL* rather than No SQL at all..
They’re very different from each other. They aren’t traditional relational databases, and they’re getting away from those rules. The most differences:
1.	They don’t use SQL as a query language.
2.	Usually they don’t store data in tables, a few of them do.
3.	Usually they don’t really care about relationships.
4.	Usually they don’t provide ACID transactions, though a few can.
5.	Usually they don’t require a formal data schema.
6.	Several have been developed and oriented around web and large-scale applications.
7.	Most of them are open source projects.

But, beyond that, there are majorly ***four categories*** of NoSQL databases. These will be discussed below.
### **Document Databases**
They store a self-contained document (a piece of data) that describes its own schema, rather than rows and columns.
The format you’re actually storing might be XML, or JSON, which is just as a loose structure where every new piece of data that you store can have its own schema.
Each document, each piece of data, is given a unique id, but beyond that, you have flexibility. You don’t need to provide a formal schema. You don’t need to define relationships.

Document store NoSQL databases are similar to key-value databases in that there’s a key and a value. Data is stored as a value. Its associated key is the unique identifier for that value. The difference is that, in a document database, the value contains structured or semi-structured data. This structured/semi-structured value is referred to as a document and can be in XML, JSON or BSON format.
#### **Use cases**
Document store databases are preferable for:
- E-commerce platforms
- Content management systems
- Analytics platforms
- Blogging platforms.

Document store NoSQL databases are not the right choice if you have to run complex search queries or if your application requires complex multiple operation transactions.

#### **Examples of document store NoSQL databases**
- MongoDB
- Apache CouchDB
- DynamoDB
- Elasticsearch.

### **Key-Value Databases**
This is another category which is all about having no predefined schema for your data, simply storing and retrieving everything based on a key-value pair.

The records are stored and retrieved using a key that uniquely identifies the record, and it’s used to quickly find the data within the database.

The value could be assigned to whatever data type you want, it could be integer, string, large, small, binary data, or whatever.

From an API perspective, key-value stores are the simplest NoSQL data stores to use. The client can either get the value for the key, assign a value for a key or delete a key from the data store. The value is a blob that the data store just stores, without caring or knowing what’s inside; it’s the responsibility of the application to understand what was stored. Since key-value stores always use primary-key access, they generally have great performance and can be easily scaled. The key-value database uses a hash table to store unique keys and pointers (in some databases it’s also called the inverted index) with respect to each data value it stores. There are no column type relations in the database; hence, its implementation is easy. Key-value databases give great performance and can be very easily scaled as per business needs.

#### **Use cases and Advantages**
Here are some popular use cases of the key-value databases:
- For storing user session data
- Maintaining schema-less user profiles
- Storing user preferences
- Storing shopping cart data

#### **Disadvantages**
However key-value databases are not the ideal choice for every use case when:
- We have to query the database by specific data value.
- We need relationships between data values.
- We need to operate on multiple unique keys.
- Our business needs updating a part of the value frequently.

#### **Examples of Key-Value Databases**
There’s a lot of crossover here with document databases like
- DynamoDB
- MongoDB and
- CouchDB

as they could fall both under the document databases and key-value databases categories. But, other well-known Key-Value NoSQL databases would be
- MemcachedDB
- Riak
- Redis and
- Project Voldemort.

### **Graph Databases**
This is when your data is in a graph structure; small connected nodes, with relation between them, where there’s no one master point, and everything can be connected to everything else.

While many of the NoSQL databases tend to de-emphasize relationships, this goes the other way. It’s all about having small nodes of data that have connections to other small nodes of data.

Graph databases are basically built upon the Entity – Attribute – Value model. Entities are also known as nodes, which have properties. It is a very flexible way to describe how data relates to other data. Nodes store data about each entity in the database, relationships describe a relationship between nodes, and a property is simply the node on the opposite end of the relationship. Whereas a traditional database stores a description of each possible relationship in foreign key fields or junction tables, graph databases allow for virtually any relationship to be defined on-the-fly.

#### **Use cases and Advantages**
Graph base NoSQL databases are usually used in:
- Fraud detection
- Graph based search
- Network and IT operations
- Social networks, etc.

#### **Examples of graph base NoSQL databases**
Databases that falls under the graph-base NoSQL Database include
- Neo4j
- AllegroGraph
- ArangoDB and
- OrientDB.

**Neo4J** is probably the best here, though there are close contenders like AllegroGraph.

### **Column Database**
At a very surface level, column-store databases do exactly what is advertised on the tin: namely, that instead of organizing information into rows, it does so in columns. This essentially makes them function the same way that tables work in relational databases. Of course, since this is a NoSQL database, this data model makes them much more flexible.

More specifically, column databases use the concept of keyspace, which is sort of like a schema in relational models. This keyspace contains all the column families, which then contain rows, which then contain columns. 

#### **Advantages**
- Column stores are excellent at compression and therefore are efficient in terms of storage. This means you can reduce disk resources while holding massive amounts of information in a single column
- Since a majority of the information is stored in a column, aggregation queries are quite fast, which is important for projects that require large amounts of queries in a small amount of time.
- Scalability is excellent with column-store databases. They can be expanded nearly infinitely, and are often spread across large clusters of machines, even numbering in thousands. That also means that they are great for Massive Parallel Processing
- Load times are similarly excellent, as you can easily load a billion-row table in a few seconds. That means you can load and query nearly instantly.
- Large amounts of flexibility as columns do not necessarily have to look like each other. That means you can add new and different columns without disrupting the whole database. That being said, entering completely new record queries requires a change to all tables.
- Overall, column-store databases are great for analytics and reporting: fast querying speeds and abilities to hold large amounts of data without adding a lot of overhead make it ideal.
 
#### **Disadvantages of Column Databases**
 
As it usually is in life, nothing is perfect and there are a couple of disadvantages to using column-oriented databases as well:
- Designing an indexing schema that’s effective is difficult and time consuming. Even then, the said schema would still not be as effective as simple relational database schemas.
- While this may not be an issue for some users, incremental data loading is suboptimal and should be avoided if possible.
- This goes for all NoSQL database types and not just columnar ones. Security vulnerabilities in web applications are ever present and the fact that NoSQL databases lack inbuilt security features doesn’t help. If security is your number one priority, you should either look into relational databases you could employ or employ a well-defined schema if possible.
- Online Transaction Processing (OLTP) applications are also not compatible with columnar databases due to the way data is stored.

#### **Use cases**
Developers mainly use column databases in:
- Content management systems
- Blogging platforms
- Systems that maintain counters
- Services that have expiring usage
- Systems that require heavy write requests (like log aggregators)

Column store databases should be avoided if you have to use complex querying or if your querying patterns frequently change. Also avoid them if you don’t have an established database requirement, a trend which we are beginning to see in new systems.

#### **Examples of column store NoSQL databases**
The following databases fall under column-store databases.
- Cassandra and
- Apache Hadoop Hbase.
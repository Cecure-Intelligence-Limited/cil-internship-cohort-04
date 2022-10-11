> ## Do an extensive comparison on the different use cases for different kinds of database management systems.

There are different DBMS, and they are categorized under:

* Relational Database Management Systems
* Hierarchical Database Systems
* Network Database Systems
* Object-Oriented Database Systems
* NoSQL Database Systems

1. Relational Database Management Systems  
A relational database is developed by E. F. Codd in 1970. The various software systems used to maintain relational databases are known as a relational database management system (RDBMS). In this model, data is organised in rows and column structure i.e., two-dimensional tables and the relationship is maintained by storing a common field. It consists of three major components.  
In relational model, three key terms are heavily used such as relations, attributes, and domains. A relation nothing but is a table with rows and columns. The named columns of the relation are called as attributes, and finally the domain is nothing but the set of values the attributes can take.  
**Terminology used in Relational Model**  
• Tuple: Each row in a table is known as tuple.  
• Cardinality of a relation: The number of tuples in a relation determines its cardinality.  
• Degree of a relation: Each column in the tuple is called an attribute. The number of attributes in a relation determines its degree.  
**Keys of a relation**  
• Primary key- it is the key that uniquely identifies a table. It doesn’t have null values.  
• Foreign key- it refers to the primary key of some other table.it permits only those values which appear in the primary key of the table to which it refers.  
**Examples of RDMS**: Oracle, MySQL, Microsoft SQL Server, PostgreSQL, DB2.  
**Advantages**  
• Relational model is one of the most popular used database model.  
• In relational model, changes in the database structure do not affect the data access.  
• The revision of any information as tables consisting of rows and columns is much easier to understand.  
**Disadvantages**  
• Mapping of objects in relational database is very difficult.  
• Object oriented paradigm is missing in relation model.  
• Data Integrity is difficult to ensure with Relational database.

2. Hierarchical databases  
It is one of the oldest database model developed by IBM for information Management System. In a hierarchical database model, the data is organized into a tree-like structure. In simple language we can say that it is a set of organized data in tree structure.
This type of Database model is rarely used nowadays. Its structure is like a tree with nodes representing records and branches representing fields. The windows registry used in Windows XP is an example of a hierarchical database. Configuration settings are stored as tree structures with nodes. 
**Advantages**  
• The model allows us easy addition and deletion of new information.  
• Data at the top of the Hierarchy is very fast to access.  
• It worked well with linear data storage mediums such as tapes.  
• It relates well to anything that works through a one to many relationships.  
**Disadvantages**  
• It requires data to be repetitively stored in many different entities.  
• Now a day there is no longer use of linear data storage mediums such as tapes.  
• Searching for data requires the DBMS to run through the entire model from top to bottom until the required information is found, making queries very slow.  
• This model support only one to many relationships, many to many relationships are not supported.  

3. Network databases:
This is looks like a Hierarchical database model due to which many time it is called as modified version of Hierarchical database. Network database model organised data more like a graph and can have more than one parent node. The network model is a database model conceived as a flexible way of representing objects and their relationships.  \
**Advantages**  
• The network model is conceptually simple and easy to design.  
• The network model can represent redundancy in data more effectively than in the hierarchical model.  
• The network model can handle the one to many and many to many relationships which is real help in modelling the real-life situations.  
• The data access is easier and flexible than the hierarchical model.  
• The network model is better than the hierarchical model in isolating the programs from the complex physical storage details.  
**Disadvantages**  
• All the records are maintained using pointers and hence the whole database structure becomes very complex.  
• The insertion, deletion and updating operations of any record require the large number of pointers adjustments.  
• The structural changes to the database is very difficult.  

4. Object-oriented databases  
An object database is a system in which information is represented in the form of objects as used in object-oriented programming. Object oriented databases are different from relational databases which are table-oriented. The object-oriented data model is based on the object-oriented- programming language concept, which is now in wide use. Inheritance, polymorphism, overloading. object-identity, encapsulation and information hiding with methods to provide an interface to objects, are among the key concepts of object-oriented programming that have found applications in data modelling. The object-oriented data model also supports a rich type system, including structured and collection types.  
**Advantages**
• Object database can handle different types of data while relational data base handles a single data. Unlike traditional databases like hierarchical, network or relational, the object-oriented databases can handle the different types of data, for example, pictures, voice video, including text, numbers and so on.  
• Object-oriented databases provide us code reusability, real world modelling, and improved reliability and flexibility.  
•  The object-oriented database is having low maintenance costs as compared to other model because most of the tasks within the system are encapsulated, they may be reused and incorporated into new tasks.  
**Disadvantages**  
• There is no universally defined data model for an OODBMS, and most models lack a theoretical foundation.  
• In comparison to RDBMSs the use of OODBMS is still relatively limited.  
• There is a Lack of support for security in OODBMSs that do not provide adequate security mechanisms.  
• The system more complex than that of traditional DBMSs.  

5. NoSQL Database Systems  
A NoSQL Database is a mechanism for storage and retrieval of data. It is also called a non-SQL or non-relational database that uses a variety of data models for accessing and managing the data. NoSQL databases are used in real-time web applications and huge data. They may support SQL-like queries as well. That is why it is sometimes referred to as Not only SQL.
NoSQL Databases works great with mobile, web, and gaming applications. Because it provides characteristics that work well with modern applications. Some of the features are flexibility, scalability, high-performance, and highly functional APIs.  
**Difference Between SQL and NoSQL**  
SQL (Structured Query Language) or See-Quel is the standard query language for Relational Databases. SQL works on queries like insert, search, update, and delete database records.  
**Examples of SQL DBs**: MySQL, Oracle, MS-SQL, PostgreSQL   
**Examples of NoSQL DBs**: Redis, Amazon DynamoDB, Couchbase, MongoDB, Cassandra, Oracle NoSQL, Apache HBase, RavenDB, Memcached.


|  SQL Database                           | NoSQL Database	                                                        |
|-----------------------------------------|-------------------------------------------------------------------------|
| SQL is a relational database system     | NoSQL is a distributed database system	                                |
| SQL DBs are vertically scalable         | NoSQL DBs are horizontally scalable                                     |
| SQL DBs have a fixed or static schema   | NoSQL DBs have a dynamic schema                                         |
| SQL DBs are best for complex queries    | NoSQL DBs are not good for complex queries are they are not as powerful |
| SQL is a table based database           | NoSQL is a document based database                                      |


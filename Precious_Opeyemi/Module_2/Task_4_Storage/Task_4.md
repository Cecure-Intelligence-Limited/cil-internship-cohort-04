# Do an extensive comparison on the different use cases for different kinds of databases.

## 1. Centralized Database
It is the type of database that stores data at a centralized database system. It comforts the users to access the stored data from different locations through several applications. These applications contain the authentication process to let users access data securely. An example of a Centralized database can be Central Library that carries a central database of each library in a college/university.

### Advantages of Centralized Database
* It has decreased the risk of data management, i.e., manipulation of data will not affect the core data.

* Data consistency is maintained as it manages data in a central repository.

* It provides better data quality, which enables organizations to establish data standards.

* It is less costly because fewer vendors are required to handle the data sets.

### Disadvantages of Centralized Database
* The size of the centralized database is large, which increases the response time for fetching the data.

* It is not easy to update such an extensive database system.

* If any server failure occurs, entire data will be lost, which could be a huge loss.

* There is a lot of data access traffic for the centralized database. This may create a bottleneck situation.


## 2. Distributed Database
Unlike a centralized database system, in distributed systems, data is distributed among different database systems of an organization. These database systems are connected via communication links. Such links help the end-users to access the data easily. Examples of the Distributed database are Apache Cassandra, HBase, Ignite, etc.

We can further divide a distributed database system into:

* Homogeneous DDB: Those database systems which execute on the same operating system and use the same application process and carry the same hardware devices.
* Heterogeneous DDB: Those database systems which execute on different operating systems under different application procedures, and carries different hardware devices.

### Advantages of Distributed Database
* Modular development is possible in a distributed database, i.e., the system can be expanded by including new computers and connecting them to the distributed system.

* One server failure will not affect the entire data set.

* The database is easier to expand as it is already spread across multiple systems and it is not too complicated to add a system.

* The database can be stored according to the departmental information in an organisation. In that case, it is easier for a organisational hierarchical access.

### Disadvantages of Distributed Database
* The distributed database is quite complex and it is difficult to make sure that a user gets a uniform view of the database because it is spread across multiple locations.

* This database is more expensive as it is complex and hence, difficult to maintain.

* It is difficult to provide security in a distributed database as the database needs to be secured at all the locations it is stored. Moreover, the infrastructure connecting all the nodes in a distributed database also needs to be secured.

* It is difficult to maintain data integrity in the distributed database because of its nature. There can also be data redundancy in the database as it is stored at multiple locations.

## 3. Relational Database
This database is based on the relational data model, which stores data in the form of rows(tuple) and columns(attributes), and together forms a table(relation). A relational database uses SQL for storing, manipulating, as well as maintaining the data. E.F. Codd invented the database in 1970. Each table in the database carries a key that makes the data unique from others. Examples of Relational databases are MySQL, Microsoft SQL Server, Oracle, etc.

### Properties of Relational Database
There are following four commonly known properties of a relational model known as ACID properties, where:

**A** means Atomicity: This ensures the data operation will complete either with success or with failure. It follows the 'all or nothing' strategy. For example, a transaction will either be committed or will abort.

**C** means Consistency: If we perform any operation over the data, its value before and after the operation should be preserved. For example, the account balance before and after the transaction should be correct, i.e., it should remain conserved.

**I** means Isolation: There can be concurrent users for accessing data at the same time from the database. Thus, isolation between the data should remain isolated. For example, when multiple transactions occur at the same time, one transaction effects should not be visible to the other transactions in the database.

**D** means Durability: It ensures that once it completes the operation and commits the data, data changes should remain permanent.

### Advantages of Relational Database
* Ease of use: The revision of any information as tables consisting of rows and columns is much easier to understand.

* Different tables from which information has to be linked and extracted can be easily manipulated by operators such as project and join to give information in the form in which it is desired.

* Precision: The usage of relational algebra and relational calculus in the manipulation of he relations between the tables ensures that there is no ambiguity, which may otherwise arise in establishing the linkages in a complicated network type database.

* Security: Security control and authorization can also be implemented more easily by moving sensitive attributes in a given table into a separate relation with its own authorization controls. If authorization requirement permits, a particular attribute could be joined back with others to enable full information retrieval.

### Disadvantages of Relational Database
* Performance: A major constraint and therefore disadvantage in the use of relational database system is machine performance. If the number of tables between which relationships to be established are large and the tables themselves effect the performance in responding to the sql queries.

* Physical Storage Consumption:With an interactive system, for example an operation like join would depend upon the physical storage also. It is, therefore common in relational databases to tune the databases and in such a case the physical data layout would be chosen so as to give good performance in the most frequently run operations. It therefore would naturally result in the fact that the lays frequently run operations would tend to become even more shared.

* Slow extraction of meaning from data:  if the data is naturally organized in a hierarchical manner and stored as such, the hierarchical approach may give quick meaning for that data

## 4. NoSQL Database
NoSQL Database is a non-relational Data Management System, that does not require a fixed schema. It avoids joins, and is easy to scale.

### There are four types of NoSQL Database:

* Key-value storage: It is the simplest type of database storage where it stores every single item as a key (or attribute name) holding its value, together.

* Document-oriented Database: A type of database used to store data as JSON-like document. It helps developers in storing data by using the same document-model format as used in the application code.

* Graph Databases: It is used for storing vast amounts of data in a graph-like structure. Most commonly, social networking websites use the graph database.

* Wide-column stores: It is similar to the data represented in relational databases. Here, data is stored in large columns together, instead of storing in rows.

***"" The major purpose of using a NoSQL database is for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. ""***

### Advantages of NoSQL database
* NoSQL databases are highly flexible as they can store and combine any type of data, both structured and unstructured, unlike relational databases that can store data in a structured way only.
  
* NoSQL databases allow you to dynamically update the schema to evolve with changing requirements while ensuring that it would cause no interruption or downtime to your application.
  
* NoSQL databases can scale to accommodate any type of data growth while maintaining low cost.

* NoSQL databases are built for great performance, measured in terms of both throughput (it is a measure of overall performance) and latency (it is the delay between request and actual response).

* NoSQL databases don’t require expensive licensing fees and can run on inexpensive hardware, rendering their deployment cost-effective.

### Disadvantages of NoSQL database
* There is no standard that defines rules and roles of NoSQL databases. The design and query languages of NoSQL databases vary widely between different NoSQL products – much more widely than they do among traditional SQL databases.

* Backups are a drawback in NoSQL databases. Though some NoSQL databases like MongoDB provide some tools for backup, these tools are not mature enough to ensure proper complete data backup solution.

* NoSQL puts a scalability and performance first but when it comes to a consistency of the data NoSQL doesn’t take much consideration so it makes it little insecure as compared to the relational database e.g., in NoSQL databases if you enter same set of data again, it will take it without issuing any error whereas relational databases ensure that no duplicate rows get entry in databases.


## 5. Object Oriented Database
An object-driven database is an object-driven and relational database collection. There are different items, such as java, C++, that can be saved in a relational database using object-oriented programming languages, but object-oriented databases are suitable for these components. An object-oriented database will be organized instead of actions around objects and data instead of logic. In contrast to an alphanumeric value, for example, a multimedia record in a relational database can be a definable data object.

### Advantages of Object Oriented Database
* Reduced Maintenance:  The primary goal of object-oriented development is the assurance that the system will enjoy a longer life while having far smaller maintenance costs.  Because most of the processes within the system are encapsulated, the behaviors may be reused and incorporated into new behaviors.

* Real-World Modeling:  Object-oriented system tend to model the real world in a more complete fashion than do traditional methods.  Objects are organized into classes of objects, and objects are associated with behaviors.  The model is based on objects, rather than on data and processing.

* Improved Reliability and Flexibility:  Object-oriented system promise to be far more reliable than traditional systems, primarily because new behaviors can be "built" from existing objects. Because objects can be dynamically called and accessed, new objects may be created at any time.  The new objects may inherit data attributes from one, or many other objects.  Behaviors may be inherited from super-classes, and novel behaviors may be added without effecting existing systems functions.

* High Code Reusability:  When a new object is created, it will automatically inherit the data attributes and characteristics of the class from which it was spawned.  The new object will also inherit the data and behaviors from all superclasses in which it participates.  When a user creates a new type of a widget, the new object behaves "wigitty", while having new behaviors which are defined to the system.

### Disadvantages of Object Oriented Database
* Object-oriented Development is not a panacea - Object-oriented Development is best suited for dynamic, interactive environments, as evidenced by its widespread acceptance in CAD/CAM and engineering design systems.  Wide-scale object-oriented corporate systems are still unproved, and many bread-and-butter information systems applications (i.e. payroll, accounting), may not benefit from the object-oriented approach.

* Object-oriented Development is not a technology - Although many advocates are religious in their fervor for object-oriented systems, remember that all the "HOOPLA" is directed at the object-oriented approach to problem solving, and not to any specific technology. 

* Object-oriented Development is not yet completely accepted by major vendors - Object-oriented Development has gained some market respectability, and vendors have gone from catering to a "lunatic fringe" to a respected market.

## 6. Graph database
A graph database is a NoSQL-type database system based on a topographical network structure. The idea stems from graph theory in mathematics, where graphs represent data sets using nodes, edges, and properties.

* Nodes or points are instances or entities of data which represent any object to be tracked, such as people, accounts, locations, etc.

* Edges or lines are the critical concepts in graph databases which represent relationships between nodes. The connections have a direction that is either unidirectional (one way) or bidirectional (two way).

* Properties represent descriptive information associated with nodes. In some cases, edges have properties as well.

### Advantages of graph databases
* Processing unstructured data which can save a complex object in one operation.

* Simple query language and visual result.

* Ease of change due to the flexible data structure.

* A large increase in productivity when working with interrelated data, compared with relational databases

### Disadvantages of graph databases
* Performance is lower on simple queries.

* Limited functionality and customization options.

* The complexity of the search for specialists working with graph databases.

* The user-base is small, making it hard to find support when running into a problem.

* There is no standardized query language. The language depends on the platform used.
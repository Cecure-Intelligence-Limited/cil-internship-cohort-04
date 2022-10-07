Question:
Do a comparison on the different use cases for different kinds of databases

<h1 style="text-align: center;"> Answer </h1>


Database : Database is an organized collection of data.
Databases can be classified according to their model which is the logical structure of a database and fundamentally determines in which manner data can be stored, organized and manipulated.

The major classifications of databases are:
- Relational database
- NoSQL or non-relational database

## Relational database or SQL databases
Relational databases are the other major type of database, opposite of NoSQL. With a relational database, information is stored structured about other data. A good representation of a relational database would be the connection between a person shopping online and their shopping cart. Relational databases are often preferred when you are concerned about the integrity of your data, or when you're not particularly focused on scalability.
A relational database is a type of data store organizing data into tables that are related to one another, which explains the name. Structured Query Language is the core of these systems as it is used to communicate with and manage these databases, having given birth to their second name — SQL databases. RDBMSs have a predefined schema, meaning data resides in rows (records) and columns (attributes) with a strict structure. Here, each record usually holds a value for each attribute, resulting in clear dependencies between different data points.
- Scalability. Relational databases usually scale vertically, meaning data lives on a single server, and scaling is done by adding more computer (CPU, GPU, and RAM) power to that one server. However, switching from small to bigger machines often involves downtime. Scaling an SQL database between multiple servers (horizontal scaling) can be a challenge as it requires data structure changes and additional engineering efforts.
- Performance. Relational databases show great performance with intensive read/write operations on small to medium datasets. They also offer improved speed of data retrieval by adding indexes to data fields to query and join tables. However, when the amount of data and user requests grows, the performance may suffer.
- Security. Due to the integrated structure and data storage system, SQL databases don’t require much engineering effort to make them well-protected. They are a good choice for building and supporting complex software solutions, where any interaction has a range of consequences. One of the SQL fundamentals is ACID compliance (Atomicity, Consistency, Isolation, Durability). The ACID-compliance is a preferred option if you build, for instance, eCommerce or financial applications, where database integrity is critical.

## Non-relational or NoSQL database
A NoSQL database has a hierarchy similar to a file folder system and the data within it is unstructured, or non-relational. This lack of structure allows them to process larger amounts of data at speed and makes it easier to expand in the future. Cloud computing regularly makes use of NoSQL databases.
A non-relational database is a non-tabular database that uses different data models for storing, managing, and accessing data. The most common data models are
- document-oriented — to store, retrieve, and manage data as JSON documents;
- key-value — to represent data as a collection of key-value pairs, where keys are unique strings having corresponding data values;
- graph — to store data in the node-edge-node structure where nodes are data points and edges are their relationships; and
- wide-column — to store data in the tabular format with flexible columns, meaning they can vary from row to row in the same table.
- Object-oriented databases - are ones in which data is represented as objects and classes. An object is an item, such as a name or phone number, while a class is a group of objects. Object-oriented databases also share little similarity with relational database. Consider using an object-oriented database when you have a large amount of complex data that you want to process quickly.

As these databases aren’t limited to a table structure, they are called NoSQL. They allow for storing unstructured data such as texts, photos, videos, PDF files, and a bunch of other formats. Data is simple to query but isn’t always classified into rows and columns as in a relational database.
- Scalability. When the number of data and requests increases, non-relational or NoSQL databases are usually scaled horizontally by adding more servers to the pool. They share data between various servers where each contains only a part of the data, decreasing the request-per-second rate in each server.
- Performance. Non-relational databases are known for their high-performance: They have a distributed design, which lowers the performance load on the system and provides a large number of users with simultaneous access. Such databases can store unlimited sets of data that come in all types and shapes. They are also quite flexible when it comes to changing data types.
- Security. Unlike relational systems, NoSQL databases have weak security, making them a major concern for many infrastructures. While they may provide ACID guarantees, they are typically available within the scope of one database partition, though some DBMSs offer advanced security features that meet strict security and compliance standards.
Since NoSQL databases allow for reserving various data types together and scaling it by growing around multiple servers, their never-decreasing popularity is understandable. Also, building an MVP it’s a great option for startups with sprint-based Agile development. NoSQL requires no pre-deployment preparations, making quick, time-lag-free updates to the data structure easier.


# USE CASES

## When to use SQL instead of NoSQL
- You’re working with complex queries and reports.
With SQL you can build one script that retrieves and presents your data. NoSQL doesn’t support relations between data types. Running queries in NoSQL is doable, but much slower.

- You have a high transaction application.
SQL databases are a better fit for heavy duty or complex transactions because it’s more stable and ensure data integrity.

- You need to ensure ACID compliance.
(Atomicity, Consistency, Isolation, Durability) or defining exactly how transactions interact with a database. 

- You don’t anticipate a lot of changes or growth.
If you’re not working with a large volume of data or many data types, NoSQL would be overkill.


## When to use NoSQL instead of SQL

- ##### You are constantly adding new features, functions, data types.
It’s difficult to predict how the application will grow over time.
Changing a data model is SQL is clunky and requires code changes.
A lot of time is invested designing the data model because changes will impact all or most of the layers in the application.
In NoSQL, we are working with a highly flexible schema design or no predefined schema.
The data modeling process is iterative and adaptive. Changing the structure or schema will not impact development cycles or create any downtime for the application.

- ##### You are not concerned about data consistency and 100% data integrity is not your top goal.
This is related to the above SQL requirement for ACID compliance. For example, with social media platforms, it isn’t important if everyone sees your new post at the exact same time, which means data consistency is not a priority.

- ##### You have a lot of data, many different data types, and your data needs will only grow over time.
NoSQL makes it easy to store all different types of data together and without having to invest time into defining what type of data you’re storing in advance.

- ### Your data needs scale up, out, and down.
As discussed above, NoSQL provides much greater flexibility and the ability to control costs as your data needs change.

###### NoSQL databases are likely the better choice when:
    - You have a large volume and variety of data
    - Scalability is a top priority
    - You need continuous availability
    - Working with big data or performing real-time analytics

###### Here are several scenarios where NoSQL has been proven to make sense:
- Fraud detection and identity authentication
- Inventory and catalog management
- Personalization, recommendations and customer experience
- Internet of things (IoT) and sensor data
- Financial services and payments
- Messaging
- Logistics and asset management
- Content management systems
- Digital and media management

Let’s look at the first three NoSQL use cases more closely.
- Fraud detection and identity authentication
Protecting sensitive personal data and ensuring only real customers have access to applications is understandably a top priority. Of course, this is only heightened in areas such as financial services, banking, payments, and insurance.
For effective fraud detection and identity authentication, the data types analyzed extend far beyond transactional information. They could include anything from demographic data, help desk information from the CRM system, website interactions, historical shopping data, and much, much more. It would be impossible to develop a schema upfront that would define everything customers might want to do in the future. This environment requires the flexibility of a NoSQL database where any type of data element can be quickly added to the mix.
- Inventory and catalog management
NoSQL databases are known for their high availability and predictable, cost-effective, horizontal scalability. This makes them a great match for e-commerce companies with massive, growing online catalogs and loads of inventory to manage. 
These organizations need the flexibility to quickly update their product mix, without volume limits. And the worst thing imaginable for them would be to have their site or application go down on Black Friday or during the Christmas holiday season.
That’s because NoSQL databases:
Have fast response times with extremely low latency, even as a customer base expands
Can handle all types of data, structured and unstructured, from a variety of sources
Are built to cost-effectively scale, with the ability to store, manage, query, and modify extremely large volumes of data and concurrently deliver personalized experiences to millions of customers
Are extremely flexible, so you can continuously innovate and improve the customer experience
Can seamlessly capture, integrate, and analyze new data that is continuously flowing in
Are adept at being the backbone for the machine learning and AI engine algorithms that provide recommendations and power personalization


# Other Use Cases Factors to Consider When Choosing Between Relational DB(SQL) and Non-relational DB(NoSQL)


###### Schema Flexibility
The biggest advantage offered by NoSQL Databases is the flexibility of schema. They allow for attributes to be added or forgotten at will. So the very question that you should ask yourself is whether your use case can take advantage of this schema flexibility. 
Let’s say for example you are trying to implement an IoT platform that stores data from different kinds of sensors, you will be better off choosing a NoSQL Database because you do not have an upfront idea about the attributes of your data and it is bound to change as the application evolves.
On the other hand, if you are implementing a simple web application with all the user attributes known upfront, there really is no reason to look beyond RDBMS.

###### Workload Volume
As discussed above, NoSQL Databases prioritize partition tolerance. This means they are great at handling large amounts of data and executing typical queries over them. So if your application requires data processing over TBs of data, it is better to go with a NoSQL Database from the start itself.
This is not to say that Relational Database systems do not support TBs of data. Most of them like Oracle can very well handle TBs of data. But if most of your queries touch upon this entire data, then it may be better to think about a NoSQL distributed alternative. 
Another critical factor is that some of the NoSQL Databases need a minimal hardware level to perform acceptably. For example, Cassandra performs best when there is at least a 3 node cluster. But if your data is not enough to fill even a single node, you may have to spend more in the initial phase without using up the resources effectively.

###### Data Consistency
Relational Databases are great at enforcing consistency. NoSQL Databases mostly go by eventual consistency when it comes to writes. This means, there is a chance that your application will read old data till the time writes are propagated to all the nodes. If your application cannot afford such scenarios, you should use a classic Relational Database.
This limitation of NoSQL Databases makes them a non-starter for transactional loads. Databases like MongoDB have started providing transactional support recently and even then, it is limited to short-duration transactions.

###### Relational Database vs NoSQL: Storage Requirements
Relational Database systems perform best when data can be expressed in a denormalized form. This allows you to optimize your storage requirements. 
Comprehensive SQL layers with complex joining abilities allow the database to make the most of denormalized data. If your data cannot be expressed like this, your use case may be better served using a NoSQL Database. On the other hand, if your data has well-formed relationships that can be used in denormalizing into multiple levels, you should consider using an SQL database.

###### Relational Database Vs NoSQL: Write Performance Requirements
NoSQL Databases compromise consistency to achieve fast write performance. SQL databases offer to write safely with consistency but at the expense of a bit of speed. Eventual consistency may be a strict nonstarter in some use cases but may be acceptable in others.
A good answer to the question ‘Can we afford to let go of strict consistency for faster writes ?’ can help you arrive at the RDBMS vs NoSQL decision quickly.

###### Read Requirements
RDBMS possesses a great ability to query data and execute complex joins. NoSQL Databases perform best when data is stored in the same form in which they are to be consumed. 
For example, let’s say you are creating a reporting solution. You can choose to implement it by storing data for specific reports in different tables and access it through a simple select statement, in this case, you are better off with a NoSQL Database.
The other choice is to store the base data in a small number of related tables and execute various queries and aggregate them to form different reports and this use case points to using a Relational Database.

###### Infrastructure Constraints
NoSQL Databases are well known for their ability to run using cheap general-purpose hardware and scale horizontally. Since the cost of a high-end special-purpose instance is more than multiple cheap general-purpose instances, there is the possibility of cost advantage in case you use a NoSQL Database.
This becomes valid only when your data volume is significant enough for a distributed database to make sense. For handling TBs of data, Relational Databases often require high-end special-purpose hardware. 





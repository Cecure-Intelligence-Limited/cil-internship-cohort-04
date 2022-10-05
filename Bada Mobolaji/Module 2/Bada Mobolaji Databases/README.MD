# COMPARISON OF VARIOUS TYPES OF DATABASE MODELS

| Hierarchical databases   | Network databases | Relational databases(RDBMS) | Object-Oriented databases(OODBMS) |
| :----------------------- |:----------------- | :------------------- | :------------------------ |
|1. It is the least adopted curently.   | Compared to the hierarchial it is more adopted. | It is the most widely adopted. |Compared to relational database its adoption is relatively limited.     |
|2.  Data at the top of the Hierarchy is very fast to access. | The data access is easier and flexible than the hierarchical model.| The data access is not as fast as the network model. | The data access is the fastest.     |
|3. It relates well to anything that works through a one to many relationships.  |The network model can handle the one to many and many to many relationships which is really helpful in modelling the real-life situations. | In this model, information is stored in interconnected tables organised in row and column structure. | The object-oriented data model is based on the object-oriented- programming language concept.    |
|4. It worked well with linear storage medium like tapes.| It works well with on-disk or in-memory storage management. | It works well with both local storage on the computer and cloud storage. | It works well with both local storage on the computer and cloud storage.    |
|5. It is easy to handle ad maintain.  | It is difficult to handle and maintain. | It supports both data independence and structure independence concept which makes the database maintenance, administration and usage much easier than the other models.   | It is easy to maintain but ot very easy to handle.     |
|6. It is easy to learn for non programmers. | It's easy to learn for non programmers. | It is easy to learn for non programmers.  | Difficult to learn for non programmers.    |
|7. It is not as secure as RDBMS. | It is not as secure as RDBMS. | It is easier to maintain security as compare to other models. |   There is a Lack of support for security in OODBMSs that do not provide adequate security mechanisms.  |
|8. It can handle only a single data type.   |It can handle only a single data type. | It can handle only a single data type. |Object database can handle different types of data.  |
|9. Relatively low cost of maintenance.  | Relatively high cost of maintance. | Highest cost of maintenace.   | Lowest cost of maintenace.    |
|10. They do not have a standard query language. | They do not have a standard query language.|They have SQL as the standard query language.    | They do not have a standard query language. It could be java or python.     |



# **EXTENSIVE COMPARISON OF THE DIFFERENT USE CASES OF DATABASE MANAGEMENT SYSTEMS**


| Database Type   | Advantage| Disadvanatge | Use Cases |
| :----------------------- |:----------------- | :------------------- | :------------------------ |
| Oracle Database |1. The most advanced technology <br/> 2. A wide range of solutions               |1. Oracle tends to be a high-cost solution that smaller, non-enterprise-level organizations might not be able to afford. <br/> 2. Your current system specifications might not be enough to implement Oracle. Many businesses have to upgrade their hardware before using Oracle solutions. |If you’re a large organization that needs to manage a massive amount of data, Oracle could be the ideal choice.|
| MySQL | 1. As an open-source RDBMS solution, MySQL is free to use in any way you want. <br/> 2. MySQL has a reputation for being compatible with many other database systems. |1. Because MySQL prioritizes speed and agility over features, you might find that it’s missing some of the standard features found in other solutions. For example, the ability to create incremental backups. <br/> 2. The free version of MySQL does not come with on-demand support. However, MySQL does have an active volunteer community, user forums, and a lot of documentation that you may find useful.  |MySQL is a particularly valuable RDBMS solution for businesses that need a solution with enterprise-level capabilities, but are operating under strict budget constraints. It is an extremely powerful and reliable modern RDBMS with a free tier.|
|Microsoft SQL Server |1. This database engine allows you to access dashboard graphics and visuals via mobile devices.<br/> 2. Companies that rely heavily on Microsoft products will enjoy the way SQL Server integrates easily with these applications. <br/>3.  Microsoft SQL Server has built a reputation around being fast and stable. |1. Considering that there are plenty of free database engines available, the cost of Microsoft SQL Server is steep. It's over $14,000 for one enterprise-level license per core. There are scaled-down licensing options for approximately $3,700 and $900, and a free version you can use to test the platform.<br/>2. This resource-heavy RDBMS may require you to purchase better hardware. |If you're an enterprise-level corporation that relies heavily on Microsoft products, the speed, agility, and reliability of Microsoft SQL Server could be an excellent choice. |
| PostgreSQL |1. PostgreSQL has a lot more features than other DBMSs. These extra features include table inheritance, a rich set of data types (including native support for JSON), ability to define a column as an "array" of column types, among others.<br/> 2.  PostgreSQL consistently ranks as the most ACID-compliant DBMS. If data integrity is your top priority, PostgreSQL could be an ideal choice.<br/>3.  PostgreSQL can work with massive database tables. |1. PostgreSQL doesn't have the best documentation compared to other database engines. If you run into an issue, you might need to seek help from a private PostgreSQL support firm, or try your luck with the community support forums.<br/>2.  PostgreSQL excels with read-write operations for data that needs validation, but slowdowns could happen when working with read-only operations.  | Since PostgreSQL is completely free and scalable, this is an excellent solution for companies of any size. More importantly, if you can benefit from a DBMS with native JSON support, PostgreSQL is for you |
|MongoDB |1. This DBMS was specifically made to support JSON and NoSQL data.<br/> Since MongoDB stores and manages any kind of information, developers face fewer restrictions when incorporating data into a MongoDB database.<br/>2. MongoDB has become a popular DBMS for web-based applications. |1.  MongoDB will not accept SQL queries. You can use additional tools to translate your SQL queries to work with this database engine. However, the workaround can be inconvenient.<br/>2. MongoDB takes time and more experience to set up properly than other solutions.<br/>3.  The native settings on MongoDB don't tend to be very secure. Additional steps will be required to secure this database. |If you're building an application on top of an operational database and you need a really fast response time, MongoDB could be the right choice for you. However, if you're building a data warehouse for analytics purposes, you might want to use a different platform |
|Neo4j |1. Neo4j CQL query language commands are in humane readable format and very easy to learn.<br/>2.  It does NOT require complex Joins to retrieve connected/related data as it is very easy to retrieve it's adjacent node or relationship details without Joins or Indexes. |1. It has a limitation of supporting number of Nodes, Relationships and Properties.<br/> 2. It does not support Sharding. | It is used for fraud detection, real time reccomendation engine, master data management, network and IT operations. |
| MariaDB |1. MariaDB has improved functions in all versions and it’s capable of supporting more than 200,000 connections.<br/>2. A high thread pool capability helps optimize the server resource usage, resulting in increased uptime. |MariaDB only supports JSON data types starting with version 10.2 and higher. Even then, it is only an alias for LONGTEXT, presented for compatibility reasons. |This is vital for eCommerce platforms, where intensive online transaction processing (OLTP) is common. |
   

  













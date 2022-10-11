# What is Database
A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.

## What is a database management system (DBMS)?
A database typically requires a comprehensive database software program known as a database management system (DBMS). A DBMS serves as an interface between the database and its end users or programs, allowing users to retrieve, update, and manage how the information is organized and optimized. A DBMS also facilitates oversight and control of databases, enabling a variety of administrative operations such as performance monitoring, tuning, and backup and recovery.

Some examples of popular database software or DBMSs include MySQL, Microsoft Access, Microsoft SQL Server, FileMaker Pro, Oracle Database, and dBASE.

Data within the most common types of databases in operation today is typically modeled in rows and columns in a series of tables to make processing and data querying efficient. The data can then be easily accessed, managed, modified, updated, controlled, and organized. Most databases use structured query language (SQL) for writing and querying data.

## What is Structured Query Language (SQL)?

SQL is a programming language used by nearly all relational databases to query, manipulate, and define data, and to provide access control. SQL was first developed at IBM in the 1970s with Oracle as a major contributor, which led to implementation of the SQL ANSI standard, SQL has spurred many extensions from companies such as IBM, Oracle, and Microsoft. Although SQL is still widely used today, new programming languages are beginning to appear.

## Evolution of the database

Databases have evolved dramatically since their inception in the early 1960s. Navigational databases such as the hierarchical database (which relied on a tree-like model and allowed only a one-to-many relationship), and the network database (a more flexible model that allowed multiple relationships), were the original systems used to store and manipulate data. Although simple, these early systems were inflexible. In the 1980s, relational databases became popular, followed by object-oriented databases in the 1990s. More recently, NoSQL databases came about as a response to the growth of the internet and the need for faster speed and processing of unstructured data. Today, cloud databases and self-driving databases are breaking new ground when it comes to how data is collected, stored, managed, and utilized.

## What is Database schema? 
A database schema is a structure that defines the logical view of the entire database. Schema defines how the data is managed and how the relations among them are associated. It formulates all the constraints that are to be applied to the data.

# Categories of Database
There are many different categories of databases. The best database for a specific organization depends on how the organization intends to use the data.

- ***Relational databases:***
Relational databases became dominant in the 1980s. Items in a relational database are organized as a set of tables with columns and rows. Relational database technology provides the most efficient and flexible way to access structured information.
- ***Object-oriented databases:***
Information in an object-oriented database is represented in the form of objects, as in object-oriented programming.
- ***Distributed databases:***
A distributed database consists of two or more files located in different sites. The database may be stored on multiple computers, located in the same physical location, or scattered over different networks.
- ***Data warehouses:***
A central repository for data, a data warehouse is a type of database specifically designed for fast query and analysis.
- ***NoSQL databases:***
A NoSQL, or nonrelational database, allows unstructured and semistructured data to be stored and manipulated (in contrast to a relational database, which defines how all data inserted into the database must be composed). NoSQL databases grew popular as web applications became more common and more complex.
- ***Graph databases:***
A graph database stores data in terms of entities and the relationships between entities.
OLTP databases. An OLTP database is a speedy, analytic database designed for large numbers of transactions performed by multiple users.

These are only a few of the several dozen types of databases in use today. Other, less common databases are tailored to very specific scientific, financial, or other functions. In addition to the different database types, changes in technology development approaches and dramatic advances such as the cloud and automation are propelling databases in entirely new directions. Some of the latest databases include

- ***Open source databases:***
An open source database system is one whose source code is open source; such databases could be SQL or NoSQL databases.
- ***Cloud databases:***
A cloud database is a collection of data, either structured or unstructured, that resides on a private, public, or hybrid cloud computing platform. There are two types of cloud database models: traditional and database as a service (DBaaS). With DBaaS, administrative tasks and maintenance are performed by a service provider.
- ***Multimodel database:***
Multimodel databases combine different types of database models into a single, integrated back end. This means they can accommodate various data types.
- ***Document/JSON database:***
Designed for storing, retrieving, and managing document-oriented information, document databases are a modern way to store data in JSON format rather than rows and columns.
- ***Self-driving databases:***
The newest and most groundbreaking type of database, self-driving databases (also known as autonomous databases) are cloud-based and use machine learning to automate database tuning, security, backups, updates, and other routine management tasks traditionally performed by database administrators.

# Kinds of Databases

## 1. **MySQL**

MySQL is best suitable for almost any data storage needs. It helps to scale database for cases like management applications where data is originated in a particular manner or structure as defined for implying organizational needs and structure. It can easily share the data and can join the data from different tables to generate some data knowledge or pattern. It is an open-source  and has the largest community so almost every issue can quickly be resolved. Many companies are relying on MySQL for their use cases such as from Twitter(using it to manage real-time tweet and retweet counts) to small management enterprises.

### ***What are the benefits of Using MySQL?***
- MySQL Enterprise can help to monitor real-time availability.
- It can integrate with DevOps and Cloud environment also.
- SQL, NoSQL can be combined through MySQL.
- Joins support help to scale data for multiple use cases quickly and fact tables can also be used to obtain fact-specific information.
### ***MySQL Problems***
- MySQL has an issue of high and extensive connection churn as most of its resources are used in concurrent request sessions. 
- Real-time logging troubleshooting is slow or not available as it costs higher and is disabled by default. 
- Development time is high as compared to other databases as changes (if made) need extensive expertise to optimize master/slave or multi-master architecture.

## 2. **MongoDB**

MongoDB use cases involve around faster search operations, documented storage, and real-time metadata management. Companies like UIDAI and eBay are using MongoDB for their Use purposes. UIDAI is using MongoDB to store and search images faster, and so does the Shutterfly. Shutterfly also uses this for metadata management after implementing various databases like Oracle and Cassandra, and they Quoted MongoDB as best fit but without compromise.
### ***What are the Benefits MongoDB?***
- The storage format is vital to value pairs hence searching is faster and also has in place update capability.
- Heterogeneous data can be managed, and sharding can be implemented at any scale.
- Powerful SQL query structure is used to enhance performance and data can be easily distribute to other locations.
### ***MongoDB Problems***
 - There is no stored procedure compatibility in MongoDB, so the logic binding is difficult as well as joins are also not supported 
 - Comparatively more complex structure for transactions and NoSQL makes it difficult to support ACID properties.

## 3. **Amazon Redshift Architecture**

Running Data warehouse is not a well-thinked case but running it for complex and some mission-critical use case is the thing. Redshift provides a use case for mission-critical workloads as well as for extensive transactional logging. Redshift performs traditional data warehousing in a very smooth manner with the support of always-available services. For example, NASDAQ reporting system is based on Redshift so any critical data load mistake can put oneself to jail also. 
### ***Amazon Redshift Benefits***
- Automatic administrative tasks, SQL like query structure and easy to use UI makes it more adaptable
- It is very cost effective and more AWS components can be integrated easily
- It has integration support with JDBC like drivers that help to access SQL databases for specific use cases
### ***Problems with Amazon Redshift***
- The sensitivity of data such as Private data is not well defined as it is a cloud-based solution and sensitive data must not be stored on the cloud
- There is no inbuilt capability in redshift for data uniqueness, and it is needed to implement on application end or functional side
- Parallel uploading is only supported for services such as S3, DynamoDB, and EMR

## 4. **BigQuery**

BigQuery provides best out of the use cases like massive, fast SQL querying, massive data sets and a single view of data points. Moreover, its use cases rely on secure Access, and BigQuery architecture is considered as a use case of Dremel technology that provides the fastest and best results once the query is executed. Data warehouse as a service is not the only case with BigQuery but collaborating with other datasets at a massive scale and a single view for multiple data viewpoints.
### ***Benefits of using BigQuery***
 - The structure of datasets, tables, rows, and columns helps to adapt BigQuery quickly
 - Multi-level execution tree on thousands of servers can process data faster and join collectively at root
### ***Problems with BigQuery***
- It allows only one Join per query, so need to use the nested structure of questions for getting the work is done 
- The documentation says to use a TOP function instead of GROUP BY on multiple groups but TOP also produces one group Getting data from files is very difficult as if there exists an error in the data we need to solve it locally and re-upload those files.

## 5. **Azure SQL**
PaaS is the category in which the Azure SQL  stands. Pay as you go when more scalability is required on SQL database with no interruptions. It can be used as a single database, elastic pool or as a managed instance. Capable of creating Virtual machines with SQL server. Grisard management AG is using Azure SQL platform that trims their cost to 40% as they described it as a cost-effective and fast architecture to work on. WhiteSource is also using the Azure platform and Azure Kubernetes service for streamline application development.
### ***What are the benefits of Azure SQL?***
- It implements a fully managed database service, and SQL server is never needed to manage and update
- It has approximate query performance capability that makes it somewhat intelligent by default
- It is not very costly and provides more managed services on data warehouse and database storages
### ***Problems with Azure SQL***
- It is not adequate to use the Azure platform for small datasets as it cost higher to manage such data sets
- Some SQL server functionalities are not available in Azure SQL database and migration
- From on-premise to Azure need some changes to made before migrating. But is it easier to that.

## 6. **Oracle Database Architecture**
When there is a need to put the development and testing of data on the cloud, Oracle has the best use case, or we can say it is best to use Oracle database for such cases. Every update of Oracle databases contains new technology updates too, but data will not affect new technologies. It will remain as previous. Use case of Oracle database on cloud increased every year as they provide more in- Memory capabilities to look into problem and technology advancements are also making transactions faster.
### ***Benefits of using Oracle Database***
- Oracle databases have more customer satisfaction as compared to other databases as every oracle database is backward compatible
- They are more functional as they are used in almost every corporate use case is handled by oracle databases.
- Fully managed ACID support is available, makes business use cases more efficient.
## 7. **IBM DB2**
IBM brings faster and scalable database DB2 that always fulfills the requirements of every use case. It has the inbuilt capability of intelligence that quickly adopts the elements and works according to them. IBM Watson analytics is built over core DB2 and Netezza engines. Watson is the biggest analytics tool in the market and supposed to solve every use case as Netezza engines are used with it that increases the performance of querying data.
### ***Benefits of using IBM DB2***
- IBM DB2 has flexible platform support
- It can create large virtual pool buffer that may help to expand the business dataset sizes
- DB2 is cheaper than Oracle products, so might play as a cost-effective player
### ***Problems with DB2***
- Uses 31 bit addressing whereas competitor products have 64 bit addressing
- There are multiple tools available that is excellent, but most of the times it is confusing to choose as many tools can obtain help resolve the same business logic

## 8. **Apache Cassandra Architecture**
When there is a need to customize and load data on free peer-to-peer connection and scalability is required to expand by expanding nodes (not hardware), Cassandra is the best fit. Also, when there is more write request than to reading Cassandra is best suitable as it uses nodes architecture to write at many distributed server nodes. This is the first of its kind database that uses a distributed node structure. Data partitioning is also supported, and data can be accessed by a defined unique primary key. IoT data can be easily maintained with Cassandra and Time series data also as Facebook designs it for this use case.  
### ***Apache Cassandra Benefits***
- Always on architecture for the continuous availability of data resource
- Natively Distributed for replication and processing of a large amount of data over several nodes and distributed servers
- Fast linear scale performance
- It has multiple secondary indexes for each table
- The data model is flexible as it allows you to add entities or attributes over time
### ***Problems with Apache Cassandra***
- Updates and deletes are individual implementation cases of Write but not immediate, also read operations are comparatively slower than writes
- Cassandra doesn’t support aggregations and joins
- Cassandra isn’t a Data Warehouse

## 9. **Apache Druid Architecture**
The use case of Druid defines that better performance analytics can be performed by using Druid as a Database service or warehouse service. It works better with Kafka streamline topics as it is efficient to load data from Kafka topics. Stream data, time-series data or click events data can be optimized, used for Business Analytics and Business Intelligence operations. Some use cases define that Druid is capable of troubleshooting the root of the problem caused. Digital marketing, Network Flows, and IoT & Device management are some of the best and suitable use cases for Druid application development.
### ***What are the benefits of Apache Druid?***
- Queries can auto manage Sub-Second OLAP
- Druid Offers lock-free data ingestion for streaming sources like Kafka
- Fast, as in, It can process thousands of queries per second
- Best aggregation performance throughput for Business Intelligence and analytics
### ***Problems with Apache Druid***
- Choose one card of Druid is not correctly choose one in 99% cases as described by various usages by various companies
- Aggregated data is stored, no row-level analytics can be performed
- Better to be used only if the primary goal is Time series data
## 10. **Snowflake Computing**
Migration and conversion are significant factors that tend to use Snowflake. Companies like CapSecurity describes that they increase reporting speed up to 200 times from Snowflake as compared to their previous use case. Snowflake encrypts data by default, and semi-structured data can also be processed with SQL in a structured way. This use case increases the capability of where snowflake fits in.
### ***What are the benefits of Snowflake?***
- Data without being encrypted isn’t allowed
- It can load semi-structured data quickly without even defining schema by end users
- Users can query semi-structured data just like structured data in SQL way and also joins possible to apply (but need to implement my own)
- Can handle an unlimited number of simultaneous users.
- It is not OLTP replacement but can handle OLTP data effectively as compared to legacy.
## Source 
- [Oracle]("https://www.oracle.com/uk/database/what-is-database/")
- [Xenostack]("https://www.xenonstack.com/blog/databases")
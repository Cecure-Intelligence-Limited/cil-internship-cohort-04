# Do an extensive comparison on the different use cases for different kinds of databases.

# What is Database?
A database is a systematic collection of data. They support electronic storage and manipulation of data. Databases make data management easy.

## There a Various Categories of database
* Hierarchical Databases
* Network databases
* Object-oriented databases
* Relational databases
* NoSQL databases

## 1. Hierarchical Databases:
A hierarchical database is a data model in which data is stored in the form of records and organized into a tree-like structure, or parent-child structure, in which one parent node can have many child nodes connected through links.

The hierarchical database model is most appropriate for use cases in which the main focus of information gathering is based on a concrete hierarchy, such as several individual employees reporting to a single department at a company.

## Advantages and Disadvantages
### Pros
* Promotes data sharing.
* Parent/child relationship promotes conceptual simplicity and data integrity.
* Database security is provided and enforced by DBMS.
* Efficient with 1:M relationships.


### Cons
* Requires knowledge of physical data storage characteristics.
* Navigational system requires knowledge of hierarchical path.
* Implementation limitations.
* Changes in structure require changes in all application programs.
* No data definition.



## 2. Network databases:
A network database organized according to ownership of records, allowing records to have multiple owners and thus providing multiple access paths to the data.


## Advantages and Disadvantages
### Pros
* Because it has the many-many relationship, network database model can easily be accessed in any table record in the database.
* For more complex data, it is easier to use because of the multiple relationship founded among its data.
* Easier to navigate and search for information because of its flexibility.


### Cons
* Difficult for first time users.
* Difficulties with alterations of the database because when information entered can alter the entire database.



## 3. Object-oriented databases:
An object-oriented database (OOD) is a database system that can work with complex data objects — that is, objects that mirror those used in object-oriented programming languages.

In object-oriented programming, everything is an object, and many objects are quite complex, having different properties and methods.

## Advantages and Disadvantages
### Pros
* Easy to save and retrieve data quickly.
* Seamless integration with object-oriented programming languages.
* Easier to model the advanced real world problems.
* Extensible with custom data types.

### Cons
* Not as widely adopted as relational databases.
* No universal data model. Lacks theoretical foundations and standards.
* Does not support views.
* High complexity causes performance issues.


## 4. Relational databases:
A relational database is a collection of information that organizes data points with defined relationships for easy access. In the relational database model, the data structures -- including data tables, indexes and views -- remain separate from the physical storage structures, enabling database administrators to edit the physical data storage without affecting the logical data structure.

## Advantages and Disadvantages
### Pros
* Simplicity of Model.
* Easy to use.
* Accuracy.
* Data Integrity.


### Cons
* The relational database system is costly to set up and maintain.
* A relational database is comprised of rows and columns, which requires a lot of physical memory because each operation performed depends on separate storage.
* While using the relational database over multiple servers, its structure changes and becomes difficult to handle, especially when the quantity of the data is large.
* Complexity in Structure.




## Kinds of Database


## 1. MongoDB

MongoDB use cases involve around faster search operations, documented storage, and real-time metadata management. Companies like UIDAI and eBay are using MongoDB for their Use purposes. UIDAI is using MongoDB to store and search images faster, and so does the Shutterfly. Shutterfly also uses this for metadata management after implementing various databases like Oracle and Cassandra, and they Quoted MongoDB as best fit but without compromise.
### Advantages
- The storage format is vital to value pairs hence searching is faster and also has in place update capability.
- Heterogeneous data can be managed, and sharding can be implemented at any scale.
- Powerful SQL query structure is used to enhance performance and data can be easily distribute to other locations.
### MongoDB Problems
 - There is no stored procedure compatibility in MongoDB, so the logic binding is difficult as well as joins are also not supported 
 - Comparatively more complex structure for transactions and NoSQL makes it difficult to support ACID properties.



 ## 2. MySQL

MySQL is best suitable for almost any data storage needs. It helps to scale database for cases like management applications where data is originated in a particular manner or structure as defined for implying organizational needs and structure. It can easily share the data and can join the data from different tables to generate some data knowledge or pattern. It is an open-source  and has the largest community so almost every issue can quickly be resolved. Many companies are relying on MySQL for their use cases such as from Twitter(using it to manage real-time tweet and retweet counts) to small management enterprises.

### Advantages
- MySQL Enterprise can help to monitor real-time availability.
- It can integrate with DevOps and Cloud environment also.
- SQL, NoSQL can be combined through MySQL.
- Joins support help to scale data for multiple use cases quickly and fact tables can also be used to obtain fact-specific information.
### MySQL Problems
- MySQL has an issue of high and extensive connection churn as most of its resources are used in concurrent request sessions. 
- Real-time logging troubleshooting is slow or not available as it costs higher and is disabled by default. 
- Development time is high as compared to other databases as changes (if made) need extensive expertise to optimize master/slave or multi-master architecture.



## 3. BigQuery

BigQuery provides best out of the use cases like massive, fast SQL querying, massive data sets and a single view of data points. Moreover, its use cases rely on secure Access, and BigQuery architecture is considered as a use case of Dremel technology that provides the fastest and best results once the query is executed. Data warehouse as a service is not the only case with BigQuery but collaborating with other datasets at a massive scale and a single view for multiple data viewpoints.
### Advantages
 - The structure of datasets, tables, rows, and columns helps to adapt BigQuery quickly
 - Multi-level execution tree on thousands of servers can process data faster and join collectively at root
### Disadvantages
- It allows only one Join per query, so need to use the nested structure of questions for getting the work is done 
- The documentation says to use a TOP function instead of GROUP BY on multiple groups but TOP also produces one group Getting data from files is very difficult as if there exists an error in the data we need to solve it locally and re-upload those files.



## 4. Amazon Redshift Architecture

Running Data warehouse is not a well-thinked case but running it for complex and some mission-critical use case is the thing. Redshift provides a use case for mission-critical workloads as well as for extensive transactional logging. Redshift performs traditional data warehousing in a very smooth manner with the support of always-available services. For example, NASDAQ reporting system is based on Redshift so any critical data load mistake can put oneself to jail also. 
### Advantages
- Automatic administrative tasks, SQL like query structure and easy to use UI makes it more adaptable
- It is very cost effective and more AWS components can be integrated easily
- It has integration support with JDBC like drivers that help to access SQL databases for specific use cases
### Disadvantages
- The sensitivity of data such as Private data is not well defined as it is a cloud-based solution and sensitive data must not be stored on the cloud
- There is no inbuilt capability in redshift for data uniqueness, and it is needed to implement on application end or functional side
- Parallel uploading is only supported for services such as S3, DynamoDB, and EMR



## 5. IBM DB2
IBM brings faster and scalable database DB2 that always fulfills the requirements of every use case. It has the inbuilt capability of intelligence that quickly adopts the elements and works according to them. IBM Watson analytics is built over core DB2 and Netezza engines. Watson is the biggest analytics tool in the market and supposed to solve every use case as Netezza engines are used with it that increases the performance of querying data.
### Advantages
- IBM DB2 has flexible platform support
- It can create large virtual pool buffer that may help to expand the business dataset sizes
- DB2 is cheaper than Oracle products, so might play as a cost-effective player
### Disadvantages
- Uses 31 bit addressing whereas competitor products have 64 bit addressing
- There are multiple tools available that is excellent, but most of the times it is confusing to choose as many tools can obtain help resolve the same business logic



## 6. Azure SQL
PaaS is the category in which the Azure SQL  stands. Pay as you go when more scalability is required on SQL database with no interruptions. It can be used as a single database, elastic pool or as a managed instance. Capable of creating Virtual machines with SQL server. Grisard management AG is using Azure SQL platform that trims their cost to 40% as they described it as a cost-effective and fast architecture to work on. WhiteSource is also using the Azure platform and Azure Kubernetes service for streamline application development.
### Advantages
- It implements a fully managed database service, and SQL server is never needed to manage and update
- It has approximate query performance capability that makes it somewhat intelligent by default
- It is not very costly and provides more managed services on data warehouse and database storages
### Disadvantages
- It is not adequate to use the Azure platform for small datasets as it cost higher to manage such data sets
- Some SQL server functionalities are not available in Azure SQL database and migration
- From on-premise to Azure need some changes to made before migrating. But is it easier to that.



## 7. Oracle Database Architecture
When there is a need to put the development and testing of data on the cloud, Oracle has the best use case, or we can say it is best to use Oracle database for such cases. Every update of Oracle databases contains new technology updates too, but data will not affect new technologies. It will remain as previous. Use case of Oracle database on cloud increased every year as they provide more in- Memory capabilities to look into problem and technology advancements are also making transactions faster.
### Advantages
- Oracle databases have more customer satisfaction as compared to other databases as every oracle database is backward compatible
- They are more functional as they are used in almost every corporate use case is handled by oracle databases.
- Fully managed ACID support is available, makes business use cases more efficient.



## 8. IBM Information Management System (IMS)
IBM Information Management System (IMS), built on IBM System z, delivers the lowest cost transaction and hierarchical database management system for mission critical OLTP. By providing capabilities for both managing and distributing data, IBM IMS delivers the highest levels of availability, performance, security, and scalability in the industry. Expansive integration capabilities enable SOA exploitation, enhanced analytics, new application development, mobile technology, and financial banking systems.
### Advantages
- Easier application deployment and management
- Support for ever-growing transaction and data volumes
- Fast linear scale performance
- Helps in managing data.
- Increases Efficiency
### Disadvantages
- Constant Monitoring issues.
- Modifications and other revisions can be quite tricky at times.
- Systems can break down and then interrupting smooth operations.



## 9. Apache Druid Architecture
The use case of Druid defines that better performance analytics can be performed by using Druid as a Database service or warehouse service. It works better with Kafka streamline topics as it is efficient to load data from Kafka topics. Stream data, time-series data or click events data can be optimized, used for Business Analytics and Business Intelligence operations. Some use cases define that Druid is capable of troubleshooting the root of the problem caused. Digital marketing, Network Flows, and IoT & Device management are some of the best and suitable use cases for Druid application development.
### Advantages
- Queries can auto manage Sub-Second OLAP
- Druid Offers lock-free data ingestion for streaming sources like Kafka
- Fast, as in, It can process thousands of queries per second
- Best aggregation performance throughput for Business Intelligence and analytics
### Disadvantages
- Choose one card of Druid is not correctly choose one in 99% cases as described by various usages by various companies
- Aggregated data is stored, no row-level analytics can be performed
- Better to be used only if the primary goal is Time series data



## 10. PostgreSQL
We use postgreSQL in instances where we need an isolated database to support a microservice architecture, or an isolated system. It allows us to leverage a simple and inexpensive database option where a larger scale enterprise configuration would be over engineering. We commonly use it for build automation systems in our organization. As a proven and extremely flexible database management system, Postgres is used in numerous industries and scenarios. The object-relational database is a first-class basis for the safe operation of a wide variety of applications. For example, the open source project is the perfect solution for online banking software, due to its integrated transaction concept and support for MVCC (multi-version concurrency control: procedure for efficient performance of competing access).

### Advantages
- Highly expandable
- Possible to process complex data types (e.g. geographical data)
- Flexible full text search
- Good language support (Python, Java, Perl, PHP, C, C++, etc.)
### Disadvantages
- Not available on all hosts by default
- Expandable documentation only available in English
- Comparatively low reading speed

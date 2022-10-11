# DATABASES
In this article I will try to give a comprehensive and indepth explanation of databases. Some of the topics I will elaborate on, are listed below:
- What is data?
- Importance of data
- What is a database?
- Why do we need a database?
- Types of databases
- Database Management Systems
- Examples of databases  

## What is data?
Data is defined as a collection of raw, unorganised facts and details like text, observations, figures, symbols and descriptions of things etc. In other words, data does not carry any specific purpose and has no significance by itself.  
Data is all around us, from the number of houses on our street, to the number of our friends and their gender, our nuclear and extended family, scores we got in different subject while in school. All this and many more are examples of datas. 

## Importance of data
The importance of a set of data varies from non important to very important. Listed below are some examples of data and their significance:  
- Population of a Country: Knowing the population of a county helps the government plan and provide basic amenities for its citizens.
- Audit Firms: Audit firms use the data collected by a company in a period of time to give accurate analysis of the financial strenght or weakness of a company.
- Education: Scholarships is given to student based on what the student's data(record) shows.
- Climate change: Accurate data gives a very good balance scope of what the environment will look like in years to come.
- Taxation: Tax data helps the government tax its citizens appropriately. 

## What is a database?
Database is a stuctured system where data is stored and organized. We use database to not only keep data, it is also used to impose a set of rules on the data that is being kept.  
Databases keeps  data securely, values stored in them can be gotten very fast. They are reliable and they can serve lots of people at the same time.

## Why do we need databases?
As opposed to using our memory or a spread sheet to keep our data, databases offer the following advantages:
- Size: Databases can store millions of data
- Security: They can be configured in a way that informations stored in them won't be visible to any third-party.
- Redundancy: You can have multiple copies of the data if required.
- Accuracy: You can specify what type of value can be saved.

## Database Management Systems (DBMS)
A DBMS is a software that can be installed on your personal computer or on a server, then you would use it to manage one or more databases.
DBMS like MySQL, MongoDB, Postgress and others are erroneously reffered to as the "database". They are not the database, they are softwares used in managing the database. DBMS are used to enforce rules on the database.  

There are different DBMS, and they are categorized under:

- Hierarchical Database Systems
- Network Database Systems
- Relational Database Management Systems
- Object-Oriented Database Systems
- NoSQL Database Systems  

### Hierachical Database Systems
It is one of the oldest database model. This type of Database model is rarely used nowadays. Data in this model are stored in a tree structured way. Nodes of the tree represent records and leaves of the tree represent feature. It was developed by IBM for information management system.  

Advantages of this model includes:

- Information can be added and deleted easily
- Its works best for data that has a "one-to-many" relationship.
- Data at the top of the tree are easily accessible.  
  
Disadvantages includes:
- The model does not support a "many-to-many" relationship
- Accessing data at the bottom of the tree takes a long time
- It requires data to be repetitively stored in many different entities.
- Now a day there is no longer use of linear data storage mediums such as tapes.  


### Network Database
A network database is a type of database model wherein multiple member records or files can be linked to multiple owner files and vice versa.  
Network database model organised data more like a graph and can have more than one parent node.  

Advantages of this database includes:
- This database model is quite easy to design
- Accessing data from this model is easier in comparison to Hierachical model
- It can handle both "one-to-many" and "many-to-many" relationships.  

Disadvantages of this model are:
- Structural changes to the database is not easy.
- All the records are maintained using pointers and hence the whole database structure becomes very complex.
- The insertion, deletion and updating operations of any record require the large number of pointers adjustments.

### Relational Database
Relational databases are the most popular type of database currently. data is organised in rows and column structure i.e., two-dimensional tables and the relationship is maintained by storing a common field.  
In relational model, three key terms are heavily used such as relations, attributes, and domains. A relation nothing but is a table with rows and columns. The named columns of the relation are called as attributes, and finally the domain is nothing but the set of values the attributes can take.   

Advantages of this database includes:
- In this model, changes in the database structure do not affect the data access.
- Security can be easily computed for data in this model compared to other models.
- In this we can write complex query to accesses or modify the data from database.

Disadvantages include:
- Mapping objects is difficult
- The simplicity of implementing this model can easily lead to bad designs.
- Data Integrity is difficult to ensure with Relational database.  

### Object Oriented Database
Object-oriented databases emerged to meet the need of coupling object-oriented programming languages with a database. Although object-oriented databases have been around since the late 1970s, they have seen relatively low adoption in recent decades with the growing prevalence of functional programming languages and relational databases. But a growing user community is awakening to the ability of object-oriented databases to deliver fast queries with lighter code.

Advantages of this model:
- Maintaining this database model is much cheaper compared to other models.
- It works with minimal headache with OOP languages.
- It can handle different data types.

Disadvantages:
- The system is more complex than other databases.
- Security is not well supported in this model.
- 
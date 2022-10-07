# 5 Kinds of Database and Their Use Cases

## 1. Relational Database  

A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables.

### Use Cases

Relational database is best for very structured data that can be nicely organized in a table of rows and columns which can be queried using a language known as Structural Query Languaged (SQL).  

Each row in a SQL database is a distinct entity (e.g. a `employee`), and each column is an attribute that describes that entity (e.g. `name`, `address`, `job title`, `date employed`, etc.). A SQL database is a great fit for transaction-oriented systems such as customer relationship management tools, accounting software, and e-commerce platforms.

Because of these distinct, structured relationships between rows and columns in a table, SQL databases are best when you need ACID compliance. ACID stands for:

- **A**tomicity – each transaction either succeeds completely or is fully rolled back.

- **C**onsistency – data written to a database must be valid according to all defined rules.

- **I**solation – When transactions are run concurrently, they do not contend with each other, and act as if they were being run sequentially.

- **D**urability – Once a transaction has been committed to the database, it is considered permanent, even in the event of a system failure.  

ACID compliance protects the integrity of your data by defining exactly what a transaction is and how it interacts with your database. It avoids database tables from becoming out-of-sync, which is very essential for financial transactions. ACID compliance guarantees validity of transactions even in the face of errors, technology failures, disastrous events, etc.

Examples of Relational database are: MySQL, PostgreSQL, Oracle, etc.

## 2. Document-oriented Databases

A document-oriented database, or document store, is a data storage system designed for storing, retrieving and managing document-oriented information, also known as semi-structured data. Usually using the JSON, YAML, XML, or BSON formats, one record can hold as much data as you need, in any data type (or types) you prefer – there are no constraints.

Document-oriented database system employs CRUD operation for data manipulation. CRUD stands for:

- **C**reation (or insertion)
- **R**etrieval (or query, search, read or find)
- **U**pdate (or edit)
- **D**eletion (or removal)

### Use Cases

Document-oriented databases are good for representing large volumes of **irregular** data, particularly data that is stored with metadata that describes each document. Due to their flexible schema, document-oriented databases are perfect for collecting and storing any type of data. It can be used for creating and incorporating new forms of data, including user-generated content, such as images, comments, and videos. Because of this, we can effectively manage unstructured data collected and aggregated from a variety of sources.

Examples of document database are MongoDB, Amazon DocumentDB, etc.

## 3. Key-value Databases

As the name itself suggests, each record in this kind of a non-relational database is structured as a key-value pair. Similarly to a dictionary, the key can be used to identified the value.

### Use Cases

Key-value databases are utilized when the data one is dealing with is not too complex and speed is a priority. They are good for use-cases where you want to look up individual records very quickly. For example, it is a great choice for storing configuration data.

Examples of key-value databases are Aerospike, Berkeley DB, etc.

## 4. Graph databases

A graph database (GDB) is a database that uses graph structures for semantic queries with nodes, edges, and properties to represent and store data. Using a graph database, you have two types of data to handle. Nodes stand for the items in the database, and edges define their relationships, also called graphs

### Use Cases

Graph database is employed when you need to create relationships between data and quickly query these relationships. Out of all the types of databases, Graph database is the best option in cases when the relationships and their analysis is a priority.

Graph databases have advantages for use cases such as social networking, recommendation engines, and fraud detection. For instance, Graph databases are used by many of the most popular social media platforms to gather information about the relations between users.  

Examples of Graph databases are Neo4J, Dgraph, etc.

## 5. Column Store Databases

A column store database is a type of database that stores data using a column oriented model. While a relational database is optimized for storing rows of data, typically for transactional applications, a column store database is optimized for fast retrieval of columns of data, typically in analytical applications. Column-oriented storage for database tables is an important factor in analytic query performance because it drastically reduces the overall disk I/O requirements and reduces the amount of data you need to load from disk.

Instead of a schema found in relational databases, column store databases use the keyspace to store the column families. Similarly to a table, a column family contains columns and rows. Yet, there's a clear difference: in this case, a column does not span across all the rows. Instead, it is contained in a row, which also means different rows can have different columns. Apart from columns, each row also has an identifier, called a key, and every column holds a name, a value, and a timestamp. A few good examples of databases using the column family model are Cassandra, Vertica, and Druid.

### Use Cases

A columnar database stores data by columns rather than by rows, which makes it suitable for analytical query processing, and thus for data warehouses. What makes them a good option for handling big data is their fast performance, efficient data compression, and great scalability.

## Refrences

[Different Types of Databases: What Should You Know?](https://www.bitdegree.org/tutorials/types-of-databases/)

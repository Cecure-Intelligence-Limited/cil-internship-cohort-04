# **Computing Service Models**
## **What is Cloud Computing?**

Cloud Computing refers to manipulating, configuring, and accessing the hardware and software resources remotely. It offers online data storage, infrastructure, and application.

Cloud computing offers platform independency, as the software is not required to be installed locally on the PC. Hence, the Cloud Computing is making our business applications mobile and collaborative.

There are certain **services** and **models** working behind the scene making the cloud computing feasible and accessible to end users. Following are the working models for cloud computing:
- Deployment Models
- ### **Service Models**

Deployment Models

Deployment models define the type of access to the cloud, i.e., how the cloud is located? Cloud can have any of the four types of access: **Public, Private, Hybrid, and Community.**

- Public Cloud
The public cloud allows systems and services to be easily accessible to the general public. Public cloud may be less secure because of its openness.

- Private Cloud
The private cloud allows systems and services to be accessible within an organization. It is more secured because of its private nature.

- Community Cloud
The community cloud allows systems and services to be accessible by a group of organizations.

- Hybrid Cloud
The hybrid cloud is a mixture of public and private cloud, in which the critical activities are performed using private cloud while the non-critical activities are performed using public cloud.

## **Service Models**
Cloud computing is based on service models. These are categorized into three basic service models which are:
- Infrastructure-as–a-Service (IaaS)
- Platform-as-a-Service (PaaS)
- Software-as-a-Service (SaaS)
- Anything-as-a-Service (XaaS) is yet another service model, which *might* includes **Network-as-a-Service, Business-as-a-Service, Identity-as-a-Service, Database-as-a-Service or Strategy-as-a-Service.**

### **Infrastructure-as-a-Service**

The Infrastructure-as-a-Service (IaaS) is the most basic level of service. Each of the service models inherit the security and management mechanism from the underlying model. IaaS provides access to fundamental resources such as physical machines, virtual machines, virtual storage, etc. Apart from these resources, the IaaS also offers:
- Virtual machine disk storage
- Virtual local area network (VLANs)
- Load balancers
- IP addresses
- Software bundles

All of the above resources are made available to end user via server virtualization. Moreover, these resources are accessed by the customers as if they own them.

#### **IaaS Delivery**

IaaS delivers cloud computing infrastructure, including servers, network, operating systems, and storage, through virtualization technology. These cloud servers are typically provided to the organization through a dashboard or an API, giving IaaS clients complete control over the entire infrastructure.

IaaS provides the same technologies and capabilities as a traditional data center without having to physically maintain or manage all of it. IaaS clients can still access their servers and storage directly, but it is all outsourced through a “virtual data center” in the cloud.

As opposed to SaaS or PaaS, IaaS clients are responsible for managing aspects such as applications, runtime, OSes, middleware, and data. However, providers of the IaaS manage the servers, hard drives, networking, virtualization, and storage. Some providers even offer more services beyond the virtualization layer, such as databases or message queuing.

#### **IaaS Advantages**

IaaS offers many advantages, including:

- The most flexible cloud computing model
- Easy to automate deployment of storage, networking, servers, and processing power
- Hardware purchases can be based on consumption
- Clients retain complete control of their infrastructure
- Resources can be purchased as-needed
- Highly scalable

#### **IaaS Characteristics**

Characteristics that define IaaS include:

- Resources are available as a service
- Cost varies depending on consumption
- Services are highly scalable
- Multiple users on a single piece of hardware
- Organization retain complete control of the infrastructure
- Dynamic and flexible

#### **When to Use IaaS**

Just as with SaaS and PaaS, there are specific situations when IaaS is most advantageous.

- Startups and small companies may prefer IaaS to avoid spending time and money on purchasing and creating hardware and software.
- Larger companies may prefer to retain complete control over their applications and infrastructure, but they want to purchase only what they actually consume or need.
- Companies experiencing rapid growth like the scalability of IaaS, and they can change out specific hardware and software easily as their needs evolve.
- Anytime you are unsure of a new application’s demands, IaaS offers plenty of flexibility and scalability.

#### **IaaS Limitations & Concerns**

Many limitations associated with SaaS and PaaS models – such as data security, cost overruns, vendor lock-in and customization issues – also apply to the IaaS model. Particular limitations to IaaS include:

- **Security:**
 While the customer is in control of the apps, data, middleware, and the OS platform, security threats can still be sourced from the host or other virtual machines (VMs). Insider threat or system vulnerabilities may expose data communication between the host infrastructure and VMs to unauthorized entities.

- **Legacy systems operating in the cloud:**
 While customers can run legacy apps in the cloud, the infrastructure may not be designed to deliver specific controls to secure the legacy apps. Minor enhancement to legacy apps may be required before migrating them to the cloud, possibly leading to new security issues unless adequately tested for security and performance in the IaaS systems.

- **Internal resources and training:**
 Additional resources and training may be required for the workforce to learn how to effectively manage the infrastructure. Customers will be responsible for data security, backup, and business continuity. Due to inadequate control into the infrastructure however, monitoring and management of the resources may be difficult without adequate training and resources available inhouse.

- **Multi-tenant security:** Since the hardware resources are dynamically allocated across users as made available, the vendor is required to ensure that other customers cannot access data deposited to storage assets by previous customers. Similarly, customers must rely on the vendor to ensure that VMs are adequately isolated within the multitenant cloud architecture.

#### **Examples of IaaS**

Popular examples of IaaS include:

- DigitalOcean
- Linode
- Rackspace
- Amazon Web Services (AWS)
- Cisco Metacloud
- Microsoft Azure
- Google Compute Engine (GCE)

### **Platform-as-a-Service**
Cloud platform services, also known as Platform as a Service (PaaS), provide cloud components to certain software while being used mainly for applications. PaaS delivers a framework for developers that they can build upon and use to create customized applications. All servers, storage, and networking can be managed by the enterprise or a third-party provider while the developers can maintain management of the applications.

#### **PaaS Delivery**

The delivery model of PaaS is similar to SaaS, except instead of delivering the software over the internet, PaaS provides a platform for software creation. This platform is delivered via the web, giving developers the freedom to concentrate on building the software without having to worry about operating systems, software updates, storage, or infrastructure.

PaaS allows businesses to design and create applications that are built into the PaaS with special software components. These applications, sometimes called middleware, are scalable and highly available as they take on certain cloud characteristics.

#### **PaaS Advantages**

No matter the size of your company, using PaaS offers numerous advantages, including:

- Simple, cost-effective development and deployment of apps
- Scalable
- Highly available
- Developers can customize apps without the headache of maintaining the software
- Significant reduction in the amount of coding needed
- Automation of business policy
- Easy migration to the hybrid model

#### **PaaS Characteristics**

PaaS has many characteristics that define it as a cloud service, including:

- Builds on virtualization technology, so resources can easily be scaled up or down as your business changes
- Provides a variety of services to assist with the development, testing, and deployment of apps
- Accessible to numerous users via the same development application
- Integrates web services and databases

#### **When to Use PaaS**

Utilizing PaaS is beneficial, sometimes even necessary, in several situations. For example, PaaS can streamline workflows when multiple developers are working on the same development project. If other vendors must be included, PaaS can provide great speed and flexibility to the entire process. PaaS is particularly beneficial if you need to create customized applications.

This cloud service also can greatly reduce costs and it can simplify some challenges that come up if you are rapidly developing or deploying an app.

#### **PaaS Limitations & Concerns**

- **Data security:** Organizations can run their own apps and services using PaaS solutions, but the data residing in third-party, vendor-controlled cloud servers poses security risks and concerns. Your security options may be limited as customers may not be able to deploy services with specific hosting policies.
- **Integrations:** The complexity of connecting the data stored within an onsite data center or off-premise cloud is increased, which may affect which apps and services can be adopted with the PaaS offering. Particularly when not every component of a legacy IT system is built for the cloud, integration with existing services and infrastructure may be a challenge.
- **Vendor lock-in:** Business and technical requirements that drive decisions for a specific PaaS solution may not apply in the future. If the vendor has not provisioned convenient migration policies, switching to alternative PaaS options may not be possible without affecting the business.
- **Customization of legacy systems:** PaaS may not be a plug-and-play solution for existing legacy apps and services. Instead, several customizations and configuration changes may be necessary for legacy systems to work with the PaaS service. The resulting customization can result in a complex IT system that may limit the value of the PaaS investment altogether.
- **Runtime issues:** In addition to limitations associated with specific apps and services, PaaS solutions may not be optimized for the language and frameworks of your choice. Specific framework versions may not be available or perform optimally with the PaaS service. Customers may not be able to develop custom dependencies with the platform.
- **Operational limitation:** Customized cloud operations with management automation workflows may not apply to PaaS solutions, as the platform tends to limit operational capabilities for end users. Although this is intended to reduce the operational burden on end users, the loss of operational control may affect how PaaS solutions are managed, provisioned, and operated.

#### **Examples of PaaS**

Popular examples of PaaS include:

- AWS Elastic Beanstalk
- Windows Azure
- Heroku
- Force.com
- Google App Engine
- OpenShift


### **Software-as-a-Service**
Software as a Service, also known as cloud application services, represents the most commonly utilized option for businesses in the cloud market. SaaS utilizes the internet to deliver applications, which are managed by a third-party vendor, to its users. A majority of SaaS applications run directly through your web browser, which means they do not require any downloads or installations on the client side.

#### **SaaS Delivery**

Due to its web delivery model, SaaS eliminates the need to have IT staff download and install applications on each individual computer. With SaaS, vendors manage all potential technical issues, such as data, middleware, servers, and storage, resulting in streamlined maintenance and support for the business.

#### **SaaS Advantages**

SaaS provides numerous advantages to employees and companies by greatly reducing the time and money spent on tedious tasks such as installing, managing, and upgrading software. This frees up plenty of time for technical staff to spend on more pressing matters and issues within the organization.

#### **SaaS Characteristics**

There are a few ways to help you determine when SaaS is being utilized:

- Managed from a central location
- Hosted on a remote server
- Accessible over the internet
- Users not responsible for hardware or software updates

#### **When to Use SaaS**

SaaS may be the most beneficial option in several situations, including:

- Startups or small companies that need to launch ecommerce quickly and don’t have time for server issues or software
- Short-term projects that require quick, easy, and affordable collaboration
- Applications that aren’t needed too often, such as tax software
- Applications that need both web and mobile access

#### **SaaS Limitations & Concerns**

- **Interoperability:** Integration with existing apps and services can be a major concern if the SaaS app is not designed to follow open standards for integration. In this case, organizations may need to design their own integration systems or reduce dependencies with SaaS services, which may not always be possible.
- **Vendor lock-in:** Vendors may make it easy to join a service and difficult to get out of it. For instance, the data may not be portable–technically or cost-effectively–across SaaS apps from other vendors without incurring significant cost or inhouse engineering rework. Not every vendor follows standard APIs, protocols, and tools, yet the features could be necessary for certain business tasks.
- **Lack of integration support:** Many organizations require deep integrations with on-premise apps, data, and services. The SaaS vendor may offer limited support in this regard, forcing organizations to invest internal resources in designing and managing integrations. The complexity of integrations can further limit how the SaaS app or other dependent services can be used.
- **Data security:** Large volumes of data may have to be exchanged to the backend data centers of SaaS apps in order to perform the necessary software functionality. Transferring sensitive business information to public-cloud based SaaS service may result in compromised security and compliance in addition to significant cost for migrating large data workloads.
- **Customization:** SaaS apps offer minimal customization capabilities. Since a one-size-fits-all solution does not exist, users may be limited to specific functionality, performance, and integrations as offered by the vendor. In contrast, on-premise solutions that come with several software development kits (SDKs) offer a high degree of customization options.
- **Lack of control:** SaaS solutions involves handing control over to the third-party service provider. These controls are not limited to the software–in terms of the version, updates, or appearance–but also the data and governance. Customers may therefore need to redefine their data security and governance models to fit the features and functionality of the SaaS service.
- **Feature limitations:** Since SaaS apps often come in a standardized form, the choice of features may be a compromising tradeoff against security, cost, performance, or other organizational policies. Furthermore, vendor lock-in, cost, or security concerns may mean it’s not viable to switch vendors or services to serve new feature requirements in the future.
- **Performance and downtime:** Because the vendor controls and manages the SaaS service, your customers now depend on vendors to maintain the service’s security and performance. Planned and unplanned maintenance, cyber-attacks, or network issues may impact the performance of the SaaS app despite adequate service level agreement (SLA) protections in place.

#### **Examples of SaaS**

Popular examples of SaaS include:

- Google Workspace (formerly GSuite)
- Dropbox
- Salesforce
- Cisco WebEx
- SAP Concur
- GoToMeeting

### **Everything-as-a-Service**
Everything as a Service also known as XaaS refers to the highly-individualized, responsive, data-driven products and offerings that are fully controlled by customers—and the data they provide via everyday IoT-powered sources like cell phones and thermostats.

By using that data generated over the cloud, businesses can innovate faster, deepen their customer relationships, and sustain the sale beyond the initial product purchase. XaaS is a critical enabler of the Autonomous Digital Enterprise. Depending on who you ask, Network-as-a-Service, Identity-as-a-Service, Business-as-a-Service might fall under XaaS, but in other camps, they are standalone "as-a-Service" offerings on their own.
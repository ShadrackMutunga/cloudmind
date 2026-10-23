export const aiPrompt = `Act as an expert Azure Solutions Architect and friendly tutor. 
Explain the correct answer to this AZ-900 question in simple, beginner-friendly terms. 
Use a real-world analogy if possible. Keep the explanation under 100 words. 
Format: "✅ Correct!", followed by the analogy, then "💡 Key Takeaway: [one sentence]".`;

export const questions = [
  // ============================================
  // DOMAIN 1: CLOUD CONCEPTS (25 Questions)
  // ============================================
  
  { 
    id: 1, 
    category: "☁️ Cloud Concepts", 
    question: "Which cloud computing characteristic allows you to pay only for the resources you use, shifting from upfront costs to ongoing costs?", 
    options: ["Capital Expenditure (CapEx)", "Operational Expenditure (OpEx)", "High Availability", "Elasticity"], 
    correct: 1, 
    explanation: "✅ Correct! Cloud computing shifts IT spending from CapEx (buying hardware upfront) to OpEx (paying as you go). 💡 Analogy: It's like renting a car (OpEx) instead of buying one (CapEx); you only pay for the days you drive it. 💡 Key Takeaway: Cloud converts fixed costs to variable costs." 
  },
  { 
    id: 2, 
    category: "☁️ Cloud Concepts", 
    question: "Which cloud service model provides the most control over the underlying infrastructure?", 
    options: ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)", "Serverless"], 
    correct: 2, 
    explanation: "✅ Correct! IaaS gives you virtualized computing resources over the internet, meaning you manage the OS, middleware, and apps. 💡 Analogy: It's like leasing a plot of land; you get the land (infrastructure), but you have to build the house and maintain it yourself. 💡 Key Takeaway: IaaS = Maximum control, maximum management." 
  },
  { 
    id: 3, 
    category: "☁️ Cloud Concepts", 
    question: "What is the primary benefit of 'Elasticity' in the cloud?", 
    options: ["System remains operational during failures", "Automatically adding or removing resources based on demand", "Broad network access", "Resource pooling"], 
    correct: 1, 
    explanation: "✅ Correct! Elasticity is the ability to automatically scale resources out (add) or in (remove) to match demand. 💡 Analogy: It's like a rubber band stretching when you pull it (more traffic) and snapping back when you let go (less traffic). 💡 Key Takeaway: Elasticity is automatic; Scalability is often manual." 
  },
  { 
    id: 4, 
    category: "☁️ Cloud Concepts", 
    question: "Which deployment model is used exclusively by a single organization?", 
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"], 
    correct: 1, 
    explanation: "✅ Correct! A Private cloud is used solely by one business or organization, offering maximum control and security. 💡 Analogy: It's like a private swimming pool in your backyard; only your family uses it, and you control the rules. 💡 Key Takeaway: Private clouds offer the highest security and customization." 
  },
  { 
    id: 5, 
    category: "☁️ Cloud Concepts", 
    question: "Which concept ensures that a system can recover quickly from failures and remain operational?", 
    options: ["Scalability", "Agility", "High Availability", "Elasticity"], 
    correct: 2, 
    explanation: "✅ Correct! High Availability (HA) ensures a system operates continuously without failure for a long time. 💡 Analogy: It's like having a spare tire in your car; if one fails, you can keep driving without stopping. 💡 Key Takeaway: HA minimizes downtime and ensures business continuity." 
  },
  { 
    id: 6, 
    category: "☁️ Cloud Concepts", 
    question: "What is a key characteristic of public cloud services?", 
    options: ["Dedicated hardware for each customer", "Resources shared among multiple organizations", "Higher cost than private cloud", "Limited scalability"], 
    correct: 1, 
    explanation: "✅ Correct! Public clouds deliver computing resources over the internet, shared among multiple organizations (multi-tenant). 💡 Analogy: It's like living in an apartment building; you share the building infrastructure with other tenants, but you have your own private apartment. 💡 Key Takeaway: Public cloud = shared infrastructure, lower cost." 
  },
  { 
    id: 7, 
    category: "☁️ Cloud Concepts", 
    question: "Which cloud concept refers to the ability to deploy resources in minutes instead of weeks?", 
    options: ["Agility", "Scalability", "Reliability", "Predictability"], 
    correct: 0, 
    explanation: "✅ Correct! Cloud agility allows you to rapidly provision and deploy resources, dramatically reducing time-to-market. 💡 Analogy: It's like ordering food delivery vs. cooking from scratch; you get what you need in minutes instead of hours. 💡 Key Takeaway: Agility = speed of deployment." 
  },
  { 
    id: 8, 
    category: "☁️ Cloud Concepts", 
    question: "What does 'Resource Pooling' mean in cloud computing?", 
    options: ["Combining multiple clouds into one", "Provider serves multiple customers using multi-tenant model", "Storing all data in one location", "Using only one type of resource"], 
    correct: 1, 
    explanation: "✅ Correct! Resource pooling means the provider's computing resources serve multiple consumers using a multi-tenant model. 💡 Analogy: It's like a gym membership; the gym has equipment that all members share, but each member uses it when they need it. 💡 Key Takeaway: Pooling enables cost efficiency through sharing." 
  },
  { 
    id: 9, 
    category: "☁️ Cloud Concepts", 
    question: "Which service model provides ready-to-use software applications over the internet?", 
    options: ["IaaS", "PaaS", "SaaS", "FaaS"], 
    correct: 2, 
    explanation: "✅ Correct! SaaS delivers software applications over the internet, on a subscription basis. 💡 Analogy: It's like streaming Netflix; you don't need to install anything or manage servers, you just use the service. 💡 Key Takeaway: SaaS = software delivered via browser." 
  },
  { 
    id: 10, 
    category: "☁️ Cloud Concepts", 
    question: "What is the main advantage of 'Broad Network Access' in cloud computing?", 
    options: ["Resources available over the network via standard mechanisms", "Only accessible from specific locations", "Requires special hardware", "Limited to mobile devices"], 
    correct: 0, 
    explanation: "✅ Correct! Broad network access means cloud capabilities are available over the network and accessed through standard mechanisms (like web browsers). 💡 Analogy: It's like email; you can access it from anywhere, on any device, as long as you have internet.  Key Takeaway: Cloud is accessible anywhere, anytime." 
  },
  { 
    id: 11, 
    category: "☁️ Cloud Concepts", 
    question: "Which deployment model combines on-premises infrastructure with public cloud services?", 
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Multi-cloud"], 
    correct: 2, 
    explanation: "✅ Correct! A Hybrid cloud combines on-premises infrastructure with public cloud services, allowing data and applications to be shared between them. 💡 Analogy: It's like having a private vault at home (on-premises) but also renting a safe deposit box at a bank (public cloud) for extra space. 💡 Key Takeaway: Hybrid gives you maximum flexibility and control." 
  },
  { 
    id: 12, 
    category: "☁️ Cloud Concepts", 
    question: "What is 'Measured Service' in cloud computing?", 
    options: ["Services are monitored 24/7", "Resource usage is monitored, controlled, and reported", "Only certain services are available", "Services are measured by customer satisfaction"], 
    correct: 1, 
    explanation: "✅ Correct! Measured Service means cloud systems automatically control and optimize resource use by leveraging metering capability. 💡 Analogy: It's like your electricity bill; you're charged based on exactly how much power you used, not a flat fee. 💡 Key Takeaway: You pay only for what you consume." 
  },
  { 
    id: 13, 
    category: "☁️ Cloud Concepts", 
    question: "Which cloud model is best for a startup that wants to minimize upfront costs?", 
    options: ["On-premises datacenter", "Private cloud", "Public cloud", "Hybrid cloud with mostly on-premises"], 
    correct: 2, 
    explanation: "✅ Correct! Public cloud is ideal for startups because it requires no upfront capital investment and operates on a pay-as-you-go model. 💡 Analogy: It's like renting an apartment instead of buying a house; you don't need a huge down payment to get started. 💡 Key Takeaway: Public cloud = low barrier to entry." 
  },
  { 
    id: 14, 
    category: "☁️ Cloud Concepts", 
    question: "What is the primary difference between scalability and elasticity?", 
    options: ["They are the same thing", "Scalability is manual, elasticity is automatic", "Elasticity is manual, scalability is automatic", "Scalability is only for storage"], 
    correct: 1, 
    explanation: "✅ Correct! Scalability is the ability to add resources (often manually), while elasticity automatically adds/removes resources based on demand. 💡 Analogy: Scalability is like adding lanes to a highway (planned expansion); elasticity is like a smart traffic system that opens/closes lanes based on current traffic. 💡 Key Takeaway: Elasticity = automatic scaling." 
  },
  { 
    id: 15, 
    category: "☁️ Cloud Concepts", 
    question: "Which characteristic allows cloud resources to be rapidly provisioned and released?", 
    options: ["On-demand self-service", "Resource pooling", "Measured service", "Broad network access"], 
    correct: 0, 
    explanation: "✅ Correct! On-demand self-service allows consumers to provision computing capabilities automatically without requiring human interaction with the provider. 💡 Analogy: It's like a vending machine; you can get what you need instantly, 24/7, without talking to anyone. 💡 Key Takeaway: Self-service = instant provisioning." 
  },
  { 
    id: 16, 
    category: "☁️ Cloud Concepts", 
    question: "What is a 'Region' in cloud computing?", 
    options: ["A single datacenter", "A geographical area where cloud resources are located", "A type of virtual machine", "A networking protocol"], 
    correct: 1, 
    explanation: "✅ Correct! A Region is a geographical area where a cloud provider has datacenters and infrastructure. 💡 Analogy: It's like choosing which city to open a store in; you pick the location closest to your customers for faster service. 💡 Key Takeaway: Choose regions close to your users for lower latency." 
  },
  { 
    id: 17, 
    category: "☁️ Cloud Concepts", 
    question: "Which cloud benefit refers to the ability to increase reliability through redundant resources?", 
    options: ["Cost savings", "Fault tolerance", "Agility", "Global reach"], 
    correct: 1, 
    explanation: "✅ Correct! Fault tolerance is the ability for a system to continue operating properly in the event of failure of some components. 💡 Analogy: It's like having two engines on a plane; if one fails, the other keeps you flying safely. 💡 Key Takeaway: Redundancy = reliability." 
  },
  { 
    id: 18, 
    category: "☁️ Cloud Concepts", 
    question: "What is the 'Shared Responsibility Model' in cloud computing?", 
    options: ["All security is the provider's responsibility", "All security is the customer's responsibility", "Security responsibilities are divided between provider and customer", "No one is responsible for security"], 
    correct: 2, 
    explanation: "✅ Correct! The cloud provider is responsible for security OF the cloud, while the customer is responsible for security IN the cloud. 💡 Analogy: It's like renting a car; the rental company maintains the car (security of), but you're responsible for driving safely and locking the doors (security in). 💡 Key Takeaway: Security is a shared duty." 
  },
  { 
    id: 19, 
    category: "☁️ Cloud Concepts", 
    question: "Which scenario best demonstrates the benefit of cloud 'Global Reach'?", 
    options: ["Deploying an application in multiple regions worldwide", "Using only one datacenter", "Limiting access to local users", "Running on a single server"], 
    correct: 0, 
    explanation: "✅ Correct! Global reach allows you to deploy applications in regions around the world, bringing your services closer to users. 💡 Analogy: It's like a coffee chain opening stores in different cities; customers get fresh coffee faster because it's made nearby. 💡 Key Takeaway: Deploy globally for better performance." 
  },
  { 
    id: 20, 
    category: "☁️ Cloud Concepts", 
    question: "What is 'Total Cost of Ownership' (TCO)?", 
    options: ["The purchase price of hardware", "The total cost of acquiring, operating, and maintaining a solution", "Only the monthly cloud bill", "The cost of employee salaries"], 
    correct: 1, 
    explanation: "✅ Correct! TCO includes all direct and indirect costs associated with a solution over its lifetime.  Analogy: It's like buying a car; TCO includes the purchase price, gas, insurance, maintenance, and repairs—not just the sticker price.  Key Takeaway: Always calculate TCO, not just upfront costs." 
  },
  { 
    id: 21, 
    category: "☁️ Cloud Concepts", 
    question: "Which cloud characteristic enables customers to avoid over-provisioning?", 
    options: ["Fixed capacity", "On-demand self-service", "Limited access", "Static pricing"], 
    correct: 1, 
    explanation: "✅ Correct! On-demand self-service allows you to provision exactly what you need when you need it, avoiding the waste of over-provisioning. 💡 Analogy: It's like ordering food à la carte instead of a fixed buffet; you only pay for what you actually eat. 💡 Key Takeaway: Cloud eliminates capacity planning guesswork." 
  },
  { 
    id: 22, 
    category: "☁️ Cloud Concepts", 
    question: "What is a 'Community Cloud'?", 
    options: ["A cloud for the general public", "A cloud shared by several organizations with common concerns", "A cloud for one organization only", "A cloud that combines multiple providers"], 
    correct: 1, 
    explanation: "✅ Correct! A community cloud is shared by several organizations with common concerns (like security, compliance, or mission). 💡 Analogy: It's like a co-working space for lawyers; multiple law firms share the building, but it's restricted to legal professionals only.  Key Takeaway: Community clouds serve specific industries or groups." 
  },
  { 
    id: 23, 
    category: "️ Cloud Concepts", 
    question: "Which benefit allows businesses to focus on their core activities instead of IT infrastructure?", 
    options: ["Reduced maintenance", "Increased complexity", "Higher costs", "Limited scalability"], 
    correct: 0, 
    explanation: "✅ Correct! Cloud computing reduces the maintenance burden, allowing businesses to focus on their core competencies rather than managing hardware. 💡 Analogy: It's like outsourcing your building maintenance; you focus on running your business while someone else handles the HVAC and plumbing. 💡 Key Takeaway: Cloud lets you focus on what matters." 
  },
  { 
    id: 24, 
    category: "☁️ Cloud Concepts", 
    question: "What does 'Multi-tenancy' mean in cloud computing?", 
    options: ["One customer per server", "Multiple customers sharing the same infrastructure", "Multiple clouds connected together", "Tenants renting physical servers"], 
    correct: 1, 
    explanation: "✅ Correct! Multi-tenancy means multiple customers (tenants) share the same computing resources while maintaining data isolation. 💡 Analogy: It's like an apartment building; many people live in the same building, but each has their own private, locked apartment.  Key Takeaway: Multi-tenancy enables cost efficiency." 
  },
  { 
    id: 25, 
    category: "☁️ Cloud Concepts", 
    question: "Which cloud computing benefit is demonstrated when a company can deploy applications in minutes instead of months?", 
    options: ["Cost savings", "Speed and agility", "Global scale", "Productivity"], 
    correct: 1, 
    explanation: "✅ Correct! Speed and agility allow organizations to rapidly develop, test, and deploy applications, dramatically reducing time-to-market. 💡 Analogy: It's like fast food vs. fine dining; you get what you need in minutes instead of waiting hours for preparation. 💡 Key Takeaway: Cloud accelerates innovation." 
  },

  // ============================================
  // DOMAIN 2: AZURE ARCHITECTURE & SERVICES (25 Questions)
  // ============================================
  
  { 
    id: 26, 
    category: "️ Azure Architecture", 
    question: "What is an Azure Region?", 
    options: ["A single datacenter", "A set of datacenters deployed within a latency-defined perimeter", "A country", "A virtual network"], 
    correct: 1, 
    explanation: "✅ Correct! An Azure Region is a set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network. 💡 Analogy: It's like a campus of buildings (datacenters) in a specific city. 💡 Key Takeaway: There are 60+ Azure regions globally." 
  },
  { 
    id: 27, 
    category: "🏗️ Azure Architecture", 
    question: "What is an Azure Availability Zone?", 
    options: ["A single datacenter", "A set of datacenters within a region with independent power/cooling", "A global network edge location", "A virtual network"], 
    correct: 1, 
    explanation: "✅ Correct! Availability Zones are physically separate datacenters within an Azure region, each with independent power, cooling, and networking. 💡 Analogy: It's like keeping backup copies of your important documents in three different buildings in the same city. 💡 Key Takeaway: Zones protect against datacenter-level failures." 
  },
  { 
    id: 28, 
    category: "️ Azure Architecture", 
    question: "Which Azure service is best for hosting a containerized application without managing the underlying servers?", 
    options: ["Azure Virtual Machines", "Azure App Service", "Azure Container Instances", "Azure Functions"], 
    correct: 2, 
    explanation: "✅ Correct! Azure Container Instances (ACI) provides the fastest and simplest way to run a container in Azure. 💡 Analogy: It's like ordering a pizza for delivery; you get the pizza (container) without needing to build a kitchen (infrastructure). 💡 Key Takeaway: ACI is for simple, fast container hosting." 
  },
  { 
    id: 29, 
    category: "🏗️ Azure Architecture", 
    question: "What is the primary purpose of an Azure Virtual Network (VNet)?", 
    options: ["To store files securely", "To provide isolated network resources for Azure resources", "To monitor application performance", "To manage user identities"], 
    correct: 1, 
    explanation: "✅ Correct! A VNet enables Azure resources to securely communicate with each other, the internet, and on-premises networks. 💡 Analogy: It's like building a private, secure fence around your house (resources) so only authorized people can enter. 💡 Key Takeaway: VNets are the foundation of private networks in Azure." 
  },
  { 
    id: 30, 
    category: "🏗️ Azure Architecture", 
    question: "Which Azure storage type is optimized for storing massive amounts of unstructured data like text or binary data?", 
    options: ["Azure File Storage", "Azure Disk Storage", "Azure Blob Storage", "Azure Queue Storage"], 
    correct: 2, 
    explanation: "✅ Correct! Blob storage is designed for storing massive amounts of unstructured data, such as images, videos, and documents. 💡 Analogy: It's like a giant digital warehouse where you can throw in boxes of any shape and size without organizing them on shelves. 💡 Key Takeaway: Blob = Binary Large Object (unstructured data)." 
  },
  { 
    id: 31, 
    category: "🏗️ Azure Architecture", 
    question: "What is Azure Functions?", 
    options: ["A relational database service", "A serverless compute service to run event-triggered code", "A networking service", "A file storage service"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Functions allows you to run code on-demand without provisioning or managing infrastructure. 💡 Analogy: It's like a vending machine; you only pay when you dispense a snack (run code), and you don't own the machine. 💡 Key Takeaway: Serverless means no server management." 
  },
  { 
    id: 32, 
    category: "️ Azure Architecture", 
    question: "Which Azure service provides a managed relational database?", 
    options: ["Azure Cosmos DB", "Azure SQL Database", "Azure Blob Storage", "Azure Table Storage"], 
    correct: 1, 
    explanation: "✅ Correct! Azure SQL Database is a fully managed platform as a service (PaaS) relational database. 💡 Analogy: It's like renting a fully furnished apartment; the landlord (Azure) handles all maintenance, you just live there (use the database). 💡 Key Takeaway: Azure SQL = managed SQL Server in the cloud." 
  },
  { 
    id: 33, 
    category: "🏗️ Azure Architecture", 
    question: "What is Azure App Service?", 
    options: ["A virtual machine hosting service", "A platform for building and hosting web applications", "A storage service", "A networking service"], 
    correct: 1, 
    explanation: "✅ Correct! Azure App Service is a fully managed platform for building, deploying, and scaling web apps. 💡 Analogy: It's like a fully managed office building; you bring your business (app), and they handle the electricity, security, and maintenance. 💡 Key Takeaway: App Service = PaaS for web apps." 
  },
  { 
    id: 34, 
    category: "️ Azure Architecture", 
    question: "Which Azure service is used to distribute network traffic across multiple servers?", 
    options: ["Azure VPN Gateway", "Azure Load Balancer", "Azure Firewall", "Azure DNS"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Load Balancer distributes network traffic across multiple servers to ensure high availability and reliability. 💡 Analogy: It's like a traffic cop directing cars to different lanes to prevent congestion. 💡 Key Takeaway: Load balancers prevent any single server from becoming a bottleneck." 
  },
  { 
    id: 35, 
    category: "🏗️ Azure Architecture", 
    question: "What is Azure Cosmos DB?", 
    options: ["A relational database", "A globally distributed, multi-model database", "A file storage service", "A networking service"], 
    correct: 1, 
    explanation: "✅ Correct! Cosmos DB is a fully managed, globally distributed NoSQL database. 💡 Analogy: It's like a chain of libraries worldwide; no matter where you are, you can get a book (data) instantly. 💡 Key Takeaway: Cosmos DB offers single-digit millisecond latency globally." 
  },
  { 
    id: 36, 
    category: "🏗️ Azure Architecture", 
    question: "Which Azure service provides temporary storage attached to a virtual machine?", 
    options: ["Azure Blob Storage", "Azure Managed Disks", "Temporary disk", "Azure Files"], 
    correct: 2, 
    explanation: "✅ Correct! The temporary disk (D: drive) is local storage on the physical server hosting your VM, used for page files and temporary data. 💡 Analogy: It's like a whiteboard in your office; useful for quick notes, but don't expect it to be permanent. 💡 Key Takeaway: Temporary disk data is lost if VM moves." 
  },
  { 
    id: 37, 
    category: "🏗️ Azure Architecture", 
    question: "What is Azure Virtual Machine?", 
    options: ["A physical server", "A software-based emulation of a computer", "A storage account", "A database service"], 
    correct: 1, 
    explanation: "✅ Correct! An Azure VM is a software-based emulation of a computer system, providing on-demand, scalable computing resources. 💡 Analogy: It's like renting a fully equipped office; you get the space and furniture (CPU, RAM, storage) to run your business (applications). 💡 Key Takeaway: VMs = IaaS compute." 
  },
  { 
    id: 38, 
    category: "🏗️ Azure Architecture", 
    question: "Which Azure service allows you to run Windows or Linux virtual machines?", 
    options: ["Azure App Service", "Azure Virtual Machines", "Azure Functions", "Azure Container Instances"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Virtual Machines supports both Windows and Linux operating systems, giving you flexibility in your choice of OS. 💡 Analogy: It's like a hotel that accepts guests from anywhere; you can bring your preferred operating system (Windows or Linux). 💡 Key Takeaway: Azure VMs are OS-agnostic." 
  },
  { 
    id: 39, 
    category: "🏗️ Azure Architecture", 
    question: "What is the purpose of Azure Resource Groups?", 
    options: ["To store data", "To organize and manage related Azure resources", "To monitor performance", "To secure networks"], 
    correct: 1, 
    explanation: "✅ Correct! Resource groups are logical containers that hold related Azure resources, making them easier to manage and delete as a unit. 💡 Analogy: It's like a folder on your computer; you group related files together for easier organization.  Key Takeaway: Resources in a resource group share the same lifecycle." 
  },
  { 
    id: 40, 
    category: "🏗️ Azure Architecture", 
    question: "Which Azure service provides content delivery network (CDN) capabilities?", 
    options: ["Azure Blob Storage", "Azure CDN", "Azure Files", "Azure Queue Storage"], 
    correct: 1, 
    explanation: "✅ Correct! Azure CDN caches content at edge locations around the world to deliver content to users with low latency. 💡 Analogy: It's like having warehouses in multiple cities; products are stored closer to customers for faster delivery. 💡 Key Takeaway: CDN = faster content delivery globally." 
  },
  { 
    id: 41, 
    category: "🏗️ Azure Architecture", 
    question: "What is Azure Kubernetes Service (AKS)?", 
    options: ["A virtual machine service", "A managed container orchestration service", "A database service", "A networking service"], 
    correct: 1, 
    explanation: "✅ Correct! AKS is a managed Kubernetes service that simplifies deploying and managing containerized applications. 💡 Analogy: It's like hiring a conductor for your orchestra; Kubernetes coordinates all your containers (musicians) to work together harmoniously. 💡 Key Takeaway: AKS = managed container orchestration." 
  },
  { 
    id: 42, 
    category: "🏗️ Azure Architecture", 
    question: "Which storage replication option provides the highest durability?", 
    options: ["Locally-redundant storage (LRS)", "Zone-redundant storage (ZRS)", "Geo-redundant storage (GRS)", "Read-access geo-redundant storage (RA-GRS)"], 
    correct: 3, 
    explanation: "✅ Correct! RA-GRS provides geo-redundancy plus read access to the secondary region, offering the highest durability and availability. 💡 Analogy: It's like having a backup house in another country, and you can access it anytime if your main house is unavailable.  Key Takeaway: RA-GRS = maximum durability + read access." 
  },
  { 
    id: 43, 
    category: "🏗️ Azure Architecture", 
    question: "What is Azure ExpressRoute?", 
    options: ["A public internet connection", "A private connection between on-premises and Azure", "A VPN service", "A DNS service"], 
    correct: 1, 
    explanation: "✅ Correct! ExpressRoute provides a private, dedicated connection between your on-premises infrastructure and Azure, bypassing the public internet. 💡 Analogy: It's like having a private highway instead of using public roads; it's faster, more secure, and more reliable. 💡 Key Takeaway: ExpressRoute = private, high-speed Azure connectivity." 
  },
  { 
    id: 44, 
    category: "🏗️ Azure Architecture", 
    question: "Which Azure service is used to store cryptographic keys and secrets?", 
    options: ["Azure Storage", "Azure Key Vault", "Azure SQL Database", "Azure Cosmos DB"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Key Vault is a cloud service for securely storing and accessing secrets, keys, and certificates.  Analogy: It's a high-tech digital safe deposit box for your most sensitive passwords and encryption keys.  Key Takeaway: Never hardcode secrets; always use Key Vault." 
  },
  { 
    id: 45, 
    category: "🏗️ Azure Architecture", 
    question: "What is the purpose of Azure Traffic Manager?", 
    options: ["To load balance within a region", "To distribute traffic across global endpoints", "To secure networks", "To monitor applications"], 
    correct: 1, 
    explanation: "✅ Correct! Traffic Manager is a DNS-based traffic load balancer that distributes traffic across global Azure regions. 💡 Analogy: It's like a GPS navigation system that directs users to the nearest, fastest server location. 💡 Key Takeaway: Traffic Manager = global traffic distribution." 
  },
  { 
    id: 46, 
    category: "🏗️ Azure Architecture", 
    question: "Which Azure service provides a managed NoSQL database?", 
    options: ["Azure SQL Database", "Azure Cosmos DB", "Azure Database for MySQL", "Azure Database for PostgreSQL"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Cosmos DB is a globally distributed, multi-model NoSQL database service. 💡 Analogy: It's like a universal translator that speaks multiple database languages (document, key-value, graph, etc.). 💡 Key Takeaway: Cosmos DB = flexible, globally distributed NoSQL." 
  },
  { 
    id: 47, 
    category: "🏗️ Azure Architecture", 
    question: "What is Azure Logic Apps?", 
    options: ["A virtual machine service", "A workflow automation and integration service", "A storage service", "A networking service"], 
    correct: 1, 
    explanation: "✅ Correct! Logic Apps is a cloud service for automating and orchestrating tasks, business processes, and workflows. 💡 Analogy: It's like a digital assistant that automatically performs repetitive tasks by connecting different apps and services. 💡 Key Takeaway: Logic Apps = workflow automation without code." 
  },
  { 
    id: 48, 
    category: "🏗️ Azure Architecture", 
    question: "Which Azure service is used to create private networks in the cloud?", 
    options: ["Azure VPN Gateway", "Azure Virtual Network", "Azure ExpressRoute", "Azure Load Balancer"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure. 💡 Analogy: It's like building a private, secure fence around your house (resources) so only authorized people can enter. 💡 Key Takeaway: VNets are the foundation of private networks in Azure." 
  },
  { 
    id: 49, 
    category: "🏗️ Azure Architecture", 
    question: "What is Azure Event Grid?", 
    options: ["A storage service", "An event routing service", "A database service", "A compute service"], 
    correct: 1, 
    explanation: "✅ Correct! Event Grid is an event routing service that provides uniform event consumption using a publish-subscribe pattern. 💡 Analogy: It's like a postal service for events; applications publish events, and Event Grid delivers them to subscribers. 💡 Key Takeaway: Event Grid = reactive, event-driven architecture." 
  },
  { 
    id: 50, 
    category: "🏗️ Azure Architecture", 
    question: "Which Azure service provides serverless workflow orchestration?", 
    options: ["Azure Functions", "Azure Logic Apps", "Azure App Service", "Azure Virtual Machines"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Logic Apps provides serverless workflow orchestration to automate processes and integrate systems. 💡 Analogy: It's like a recipe that automatically combines ingredients (services) to create a dish (workflow) without you doing the cooking.  Key Takeaway: Logic Apps = visual workflow designer." 
  },

  // ============================================
  // DOMAIN 3: AZURE MANAGEMENT & GOVERNANCE (25 Questions)
  // ============================================
  
  { 
    id: 51, 
    category: "⚙️ Azure Management", 
    question: "What is the purpose of Azure Resource Manager (ARM)?", 
    options: ["To monitor costs", "To deploy and manage Azure resources consistently", "To secure data", "To train AI models"], 
    correct: 1, 
    explanation: "✅ Correct! ARM is the deployment and management service for Azure. 💡 Analogy: ARM is the general contractor of a construction site, ensuring all resources are deployed, organized, and secured consistently. 💡 Key Takeaway: All Azure deployments go through ARM." 
  },
  { 
    id: 52, 
    category: "⚙️ Azure Management", 
    question: "Which tool helps you enforce organizational standards and assess compliance at scale?", 
    options: ["Azure Role-Based Access Control (RBAC)", "Azure Policy", "Azure Blueprints", "Azure Locks"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Policy is used to enforce organizational standards and assess compliance at scale. 💡 Analogy: Azure Policy is like a bouncer at a club, checking IDs (tags) and denying entry to anyone who doesn't meet the rules. 💡 Key Takeaway: Use Policy for enforcement, RBAC for access." 
  },
  { 
    id: 53, 
    category: "️ Azure Management", 
    question: "What feature prevents accidental deletion or modification of a critical Azure resource?", 
    options: ["Azure Locks", "Azure Policy", "RBAC", "Tags"], 
    correct: 0, 
    explanation: "✅ Correct! Azure Resource Locks prevent accidental deletion or modification of resources. 💡 Analogy: It's like putting a child safety lock on a cabinet; you have to explicitly unlock it before making changes. 💡 Key Takeaway: Use 'Delete' locks for critical resources." 
  },
  { 
    id: 54, 
    category: "⚙️ Azure Management", 
    question: "What is the best way to logically organize and categorize Azure resources for billing and management?", 
    options: ["Resource Groups", "Tags", "Subscriptions", "Management Groups"], 
    correct: 1, 
    explanation: "✅ Correct! Tags are metadata elements (key/value pairs) that help you logically organize and categorize your resources. 💡 Analogy: It's like putting color-coded sticky notes on files in a cabinet to find them easily and track who owns them. 💡 Key Takeaway: Tags are great for cost tracking and organization." 
  },
  { 
    id: 55, 
    category: "️ Azure Management", 
    question: "Which service provides personalized recommendations to optimize your Azure environment?", 
    options: ["Azure Monitor", "Azure Pricing Calculator", "Azure Advisor", "Azure Policy"], 
    correct: 2, 
    explanation: "✅ Correct! Azure Advisor analyzes your resource configuration and usage to recommend improvements in cost, performance, security, and reliability. 💡 Analogy: It's like a personal financial advisor for your cloud, telling you where you're wasting money. 💡 Key Takeaway: Check Advisor regularly to save money." 
  },
  { 
    id: 56, 
    category: "⚙️ Azure Management", 
    question: "What is an Azure Subscription?", 
    options: ["A monthly newsletter", "A logical container for billing and access control", "A type of virtual machine", "A storage account"], 
    correct: 1, 
    explanation: "✅ Correct! A subscription is a logical container used to provision Azure resources, with its own billing and access control. 💡 Analogy: It's like a bank account; you can have multiple accounts (subscriptions) for different purposes, each with its own balance (budget) and authorized users (access). 💡 Key Takeaway: Subscriptions = billing and access boundary." 
  },
  { 
    id: 57, 
    category: "⚙️ Azure Management", 
    question: "Which Azure service helps you estimate the cost of Azure services before deployment?", 
    options: ["Azure Monitor", "Azure Pricing Calculator", "Azure Advisor", "Azure Policy"], 
    correct: 1, 
    explanation: "✅ Correct! The Azure Pricing Calculator helps you estimate the cost of Azure products you plan to use. 💡 Analogy: It's like a shopping cart on an e-commerce site; you add items to see the total before buying. 💡 Key Takeaway: Always use the calculator before deploying." 
  },
  { 
    id: 58, 
    category: "⚙️ Azure Management", 
    question: "What is the purpose of Azure Management Groups?", 
    options: ["To group VMs", "To manage access, policy, and compliance across multiple subscriptions", "To store data", "To monitor networks"], 
    correct: 1, 
    explanation: "✅ Correct! Management groups allow you to manage access, policy, and compliance for multiple Azure subscriptions. 💡 Analogy: It's like a corporate headquarters managing policies for all its branch offices (subscriptions). 💡 Key Takeaway: Management groups sit above subscriptions." 
  },
  { 
    id: 59, 
    category: "⚙️ Azure Management", 
    question: "Which tool provides a unified view of all your Azure resources and their status?", 
    options: ["Azure Portal", "Azure CLI", "Azure PowerShell", "Azure REST API"], 
    correct: 0, 
    explanation: "✅ Correct! The Azure Portal is a web-based, unified console that provides a graphical interface to manage all your Azure resources. 💡 Analogy: It's like a car's dashboard; you can see all your gauges (resources) and controls in one place.  Key Takeaway: Portal = GUI for Azure management." 
  },
  { 
    id: 60, 
    category: "️ Azure Management", 
    question: "What is Azure Cost Management?", 
    options: ["A tool to increase spending", "A service to monitor, allocate, and optimize cloud costs", "A billing payment system", "A budget approval tool"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Cost Management helps you monitor, allocate, and optimize your cloud spending. 💡 Analogy: It's like a personal finance app for your cloud; it tracks where every dollar goes and suggests ways to save. 💡 Key Takeaway: Cost Management = cloud spending visibility." 
  },
  { 
    id: 61, 
    category: "⚙️ Azure Management", 
    question: "Which Azure service allows you to automate resource deployment using templates?", 
    options: ["Azure Portal", "ARM Templates", "Azure Monitor", "Azure Advisor"], 
    correct: 1, 
    explanation: "✅ Correct! ARM Templates are JSON files that define the infrastructure and configuration for your Azure solution. 💡 Analogy: It's like a recipe; you write it once and can cook the same dish (deploy the same resources) consistently every time. 💡 Key Takeaway: Templates = Infrastructure as Code." 
  },
  { 
    id: 62, 
    category: "⚙️ Azure Management", 
    question: "What is the purpose of Azure Resource Tags?", 
    options: ["To secure resources", "To organize and categorize resources", "To monitor performance", "To backup data"], 
    correct: 1, 
    explanation: "✅ Correct! Tags are metadata elements that help you logically organize and categorize your resources. 💡 Analogy: It's like putting color-coded sticky notes on files in a cabinet to find them easily. 💡 Key Takeaway: Tags are great for cost tracking." 
  },
  { 
    id: 63, 
    category: "️ Azure Management", 
    question: "Which tool would you use to manage Azure resources from a command-line interface?", 
    options: ["Azure Portal", "Azure CLI", "Azure Marketplace", "Azure Service Health"], 
    correct: 1, 
    explanation: "✅ Correct! Azure CLI is a cross-platform command-line tool for managing Azure resources. 💡 Analogy: It's like using keyboard shortcuts instead of a mouse; faster and more efficient for experienced users. 💡 Key Takeaway: CLI = command-line Azure management." 
  },
  { 
    id: 64, 
    category: "⚙️ Azure Management", 
    question: "What is Azure Blueprints?", 
    options: ["A drawing tool", "A service for defining repeatable sets of Azure resources", "A monitoring service", "A storage service"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Blueprints enables you to define a repeatable set of Azure resources for consistent deployments. 💡 Analogy: It's like an architect's blueprint; you create a standard design once and build multiple identical houses from it. 💡 Key Takeaway: Blueprints = standardized environment deployment." 
  },
  { 
    id: 65, 
    category: "⚙️ Azure Management", 
    question: "Which Azure service helps you track and audit changes to your resources?", 
    options: ["Azure Monitor", "Azure Activity Log", "Azure Advisor", "Azure Policy"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Activity Log provides a history of subscription-level and resource-level operations in Azure. 💡 Analogy: It's like a security camera recording everyone who enters and exits your building, and what they did. 💡 Key Takeaway: Activity Log = audit trail for Azure." 
  },
  { 
    id: 66, 
    category: "⚙️ Azure Management", 
    question: "What is the maximum number of resource groups you can have per subscription?", 
    options: ["100", "500", "800", "Unlimited"], 
    correct: 2, 
    explanation: "✅ Correct! By default, you can have up to 800 resource groups per subscription (this can be increased by contacting support). 💡 Analogy: It's like having 800 folders in a filing cabinet; enough for most organizations, but you can request more if needed. 💡 Key Takeaway: 800 resource groups per subscription limit." 
  },
  { 
    id: 67, 
    category: "⚙️ Azure Management", 
    question: "Which Azure service provides monitoring and diagnostics for Azure resources?", 
    options: ["Azure Advisor", "Azure Monitor", "Azure Policy", "Azure Security Center"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Monitor maximizes the availability and performance of your applications by delivering comprehensive monitoring solutions. 💡 Analogy: It's like a car's diagnostic system; it constantly checks the health of all components and alerts you to problems. 💡 Key Takeaway: Monitor = comprehensive Azure observability." 
  },
  { 
    id: 68, 
    category: "⚙️ Azure Management", 
    question: "What is Azure Service Health?", 
    options: ["A fitness app", "A service that provides personalized alerts about Azure service issues", "A monitoring tool for applications", "A backup service"], 
    correct: 1, 
    explanation: "✅ Correct! Service Health provides personalized alerts and guidance when Azure service issues affect you. 💡 Analogy: It's like a weather alert system; it warns you about storms (outages) that might affect your area (resources). 💡 Key Takeaway: Service Health = Azure outage notifications." 
  },
  { 
    id: 69, 
    category: "⚙️ Azure Management", 
    question: "Which RBAC component defines what actions can be performed on a resource?", 
    options: ["Security principal", "Role definition", "Scope", "Role assignment"], 
    correct: 1, 
    explanation: "✅ Correct! A role definition is a collection of permissions that define what actions can be performed on resources. 💡 Analogy: It's like a job description; it lists what responsibilities and powers a particular role has. 💡 Key Takeaway: Role definition = list of permissions." 
  },
  { 
    id: 70, 
    category: "⚙️ Azure Management", 
    question: "What is the purpose of Azure Quotas?", 
    options: ["To limit spending", "To restrict the number of resources you can create", "To monitor performance", "To backup data"], 
    correct: 1, 
    explanation: "✅ Correct! Quotas limit the number of resources you can create in a subscription or region to prevent accidental over-provisioning.  Analogy: It's like a credit limit on a credit card; it prevents you from spending beyond a certain threshold. 💡 Key Takeaway: Quotas = resource creation limits." 
  },
  { 
    id: 71, 
    category: "⚙️ Azure Management", 
    question: "Which Azure feature allows you to view and manage all your Azure subscriptions in one place?", 
    options: ["Azure Portal", "Azure Management Groups", "Azure Monitor", "Azure Advisor"], 
    correct: 1, 
    explanation: "✅ Correct! Management Groups provide a level of scope above subscriptions, allowing you to manage multiple subscriptions efficiently. 💡 Analogy: It's like a corporate org chart; management groups are the executives overseeing multiple departments (subscriptions). 💡 Key Takeaway: Management Groups = multi-subscription governance." 
  },
  { 
    id: 72, 
    category: "⚙️ Azure Management", 
    question: "What is Azure Resource Graph?", 
    options: ["A drawing tool", "A service to query Azure resources at scale", "A monitoring dashboard", "A backup solution"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Resource Graph is a service designed to extend Azure Resource Management by providing efficient resource exploration.  Analogy: It's like a powerful search engine for your Azure environment; you can ask complex questions and get instant answers. 💡 Key Takeaway: Resource Graph = advanced Azure resource querying." 
  },
  { 
    id: 73, 
    category: "⚙️ Azure Management", 
    question: "Which tool would you use to deploy Azure resources using a graphical interface?", 
    options: ["Azure CLI", "Azure PowerShell", "Azure Portal", "Azure REST API"], 
    correct: 2, 
    explanation: "✅ Correct! The Azure Portal provides a graphical, web-based interface for deploying and managing Azure resources. 💡 Analogy: It's like using a smartphone app instead of typing commands; more intuitive and visual. 💡 Key Takeaway: Portal = point-and-click Azure management." 
  },
  { 
    id: 74, 
    category: "⚙️ Azure Management", 
    question: "What is the purpose of Azure Diagnostic Settings?", 
    options: ["To fix problems automatically", "To collect and route logs and metrics", "To backup resources", "To monitor costs"], 
    correct: 1, 
    explanation: "✅ Correct! Diagnostic Settings enable you to collect and route logs and metrics from Azure resources to destinations like Storage, Event Hubs, or Log Analytics. 💡 Analogy: It's like setting up a mail forwarding service; logs are automatically sent wherever you need them. 💡 Key Takeaway: Diagnostics = log collection and routing." 
  },
  { 
    id: 75, 
    category: "⚙️ Azure Management", 
    question: "Which Azure service helps you understand your cloud spending patterns?", 
    options: ["Azure Pricing Calculator", "Azure Cost Management + Billing", "Azure Advisor", "Azure Monitor"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Cost Management + Billing helps you understand, analyze, and optimize your cloud spending. 💡 Analogy: It's like a detailed bank statement; it shows exactly where every dollar went and helps you budget for the future. 💡 Key Takeaway: Cost Management = spending visibility and optimization." 
  },

  // ============================================
  // DOMAIN 4: SECURITY, PRIVACY, COMPLIANCE & TRUST (25 Questions)
  // ============================================
  
  { 
    id: 76, 
    category: "🔒 Security & Compliance", 
    question: "What is the principle of 'Least Privilege' in Azure RBAC?", 
    options: ["Give everyone admin rights", "Give users only the minimum permissions they need", "Give no permissions", "Give permissions based on seniority"], 
    correct: 1, 
    explanation: "✅ Correct! Least Privilege means granting users only the minimum permissions necessary to perform their job. 💡 Analogy: It's like giving a hotel guest a key card that only opens their specific room, not the whole hotel. 💡 Key Takeaway: Always follow least privilege to reduce risk." 
  },
  { 
    id: 77, 
    category: "🔒 Security & Compliance", 
    question: "Which Azure service provides centralized identity and access management?", 
    options: ["Microsoft Entra ID (Azure AD)", "Azure Key Vault", "Azure Firewall", "Azure Sentinel"], 
    correct: 0, 
    explanation: "✅ Correct! Microsoft Entra ID (formerly Azure AD) is the cloud-based identity and access management service. 💡 Analogy: It's the bouncer at the club checking IDs and deciding who gets in. 💡 Key Takeaway: Entra ID manages user identities and access." 
  },
  { 
    id: 78, 
    category: "🔒 Security & Compliance", 
    question: "What is Azure Key Vault used for?", 
    options: ["Storing virtual machines", "Safeguarding cryptographic keys and secrets", "Monitoring networks", "Hosting websites"], 
    correct: 1, 
    explanation: "✅ Correct! Key Vault is used to securely store and manage keys, secrets, and certificates. 💡 Analogy: It's a high-tech digital safe deposit box for your most sensitive passwords and encryption keys. 💡 Key Takeaway: Never hardcode secrets in your apps; use Key Vault." 
  },
  { 
    id: 79, 
    category: "🔒 Security & Compliance", 
    question: "Which security concept involves using multiple layers of security controls throughout an IT system?", 
    options: ["Defense in depth", "Zero Trust", "Shared responsibility", "Least privilege"], 
    correct: 0, 
    explanation: "✅ Correct! Defense in depth is a strategy that employs a series of mechanisms to slow the advance of an attack.  Analogy: It's like a castle with a moat, a drawbridge, high walls, and guards inside. 💡 Key Takeaway: Never rely on just one security layer." 
  },
  { 
    id: 80, 
    category: "🔒 Security & Compliance", 
    question: "What does an SLA (Service Level Agreement) primarily guarantee?", 
    options: ["Free technical support", "Uptime and connectivity percentages", "Unlimited storage", "Free software upgrades"], 
    correct: 1, 
    explanation: "✅ Correct! An SLA is a formal agreement that defines the performance standards (like uptime) a provider must meet. 💡 Analogy: It's a warranty on a car; if it breaks down, the manufacturer owes you compensation. 💡 Key Takeaway: Azure offers SLAs for most services, often 99.9% or higher." 
  },
  { 
    id: 81, 
    category: "🔒 Security & Compliance", 
    question: "What is Microsoft Entra ID (Azure Active Directory)?", 
    options: ["A database service", "A cloud-based identity and access management service", "A storage service", "A networking service"], 
    correct: 1, 
    explanation: "✅ Correct! Microsoft Entra ID is Microsoft's cloud-based identity and access management service.  Analogy: It's like a digital passport office; it verifies who you are and what you're allowed to access. 💡 Key Takeaway: Entra ID = identity management." 
  },
  { 
    id: 82, 
    category: "🔒 Security & Compliance", 
    question: "Which Azure service provides network-level security and traffic filtering?", 
    options: ["Azure Key Vault", "Azure Firewall", "Azure Monitor", "Azure Advisor"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Firewall is a managed, cloud-based network security service that protects your Azure Virtual Network resources. 💡 Analogy: It's like a security checkpoint at an airport; it inspects all traffic and only allows authorized passage. 💡 Key Takeaway: Firewall = network traffic filtering." 
  },
  { 
    id: 83, 
    category: " Security & Compliance", 
    question: "What is Azure Security Center?", 
    options: ["A physical datacenter", "A unified security management system", "A storage service", "A database service"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Security Center (now Microsoft Defender for Cloud) is a unified infrastructure security management system. 💡 Analogy: It's like a 24/7 security guard for your cloud; it constantly monitors for threats and vulnerabilities. 💡 Key Takeaway: Security Center = threat detection and hardening." 
  },
  { 
    id: 84, 
    category: "🔒 Security & Compliance", 
    question: "What is Multi-Factor Authentication (MFA)?", 
    options: ["Using one password", "Requiring multiple forms of verification", "Using biometrics only", "Sharing passwords"], 
    correct: 1, 
    explanation: "✅ Correct! MFA requires users to provide two or more verification factors to gain access to a resource. 💡 Analogy: It's like needing both a key and a PIN to access a safe; even if someone steals your key, they still can't get in. 💡 Key Takeaway: MFA = significantly stronger security." 
  },
  { 
    id: 85, 
    category: "🔒 Security & Compliance", 
    question: "Which Azure feature encrypts data at rest?", 
    options: ["Azure Backup", "Azure Storage Service Encryption", "Azure Monitor", "Azure Advisor"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Storage Service Encryption automatically encrypts data at rest in Azure Storage. 💡 Analogy: It's like putting your documents in a locked filing cabinet; even if someone breaks into the room, they can't read the files. 💡 Key Takeaway: Encryption at rest protects stored data." 
  },
  { 
    id: 86, 
    category: "🔒 Security & Compliance", 
    question: "What is Azure DDoS Protection?", 
    options: ["A backup service", "A service that protects against Distributed Denial of Service attacks", "A monitoring tool", "A storage service"], 
    correct: 1, 
    explanation: "✅ Correct! Azure DDoS Protection provides always-on traffic monitoring and automatic attack mitigation. 💡 Analogy: It's like a bouncer who recognizes troublemakers and prevents them from entering the club, keeping legitimate guests safe. 💡 Key Takeaway: DDoS Protection = attack mitigation." 
  },
  { 
    id: 87, 
    category: "🔒 Security & Compliance", 
    question: "What is the Shared Responsibility Model?", 
    options: ["Azure is responsible for everything", "Customer is responsible for everything", "Security responsibilities are divided between Azure and customer", "No one is responsible"], 
    correct: 2, 
    explanation: "✅ Correct! The cloud provider is responsible for security OF the cloud, while the customer is responsible for security IN the cloud. 💡 Analogy: It's like renting a car; the rental company maintains the car (security of), but you're responsible for driving safely and locking the doors (security in). 💡 Key Takeaway: Security is a shared duty." 
  },
  { 
    id: 88, 
    category: "🔒 Security & Compliance", 
    question: "Which compliance certification ensures Azure meets strict privacy requirements for EU citizens?", 
    options: ["HIPAA", "GDPR", "ISO 27001", "SOC 2"], 
    correct: 1, 
    explanation: "✅ Correct! GDPR (General Data Protection Regulation) is the EU's comprehensive data privacy law, and Azure is fully compliant. 💡 Analogy: It's like a strict privacy contract between you and EU citizens; you must protect their data or face penalties.  Key Takeaway: GDPR = EU data privacy regulation." 
  },
  { 
    id: 89, 
    category: "🔒 Security & Compliance", 
    question: "What is Azure Sentinel?", 
    options: ["A physical security guard", "A cloud-native SIEM (Security Information and Event Management)", "A backup service", "A storage service"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Sentinel is a scalable, cloud-native SIEM that provides intelligent security analytics. 💡 Analogy: It's like a high-tech security operations center that uses AI to detect threats across your entire environment.  Key Takeaway: Sentinel = cloud-native security analytics." 
  },
  { 
    id: 90, 
    category: "🔒 Security & Compliance", 
    question: "What is Azure Private Link?", 
    options: ["A public internet connection", "A service that provides private connectivity to Azure services", "A VPN service", "A DNS service"], 
    correct: 1, 
    explanation: "✅ Correct! Private Link provides private connectivity from your virtual network to Azure platform as a service (PaaS) resources.  Analogy: It's like a private tunnel connecting your office directly to a service, avoiding public roads (internet). 💡 Key Takeaway: Private Link = private PaaS access." 
  },
  { 
    id: 91, 
    category: "🔒 Security & Compliance", 
    question: "Which Azure service helps you identify and protect sensitive data?", 
    options: ["Azure Monitor", "Azure Information Protection", "Azure Advisor", "Azure Policy"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Information Protection helps you classify, label, and protect documents and emails. 💡 Analogy: It's like putting confidential stamps on sensitive documents and locking them in special folders. 💡 Key Takeaway: AIP = data classification and protection." 
  },
  { 
    id: 92, 
    category: "🔒 Security & Compliance", 
    question: "What is Azure Application Gateway?", 
    options: ["A physical gateway", "A web traffic load balancer with WAF capabilities", "A storage service", "A database service"], 
    correct: 1, 
    explanation: "✅ Correct! Application Gateway is a web traffic load balancer that includes a Web Application Firewall (WAF). 💡 Analogy: It's like a smart doorman for your web application; it directs traffic and stops malicious visitors. 💡 Key Takeaway: App Gateway = layer 7 load balancing + WAF." 
  },
  { 
    id: 93, 
    category: " Security & Compliance", 
    question: "What is the purpose of Azure Network Security Groups (NSGs)?", 
    options: ["To store data", "To filter network traffic to and from Azure resources", "To monitor performance", "To backup resources"], 
    correct: 1, 
    explanation: "✅ Correct! NSGs contain security rules that allow or deny inbound/outbound traffic to Azure resources. 💡 Analogy: It's like a firewall or security guard at a building entrance; it checks IDs and decides who can enter or leave. 💡 Key Takeaway: NSGs = network traffic filtering." 
  },
  { 
    id: 94, 
    category: "🔒 Security & Compliance", 
    question: "Which Azure feature provides encryption for data in transit?", 
    options: ["Storage Service Encryption", "TLS/SSL", "Azure Backup", "Azure Monitor"], 
    correct: 1, 
    explanation: "✅ Correct! TLS/SSL encrypts data as it travels between clients and Azure services. 💡 Analogy: It's like sending a letter in a sealed, tamper-proof envelope instead of a postcard; no one can read it during transit. 💡 Key Takeaway: TLS/SSL = encrypted data transmission." 
  },
  { 
    id: 95, 
    category: "🔒 Security & Compliance", 
    question: "What is Azure Bastion?", 
    options: ["A storage service", "A service that provides secure RDP/SSH connectivity to VMs", "A monitoring tool", "A backup service"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Bastion provides secure and seamless RDP and SSH access to virtual machines without exposing them publicly. 💡 Analogy: It's like a secure tunnel or bridge that lets authorized personnel access a fortress (VMs) without opening the main gates to the public. 💡 Key Takeaway: Bastion = secure VM access without public IPs." 
  },
  { 
    id: 96, 
    category: " Security & Compliance", 
    question: "What is Conditional Access in Microsoft Entra ID?", 
    options: ["Unconditional access to all resources", "Policy-based access control based on conditions", "Permanent access", "No access control"], 
    correct: 1, 
    explanation: "✅ Correct! Conditional Access uses signals (like location, device, risk) to make access decisions. 💡 Analogy: It's like a smart security system that checks multiple factors (who you are, where you are, what device you're using) before granting access. 💡 Key Takeaway: Conditional Access = context-aware security." 
  },
  { 
    id: 97, 
    category: "🔒 Security & Compliance", 
    question: "Which Azure service helps you comply with regulatory requirements?", 
    options: ["Azure Monitor", "Azure Policy", "Azure Backup", "Azure Advisor"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Policy helps you enforce organizational standards and assess compliance at scale. 💡 Analogy: It's like an automated compliance officer that continuously checks if your resources follow the rules. 💡 Key Takeaway: Policy = compliance enforcement." 
  },
  { 
    id: 98, 
    category: "🔒 Security & Compliance", 
    question: "What is Azure Confidential Computing?", 
    options: ["Public computing", "Protecting data in use through hardware-based trusted execution environments", "Backup computing", "Monitoring service"], 
    correct: 1, 
    explanation: "✅ Correct! Confidential Computing protects data in use by performing computation in a hardware-based trusted execution environment. 💡 Analogy: It's like doing calculations inside a secure, opaque vault; even the cloud provider can't see what you're computing. 💡 Key Takeaway: Confidential Computing = encrypted data in use." 
  },
  { 
    id: 99, 
    category: "🔒 Security & Compliance", 
    question: "What is the purpose of Azure Resource Locks?", 
    options: ["To encrypt resources", "To prevent accidental deletion or modification", "To monitor resources", "To backup resources"], 
    correct: 1, 
    explanation: "✅ Correct! Resource locks prevent accidental deletion or modification of critical Azure resources. 💡 Analogy: It's like putting a child safety lock on a cabinet; you have to explicitly unlock it before making changes. 💡 Key Takeaway: Use 'Delete' locks for critical resources." 
  },
  { 
    id: 100, 
    category: "🔒 Security & Compliance", 
    question: "Which Azure service provides threat detection and intelligent security analytics?", 
    options: ["Azure Monitor", "Microsoft Defender for Cloud", "Azure Advisor", "Azure Policy"], 
    correct: 1, 
    explanation: "✅ Correct! Microsoft Defender for Cloud (formerly Security Center) provides threat detection and security recommendations. 💡 Analogy: It's like a 24/7 security operations center with AI-powered threat detection. 💡 Key Takeaway: Defender for Cloud = proactive security monitoring." 
  }
];
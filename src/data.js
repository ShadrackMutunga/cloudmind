export const aiPrompt = `Act as an expert Azure Solutions Architect and friendly tutor. 
Explain the correct answer to this AZ-900 question in simple, beginner-friendly terms. 
Use a real-world analogy if possible. Keep the explanation under 100 words. 
Format: "✅ Correct!", followed by the analogy, then "💡 Key Takeaway: [one sentence]".`;

export const questions = [
  // --- DOMAIN 1: Cloud Concepts ---
  { 
    id: 1, 
    category: "Cloud Concepts", 
    question: "Which cloud computing characteristic allows you to pay only for the resources you use, shifting from upfront costs to ongoing costs?", 
    options: ["Capital Expenditure (CapEx)", "Operational Expenditure (OpEx)", "High Availability", "Elasticity"], 
    correct: 1, 
    explanation: "✅ Correct! Cloud computing shifts IT spending from CapEx (buying hardware upfront) to OpEx (paying as you go). 💡 Analogy: It's like renting a car (OpEx) instead of buying one (CapEx); you only pay for the days you drive it. 💡 Key Takeaway: Cloud converts fixed costs to variable costs." 
  },
  { 
    id: 2, 
    category: "Cloud Concepts", 
    question: "Which cloud service model provides the most control over the underlying infrastructure?", 
    options: ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)", "Serverless"], 
    correct: 2, 
    explanation: "✅ Correct! IaaS gives you virtualized computing resources over the internet, meaning you manage the OS, middleware, and apps. 💡 Analogy: It's like leasing a plot of land; you get the land (infrastructure), but you have to build the house and maintain it yourself. 💡 Key Takeaway: IaaS = Maximum control, maximum management." 
  },
  { 
    id: 3, 
    category: "Cloud Concepts", 
    question: "What is the primary benefit of 'Elasticity' in the cloud?", 
    options: ["System remains operational during failures", "Automatically adding or removing resources based on demand", "Broad network access", "Resource pooling"], 
    correct: 1, 
    explanation: "✅ Correct! Elasticity is the ability to automatically scale resources out (add) or in (remove) to match demand. 💡 Analogy: It's like a rubber band stretching when you pull it (more traffic) and snapping back when you let go (less traffic). 💡 Key Takeaway: Elasticity is automatic; Scalability is often manual." 
  },
  { 
    id: 4, 
    category: "Cloud Concepts", 
    question: "Which deployment model is used exclusively by a single organization?", 
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Community cloud"], 
    correct: 1, 
    explanation: "✅ Correct! A Private cloud is used solely by one business or organization, offering maximum control and security. 💡 Analogy: It's like a private swimming pool in your backyard; only your family uses it, and you control the rules. 💡 Key Takeaway: Private clouds offer the highest security and customization." 
  },
  { 
    id: 5, 
    category: "Cloud Concepts", 
    question: "Which concept ensures that a system can recover quickly from failures and remain operational?", 
    options: ["Scalability", "Agility", "High Availability", "Elasticity"], 
    correct: 2, 
    explanation: "✅ Correct! High Availability (HA) ensures a system operates continuously without failure for a long time. 💡 Analogy: It's like having a spare tire in your car; if one fails, you can keep driving without stopping. 💡 Key Takeaway: HA minimizes downtime and ensures business continuity." 
  },

  // --- DOMAIN 2: Azure Architecture & Services ---
  { 
    id: 6, 
    category: "Azure Architecture", 
    question: "What is an Azure Availability Zone?", 
    options: ["A single datacenter", "A set of datacenters within a region with independent power/cooling", "A global network edge location", "A virtual network"], 
    correct: 1, 
    explanation: "✅ Correct! Availability Zones are physically separate datacenters within an Azure region, each with independent power, cooling, and networking. 💡 Analogy: It's like keeping backup copies of your important documents in three different buildings in the same city. 💡 Key Takeaway: Zones protect against datacenter-level failures." 
  },
  { 
    id: 7, 
    category: "Azure Architecture", 
    question: "Which Azure service is best for hosting a containerized application without managing the underlying servers?", 
    options: ["Azure Virtual Machines", "Azure App Service", "Azure Container Instances", "Azure Functions"], 
    correct: 2, 
    explanation: "✅ Correct! Azure Container Instances (ACI) provides the fastest and simplest way to run a container in Azure. 💡 Analogy: It's like ordering a pizza for delivery; you get the pizza (container) without needing to build a kitchen (infrastructure). 💡 Key Takeaway: ACI is for simple, fast container hosting." 
  },
  { 
    id: 8, 
    category: "Azure Architecture", 
    question: "What is the primary purpose of an Azure Virtual Network (VNet)?", 
    options: ["To store files securely", "To provide isolated network resources for Azure resources", "To monitor application performance", "To manage user identities"], 
    correct: 1, 
    explanation: "✅ Correct! A VNet enables Azure resources to securely communicate with each other, the internet, and on-premises networks. 💡 Analogy: It's like building a private, secure fence around your house (resources) so only authorized people can enter. 💡 Key Takeaway: VNets are the foundation of private networks in Azure." 
  },
  { 
    id: 9, 
    category: "Azure Architecture", 
    question: "Which Azure storage type is optimized for storing massive amounts of unstructured data like text or binary data?", 
    options: ["Azure File Storage", "Azure Disk Storage", "Azure Blob Storage", "Azure Queue Storage"], 
    correct: 2, 
    explanation: "✅ Correct! Blob storage is designed for storing massive amounts of unstructured data, such as images, videos, and documents. 💡 Analogy: It's like a giant digital warehouse where you can throw in boxes of any shape and size without organizing them on shelves. 💡 Key Takeaway: Blob = Binary Large Object (unstructured data)." 
  },
  { 
    id: 10, 
    category: "Azure Architecture", 
    question: "What is Azure Functions?", 
    options: ["A relational database service", "A serverless compute service to run event-triggered code", "A networking service", "A file storage service"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Functions allows you to run code on-demand without provisioning or managing infrastructure. 💡 Analogy: It's like a vending machine; you only pay when you dispense a snack (run code), and you don't own the machine. 💡 Key Takeaway: Serverless means no server management." 
  },

  // --- DOMAIN 3: Azure Management & Governance ---
  { 
    id: 11, 
    category: "Azure Management", 
    question: "What is the purpose of Azure Resource Manager (ARM)?", 
    options: ["To monitor costs", "To deploy and manage Azure resources consistently", "To secure data", "To train AI models"], 
    correct: 1, 
    explanation: "✅ Correct! ARM is the deployment and management service for Azure. 💡 Analogy: ARM is the general contractor of a construction site, ensuring all resources are deployed, organized, and secured consistently.  Key Takeaway: All Azure deployments go through ARM." 
  },
  { 
    id: 12, 
    category: "Azure Management", 
    question: "Which tool helps you enforce organizational standards and assess compliance at scale?", 
    options: ["Azure Role-Based Access Control (RBAC)", "Azure Policy", "Azure Blueprints", "Azure Locks"], 
    correct: 1, 
    explanation: "✅ Correct! Azure Policy is used to enforce organizational standards and assess compliance at scale. 💡 Analogy: Azure Policy is like a bouncer at a club, checking IDs (tags) and denying entry to anyone who doesn't meet the rules. 💡 Key Takeaway: Use Policy for enforcement, RBAC for access." 
  },
  { 
    id: 13, 
    category: "Azure Management", 
    question: "What feature prevents accidental deletion or modification of a critical Azure resource?", 
    options: ["Azure Locks", "Azure Policy", "RBAC", "Tags"], 
    correct: 0, 
    explanation: "✅ Correct! Azure Resource Locks prevent accidental deletion or modification of resources. 💡 Analogy: It's like putting a child safety lock on a cabinet; you have to explicitly unlock it before making changes. 💡 Key Takeaway: Use 'Delete' locks for critical resources." 
  },
  { 
    id: 14, 
    category: "Azure Management", 
    question: "What is the best way to logically organize and categorize Azure resources for billing and management?", 
    options: ["Resource Groups", "Tags", "Subscriptions", "Management Groups"], 
    correct: 1, 
    explanation: "✅ Correct! Tags are metadata elements (key/value pairs) that help you logically organize and categorize your resources. 💡 Analogy: It's like putting color-coded sticky notes on files in a cabinet to find them easily and track who owns them. 💡 Key Takeaway: Tags are great for cost tracking and organization." 
  },
  { 
    id: 15, 
    category: "Azure Management", 
    question: "Which service provides personalized recommendations to optimize your Azure environment?", 
    options: ["Azure Monitor", "Azure Pricing Calculator", "Azure Advisor", "Azure Policy"], 
    correct: 2, 
    explanation: "✅ Correct! Azure Advisor analyzes your resource configuration and usage to recommend improvements in cost, performance, security, and reliability. 💡 Analogy: It's like a personal financial advisor for your cloud, telling you where you're wasting money. 💡 Key Takeaway: Check Advisor regularly to save money." 
  },

  // --- DOMAIN 4: Security, Privacy, Compliance & SLAs ---
  { 
    id: 16, 
    category: "Security & Compliance", 
    question: "What is the principle of 'Least Privilege' in Azure RBAC?", 
    options: ["Give everyone admin rights", "Give users only the minimum permissions they need", "Give no permissions", "Give permissions based on seniority"], 
    correct: 1, 
    explanation: "✅ Correct! Least Privilege means granting users only the minimum permissions necessary to perform their job. 💡 Analogy: It's like giving a hotel guest a key card that only opens their specific room, not the whole hotel. 💡 Key Takeaway: Always follow least privilege to reduce risk." 
  },
  { 
    id: 17, 
    category: "Security & Compliance", 
    question: "Which Azure service provides centralized identity and access management?", 
    options: ["Microsoft Entra ID (Azure AD)", "Azure Key Vault", "Azure Firewall", "Azure Sentinel"], 
    correct: 0, 
    explanation: "✅ Correct! Microsoft Entra ID (formerly Azure AD) is the cloud-based identity and access management service. 💡 Analogy: It's the bouncer at the club checking IDs and deciding who gets in. 💡 Key Takeaway: Entra ID manages user identities and access." 
  },
  { 
    id: 18, 
    category: "Security & Compliance", 
    question: "What is Azure Key Vault used for?", 
    options: ["Storing virtual machines", "Safeguarding cryptographic keys and secrets", "Monitoring networks", "Hosting websites"], 
    correct: 1, 
    explanation: "✅ Correct! Key Vault is used to securely store and manage keys, secrets, and certificates. 💡 Analogy: It's a high-tech digital safe deposit box for your most sensitive passwords and encryption keys. 💡 Key Takeaway: Never hardcode secrets in your apps; use Key Vault." 
  },
  { 
    id: 19, 
    category: "Security & Compliance", 
    question: "Which security concept involves using multiple layers of security controls throughout an IT system?", 
    options: ["Defense in depth", "Zero Trust", "Shared responsibility", "Least privilege"], 
    correct: 0, 
    explanation: "✅ Correct! Defense in depth is a strategy that employs a series of mechanisms to slow the advance of an attack. 💡 Analogy: It's like a castle with a moat, a drawbridge, high walls, and guards inside. 💡 Key Takeaway: Never rely on just one security layer." 
  },
  { 
    id: 20, 
    category: "SLA & Support", 
    question: "What does an SLA (Service Level Agreement) primarily guarantee?", 
    options: ["Free technical support", "Uptime and connectivity percentages", "Unlimited storage", "Free software upgrades"], 
    correct: 1, 
    explanation: "✅ Correct! An SLA is a formal agreement that defines the performance standards (like uptime) a provider must meet. 💡 Analogy: It's a warranty on a car; if it breaks down, the manufacturer owes you compensation. 💡 Key Takeaway: Azure offers SLAs for most services, often 99.9% or higher." 
  }
];
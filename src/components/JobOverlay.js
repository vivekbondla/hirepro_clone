
import React from "react";
import "./JobOverlay.css"; // Create a CSS file for styling
 
const JobOverlay = ({ role, onClose }) => {
  // Map job roles to their respective descriptions
  const lowercaseRole = role && typeof role === 'string' && role.toLowerCase();
  console.log('Role in JobOverlay:', role.title); // Add this line to log the role

  const jobDescriptions = {
    frontend: <p> Our company is growing rapidly and is searching for experienced candidates for the position of front-end developer. Please review the list of responsibilities and qualifications. While this is our ideal list, we will consider candidates that do not necessarily have all of the qualifications, but have sufficient experience and talent.
 
Responsibilities for front-end developer
• Working with the Atlantic's product team to evolve our content tools
• Work from written specifications and pre-established guidelines
• Maintain clear documentation of standards patterns and practices
• Collaborate and consult with the various design, editorial, and technology teams on prototypes, mock-ups
• Developing web-based applications, components, and visualizations from conceptual page plans in Photoshop
• Crafting flexible templates for custom Python and Java-based applications
• Front end code development for large-scale, enterprise applications
• Spec, wireframe, and prototype new applications
• Use agile methodologies
• Work with fellow developers, participating in code reviews and implementation design
 
Qualifications for front-end developer
• Experience coding HTML email for responsive design
• Prior experience using email marketing platforms such as ExactTarget, MailChimp, Responsys
• Strong knowledge of HTML, CSS and CS4 Creative Suite
• Good working understanding of jQuery and Javascript
• Amazing attention to detail and a pride in delivering consistently pixel perfect work
• A strong understanding of email marketing and what makes a successful email campaign</p>
,
    fullstack: <p>Our company is growing rapidly and is looking for a full stack engineer. We appreciate you taking the time to review the list of qualifications and to apply for the position. If you don’t fill all of the qualifications, you may still be considered depending on your level of experience.
 
Responsibilities for full stack engineer
• Build and improve software systems for a fast-growing, disruptive e-commerce company
• Create custom APIs to integrate with 3rd party systems
• Deliver defect limited code through ubiquitous test automation
• Contribute to the development of the team, our standards, and best practices
• Design and build data quality solutions for cloud based analytical data warehouses, streaming platforms and fit for purpose data stores
• Complete JSON/XML API integrations with partners to import/export thousands of
• Program daily in Node.js, Ruby on rails, AngularJS, Express, Jade, Bootstrap and others
• Build out unit tests and other automated tests
• Build out new features and iterate on existing features
• Enable analytics via tag management and logs
 
Qualifications for full stack engineer
• You have 4+ years of relevant work experience in all aspects of software development
• You have worked in multiple languages and are comfortable and quick to learn a new language, framework, or technology
• Fluency in PHP or another web scripting language
• Source code management system (git, svn, .)
• Experience with a dynamic programming language such as Python, Ruby, or Scala
• Knowledge of modern web technologies </p>
,
    devops:<p> Our company is growing rapidly and is looking for a devops developer. We appreciate you taking the time to review the list of qualifications and to apply for the position. If you don’t fill all of the qualifications, you may still be considered depending on your level of experience.
 
Responsibilities for devops developer
• Determine, apply and improve appropriate methodologies and toolsets for a customer’s culture and operating environment
• Complete solutions by coordinating, communicating, and contributing to team meetings and customer engagements
• Explore up-and-coming technologies and software products
• Support and improve our SCM/Build & Deployment tooling for continuous integration, automated testing and automated self-service release management
• Programming languages, including a functional programming language
• Modern ops technologies - monitoring, log aggregation, alerting
• Experience implementing Continuous Integration or Continuous Delivery processes in large engineering teams
• Experience with Unit testing frameworks such as JUnit, Jasmine, jest
• Follow and promote Agile automated engineer development practices like Continuous Delivery and BDD
• Work proactively with developers, managers and business partners to develop, coordinate, communicate and enforce DevOps solutions to accelerate
 
Qualifications for devops developer
• At least 1 year experience in Coding in Java, Python
• Experience with Jenkins or other CI tools
• Experience with cloud hosting such as Azure
• Expertise with Continuous Integration and Deployment with at least one of following - uDeploy, Circle CI, Jenkins, Travis
• Experience with AWS is required
• Expertise with build process for at least of of following - Red Hat’s EAP, Java, Message Broker, WebSphere
</p>,
    cloud: <p> Our growing company is searching for experienced candidates for the position of cloud developer. Thank you in advance for taking a look at the list of responsibilities and qualifications. We look forward to reviewing your resume.
 
Responsibilities for cloud developer
• Design and develop REST APIs to expand functionality
• Create productivity tools for third-party developers to self-service their own integrated solutions
• Work with other software leads on developing production automation and unit test automation
• Continuously release new updates using a SCRUM based Agile process.Search Jobs US
• Drive optimizations of our cloud product
• Work closely with the Architects to design and implement solutions that help modernize our architecture to meet business goals
• Be an expert in cloud related areas such as performance, scalability, reliability, security and operational cost
• Fix cloud specific defects related to areas of expertise
• Support feature teams in developing and implementing requirements related to areas of expertise
• Support performance testing conducted by QA
 
Qualifications for cloud developer
• Our ideal candidate will have several years of in-depth C# and .NET development work with extensive SQL experience (ad hoc queries, SPs, multi-table joins)
• Bachelor's degree in technical field (Computer Science, MIS, ..)
• Experience with Docker containers and at least one cluster management software _Mesos, Kubernetes, OpenShift
• BA or BS degree in science technology, engineering, or mathematics field preferred
• Full lifecycle experience developing large scale .NET applications with a working knowledge of agile development, SCRUM and Application Lifecycle Management (ALM)
• In depth experience developing a front end UI
</p>,
    java: <p> Our growing company is looking to fill the role of software java developer. If you are looking for an exciting place to work, please take a look at the list of qualifications below.
 
Responsibilities for software java developer
• Working well independently and within a team
• Propose new technologies and tools suitable to our infrastructure
• Analyzes, designs, develops, codes and implements programs in   programming languages, for a specific assigned software system or systems, offers suggestions and feedback, and develops detailed design document describing program architecture, processes, data and function
• Completes application development by coordinating requirements, schedules, and activities
• Participate in design reviews and code walk-throughs
• Generate appropriate documentation for the proper ongoing support and maintenance of software modules
• Participate in system level activities such as integration and system test as required
• Communicate project/work status orally, written, or other as required
• You will understand requirement of new features and ability to lead, design and implement it
• You will explore new technologies
 
Qualifications for software java developer
• Working knowledge of JAVA, J2EE, Express, SQL, PLSQL, UNIX shell scripting, WebLogic, Apache, BigIP
• Experience with Agile process, Test driven development, design, documentation and code reviews
• Experience with client side web development languages is a plus
• Experience in developing JAVA EE 6 based applications (Glassfish 3.x, EJB 3.x)
• Has experience in any of these technologies (Spring, Tomcat, JPA, JMS)
• Basic Linux and SSH knowledge
has context menu,
</p>};
 
  return (
    <div className="job-overlay">
      <div className="overlay-content">
      <h2>{role && typeof role.title === 'string' && role.title} Developer</h2>
        <p>{jobDescriptions[lowercaseRole]}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
 
export default JobOverlay;
 
import React from "react";
import "./JobOverlay.css"; 
import { Link } from 'react-router-dom';

 
const JobOverlay = ({ role, onClose }) => {
  // Map job roles to their respective descriptions
  const lowercaseRole = role && typeof role === 'string' && role.toLowerCase();
  console.log('Role in JobOverlay:', role.title); // Add this line to log the role

  const jobDescriptions = {
    frontend: <p> Our company is growing rapidly and is searching for experienced candidates for the position of front-end developer. Please review the list of responsibilities and qualifications. While this is our ideal list, we will consider candidates that do not necessarily have all of the qualifications, but have sufficient experience and talent.
 <br/>
 
<b>Responsibilities for front-end developer:-</b><br/>
• Working with the Atlantic's product team to evolve our content tools<br/>
• Work from written specifications and pre-established guidelines<br/>
• Maintain clear documentation of standards patterns and practices<br/>
• Collaborate and consult with the various design, editorial, and technology teams on prototypes, mock-ups<br/>
• Developing web-based applications, components, and visualizations from conceptual page plans in Photoshop<br/>
• Crafting flexible templates for custom Python and Java-based applications<br/>
• Front end code development for large-scale, enterprise applications<br/>
• Spec, wireframe, and prototype new applications<br/>
• Use agile methodologies<br/>
• Work with fellow developers, participating in code reviews and implementation design<br/>
 
<b>Qualifications for front-end developer</b><br/>
• Experience coding HTML email for responsive design<br/>
• Prior experience using email marketing platforms such as ExactTarget, MailChimp, Responsys<br/>
• Strong knowledge of HTML, CSS and CS4 Creative Suite<br/>
• Good working understanding of jQuery and Javascript<br/>
• Amazing attention to detail and a pride in delivering consistently pixel perfect work<br/>
• A strong understanding of email marketing and what makes a successful email campaign</p>
,
    fullstack: <p>Our company is growing rapidly and is looking for a full stack engineer. We appreciate you taking the time to review the list of qualifications and to apply for the position. If you don’t fill all of the qualifications, you may still be considered depending on your level of experience.
 <br/>
<b>Responsibilities for full stack engineer</b><br/>
• Build and improve software systems for a fast-growing, disruptive e-commerce company<br/>
• Create custom APIs to integrate with 3rd party systems<br/>
• Deliver defect limited code through ubiquitous test automation<br/>
• Contribute to the development of the team, our standards, and best practices<br/>
• Design and build data quality solutions for cloud based analytical data warehouses, streaming platforms and fit for purpose data stores<br/>
• Complete JSON/XML API integrations with partners to import/export thousands of<br/>
• Program daily in Node.js, Ruby on rails, AngularJS, Express, Jade, Bootstrap and others<br/>
• Build out unit tests and other automated tests<br/>
• Build out new features and iterate on existing features<br/>
• Enable analytics via tag management and logs<br/>
 
<b>Qualifications for full stack engineer</b><br/>
• You have 4+ years of relevant work experience in all aspects of software development<br/>
• You have worked in multiple languages and are comfortable and quick to learn a new language, framework, or technology<br/>
• Fluency in PHP or another web scripting language<br/>
• Source code management system (git, svn, .)<br/>
• Experience with a dynamic programming language such as Python, Ruby, or Scala<br/>
• Knowledge of modern web technologies </p>
,
    devops:<p> Our company is growing rapidly and is looking for a devops developer. We appreciate you taking the time to review the list of qualifications and to apply for the position. If you don’t fill all of the qualifications, you may still be considered depending on your level of experience.
 <br/>
<b>Responsibilities for devops developer</b><br/>
• Determine, apply and improve appropriate methodologies and toolsets for a customer’s culture and operating environment<br/>
• Complete solutions by coordinating, communicating, and contributing to team meetings and customer engagements<br/>
• Explore up-and-coming technologies and software products<br/>
• Support and improve our SCM/Build & Deployment tooling for continuous integration, automated testing and automated self-service release management<br/>
• Programming languages, including a functional programming language<br/>
• Modern ops technologies - monitoring, log aggregation, alerting<br/>
• Experience implementing Continuous Integration or Continuous Delivery processes in large engineering teams<br/>
• Experience with Unit testing frameworks such as JUnit, Jasmine, jest<br/>
• Follow and promote Agile automated engineer development practices like Continuous Delivery and BDD<br/>
• Work proactively with developers, managers and business partners to develop, coordinate, communicate and enforce DevOps solutions to accelerate
<br/>
<b>Qualifications for devops developer</b><br/>
• At least 1 year experience in Coding in Java, Python<br/>
• Experience with Jenkins or other CI tools<br/>
• Experience with cloud hosting such as Azure<br/>
• Expertise with Continuous Integration and Deployment with at least one of following - uDeploy, Circle CI, Jenkins, Travis<br/>
• Experience with AWS is required<br/>
• Expertise with build process for at least of of following - Red Hat’s EAP, Java, Message Broker, WebSphere<br/>
</p>,
    cloud: <p> Our growing company is searching for experienced candidates for the position of cloud developer. Thank you in advance for taking a look at the list of responsibilities and qualifications. We look forward to reviewing your resume.
 <br/>
<b>Responsibilities for cloud developer</b><br/>
• Design and develop REST APIs to expand functionality<br/>
• Create productivity tools for third-party developers to self-service their own integrated solutions<br/>
• Work with other software leads on developing production automation and unit test automation<br/>
• Continuously release new updates using a SCRUM based Agile process.Search Jobs US<br/>
• Drive optimizations of our cloud product<br/>
• Work closely with the Architects to design and implement solutions that help modernize our architecture to meet business goals<br/>
• Be an expert in cloud related areas such as performance, scalability, reliability, security and operational cost<br/>
• Fix cloud specific defects related to areas of expertise<br/>
• Support feature teams in developing and implementing requirements related to areas of expertise<br/>
• Support performance testing conducted by QA <br/>
 
<b>Qualifications for cloud developer</b><br/>
• Our ideal candidate will have several years of in-depth C# and .NET development work with extensive SQL experience (ad hoc queries, SPs, multi-table joins)<br/>
• Bachelor's degree in technical field (Computer Science, MIS, ..)<br/>
• Experience with Docker containers and at least one cluster management software _Mesos, Kubernetes, OpenShift<br/>
• BA or BS degree in science technology, engineering, or mathematics field preferred<br/>
• Full lifecycle experience developing large scale .NET applications with a working knowledge of agile development, SCRUM and Application Lifecycle Management (ALM)<br/>
• In depth experience developing a front end UI
</p>,
    java: <p> Our growing company is looking to fill the role of software java developer. If you are looking for an exciting place to work, please take a look at the list of qualifications below.
 <br/>
<b>Responsibilities for software java developer</b><br/>
• Working well independently and within a team<br/>
• Propose new technologies and tools suitable to our infrastructure<br/>
• Analyzes, designs, develops, codes and implements programs in   programming languages, for a specific assigned software system or systems, offers suggestions and feedback, and develops detailed design document describing program architecture, processes, data and function<br/>
• Completes application development by coordinating requirements, schedules, and activities<br/>
• Participate in design reviews and code walk-throughs<br/>
• Generate appropriate documentation for the proper ongoing support and maintenance of software modules<br/>
• Participate in system level activities such as integration and system test as required<br/>
• Communicate project/work status orally, written, or other as required<br/>
• You will understand requirement of new features and ability to lead, design and implement it<br/>
• You will explore new technologies<br/>
 
<b>Qualifications for software java developer</b><br/>
• Working knowledge of JAVA, J2EE, Express, SQL, PLSQL, UNIX shell scripting, WebLogic, Apache, BigIP<br/>
• Experience with Agile process, Test driven development, design, documentation and code reviews<br/>
• Experience with client side web development languages is a plus<br/>
• Experience in developing JAVA EE 6 based applications (Glassfish 3.x, EJB 3.x)<br/>
• Has experience in any of these technologies (Spring, Tomcat, JPA, JMS)<br/>
• Basic Linux and SSH knowledge
has context menu,
</p>};
 
  return (
    <div className="job-overlay">
      <div className="overlay-content">
      <h2>{role && typeof role.title === 'string' && role.title} Developer</h2>
        <p>{jobDescriptions[lowercaseRole]}</p>
          <Link to="/registration-form">
            <button className="apply-button">Apply</button>
          </Link>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};
 
export default JobOverlay;
 
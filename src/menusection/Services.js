import React from 'react';
import "./Services.css";

const Services = () => {
  return (
    <div>
      <div className='services-heading'>
        <h1 className='service-heading'>What We Can Do for You</h1>
      </div>
      <div className='services-container '>
        <div className='CyberSecurity-section'>
          <h1 className='Cyber-Security-heading'>Cyber Security</h1>
          <p className='Cyber-Security-data'>We will provide next-<br/>generation cybersecurity<br/> consulting services to help<br/> your organization build cyber<br/> resilience from the inside out.</p>
        </div>
      
        <div className='Database-section'>
          <h1 className='Database-heading'>Database</h1>
          <p className='Database-data'>We will provide database<br/> solutions which offer a <br/>complete portfolio of<br/> managed services for data <br/>and analytics</p>
        </div>
        <div className='DataDigitizing-section '>
          <h1 className='Data-Digitizing-heading'>Data Digitizing</h1>
          <p className='Data-Digitizing-data'>We deal digitization of data <br/>with OCR, XML, HTML<br/> conversion tools, & EPub <br/>services also. Our team is an <br/>expert in data conversions.<br/> Data mining, & Data Entry <br/>works with licensed tools</p>
        </div>
      </div>
      <div className='services-container '>
        <div className='WebDesign-section'>
          <h1 className='Web-Design-heading'>Web Design</h1>
          <p className='Web-Design-data'>We make business websites <br/>which bring you more<br/> customers. A dedicated team<br/> of experts to support you <br/>during and after phases of<br/> your project.</p>
        </div>
        <div className='DigitalMarketing-section'>
          <h1 className='Digital-Marketing-heading'>Digital Marketing</h1>
          <p className='Digital-Marketing-data'>We manage the online<br/> reputation of your website by <br/>using the best marketing<br/> strategies. We use social <br/>media strategies to ensure<br/> that you reach your target <br/>audience.</p>
        </div>
        <div className='Certifications-section'>
          <h1 className='Certifications-heading'>Certifications</h1>
          <p className='Certifications-data'>Display Your Expertise In<br/> Technical And Management <br/>Skills With Innogen. Level Up <br/>Your Career With A Transition<br/> To Management With Innogen<br/> Certifications</p>
        </div>
      </div>
      <div className='services-container '>
        <div className='ITDevelopment-section'>
          <h1 className='IT-Development-heading'>IT Development</h1>
          <p className='IT-Development-data'>We focus on producing new <br/>systems and applications and <br/>ensure that the users get to <br/>use it as fast as possible<br/> whereas Operations looks<br/> from a complete different<br/> aspect</p>
        </div>
        <div className='CloudService-section'>
          <h1 className='Cloud-Service-heading'>Cloud Service</h1>
          <p className='Cloud-Service-data'>Cloud computing is the use of <br/>computing resources <br/>(hardware and software) that<br/> are delivered as a service <br/>over a network.</p>
        </div>
        <div className='MobileApp-section'>
          <h1 className='Mobile-App-heading'>Mobile App</h1>
          <p className='Mobile-App-data'>We offer a full cycle of<br/> application design, integration<br/> and management services.<br/> Whether it is a consumer <br/>oriented app or a<br/> transformative enterprise-<br/>class</p>
        </div>
      </div>
      <div className='services-container '>
        <div className='PermanentRecruitment-section'>
          <h1 className='Permanent-Recruitment-heading'>Permanent<br/> Recruitment</h1>
          <p className='Permanent-Recruitment-data'>We only select the best<br/> candidates for your<br/> businesses to join you on a <br/>long term basis</p>
        </div>
        <div className='BulkHiring-section'>
          <h1 className='Bulk-Hiring-heading'>Bulk Hiring </h1>
          <p className='Bulk-Hiring-data'>Our recruitment experts<br/> ensure that the bulk <br/>requirements are taken care<br/> in the most transparent and<br/> cost-effective way</p>
        </div>
        <div className='ContractStaffing-section'>
          <h1 className='Contract-Staffing-heading'>Contract Staffing</h1>
          <p className='Contract-Staffing-data'>Our Contract Staffing is<br/> designed to find you the right<br/> talent at a minimal cost within <br/>a short span of time. </p>
        </div>
      </div>
    </div>
  );
}

export default Services;

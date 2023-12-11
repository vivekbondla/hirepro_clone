
 
import React, { useState } from 'react';
import ResumeUpload from "../comp/ResumeUpload"
 import Gender from "../comp/Gender";

//import DateComp from"../comp/DateComp"
const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    dateOfBirth: '',
    programmingLanguages: '',
    skills: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic (send data to server or perform actions)
  };
 
  return (
    <div className="application-form-container">
      <h2 className="application-form-title">Apply for this job</h2>
      <form onSubmit={handleSubmit}>
        <div className='Resume'>
            <ResumeUpload/>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label><br/>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label><br/>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
 <div className='gender'>
<label>Gender</label><br/>
<Gender/>
 </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label><br/>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="email">Email</label><br/>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
       <div>
        <label>Date of Birth</label><br/>
        <input type='date'/>
       </div>
       <div>
        <label>Current Salary:</label>
        <input
        type="text"
        />
        <label>Expected Salary:</label>
        <input
        type="text"/>
       </div>
       <div>
        <label>Available To Join (in days)</label><br/>
        <input
        type="text"/>
       </div>
       <div>
        <label>Location Preference</label><br/>
        <input
        type="text"/>
       </div>
       <div>
        <label>Current Location</label><br/>
        <input
        type="text"/>
       </div>
       <div>
       <label htmlFor="Skills">Skills</label><br/>
   <textarea
     id="Skills"
     name="Skills"
     value={formData.Skills }
     onChange={handleChange}
   />
       </div>
        <h3>Experience Details</h3>
       <div className='experince'>
<div>
    <label>Company Name</label><br/>
    <input 
    type="text"
    name="Company Name"
    value={formData.Companyname}
    onChange={handleChange}
    />
</div>

<div>
    <label>Job Tittle</label><br/>
    <input 
    type="text"
    name="Job Title"
    value={formData.JobTitle}
    onChange={handleChange}
    />
</div>
<div>
    <input type='checkbox'/>
    <label>Currently working here</label>
</div>
<div>
<label>Date of Joining:</label>
        <input 
        type='date'
        value={formData.Course}
        onChange={handleChange}
        />
</div>
<div>
<label>Date of Relieving:</label>
        <input 
        type='date'
        value={formData.Course}
        onChange={handleChange}
        />
</div>
<h3>Education Details</h3>
<div className='Education'>
<div>
    <label>Course</label><br/>
    <input 
    type="text"
    name="Course"
    value={formData.Course}
    onChange={handleChange}
    />
</div>

<div>
    <label>Branch/Specialization</label><br/>
    <input 
    type="text"
    name="Beanch"
    value={formData.Branch}
    onChange={handleChange}
    />
</div>

<div>
<label>Start of Course:</label>
        <input 
        type='date'
        value={formData.Course}
        onChange={handleChange}
        />
</div>
<div>
<label>End of Course:</label>
        <input 
        type='date'
        value={formData.Course}
        onChange={handleChange}
        />
</div>

<div>
    <label>University/Collage</label><br/>
    <input 
    type="text"
    name="Collage"
    value={formData.Collage}
    onChange={handleChange}
    />
</div>
</div>

<div>
    <label>Location</label><br/>
    <input 
    type="text"
    name="Location"
    value={formData.locatoin}
    onChange={handleChange}
    />
</div>
       </div>
       <div>
        <button onClick={handleChange}>Submit</button>
       </div>
      </form>
    </div>
  );
};
 
export default ApplicationForm;
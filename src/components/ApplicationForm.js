
import React, { useState } from 'react';
import ResumeUpload from './ResumeUpload';
 
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
      <h2 className="application-form-title">SUBMIT YOUR APPLICATION</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
 
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
 
        
        <div>
          <lable htmlFor="Current Company">Current Company:</lable>
          <textarea id='current Company'
            name="Current Company"
            value={formData.CurrentCompany}
            onChange={handleChange}
            />
        </div>
        <h2>LINKS</h2>
        
 <div className="form-group">
   <label htmlFor="LinkedIn URL">LinkedIn URL:</label>
   <textarea
     id="LinkedIn URL"
     name="LinkedIn URL"
     value={formData.LinkedIn }
     onChange={handleChange}
   />
 </div>
 <h3>MANDATE QUESTIONNANRI</h3>
 <div className="form-group">
   <label htmlFor="Experince">Total Experince:</label>
   <textarea
     id="Experince"
     name="Experince"
     value={formData.Experince}
     onChange={handleChange}
   />
 </div>

 <div className="form-group">
   <label htmlFor="Notice Period">Notice Period:</label>
   <textarea
     id="Notice Period"
     name="Notice Period"
     value={formData.NoticePeriod}
     onChange={handleChange}
   />
 </div>

 
 <div className="form-group">
   <label htmlFor="Current CTC">Current CTC:</label>
   <input
    type='number'
     id="Current CTC "
     name="Current CTC"
     value={formData.CurrentCTC}
     onChange={handleChange}
   />
 </div>


 <div className="form-group">
   <label htmlFor="Expected CTC">Expected CTC:</label>
   <input
   type='number'
     id="Expected CTC"
     name="Expected CTC"
     value={formData.ExpectedCTC}
     onChange={handleChange}
   />
 </div>


 <div className="form-group">
   <label htmlFor="Current Location">Current Location:</label>
   <textarea
     id="Current Location"
     name="Current Location"
     value={formData.CurrentLocation}
     onChange={handleChange}
   />
 </div>

<h3>ADDITIONAL INFORMATION</h3>
 <div className="form-group">
   
   <textarea
     
   />
 </div>

<div>
  <ResumeUpload/>
  
</div>

        {/* ... existing form fields ... */}
 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
 
export default ApplicationForm;
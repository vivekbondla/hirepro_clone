import React, { useState } from 'react';
import ResumeUpload from "../ApplicationComponent/ResumeUpload";
import Gender from "../ApplicationComponent/Gender";
import "./ApplicationForm.css";
import PhotoUploader from '../ApplicationComponent/PhotoUploader';
 
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
    gender: [], // Updated for storing gender options
    currentlyWorking: false, // Added for "Currently working here" checkbox
  });
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
 
    // Handle checkboxes separately
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
 
  const handleGenderChange = (selectedGender) => {
    setFormData({
      ...formData,
      gender: selectedGender,
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
      <div className="source">
      <h3>Source Details</h3>
     
<label htmlFor="jobSource">How did you find out about this job? *</label>
<select id="jobSource" name="jobSource" required>
  <option value="">---Select---</option>
  <option value="jobBoards">Job Boards</option>
  <option value="employeeReferral">Employee Referral</option>
  <option value="socialMedia">Social Media Advertisement</option>
  <option value="agency">Agency</option>
  <option value="campus">Campus</option>
  <option value="others">Others</option>
</select>
 
      </div>
      <div className="personal">
      <h3>Personal Details</h3>
       
          <label htmlFor="firstName">First Name *</label><br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
       
 
     
          <label htmlFor="lastName">Last Name *</label><br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
       
       
 
       
          <label htmlFor="email">Email *</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
   
     
          <label htmlFor="phoneNumber">Phone Number (10 digits only) *</label><br />
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[0-9]{10}"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
       
        <div>
          <label>Date of Birth *</label><br />
          <input type='date' id='date' required />
        </div>
        <div className='gender'>
          <label>Gender *</label><br />
          <Gender
            value={formData.gender}
            onChange={handleGenderChange}
            required
          />
        </div>
        </div>
        <div>
          <label htmlFor="Skills">Skills *</label><br />
          <textarea
            id="Skills"
            name="Skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div className='experience'>
        <h3>Experience Details</h3>
     
          <div>
            <label>Company Name *</label><br />
            <input
            id='companyname'
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
 
          <div>
            <label>Job Title *</label><br />
            <input
            id='jobtitle'
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="currentlyWorking">Currently working here *</label>
            <input
              type='text'
              id="currentlyWorking"
              name="currentlyWorking"
              checked={formData.currentlyWorking}
              onChange={handleChange}
            />
           
          </div>
          <div>
            <label>Current Salary *</label>
            <input
            id='currentsalary'
              type="text"
              required
            />
            <label>Expected Salary *</label>
            <input
            id='expectedsalary'
              type="text"
              required
            />
          </div>
          <div>
            <label>Available To Join (in days) *</label><br />
            <input
            id='availablejoin'
              type="text"
              required
            />
          </div>
          <div>
            <label>Location Preference *</label><br />
            <input
            id='location'
              type="text"
              required
            />
          </div>
          <div>
            <label>Current Location *</label><br />
            <input
            id='currentlocation'
              type="text"
              required
            />
          </div>
          <div>
            <label>Date of Joining *</label>
            <input
            id='dateofjoining'
              type='date'
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date of Relieving *</label>
            <input
            id='dateofreliving'
              type='date'
              name="relievingDate"
              value={formData.relievingDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
       
        <div className='Education'>
        <h3>Education Details</h3>
       
          <div>
            <label>Course *</label><br />
            <input
            id='course'
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>
 
          <div>
            <label>Branch/Specialization *</label><br />
            <input
            id='branch'
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
            />
          </div>
 
          <div>
            <label>Start of Course *</label>
            <input
            id='startofcourse'
              type='date'
              name="startOfCourse"
              value={formData.startOfCourse}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>End of Course *</label>
            <input
            id='endofcourse'
              type='date'
              name="endOfCourse"
              value={formData.endOfCourse}
              onChange={handleChange}
              required
            />
          </div>
 
          <div>
            <label>University/College *</label><br />
            <input
            id='university'
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
            />
          </div>
        </div>
 
        <div>
          <label>Location *</label><br />
          <input
          id='location'
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className='documents'>
        <h3>Documents</h3>
        <div className='Resume'>
          <ResumeUpload />
        </div>
        <div className='photo'>
          <PhotoUploader />
        </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
 
export default ApplicationForm;
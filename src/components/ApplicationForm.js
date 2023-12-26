import React, { useState } from 'react';
import ResumeUpload from '../ApplicationComponent/ResumeUpload';
import PhotoUploader from '../ApplicationComponent/PhotoUploader';
import './ApplicationForm.css';
import Countrystatecity from '../ApplicationComponent/Countrystatecity';

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
    // Handle form submission logic (send data to the server or perform actions)
  };

  return (
    <div className="application-form-container">
      <form onSubmit={handleSubmit}>
        <h2 className="application-form-title">Candidate Profile</h2>
        <div>
          <h3 className="resume-1">Cv/Resume*</h3>
          <p>*Provide your resume below to pre-fill your profile. Existing data in the form will be replaced</p>
          <ResumeUpload />
        </div>
        <div className="photo">
          <h3>Profile picture*</h3>
          <p>Provide your photo below your profile. Existing data in the form will be replaced</p>
          <PhotoUploader />
        </div>
        <div className="login-1">
          <label className="login-2" htmlFor="login">
            Login*
          </label>
          <input type="email" id="login" name="login" value={formData.firstName} onChange={handleChange} required />
          <label className="password" htmlFor="password">
            Password*
          </label>
          <input type="password" id="password" />
          <label className="password" htmlFor="reenterPassword">
            Password(Re-enter)*
          </label>
          <input type="password" id="reenterPassword" />
        </div>

        <h2>Enter Your information</h2>
        <div className="enter-1">
          <label className="salutation-1">Salutation</label>
          <select className="select-1">
            <option value="make">-Make a Selection-</option>
            <option value="miss">Miss</option>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="ms">Ms</option>
            <option value="mst">Mst</option>
            <option value="mx">Mx</option>
            <option value="ms">Ms</option>
          </select>
          <br />
          <label className="first-name" htmlFor="firstName">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <label className="last-name" htmlFor="lastName">
            Last Name *:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <br />
          <label className="gender" htmlFor="gender">
            Gender*
          </label>
          <select id="gender" name="gender" onChange={handleChange} required>
            <option value="-select-">-select-</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <label className="email" htmlFor="email">
            Email *:
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <h2 className="phone-1">Phones(1)</h2>
        <div className="phone">
          <label className="type-1">Type*</label>
          <select className="type-2">
            <option>Mobile</option>
            <option>Home</option>
          </select>
          <br />
          <label className="number-1">Number(Country Code & 10Digits)*</label>
          <input type="numbers" value={formData.phoneNumber} onChange={handleChange} required />
        </div>

        <h2> Addresses</h2>

        <div className="address">
          <label className="type-3">Type*</label>
          <select className="type-3">
            <option>Home</option>
            <option>Other</option>
          </select>
          <br />
          <label className="address-2">Address*</label>
          <input type="text" value={formData.address} onChange={handleChange} required />
          <Countrystatecity />

          <label className="postal-code">Zip/Postal Code*</label>
          <input type="numbers" value={formData.email} onChange={handleChange} required />
          
        </div>

        <div className="Job-1">
          <p>Are you open to Relocating to job Location?</p>
          <select className="relocating-1">
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
        <div className="employed-1">
          <p>Have you ever been employed with Innogen or its subsidiaries</p>
          <select className="employed-2">
            <option>-Make a Selection-</option>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
        <div className="id-1">
          <p>If yes, please provide your Employee ID. If no, enter N/A*</p>
          <input type="text" className="id-2" />
        </div>
        <div className="jobes">
          <p>
            Are you currently employed with the government or a government agency in any capacity or were employed in the
            last 12 months? (The definition of Government employment includes employees of government companies, public
            sector undertakings, departments, institutions, or any arm of any government, and foreign officials including
            officials of public international organizations)*
          </p>
          <select className="jobes-1">
            <option>-Make a Selection-</option>
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
        <div className="dateofbirth">
          <p>Birth Date (dd/mm/yyyy) (Month / Day / Year)*</p>
          <input type="date" />
        </div>
        <h2>Education *</h2>
        <div className="education-1">
          <h3>Education Type*</h3>
          <label className="degree">Degree*</label>
          <select className="education">
            <option>-Make a Selection-</option>
            <option>Institute</option>
            <option>School</option>
            <option>ITI</option>
            <option>University</option>
            <option>Polytechnic</option>
            <option>College</option>
          </select>
          <label className="college-university">College/University</label>
          <input type="text" />
          <label className="branch-of-study">Branch of Study</label>
          <input type="text" />
          <label className="graduation-date">Graduation Date / Year of Passing (day/ Month/ Year)*</label>
          <input type="date" />
          <Countrystatecity />
        </div>

        <h1>Work Experience</h1>
        <div className="work-2">
          <h2>Current Employment (1)*</h2>

          <label className="employer">Employer*</label>
          <input
            type="text"
            name="Employer"
            value={formData.employer}
            onChange={handleChange}
            required
          />

<Countrystatecity />

          <label className="job-title">Job Title*</label>
          <input
            type="text"
            id="Job Title"
            name="Job Title"
            checked={formData.JobTitle}
            onChange={handleChange}
          />

          <label className="start-date">Start Date (Day / Month / Year)*</label>
          <input
            type="date"
            name="StartDate"
            value={formData.StartDate}
            onChange={handleChange}
            required
          />
          <br />

          <label className="end-date">End Date (Day/ Month/ Year)*</label>
          <input
            type="date"
            name="EndDate"
            value={formData.EndDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <h3 className="description">Description</h3>

          <textarea
            id="Description"
            name="Description"
            className="desc"
            value={formData.Description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="ctc">
          <label className="current-ctc">Current CTC*</label>
          <input type="numbers" required />
          <label className="expected-ctc">Expected CtC *</label>
          <input type="text" required />
        </div>
        <div className="total-1">
          <h3 className="total-experience">Total Experience Details (in months)*</h3>
          <label className="total-experience" type="text" />
        </div>
        <div className="total-2">
          <label className="current-notice-period">Current Notice Period (days)*</label>
          <select>
            <option>Immediately</option>
            <option>10 days</option>
            <option>15 days</option>
            <option>25 days</option>
            <option>30 days</option>
            <option>45 days</option>
          </select>
        </div>

        <div className="submit">
         
          <button type="submit" className="submit-1">
            Submit Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

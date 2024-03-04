
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import "./RegistrationForm.css";
import { useNavigate } from 'react-router-dom';
 
const RegistrationForm = () => {
  const navigate = useNavigate();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
 
  const handleNext = () => {
    if (isCaptchaVerified) {
      navigate('/application-form');
    } else {
      console.log('Please complete the reCAPTCHA verification.');
    }
  };
 
  const handleCaptchaChange = (value) => {
    console.log('reCAPTCHA value:', value);
    setIsCaptchaVerified(true);
  };
 
  return (
    <div>
    <div className="registration-container">
      <h2 className="registration-title">Registration Form</h2>
      <div className="registration-instructions">
        <p className="instruction-heading">
          Welcome to the registration form. Please follow the instructions below to complete your registration:
        </p>
 
        <div className="instruction-list">
          <h3>Instructions:</h3>
          <ol>
            <li>Your face should be visible in the camera.</li>
            <li>Face should be clearly visible and well lit(i.e., not dark).</li>
            <li>The background should be plain(i.e., no clutter)</li>
            <li>No other person should be in the photograph</li>
            </ol>
            </div>
            </div>
          
            
            <h4>Please complete the security verification and click next.</h4>
            <h4>Captcha</h4>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleCaptchaChange}
              />
            
            
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
              </div>
              
            
          
       
    </div>

    
  );
};
 
export default RegistrationForm;
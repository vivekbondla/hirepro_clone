// ContactUs.js
import React from 'react';
import './ContactUs.css'; // Import your CSS file

const ContactUs = () => {
  return (
   <div className='contact-container'>
    <div className='contact-image'>
    <img src='https://img.locationscout.net/images/2019-08/abraj-street-united-arab-emirates_l.jpeg' className='contact-image'/>
    </div>
    <div> <h1 className='contactUs-heading'>Contact Us</h1>
    <div className="contact-us-container">
     
      <div className="contact-section">
        <h3 className='contact-heading'>Contact</h3>
        <h2 className='sub-contact'><u>Administrative Office<br/>
          Elite Business Space</u></h2>
        <p className="contact-text">
          Unit #407, 4th Floor,<br/> Jain sadguru images<br/> Capital Park, Image <br/>Garden Road <br/>Hyderabad,<br/> Telangana 500081.
        </p>
      </div>
      <div className="branches-section">
        <h3 className='branches-heading'>Our International Branches</h3>
        <p>Phillipines<br/>Miss. Dianne Pearl Nollal,<br/>Imus, Cavite. Philippines</p>
      </div>
      <div className="hours-section">
        <h3 className='hours-heading'>Opening Hours</h3>
        <p>Mon - Fri   10:00 am – 6:00 pm</p>
      </div>
      
      <div className="branch-office-section">
        <h3 className='office-heading'>Branch Office</h3>
        <p>Manjeera Trinity Phase3,<br/> JNTU campus near KPHB<br/> Hyderabad , Telangana<br/> 500085.<br/>info@innogenits.org<br/>+91-7075759918</p>
      </div>
      </div>
      
      <div className="map-section">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266787864933!2d78.38360607389319!3d17.446940383450414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910d8d1c4f8b%3A0x6ef1b184af90fa3f!2sCapital%20Park!5e0!3m2!1sen!2sin!4v1702899076874!5m2!1sen!2sin"
          width="600"
          height="650"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;

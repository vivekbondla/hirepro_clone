// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="vr-footer-section">
    <div className="container footer-container">
      <div className='sub-container col-12'>
        <div>
          <div id='image'>
           <img src="https://static.wixstatic.com/media/c5d8c7_64210ef5598948089634336b2dc3923c~mv2.png/v1/fill/w_348,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" alt="Innogen Logo" className="logos" />
          </div>
          <div>
            <h3 className='contact'>Contact</h3>
            <h2 id='sub-contact'><u>Administrative Office<br/>
              Elite Business Space</u></h2>
            <p className="vr-footer-section-text">
            Unit #407, 4th Floor,<br/> Jain sadguru images<br/> Capital Park, Image <br/>Garden Road <br/>Hyderabad,<br/> Telangana 500081.
            </p>
          </div>
        </div>
        <div>
          <div>
              <h3 className='icon-heading'>Follow Us On</h3>
              <hr className="icon-hr-line" />
              </div>
            <div className="flex">
              
                <div className="vr-footer-section-icon-container">
                 <a href="https://www.innogenits.org/services" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'google']} className="icon" />
                  </a>
                </div>
                  <div className="vr-footer-section-icon-container">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'twitter']} className="icon" />
                </a>
                    </div>
              <div className="vr-footer-section-icon-container">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
                </a>
              </div>
              <div className="vr-footer-section-icon-container">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'facebook']} className="icon" />
                </a>
              </div>
            </div>
          </div>
          <div class="menu-container">
            <h3>Menu</h3>
            <nav>
        <Link to="/home">Home</Link><br />
        <Link to="/services">Services</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/contact">Contact</Link><br />
      </nav>
          </div>
          <div>
            <h3 className='branches'>Branches</h3>
            <p className="vr-footer-section-text">
            Hyderabad, Telangana,<br/>Chennai, Tamil Nādu,<br/> Uttar Pradesh, kanpur,<br/> Cavite, Philippines
            </p>
          </div>
          
        </div>
        <hr className="hr-line" />
        <div className="text-center">
        <div>
           <img src="https://static.wixstatic.com/media/c5d8c7_64210ef5598948089634336b2dc3923c~mv2.png/v1/fill/w_348,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1.png" alt="Innogen Logo" className="copyright-logo" />
          </div>
          <div>
          <i className="fa fa-copyright icon" aria-hidden="true"></i>
          <span className="vr-footer-section-copyright">   2021 InnoGen is Proudly Powered by Techmars</span>
        </div>
        </div>
        </div>
    </div>
  );
};
 
export default Footer;

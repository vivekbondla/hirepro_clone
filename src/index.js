
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import createRoot from "react-dom/client"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
 
library.add(fab, faLinkedin, faTwitter, faFacebook, faYoutube);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
reportWebVitals();
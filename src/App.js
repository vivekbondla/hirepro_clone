import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import ApplicationForm from './components/ApplicationForm';
import HomePage from './components/HomePage';
 
 
const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
          <Route path="/application-form" element={<ApplicationForm />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
 
export default App;
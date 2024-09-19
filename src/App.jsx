import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import FormPage from './components/FormPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
  </Router>
  );
};

export default App;

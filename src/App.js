import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Header from './components/Header'; // Import the Header component
import AboutPage from './components/AboutPage';
import ResearchPage from './components/ResearchPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer'; 
import DocumentationPage from './components/DocumentationPage';
import './App.css'; // Make sure to create and import your CSS for styling

function App() {
  // Define your research title
  const researchTitle = "SMART SENTRY - Smart Home Environment Monitoring &                Intelligent Anti-Theft Alarming System"; // Replace with your actual title

  return (
    <Router>
      <Header title={researchTitle} />
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

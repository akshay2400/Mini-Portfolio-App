import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectGallery from './components/ProjectGallery';
import ContactForm from './components/ContactForm';

/**
 * Main App layout combining all sections.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <ProjectGallery />
      <ContactForm />
    </div>
  );
}

export default App;

// MainPage.js
import React, { useState } from 'react';
import HomeSection from './HomeSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';

const MainPage = () => {
  const [currentSection, setCurrentSection] = useState('home'); // Track which section to display

  // Render the section based on currentSection state
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection />;
      case 'project':
        return <ProjectSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-center">
          <ul className="flex space-x-6">
            <li><button onClick={() => setCurrentSection('home')} className="hover:underline text-lg">Home</button></li>
            <li><button onClick={() => setCurrentSection('project')} className="hover:underline text-lg">Project</button></li>
            <li><button onClick={() => setCurrentSection('contact')} className="hover:underline text-lg">Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-10 px-4">
        {renderSection()}
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;

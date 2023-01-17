import React, { useState } from 'react';
import Nav from './Nav';
import AboutMe from './pages/AboutMe';
import FeaturedProject from './pages/FeaturedProject';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [ currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'FeaturedProject') {
          return <FeaturedProject />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        return <Contact />;
      };

      const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  )
}

import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Nav />
        {/* Content area to fill the space between Nav and Footer */}
        <div className="flex-grow">
          {/* Your content goes here */}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;

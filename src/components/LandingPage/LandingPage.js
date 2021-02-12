import React from 'react';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import About from './About';

export default function LandingPage() {
  return(
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
import React from 'react';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/contact';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;

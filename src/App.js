import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Services from "./components/Services";
 import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <AboutMe />
      <Skills />
      <Services/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer /> 
    </>
  );
}

export default App;

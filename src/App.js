import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About.jsx';
import Hero from './Component/Hero/Hero.jsx';
import React, { useEffect } from "react";
import gsap from 'gsap'; // Importing gsap
import ScrollTrigger from 'gsap/ScrollTrigger'; // Importing ScrollTrigger from gsap

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from './Component/Project/Project.jsx';
import Skill from './Component/Skill/Skill.jsx';
import Contact from './Component/Contact/Contact.jsx';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
     <Home />
     <Hero />
     <About />
     <Skill />
     <Project />
     <Contact />
    </div>
  );
}

export default App;

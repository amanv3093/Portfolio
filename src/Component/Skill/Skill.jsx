
import './Skill.css';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all'; // Import TextPlugin

gsap.registerPlugin(TextPlugin); // Register TextPlugin with GSAP

function Skill() {
  const compRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 7, ease: "power3.out" } });

    const handleScroll = () => {
      const isVisible = compRef.current.getBoundingClientRect().top < window.innerHeight;

      if (isVisible) {
        tl.to("#textIcon1, #textIcon2, #textIcon3, #textIcon4, #textIcon5, #textIcon6, #textIcon7, #textIcon8", {
          text: {
            value: function(index) {
              switch (index) {
                case 0:
                  return "Java";
                case 1:
                  return "React";
                case 2:
                  return "Html";
                case 3:
                  return "Tailwind";
                case 4:
                  return "Css";
                case 5:
                  return "Figma";
                case 6:
                  return "Js";
                case 7:
                  return "Github";
                default:
                  return "";
              }
            },
            scrambleText: { chars: "lowerCase", revealDelay: 0.1, tweenLength: false },
          }
        });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='Skill' id='skill' ref={compRef}>
      <div className='Skill-heading' data-aos="zoom-out">
        <h2>Skills</h2>
      </div>

      <div className='skill-box' data-aos="zoom-out">
        <div className='skill-Inner-box'>
          <span>
            <i className='bx bxl-java'></i>
            <p id='textIcon1'>Java</p>
          </span>
          <span>
            <i className='bx bxl-react'></i>
            <p id='textIcon2'>React</p>
          </span>
        </div> 
        <div className='skill-Inner-box'>
          <span>
            <i className='bx bxl-html5'></i>
            <p id='textIcon3'>Html</p>
          </span>
          <span>
            <i className='bx bxl-tailwind-css' ></i>
            <p id='textIcon4'>Tailwind</p>
          </span>
        </div> 
        <div className='skill-Inner-box'>
          <span>
            <i className='bx bxl-css3' ></i>
            <p id='textIcon5'>Css</p>
          </span>
          <span>
            <i className='bx bxl-figma' ></i>
            <p id='textIcon6'>Figma</p>
          </span>
        </div> 
        <div className='skill-Inner-box'>
          <span>
            <i className='bx bxl-javascript'></i>
            <p id='textIcon7'>Js</p>
          </span>
          <span>
            <i className='bx bxl-github' ></i>
            <p id='textIcon8'>Github</p>
          </span>
        </div> 
      </div>
    </div>
  );
}

export default Skill;


import './Skill.css'
import React, { useRef, useEffect } from 'react';

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

function Skill() {
  const compRef = useRef(null);

 
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 7, ease: "power3.out" } });

    const handleScroll = () => {
      // Check if the component is in view
      const isVisible = compRef.current.getBoundingClientRect().top < window.innerHeight;

      if (isVisible) {
        // Start animation when the component is in view
        tl.to("#textIcon1, #textIcon2, #textIcon3, #textIcon4, #textIcon5, #textIcon6, #textIcon7, #textIcon8", {
          text: {
            value: function(index) {
              switch (index) {
                case 0:
                  return "Java";
                case 1:
                  return "Html";
                case 2:
                  return "Css";
                case 3:
                  return "Js";
                case 4:
                  return "React";
                case 5:
                  return "Tailwind";
                case 6:
                  return "Figma";
                case 7:
                  return "Github";
                default:
                  return "";
              }
            },
            scrambleText: { chars: "lowerCase", revealDelay: 0.1, tweenLength: false },
          }
        });
        // Remove event listener after animation is triggered
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      // Remove event listener when component unmounts
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
           <i class='bx bxl-java'></i>
            <p id='textIcon1'>Java</p>
            
        </span>

        <span>
            
            <i class='bx bxl-react'></i>
            <p id='textIcon5'>React</p>

        </span>
      </div> 

     
      <div className='skill-Inner-box'>
      <span>
            
            <i class='bx bxl-html5'></i>
            <p id='textIcon2'>Html</p>
        </span>

        <span>
           
            <i class='bx bxl-tailwind-css' ></i>
            <p id='textIcon6'>Tailwind</p>

        </span>
      </div> 

      <div className='skill-Inner-box'>
      <span>
           
           <i class='bx bxl-css3' ></i>
           <p id='textIcon3'>Css</p>
       </span>
       <span>
            
            <i class='bx bxl-figma' ></i>
            <p id='textIcon7'>Figma</p>

        </span>

        
      </div> 

      <div className='skill-Inner-box'>
      <span>
            
            <i class='bx bxl-javascript'></i>
            <p id='textIcon4'>Js</p>
        </span>
        <span>
            
            <i class='bx bxl-github' ></i>
            <p id='textIcon8'>Github</p>

        </span>

        
      </div> 



        

      

     

      

      

    </div>
    
    </div>
  )
}

export default Skill




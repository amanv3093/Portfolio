import './About.css';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';



function About() {
  const compRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 10, ease: "power3.out" } });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animation when the component is in view
          tl.to("#textblock2 .para1", {
            text: {
              value: ` Hello! I'm Aman, a passionate Bachelor of Computer Application student based in India. I find joy in creating digital wonders that come to life on the internet. As a developer, I specialize in crafting exceptional websites and web applications that offer intuitive, pixel-perfect user interfaces.`,
              scrambleText: { chars: "lowerCase", revealDelay: 0.1, tweenLength: false },
            }
          }).to("#textblock2 .para2", {
            text: {
              value: ` In other words, I'm dedicated to building digital experiences that not only function flawlessly but also delight users with their simplicity and elegance. Let's bring your ideas to life and make an impact in the online world together!`,
              scrambleText: { chars: "lowerCase", revealDelay: 0.1, tweenLength: false },
            }
          });
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    });

    if (compRef.current) {
      observer.observe(compRef.current); // Start observing the component
    }

    // Cleanup function
    return () => {
      if (compRef.current) {
        observer.unobserve(compRef.current); // Stop observing when component unmounts
      }
    };

  }, []);
  return (
    <div className='About' id="about" ref={compRef}   >
      <div className='About-heading' >
        <p className='cssanimation leMagnify sequence'>Get To Know More</p>
        <h2 data-aos="zoom-out" data-aos-duration="1000">About Me</h2>
        <div className='about-icon-box' data-aos="zoom-out" data-aos-duration="1000">
          <i className="icon1 fa-brands fa-github"></i>
          <i className="icon1 fa-brands fa-linkedin"></i>
          <i className="icon1 fa-regular fa-envelope"></i>
          <i className="icon1 fa-brands fa-x-twitter"></i>
        </div>
      </div>
      <div className='About-box2' id='textblock2' >
        <p className='para1' data-aos="zoom-out">
          Hello! I'm Aman, a passionate Bachelor of Computer Application student based in India. I find joy in creating digital wonders that come to life on the internet. As a developer, I specialize in crafting exceptional websites and web applications that offer intuitive, pixel-perfect user interfaces.
        </p>
        <p className='para2' data-aos="zoom-out">
          In other words, I'm dedicated to building digital experiences that not only function flawlessly but also delight users with their simplicity and elegance. Let's bring your ideas to life and make an impact in the online world together!
        </p>
      </div>
    </div>
  );
}

export default About;

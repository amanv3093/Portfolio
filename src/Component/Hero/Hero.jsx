import React, { useRef, useEffect } from 'react';
import './Hero.css';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin); // Register the TextPlugin with GSAP

function Hero() {
  const compRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 10, ease: "power3.out" } });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animation when the component is in view
          tl.to("#textblock p", {
            text: {
              value: `Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.`,
              scrambleText: { chars: "lowerCase", revealDelay: 0.5, tweenLength: false },
            },
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
    <div className='hero-section demo' ref={compRef}>
      <div className='hero-section-box-1' id="textblock">
        <h1 className='cssanimation leMagnify sequence'>Hi! I'm Aman Verma</h1>
        <h2 className='cssanimation leMagnify sequence'>And I'm Front-End Developer</h2>
        <p>Resolving design problems, building smart user interfaces <br /> and useful interactions, developing rich web applications <br /> and seamless web experiences.</p>
      </div>
      <div className='hero-section-box-2 stage'>
         
           <div class="box bounce-1">If you're in need of a Front-End developer, you've come to the right place!</div>
         
      </div>
    </div>
  );
}

export default Hero;

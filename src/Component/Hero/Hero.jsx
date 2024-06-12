import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

// import me from "../Images/profile.jpg";
import resume from "../../Source/aman verma.pdf";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  return (
    <section id="Hero">
      <div className="banner-hero">
        <div className="left-hero">
          <span data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            Front-End Developer
          </span>
          <blockquote
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="600"
          >
            Talk is cheap. <br /> Show me the code
          </blockquote>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="800"
          >
            Resolving design problems, building smart user interfaces and useful
            interactions, developing rich web applications and seamless web
            experiences.
          </p>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download="aman-resume"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
            Get Resume
          </a>
        </div>
        <div className="hero-section-box-2 stage">
          <div data-aos="zoom-out" className="box bounce-1">
            If you're in need of a Front-End developer, you've come to the right
            place!
          </div>
        </div>
      </div>
      <div
        className="experience"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      ></div>
    </section>
  );
};

export default Hero;

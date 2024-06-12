import React from "react";
import { useEffect } from "react";
import "./About.css"; // Import external CSS file
import { IconContext } from "react-icons";
import { HiCode } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <div className="introduction" id="About">
      <div className="service-block">
        <div className="front-end" data-aos="fade-up">
          <div className="title">
            <span className="Active">Front-End Developer</span>

            <IconContext.Provider
              value={{
                className: "react-icons",
                size: "1.5rem",
                color: "#6EF3A5",
              }}
            >
              <HiCode />
            </IconContext.Provider>
          </div>

          <p>
            Hello! I'm Aman, a passionate Bachelor of Computer Application
            student based in India. I find joy in creating digital wonders that
            come to life on the internet. As a developer, I specialize in
            crafting exceptional websites and web applications that offer
            intuitive, pixel-perfect user interfaces.
          </p>

          <a href="#Works">PROJECTS</a>
        </div>
      </div>

      {/* AboutBlock */}
      <div className="about-block">
        <span data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Introduce
          <img alt="" />
        </span>

        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Hi, I’m Aman
        </h1>

        <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          Front-End Developer
          <br />
          I'm dedicated to building digital experiences that not only function
          flawlessly but also delight users with their simplicity and elegance.
          Let's bring your ideas to life and make an impact in the online world
          together!
        </p>

        <p data-aos="fade-up">
          I talk about my journey on{" "}
          <a
            href="https://x.com/Amanver59327311"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          , commit code to{" "}
          <a
            href="https://github.com/amanv3093"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , and network on{" "}
          <a
            href="https://www.linkedin.com/in/aman-verma-180a04243/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin.
          </a>
        </p>

        <p data-aos="fade-up">Skills :</p>

        <div className="techo-section">
          <ul data-aos="fade-up">
            <li>Html</li>
            <li>JavaScript(ES6+)</li>
            <li>React.js</li>
            <li>Git/Github</li>
            <li>Tailwind CSS</li>
          </ul>

          <ul className="Active" data-aos="fade-up">
            <li>Css</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Material UI</li>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

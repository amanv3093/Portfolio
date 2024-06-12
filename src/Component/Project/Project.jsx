import React, { useEffect } from "react";
import "./Project.css"; // Import the external CSS file

import { IconContext } from "react-icons";

import { FiFolder } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { GoLinkExternal } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);
  return (
    <section className="container" id="Work">
      <div className="titles">
        <h3>Projects</h3>
        <a href="/">View Archive</a>
      </div>

      <div className="div1">
        <div
          className="div2"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <div className="div3">
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href="https://github.com/amanv3093/TastyTrails"
                target="_blank"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a href="https://tasty-trails-phi.vercel.app" target="_blank">
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </div>

          <h1 className="h1">
            <a href="https://tasty-trails-phi.vercel.app" target="_blank">
              TastyTrails
            </a>
          </h1>

          <p className="p">
            Explore our food website, a blend of flavor and tech. Built with
            HTML, CSS, JavaScript, React, and Firebase. Enjoy seamless
            authentication and state management.
          </p>
        </div>

        <div
          className="div2"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <div className="div3">
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href="https://github.com/amanv3093/Trendy-Threads"
                target="_blank"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a href="https://trendy-threads.vercel.app" target="_blank">
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </div>

          <h1 className="h1">
            <a href="https://trendy-threads.vercel.app" target="_blank">
              Trendy-Threads
            </a>
          </h1>

          <p className="p">
            Discover our e-commerce site, powered by HTML, CSS, JavaScript,
            React, Firebase, and Redux Toolkit. Enjoy seamless shopping with
            secure authentication and efficient state management.
          </p>
        </div>
        <div
          className="div2"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <div className="div3">
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a href="https://github.com/amanv3093/pokedex" target="_blank">
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a href="https://pokedex-ten-tau-10.vercel.app/" target="_blank">
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </div>

          <h1 className="h1">
            <a href="https://pokedex-ten-tau-10.vercel.app/" target="_blank">
              Pokedex
            </a>
          </h1>

          <p className="p">
            Streamline your Pokémon wishlist with our web app! Effortlessly
            manage desired Pokémon using modern web tech for a seamless user
            experience.
          </p>
        </div>
        <div
          className="div2"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <div className="div3">
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a
                href="https://github.com/amanv3093/Tic-tac-Toi"
                target="_blank"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a
                href="https://amanv3093.github.io/Tic-tac-Toi/"
                target="_blank"
              >
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </div>

          <h1 className="h1">
            <a href="https://amanv3093.github.io/Tic-tac-Toi/" target="_blank">
              Tic-tac-Toi Game
            </a>
          </h1>

          <p className="p">
            Experience the classic thrill of Tic-Tac-Toe with friends! Our game,
            built with HTML, CSS, and JavaScript, offers endless fun and
            friendly competition.
          </p>
        </div>
        <div
          className="div2"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="1000"
        >
          <div className="div3">
            <IconContext.Provider
              value={{ size: "1.8rem", className: "react-icons" }}
            >
              <FiFolder />
            </IconContext.Provider>

            <span>
              <a href="https://github.com/amanv3093/Emoji-" target="_blank">
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <RiGithubLine />
                </IconContext.Provider>
              </a>

              <a href="https://amanv3093.github.io/Emoji-/" target="_blank">
                <IconContext.Provider
                  value={{ size: "1.2rem", className: "react-icons-link" }}
                >
                  <GoLinkExternal />
                </IconContext.Provider>
              </a>
            </span>
          </div>

          <h1 className="h1">
            <a href="https://amanv3093.github.io/Emoji-/" target="_blank">
              Emoji 🔍 Application
            </a>
          </h1>

          <p className="p">
            Creating an emoji application with HTML, CSS, and JavaScript that
            includes search functionality can be a fun project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;

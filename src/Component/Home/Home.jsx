import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css"; // Import external CSS
import Hambourger from "./Hambourger";
const Media__links = {
  Twitter: "https://x.com/Amanver59327311",
  Github: "https://github.com/amanv3093",
  Linkedin: "https://www.linkedin.com/in/aman-verma-180a04243/",
};

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);

  const [change, setChange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const ChangeNavbarFixed = () => {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNavbarFixed);
    return () => {
      window.removeEventListener("scroll", ChangeNavbarFixed);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={change ? "navbar colorChange" : "navbar"} id="Home">
      <h1>
        <a href="#Hero">Aman verma</a>
      </h1>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        {["Home", "About", "Work", "Contact"].map((item, index) => (
          <li key={item}>
            <a
              href={item === "Home" ? "#Hero" : `#${item}`}
              className={item === "Home" ? "active" : ""}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration={`${1000 + index * 200}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="media">
        <IconContext.Provider value={{ className: "react-icons", size: 15 }}>
          {[
            {
              link: Media__links.Twitter,
              icon: <i className="icon1 fa-brands fa-x-twitter"></i>,
              name: "Twitter",
            },
            {
              link: Media__links.Github,
              icon: <AiFillGithub />,
              name: "Github",
            },
            {
              link: Media__links.Linkedin,
              icon: <AiFillLinkedin />,
              name: "Linkedin",
            },
          ].map((media, index) => (
            <span
              key={media.name}
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration={`${1000 + index * 400}`}
            >
              <a href={media.link} target="_blank" rel="noreferrer">
                {media.icon} {media.name}
              </a>
            </span>
          ))}
        </IconContext.Provider>

        <span
          className="btn-mail"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1600"
        >
          <a className="mail" href="mailto:amanv3093@gmail.com">
            <GoMail />
          </a>
        </span>
      </div>

      <Hambourger toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Hambourger.css";

import resume from "../../Source/aman verma.pdf";
const Hambourger = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="Hambourger">
      <div
        className={`BurgerMenu ${showMenu ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div />
        <div />
        <div />
      </div>
      {showMenu && (
        <>
          <div className="MenuMobile">
            <div className="List">
              <a href="#Hero" onClick={closeMenu}>
                Home
              </a>
              <a href="#About" onClick={closeMenu}>
                About
              </a>
              <a href="#Work" onClick={closeMenu}>
                Works
              </a>
              <a href="#Contact" onClick={closeMenu}>
                Contact
              </a>
            </div>
            <span>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                download="Aman-resume"
                onClick={closeMenu}
              >
                Resume
              </a>
            </span>
          </div>
          <div className="Overlay" onClick={closeMenu}></div>
        </>
      )}
    </div>
  );
};

export default Hambourger;

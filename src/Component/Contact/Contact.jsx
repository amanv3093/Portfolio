import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="Contact">
      <div
        className="contact-head"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        <h1>Contact</h1>
      </div>
      <div
        className="Contact-icon-box"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        <a target="_blank" href="https://github.com/amanv3093">
          <i className="icon1 fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aman-verma-180a04243/"
        >
          <i className="icon1 fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:amanv3093@gmail.com">
          <i className="icon1 fa-regular fa-envelope"></i>
        </a>
        <a target="_blank" href="https://twitter.com/Amanver59327311">
          <i className="icon1 fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;

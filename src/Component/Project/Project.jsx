import React from "react";
import "./Project.css";
import Card from "./Card";
import img1 from "../../Source/Screenshot from 2024-04-19 13-48-08.png";
import img2 from "../../Source/Screenshot from 2024-03-17 10-31-24.png";
import img3 from "../../Source/Screenshot from 2024-04-19 13-48-46.png";

function Project() {
  return (
    <div id="project">
      <div
        className="project-heading"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <h2>Project</h2>
      </div>
      <div className="card-box">
        <Card
          img1={img1}
          projectName="TastyTrails"
          code="https://github.com/amanv3093/TastyTrails"
          livelink="tasty-trails-phi.vercel.app"
          discription="Explore our food website, a blend of flavor and tech. Built with HTML, CSS, JavaScript, React, and Firebase. Enjoy seamless authentication and state management"
        />
        <Card
          img1={img2}
          projectName="Tic-tac-Toi Game"
          code="https://github.com/amanv3093/Tic-tac-Toi"
          livelink="https://amanv3093.github.io/Tic-tac-Toi/"
          discription="Experience the classic thrill of Tic-Tac-Toe with friends! Our game, built with HTML, CSS, and JavaScript, offers endless fun and friendly competition"
        />
        <Card
          img1={img3}
          projectName="Trendy-Threads"
          code="https://github.com/amanv3093/Trendy-Threads"
          livelink="https://trendy-threads.vercel.app/"
          discription="Discover our e-commerce site, powered by HTML, CSS, JavaScript, React, Firebase, and Redux Toolkit. Enjoy seamless shopping with secure authentication and efficient state management."
        />
      </div>
    </div>
  );
}

export default Project;

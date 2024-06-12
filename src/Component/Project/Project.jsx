import React from "react";
import "./Project.css";
import Card from "./Card";
import img1 from "../../Source/Screenshot from 2024-04-19 13-48-08.png";
import img2 from "../../Source/Screenshot from 2024-03-17 10-31-24.png";
import img3 from "../../Source/Screenshot from 2024-04-19 13-48-46.png";
import img4 from "../../Source/Screenshot from 2024-06-12 12-12-43.png";
import img5 from "../../Source/Screenshot from 2024-06-12 12-39-46.png";

function Project() {
  return (
    <div id="project">
      <div
        className="project-heading"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <h2 className="project-heading">Project</h2>
      </div>
      <div className="card-box">
        <Card
          img1={img1}
          projectName="TastyTrails"
          code="https://github.com/amanv3093/TastyTrails"
          livelink="https://tasty-trails-phi.vercel.app/"
          description="Explore our food website, a blend of flavor and tech. Built with HTML, CSS, JavaScript, React, and Firebase. Enjoy seamless authentication and state management."
        />
        <Card
          img1={img2}
          projectName="Tic-tac-Toi Game"
          code="https://github.com/amanv3093/Tic-tac-Toi"
          livelink="https://amanv3093.github.io/Tic-tac-Toi/"
          description="Experience the classic thrill of Tic-Tac-Toe with friends! Our game, built with HTML, CSS, and JavaScript, offers endless fun and friendly competition."
        />
        <Card
          img1={img3}
          projectName="Trendy-Threads"
          code="https://github.com/amanv3093/Trendy-Threads"
          livelink="https://trendy-threads.vercel.app/"
          description="Discover our e-commerce site, powered by HTML, CSS, JavaScript, React, Firebase, and Redux Toolkit. Enjoy seamless shopping with secure authentication and efficient state management."
        />
        <Card
          img1={img4}
          projectName="Pokedex"
          code="https://github.com/amanv3093/pokedex"
          livelink="https:pokedex-ten-tau-10.vercel.app"
          description="The Pokémon Wishlist Tracker is a web application designed to help users manage and keep track of their desired Pokémon. Built with a combination of modern web technologies, the application provides an intuitive and responsive user experience."
        />
        <Card
          img1={img5}
          projectName="Sticky Notes"
          code="https://github.com/amanv3093/Sticky-Notes"
          livelink="https://amanv3093.github.io/Sticky-Notes/"
          description="An application built with HTML5, Css, and JavaScript for creating and managing sticky notes."
        />
      </div>
    </div>
  );
}

export default Project;

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
        />
        <Card
          img1={img2}
          projectName="Tic-tac-Toi Game"
          code="https://github.com/amanv3093/Tic-tac-Toi"
          livelink="https://amanv3093.github.io/Tic-tac-Toi/"
        />
        <Card
          img1={img3}
          projectName="Trendy-Threads"
          code="https://github.com/amanv3093/Trendy-Threads"
          livelink="https://trendy-threads.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Project;

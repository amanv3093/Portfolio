import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Project.css";
import { UseColorContext } from "../../Context/Context";

// box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 12px
export default function MediaCard(props) {
  let { handleColor } = UseColorContext();
  return (
    <div
      className="box8 "
      data-aos="zoom-out"
      data-aos-duration="1000"
      style={{
        boxShadow: `${
          handleColor === "black" ? "gray" : "#551a8b"
        } 0px 0px 10px`,
      }}
    >
      <div className="inner-box8">
        <div className="inner-box8-image">
          <img src={props.img1} alt="project-img" />
        </div>
        <div className="inner-box8-text">
          <h2>{props.projectName}</h2>
          <p
            style={{
              color: `${handleColor === "black" ? "gray" : "#551a8b"}`,
            }}
          >
            {props.description}
          </p>
        </div>
        <div className="inner-box8-button">
          <button
            style={{
              background: `${handleColor === "black" ? "#3293ee" : "#551a8b"}`,
            }}
          >
            <a href={props.code} target="_blank">
              View code
            </a>
          </button>
          <button
            style={{
              background: `${handleColor === "black" ? "#3293ee" : "#551a8b"}`,
            }}
          >
            <a href={props.livelink} target="_blank">
              Live code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

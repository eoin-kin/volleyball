import React from "react";
import { TopNav } from "../Components/TopNav";
import "./About.css";
import BottomBar from "../Components/BottomBar";
function About() {
  return (
    <>
      <TopNav />
      <div className="about-parent">
        <div className="title-bg">
          <img src="/about-banner.webp" />
        </div>
        <br />
        <div className="text-bg">
          <p>
            Welcome to the University of Galway Volleyball Club! The University
            Galway Volleyball Club has been an integral part of Galway
            University since 1975 and has been taking part in Intervarsity
            competitions since 1976. International students make up a large
            portion of the Men's and Women's teams each year, mixed with a core
            of Irish students. Our Men's and Women's teams play at a high
            standard and are one of most prolific college teams in recent years!
          </p>
        </div>
        <br />
        <br />
        <div className="title-bg">
          <img src="/Training-Times.webp" />
        </div>
      </div>
      <BottomBar />
    </>
  );
}

export default About;

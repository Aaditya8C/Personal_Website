import React from "react";
import aboutMe from "../Images/aboutMe.jpg";
import hobby from "../Images/hobby.jpg";
import my2 from "../Images/my2.jpeg";
import myMain from "../Images/myMain.png";
import "./slide.js";
import "../CSS/design.css";
import "../CSS/style.scss";
export default function Body() {
  return (
    <>
      {/* <div className="container"> */}
        <marquee behavior="scroll" direction="left-to-right" scrollamount="30">
          Welcome to my portfolio website....
        </marquee>

        <div className="intro" id="about">
          <div className="image">
            {/* <img src={dev} alt="dev" width={"35%"} /> */}
            <img src={myMain} alt="dev" width={"25%"} />
          </div>
          <div className="con">
            <h3>Hey, This is:</h3>
            <br />
            <h2>Aaditya Padte</h2>
            <p>
              A developer who wants to profession his carrier in the world of
              the web development.
            </p>

            <div className="resume">
              <a href="https://drive.google.com/drive/folders/13UlTS7zmQ9QC5bgRgF-bLAjHPcOXbQZn">
                <button className="btn btn-dark btn-lg">Download Resume</button>
              </a>
            </div>
          </div>
        </div>

        <div className="intro2">
          <div className="con2">
            <h3 className="tag head1">About Me</h3>
            <p>
              I am a student learning in the field of computer
              engineering.Currently I'm living in Mumbai.
              <br /> My dream is to develop interactive and stunning websites.
            </p>
          </div>
          <div className="image2">
            <img src={aboutMe} alt="ABOUT" />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        

        
        <div className="hobbies">
          <div>
            <img src={hobby} alt="hobbies" />
          </div>
          <div className="con3">
            <h3 className="tag head2">My Hobbies</h3>
            <ol>
              <li>
                I like to learn new technologies as sticking to only specific
                technology for a long time makes it bore to work. Also changes
                are required!!!
              </li>
              <li>
                Also i like to do exercise everyday as our health is the most
                precious thing to us.
              </li>
              <li>I like to edit the videos.</li>
            </ol>
          </div>
           </div>


      {/* </div> */}
    </>
  );
}

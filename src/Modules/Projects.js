import React from "react";
import calc from "../Images/calc.jpg";
import forts from "../Images/forts.jpg";
import women from "../Images/women.jpeg"; //use two (..) to import from another subfolder while we are in one subfolder
import "./design.css";
import "./style.scss";

export default function Projects() {
  return (
    <body>
      <div className="container" id="projects">
      <h3>My Projects</h3><br /><br />
        <div className="cards">
        <div className="card1" id="proId">
          <div className="first-pro">
            <img
              src={calc}
              alt="calculator"
              id="images"
              className="image-fluid"
              width={"100%"}
              height={"300px"}
            />
            <div className="contents">
              <h5>Interactive Calculator</h5>
              <p>
                This is the basic calcultor that performs common operations such
                as addition,subtraction,division,multiplication,modulus etc.
              </p>
              <p>It works almost similar to any physical calcultor</p>
              <p>Technologies used: React JS,JS,CSS,Bootstrap</p>
            </div>
          </div>
        </div>

        <div className="card2">
          <div className="second-pro">
            <img
              src={forts}
              alt="forts"
              id="images"
              height={"300px"}
              width={"100%"}
            />
            <div className="contents">
              <h5>Travel Kida</h5>
              <p>This is the website that lists best forts in Maharashtra.</p>
              <p>
                Also it describes all the required info including best time to
                visit,how to reach etc.
              </p>
              <p>Technologies used: Html,JS,CSS,Bootstrap</p>
            </div>
          </div>
        </div>

        <div className="card3">
          <div className="third-pro">
            <img
              src={women}
              alt="women"
              id="images"
              height={"300px"}
              width={"100%"}
            />
            <div className="contents">
              <h5>Women Safety Application</h5>
              <p>
                This is an android app that helps the womens to handle the
                critical circumstances.
              </p>
              <p>
                It has feature such as call to emergency on a single
                click,display our current location,send sms to provided contacts
                etc.
              </p>
              <p>Technologies used: Java,XML,Firebase,Maps API</p>
            </div>
          </div>
        </div>
        </div>
        

        {/* <div className="slideshow">
          <span id="slide-1" className="slidesss"></span>
          <span id="slide-2" className="slidesss"></span>
          <span id="slide-3" className="slidesss"></span>
          <div className="imageConatainer">
            <img src={calc} alt="calc" className="slide" width={500} height={300}/>  <img src={forts} alt="fort" className="slide" width={500} height={300} />
            {/* <div className="buttons">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div> */}
        {/* <img src={forts} alt="fort" className="slide" width={500} height={300} />
            <img src={women} alt="women" className="slide" width={500} height={300} />
          </div>
          <div className="buttons">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div> */}

        {/* <script src="slide.js"></script> */}
      </div>
    </body>
  );
}

import React from "react";
import calc from "../Images/calc.jpg";
import forts from "../Images/forts.jpg";
import face from "../Images/face.jpg";
import women from "../Images/women.jpeg"; //use two (..) to import from another subfolder while we are in one subfolder
import '../CSS/style.scss'

export default function Projects() {
  return (
    <body>
      <div className="section" id="projects">
        <h3>My Projects</h3>
        <br />
        <br />
        <div className="cards">


          <div className="twoCards">



          <div className="card1" id="proId">
              <div className="first-pro">
              <a href="https://ajp-calculator.netlify.app/">
                <img
                  src={calc}
                  alt="calculator"
                  id="images"
                  className="image-fluid"
                  width={"100%"}
                  height={"300px"}
                  // onClick={getPro1()}
                />
                </a>
                <div className="contents">
                  <h5>Interactive Calculator</h5>
                  <p>
                    This is the basic calcultor that performs common operations
                    such as addition,subtraction,division,multiplication,modulus
                    etc.
                  </p>
                  <p>It works almost similar to any physical calcultor</p>
                  <p>Technologies used: React JS,JS,CSS,Bootstrap</p>
                </div>
              </div>
            </div>
        

          
            <div className="card2">
              <div className="second-pro">
              <a href="https://aaditya8c.github.io/aadityajp0419-gmail.com.github.io/">
                <img
                  src={forts}
                  alt="forts"
                  id="images"
                  height={"300px"}
                  width={"100%"}
                />
                </a>
                <div className="contents">
                  <h5>Travel Kida</h5>
                  <p>
                    This is the website that lists best forts in Maharashtra.
                  </p>
                  <p>
                    Also it describes all the required info including best time
                    to visit,how to reach etc.
                  </p>
                  <p>Technologies used: Html,JS,CSS,Bootstrap</p>
                </div>
              </div>
            </div>

          </div>
          
           
          



          

<div className="fourCards">
<div className="card3">
              <div className="third-pro">
              <a href="https://github.com/Aaditya8C/Women_Safety------MINI-Project">
                <img
                  src={women}
                  alt="women"
                  id="images"
                  height={"300px"}
                  width={"100%"}
                />
                </a>
                <div className="contents">
                  <h5>Women Safety Application</h5>
                  <p>
                    This is an android app that helps the womens to handle the
                    critical circumstances.
                  </p>
                  <p>
                    It has feature such as call to emergency on a single
                    click,display our current location,send sms to provided
                    contacts etc.
                  </p>
                  <p>Technologies used: Java,XML,Firebase,Maps API</p>
                </div>
              </div>
            </div>



            <div className="card4">
              <div className="third-pro">
              <a href="https://github.com/Aaditya8C/LGMVIP-Android/tree/master/Task%202%20-%20Copy">
                <img
                  src={face}
                  alt="face"
                  id="images"
                  height={"300px"}
                  width={"100%"}
                />
                </a>
                <div className="contents">
                  <h5>Face Detection App</h5>
                  <p>
                    This is an android app that helps to detect any human face. 
                  </p>
                  <p>
                  After detecting it will show some information about detected parts of the face.
                  </p>
                  <p>Technologies used: ML Face Detection Kit,Java,XML,Firebase</p>
                </div>
              </div>
            </div>


</div>

           
        

         
        </div>
      </div>
    </body>
  );
}

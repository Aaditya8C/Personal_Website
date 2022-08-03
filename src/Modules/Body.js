import React from "react";
// import dev from "../Images/dev.jpg";
import aboutMe from '../Images/aboutMe.jpg';
import hobby from '../Images/hobby.jpg';
import './design.css';
import './Responsive.css';
import MyImage from '../Images/MyImage.jpeg'
import './slide.js';
export default function Body() {
  return (
    <>
      <div className="section">
        <marquee behavior="scroll" direction="left-to-right" scrollamount="30">
          Welcome to my portfolio website....
        </marquee>

        <div className="intro" id="about">
          <div className="image">
            {/* <img src={dev} alt="dev" width={"35%"} /> */}
            <img src={MyImage} alt="dev" width={"25%"} />
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
          <a href="https://doc-0g-04-apps-viewer.googleusercontent.com/viewer/secure/pdf/qas1o9ivqo01mh7mv1ulvu3d4s8oldfa/5orlq12nnbrueblakgcg5dm6fhbc14qo/1659292425000/drive/04566479739226496215/ACFrOgC2CJGC7KEjBWKQLFoOzXgtCqaIyw0P624Ma1gSu5zHocrgGZeGSJ26ZlS2-kAs3jhT0Z42hzump0zyQ6R8vnialUxCirIuty_8l91gwnijvNhGJpZjg43JbnvfIsVKVnIw9utoFwLyg7Lc?print=true&nonce=8tj8drdlffqsm&user=04566479739226496215&hash=870g995l5hi9h1pkqf3c77do76qp9rul">
              <button className="btn btn-dark btn-lg">
                Download Resume
              </button>
            </a>
          </div>
           
          </div>
        </div>

      
        <div className="intro2">
          <div className="con2">
          <h3 className="tag head1">About Me</h3>
          <p>
            I am a student learning in the field of computer
            engineering.Currently I'm living in Mumbai.<br/> My dream is to develop
            interactive and stunning websites.
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
              technology for a long time makes it bore to work. Also changes are
              required!!!
            </li>
            <li>
              Also i like to do exercise everyday as our health is the most
              precious thing to us.
            </li>
            <li>I like to edit the videos.</li>
          </ol>
          </div>

        
          
          
          
        </div>
      </div>
    </>
  );
}

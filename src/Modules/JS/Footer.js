import React from "react";
import insta from "../Images/insta.jpg";
import yt from "../Images/yt.jpg";
import github from "../Images/github.png";
import line from "../Images/line.png";

export default function Footer() {
  return (
    <div className="contact" id="contactId">
      {/* <div className="container"> */}
      <footer className="bg-dark text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          <h5 style={{ color: "skyBlue" }}>Let us Be Social!!</h5>
          <br />
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Instagram --> */}
            <a href="">
              <img src={insta} alt="" width={"30px"} height={"30px"} />
            </a>

            {/* <!-- Linkedin --> */}
            <a href="https://www.linkedin.com/in/aaditya-padte-40086a233/">
              <img src={line} alt="" width={"30px"} height={"30px"} />
            </a>

            {/* <!-- Github --> */}
            <a href="https://github.com/Aaditya8C">
              <img src={github} alt="" width={"30px"} height={"30px"} />
            </a>

            {/* <!-- YT --> */}
            <a href="https://www.youtube.com/channel/UCDmn2z8eIajLpoUFd7U689A">
              <img src={yt} alt="" width={"30px"} height={"30px"} />
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright :
          <a
            className="text-white"
            href="https://www.linkedin.com/in/aaditya-padte-40086a233/"
          >
            AadityaPadte
          </a>
          <br />
          Designed by Aaditya Padte
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* </div> */}
    </div>
  );
}

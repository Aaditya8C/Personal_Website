import React from "react";
import Body from "./Body";
import Projects from "./Projects";
import slide from "./slide";

export default function Header() {
  let style = {
    color: "White",
    marginLeft: "20px",
    fontSize: "20px",
    fontFamily: "'Times New Roman', Times, serif",
    display: "flex",
    paddingTop: "10px",
    fontWeight: "bold",
  };

  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      {/* <nav class="navbar"> */}
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: "bold",
            fontSize: "25px",
            color: "Yellow",
          }}
        >
          Aaditya Padte
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#about"
                style={style}
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#proId" style={style}>
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contactId" style={style}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
//import { Link } from "react-router-dom";

import "./nav.css";

function Nav(props) {
  return (
    <div class="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">
            2Nite Events
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
              <span onClick={() => setCurrentTab("about")}>About Me</span>
            </li>
            <li
              className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}
            >
              <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
            </li>
            <li
              className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}
            >
              <span onClick={() => setCurrentTab("contact")}>Contact</span>
            </li>
            <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
              <span onClick={() => setCurrentTab("resume")}>Resume</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

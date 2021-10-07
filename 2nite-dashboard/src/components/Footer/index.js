import React from "react";
import { AiFillPhone, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerBox">
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Sergey-Grigoryev/2NiteEvents"
          >
            <MdEmail className="svgLink" color="#00a6fb" size={40} />
          </a>
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Sergey-Grigoryev/2NiteEvents"
          >
            <AiFillPhone className="svgLink" color="#00a6fb" size={40} />
          </a>
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/2niteEvents/"
          >
            <AiFillFacebook className="svgLink" color="#00a6fb" size={40} />
          </a>
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Sergey-Grigoryev/2NiteEvents"
          >
            <GrLinkedin className="svgLink" color="#00a6fb" size={40} />
          </a>
          <a
            className="px-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Sergey-Grigoryev/2NiteEvents"
          >
            <AiFillGithub className="svgLink" color="#00a6fb" size={40} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

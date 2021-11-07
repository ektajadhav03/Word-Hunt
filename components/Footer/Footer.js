import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        MULTI-LANG DICTIONARY Made by{" "}
        <a
          href="https://www.linkedin.com/in/ektajadhav/"
          target="__blank"
        >
          EKTA SATISH JADHAV
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/ekta_satish_jadhav/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ektajadhav/"
          target="__blank"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

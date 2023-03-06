import React from "react";
import  "./left.css";

const Footer = (props) => {
  return (
    <div className="left">
      <div className="left-container">
      <i className={props.icon}></i>
      <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Footer;

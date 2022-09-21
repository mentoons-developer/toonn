import React from "react";
import Styles from "./header.module.scss";
import left from "../../assets/home.png";
import info from "../../assets/information.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{ background: "#eef9f3" }}>
      <div className={Styles.header}>
        <Link to="/home">
          <img src={left} alt="" />
        </Link>
        <img src={logo} alt="" className={Styles.logo} />
        <Link to="/faq">
          <img src={info} alt="" />
        </Link>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Header;

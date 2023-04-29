import React, { useState } from "react";
import "./navbar.css"
import Logo from "../../img/MR.svg"

import Nav from "./stylednav/StyledNav";
import Logo_container from "./stylednav/Logo";
import Text_container from "./stylednav/Text_container";
import Losung from "./stylednav/Losung";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <Nav>
      <Logo_container>
        <img src={Logo}/>
      </Logo_container>
      <Text_container>
        <Losung>Create</Losung>
        <Losung>Build</Losung>
        <Losung>Change</Losung>
      </Text_container>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      </Nav>
  );
}

export default Navbar;
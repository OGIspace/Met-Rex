import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../img/MR.svg";
import WishList from "../../img/icons8-wish-list-100 1.svg";
import PersonalPlace from "../../img/icons8-person-96 1.svg";
import Cart from "../../img/icons8-shopping-cart-96 1.svg"

import Nav from "./stylednav/StyledNav";
import Nav_container from "./stylednav/Nav_container";
import Logo_container from "./stylednav/Logo";
import Text_container from "./stylednav/Text_container";
import Losung from "./stylednav/Losung";
import Search_container from "./stylednav/Search_container";
import Search from "./stylednav/Search";
import Li from "./stylednav/Styled.li";

import SignINOut from "./stylednav/SingINOut";

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
      <Nav_container>
      <Logo_container>
        <img src={Logo}/>
      </Logo_container>
      <Text_container>
        <Losung>Create</Losung>
        <Losung>Build</Losung>
        <Losung>Change</Losung>
      </Text_container>
      
      <Search_container>
        <Search placeholder="Пошук товарів та послуг" type="search"/>
      </Search_container>
      <ul className={active}>
        <Li>
          <img src={WishList}/>
          </Li>
          <Li>
          <img src={PersonalPlace}/>
          </Li>
          <Li>
          <img src={Cart}/>
          </Li>
          <Li>
          <SignINOut href="" >Sing In</SignINOut>
          </Li>
          
          <Li>
          <SignINOut href="" >Sing In</SignINOut>
          </Li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      
      </Nav_container>
      </Nav>
  );
}

export default Navbar;
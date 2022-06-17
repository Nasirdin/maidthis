import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import { FiPhone } from "react-icons/fi";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a className="header__logo">
          <img src={Logo} alt="logotype" />
        </a>
        <ul className="header__items">
          <li className="header__item">
            <Link className="header__link" to="/">
              Book Now
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/">
              Pricing & Services
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/">
              Who We Are
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/">
              Book Now
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/">
              Location
            </Link>
          </li>
          <li className="header__item">
            <a className="header__link" href="tel:+996703313274">
              <FiPhone className="icon"/>
              +996703313274
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

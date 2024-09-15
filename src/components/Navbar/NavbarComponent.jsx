import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import "./NavbarComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Link className="main-nav-item" to="/sign-in">
        <FontAwesomeIcon icon={faUserCircle} className="icon" />
        Sign In
      </Link>
    </nav>
  );
};

export default NavbarComponent;

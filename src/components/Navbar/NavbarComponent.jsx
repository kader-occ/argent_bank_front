import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import "./NavbarComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import UserService from "../../services/UserService";

const NavbarComponent = () => {
  const isAuthenticated = UserService.isAuthenticated();

  const handleLogout = () => {
    console.log("Logout...");

    /*
    UserService.logout();
    window.location = "/";
    */
  };

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
      {isAuthenticated ? (
        <>
          <Link className="main-nav-item" to="/profile">
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
            My Profile
          </Link>
          <Link className="main-nav-item" onClick={handleLogout}>
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
            Sign out
          </Link>
        </>
      ) : (
        <Link className="main-nav-item" to="/sign-in">
          <FontAwesomeIcon icon={faUserCircle} className="icon" />
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default NavbarComponent;

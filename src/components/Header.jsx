import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const siteName = "Multifun";
import siteLogo from "/assets/img/logo.svg";

const Header = () => {

  // Hiding parts depending on location
  const location = useLocation();
  const menuHidden = !["/login", "/signup"].includes(location.pathname);
  const loginHidden = !["/login"].includes(location.pathname);
  const signupHidden = !["/signup"].includes(location.pathname);

  // Init toggle/close
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // On open
  const handleOpen = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 50)
  };

  // On close
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 400)
  };

  return (
    <header className="header">
      <h1 className="header__title">{siteName}</h1>
      <figure className="header__logo">
        <Link to="./">
          <img src={siteLogo} alt={siteName} />
        </Link>
      </figure>
      <nav className={`header__nav ${isVisible ? 'visible' : ''} ${isOpen ? 'open' : ''}`}>
        <div className="header__space">
          {menuHidden &&
            <ul className="header__menu">
              <li><a href="#how">How It Works</a></li>
              <li><a href="#one">One Account</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          }
          <div className="header__buttons">
            {loginHidden && <Link to="/login" className="btn btn-primary">Log In</Link>}
            {signupHidden && <Link to="/signup" className="btn btn-primary">Sign Up</Link>}
          </div>
          <div className="header__close" onClick={handleClose}></div>
        </div>
        <div className="header__overlay" onClick={handleClose}></div>
      </nav>
      <div className="header__toggle" onClick={handleOpen}><span></span></div>
    </header>
  );
};

export default Header;
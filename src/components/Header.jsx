import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const headerName = 'Multifun';
import headerLogo from '/assets/img/logo.svg';

const headerMenu = [{ name: 'How It Works', href: '#how' }, { name: 'One Account', href: '#one' }, { name: 'FAQs', href: '#faq' }];

const headerButtons = [{ name: 'Log In', href: '/login' }, { name: 'Sign Up', href: '/signup' }];

const Header = () => {

  // Hiding parts depending on location
  const location = useLocation();
  const indexPage = !["/"].includes(location.pathname);
  const indexLink = indexPage ? "./" : "#top";
  const menuHidden = !["/login", "/signup", "/forgot-password", "/login2"].includes(location.pathname);
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

  return (<header className="header">
    <h1 className="header__title">{headerName}</h1>
    <figure className="header__logo">
      <a href={indexLink}>
        <img src={headerLogo} alt={headerName} />
      </a>
    </figure>
    <nav className={`header__nav ${isVisible ? 'visible' : ''} ${isOpen ? 'open' : ''}`}>
      <div className="header__space">
        {menuHidden && <ul className="header__menu">
          {headerMenu.map((link, index) => (<li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>))}
        </ul>}
        <div className="header__buttons">
          {loginHidden && <Link to={headerButtons[0].href} className="btn btn-primary">{headerButtons[0].name}</Link>}
          {signupHidden && <Link to={headerButtons[1].href} className="btn btn-primary">{headerButtons[1].name}</Link>}
        </div>
        <div className="header__close" onClick={handleClose}></div>
      </div>
      <div className="header__overlay" onClick={handleClose}></div>
    </nav>
    <div className="header__toggle" onClick={handleOpen}><span></span></div>
  </header>);
};

export default Header;
import React from "react";

const footerName = 'Multifun';
import footerLogo from '/assets/img/logo.svg';

const footerLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Responsible Gambling', href: '#' },
  { name: 'FAQs', href: '#' },
  { name: 'Contact Us', href: '#' }
];

const footerLogos = [
  { src: '/assets/img/footer/gamcare.svg', width: 84, height: 24, alt: 'GamCare' },
  { src: '/assets/img/footer/gambling-therapy.svg', width: 52, height: 24, alt: 'Gambling Therapy' },
  { src: '/assets/img/footer/18.svg', width: 24, height: 24, alt: '18+' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <figure className="footer__logo">
          <img src={footerLogo} alt={footerName} />
        </figure>
        <ul className="footer__nav">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="footer__bottom">
          <ul className="footer__logos">
            {footerLogos.map((logo, index) => (
              <li key={index}>
                <img src={logo.src} width={logo.width} height={logo.height} alt={logo.alt} />
              </li>
            ))}
          </ul>
          <p className="footer__copy">&copy; {new Date().getFullYear()}. {footerName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
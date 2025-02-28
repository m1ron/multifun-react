const siteName = 'Multifun';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <figure className="footer__logo">
          <img src="../assets/img/logo.svg" alt={siteName} />
        </figure>
        <ul className="footer__nav">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li><a href="#">Responsible Gambling</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="footer__bottom">
          <ul className="footer__logos">
            <li><img src="../assets/img/footer/gamcare.svg" width="84" height="24" alt="GamCare" /></li>
            <li><img src="../assets/img/footer/gambling-therapy.svg" width="52" height="24" alt="Gambling Therapy" /></li>
            <li><img src="../assets/img/footer/18.svg" width="24" height="24" alt="18+" /></li>
          </ul>
          <p className="footer__copy">&copy; {new Date().getFullYear()}. {siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// Footer.js
import React from 'react';
import './Footer1.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__items__container">
          <div className="footer__help__container">
            <h1>Help</h1>
            <ul className="footer__help__links">
              <li className="help__link"><a href="/">Shipping</a></li>
              <li className="help__link"><a href="/">Refund</a></li>
              <li className="help__link"><a href="/">FAQ</a></li>
              <li className="help__link"><a href="/">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer__contact__container">
            <h1>Contact Us</h1>
            <ul className="footer__contacts">
              <li className="footer__contact">+123 4567 890</li>
              <li className="footer__contact">shop@shema.com</li>
              <li className="footer__contact">Addis Ababa, Ethiopia</li>
            </ul>
          </div>
          <div className="footer__social__link__container">
            <h1>Stay Connected</h1>
            <ul className="footer__social__links">
              {/* Replace with actual links */}
              <li className="social__link"><a href="/">Twitter</a></li>
              <li className="social__link"><a href="/">Instagram</a></li>
              <li className="social__link"><a href="/">YouTube</a></li>
              <li className="social__link"><a href="/">Telegram</a></li>
              <li className="social__link"><a href="/">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright__container">
          <ul className="nav">
            <li className="footer__copyright">©2022 Shema Ltd.</li>
            <li className="footer__terms__condition">Terms & Conditions</li>
            <li className="footer__privacy__policy">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

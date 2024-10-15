import React from 'react';
import './Footer1.css'; // Import the CSS file

const Footer = () => {
  const handleFooterIcons = (event) => {
    const plusIcon = event.querySelector('.plus');
    const minusIcon = event.querySelector('.minus');
    plusIcon.classList.toggle('d-none');
    minusIcon.classList.toggle('d-none');
  };

  return (
    <footer className="footer">
      <div className="container">
        <section className="footer-section">
          <div>
            <img
              className="footer-logo"
              src="https://dukaan.b-cdn.net/300x100/webp/7192504/fe0f67ee-f332-4f60-a9e7-14d9e047a4d1/styleup-masterlogo-rgb-3-902bef46-0060-49e7-a54a-f41d4fce3f09.png/798c9b50-678a-4bc9-8ffa-a8014eb80f69.png"
              alt="styleup"
            />
          </div>

          <div className="mobile-section">
            <div className="collapsible-header" onClick={(e) => handleFooterIcons(e.currentTarget)}>
              <h5 className="font-bold">OUR PRODUCTS</h5>
              <svg className="plus" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line x1="1" y1="9" x2="17" y2="9" stroke="#1A181E" strokeWidth="2" />
                <line x1="9" y1="17" x2="9" y2="1" stroke="#1A181E" strokeWidth="2" />
              </svg>
              <svg className="minus d-none" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line x1="1" y1="9" x2="17" y2="9" stroke="#1A181E" strokeWidth="2" />
              </svg>
            </div>
            <div className="collapse">
              <ul className="list-group">
                <li className="list-item">
                  <a href=" ">Men's Wear</a>
                </li>
                <li className="list-item">
                  <a href=" ">Women's Wear</a>
                </li>
                <li className="list-item">
                  <a href=" ">Kids' Wear</a>
                </li>
                <li className="list-item">
                  <a href=" ">Accessories</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mobile-section">
            <div className="collapsible-header" onClick={(e) => handleFooterIcons(e.currentTarget)}>
              <h5 className="font-bold">LINKS</h5>
              <svg className="plus" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line x1="1" y1="9" x2="17" y2="9" stroke="#1A181E" strokeWidth="2" />
                <line x1="9" y1="17" x2="9" y2="1" stroke="#1A181E" strokeWidth="2" />
              </svg>
              <svg className="minus d-none" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line x1="1" y1="9" x2="17" y2="9" stroke="#1A181E" strokeWidth="2" />
              </svg>
            </div>
            <div className="collapse">
              <ul>
                <li>
                  <a href="/styleup/store-locator">Store locator</a>
                </li>
                <li>
                  <a href="/styleup/p/contact-us">Contact us</a>
                </li>
                <li>
                  <a href="/styleup/p/about-us">About us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-info">
            <h5 className="font-bold">FOR QUERIES AND HELP</h5>
            <a href="mailto:styleupmktg@abfrl.adityabirla.com">
              <div className="contact-email">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.2427 2.97696L10.4256 9.79279C10.3054 9.8974 10.1549 9.95457 9.99965 9.95457C9.84437 9.95457 9.69388 9.8974 9.57371 9.79279L1.75211 2.97696C2.14016 2.66736 2.61213 2.5 3.09719 2.5H16.8976C17.3827 2.5 17.8547 2.66736 18.2427 2.97696ZM10.0008 11.3857C10.4671 11.3857 10.9191 11.2138 11.2797 10.8994L19.0408 4.13123C19.1234 4.38268 19.1659 4.64708 19.1663 4.91345V14.758C19.1657 15.3966 18.927 16.0089 18.5025 16.4605C18.078 16.9121 17.5025 17.166 16.9021 17.1667H3.09721C2.49689 17.166 1.92133 16.9121 1.49683 16.4605C1.07234 16.0089 0.833601 15.3966 0.833008 14.758V4.91345C0.833496 4.64708 0.87593 4.38268 0.958548 4.13123L8.72186 10.8994C9.08253 11.2138 9.53446 11.3857 10.0008 11.3857Z" fill="#4D4D4D"></path>
                </svg>
                <p>styleupmktg@abfrl.adityabirla.com</p>
              </div>
            </a>
          </div>
        </section>

        <section className="social-links">
          <h5 className="font-bold">STAY CONNECTED</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com/styleup.ind" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 21 22" fill="none">
                <path d="M21 11C21 5.19875 16.3013 0.5 10.5 0.5C4.69875 0.5 0 5.19875 0 11C0 16.2412 3.84125 20.5812 8.855 21.3687V14.0275H6.195V11H8.86375V8.69C8.86375 6.05625 10.43 4.60375 12.8275 4.60375C13.9738 4.60375 15.1813 4.805 15.1813 4.805V7.38625H13.86C12.5563 7.38625 12.145 8.2 12.145 9.0225V11H15.0587L14.595 14.0362H12.145V21.3775C17.1588 20.5812 21 16.2412 21 11Z" fill="var(--black-12)"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/styleup.india/" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 25 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 2H17.5C20.2614 2 22.5 4.23858 22.5 7V17C22.5 19.7614 20.2614 22 17.5 22H7.5C4.73858 22 2.5 19.7614 2.5 17V7C2.5 4.23858 4.73858 2 7.5 2ZM7.5 0C3.35786 0 0 3.3582 0 7.5V17.5C0 21.6418 3.35786 25 7.5 25H17.5C21.6421 25 25 21.6418 25 17.5V7.5C25 3.3582 21.6421 0 17.5 0H7.5ZM12.5 5C9.4625 5 7 7.4625 7 10.5C7 13.5375 9.4625 16 12.5 16C15.5375 16 18 13.5375 18 10.5C18 7.4625 15.5375 5 12.5 5ZM12.5 14C10.014 14 8 11.986 8 10.5C8 9.014 10.014 7 12.5 7C14.986 7 17 9.014 17 10.5C17 11.986 14.986 14 12.5 14ZM20 4.5C20.8284 4.5 21.5 5.17157 21.5 6C21.5 6.82843 20.8284 7.5 20 7.5C19.1716 7.5 18.5 6.82843 18.5 6C18.5 5.17157 19.1716 4.5 20 4.5Z" fill="var(--black-12)"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/@StyleUpIndia_" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 30 30" fill="none">
                <path d="M29.8 7.2C29.8 7.2 29.3 5.5 28.4 4.5C27.4 3.5 25.7 3.5 25.7 3.5H4.3S2.6 3.5 1.6 4.5C0.7 5.5 0.2 7.2 0.2 7.2C0.2 7.2 0 8.6 0 10.5V19.5C0 21.4 0.2 22.8 0.2 22.8C0.2 22.8 0.7 24.5 1.6 25.5C2.6 26.5 4.3 26.5 4.3 26.5H25.7S27.4 26.5 28.4 25.5C29.3 24.5 29.8 22.8 29.8 22.8C29.8 22.8 30 21.4 30 19.5V10.5C30 8.6 29.8 7.2 29.8 7.2Z" fill="var(--black-12)"></path>
                <path d="M12 15.3L19.5 10.5L12 5.7V15.3Z" fill="white"></path>
              </svg>
            </a>
          </div>
        </section>
      </div>

      <div className="bottom-bar">
        <p>
          <a href="/styleup/p/terms-conditions">Terms & Conditions</a>
        </p>
        <p>
          <a href="/styleup/p/privacy-policy">Privacy Policy</a>
        </p>
        <p>©2022 Aditya Birla Fashion and Retail Limited. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

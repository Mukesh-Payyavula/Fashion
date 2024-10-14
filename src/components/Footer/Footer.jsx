import React from 'react';
import './Footer.css' 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="app-download">
        <p>Download Fashion Mobile App Now!!</p>
        <div className="app-links">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lSCmUP7R7bb1H4Kvn5Z30Njj6DBLUwmGug&s" alt="Google Play" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNQc5CapoSJE3sujvojLNNXipoAGDZYgUWw&s" alt="App Store" />
        </div>
      </div>

      <div className="footer-links">
        <div className="payment-icons">
          <img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-VISA-transparent-PNG.png" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/800px-MasterCard_Logo.svg.png" alt="MasterCard" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzKAavG-adXiPOhhYj2Er2fI32SRF_-kXzg&s" alt="American Express" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82g8mkrlMMiQ17FGj5_VQAQ-P2gHUyXhYIQ&s" alt="RuPay" />
          <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/upi_logo_icon_169316.png" alt="UPI" />
        </div>

        <div className="footer-info">
          <div className="footer-column">
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Pricing, Delivery, Return and Refund Policy</a>
          </div>
          <div className="footer-column">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Join Us</a>
            <a href="#">Pickup Points</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Fashion-Store Limited (AEL). All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

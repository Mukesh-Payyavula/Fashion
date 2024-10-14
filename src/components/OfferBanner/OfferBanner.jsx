
import React from 'react';
import './OfferBanner.css';

const OfferBanner = () => {
  return (
    <div className="offer-banner">
      <div className="offer-banner__content">
        <h2>Exclusive Offer!</h2>
        <p>Get 20% off on your first order. Use code: <strong>WELCOME20</strong></p>
        <a href="/" className="offer-banner__button">Shop Now</a>
      </div>
    </div>
  );
};

export default OfferBanner;

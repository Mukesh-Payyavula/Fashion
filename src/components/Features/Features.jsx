import React from 'react';
import './Features.css';
import { FaRocket, FaMoneyBillWave, FaCreditCard, FaGift } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaRocket />, 
    title: "Home Delivery",
    description: "90Mins Free Delivery",
  },
  {
    icon: <FaMoneyBillWave />, 
    title: "No Cost EMI",
    description: "Zero Downpayment EMI",
  },
  {
    icon: <FaCreditCard />, 
    title: "Safe Payment",
    description: "100% Secure Payment",
  },
  {
    icon: <FaGift />,
    title: "Cash Back Offers",
    description: "Best Cashback",
  },
];

const Features = () => {
  return (
    <div className="widgetplus widgetplus-block slider-0">
      <div className="selling-feature">
        <div className="row align-items-center">
          {featuresData.map((feature, index) => (
            <div className="col-3 col-lg-3" key={index}>
              <div className="media list-features">
                <div className="zoom">
                  <div className="media-left align-self-center mr-1 mr-sm-4">
                    <div className="feature-icon">{feature.icon}</div>
                  </div>
                </div>
                <div className="media-body">
                  <div className="media-heading h4">{feature.title}</div>
                  <div className="text desc std">{feature.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './Checkout.css'; 

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle payment processing
    alert('Checkout successful!');
    clearCart(); 
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="checkout-cart-items">
            {cart.map((item) => (
              <div className="checkout-cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="checkout-item-image" />
                <div className="checkout-item-details">
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="shipping-form">
            <h3>Shipping Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={shippingInfo.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingInfo.state}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={shippingInfo.zip}
              onChange={handleChange}
              required
            />
            <button type="submit">Proceed to Payment</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;

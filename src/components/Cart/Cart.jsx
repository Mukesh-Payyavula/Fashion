import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'; 

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span>{item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <Link to="/Checkout" className="checkout-button">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;

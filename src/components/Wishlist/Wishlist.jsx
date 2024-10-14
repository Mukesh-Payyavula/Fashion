
import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import './Wishlist.css'; 

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-item" key={item.id}>
              <img src={item.image} alt={item.name} className="wishlist-item-image" />
              <div className="wishlist-item-details">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span>{item.price}</span>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

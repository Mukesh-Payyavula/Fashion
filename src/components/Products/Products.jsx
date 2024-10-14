import React from 'react';
import './Products.css';
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext';

const featuredProducts = [
  {
    id: '1',
    name: 'Jeans',
    description: 'Medusa bootcut jeans',
    price: '₹503',
    image: 'https://images.meesho.com/images/products/448454751/ah9xu_400.webp',
  },
  {
    id: '1',
    name: 'Jeans',
    description: 'Medusa bootcut jeans',
    price: '₹503',
    image: 'https://images.meesho.com/images/products/448454751/ah9xu_400.webp',
  },
  {
    id: '1',
    name: 'Jeans',
    description: 'Medusa bootcut jeans',
    price: '₹503',
    image: 'https://images.meesho.com/images/products/448454751/ah9xu_400.webp',
  },
  {
    id: '2',
    name: 'T-Shirt',
    description: 'Crew-neck sweatshirt',
    price: '₹499',
    image: 'https://images.meesho.com/images/products/390474112/ehlmo_400.webp',
  },
  {
    id: '2',
    name: 'T-Shirt',
    description: 'Crew-neck sweatshirt',
    price: '₹499',
    image: 'https://images.meesho.com/images/products/390474112/ehlmo_400.webp',
  },
  {
    id: '2',
    name: 'T-Shirt',
    description: 'Crew-neck sweatshirt',
    price: '₹499',
    image: 'https://images.meesho.com/images/products/390474112/ehlmo_400.webp',
  },
  {
    id: '3',
    name: 'Dress',
    description: 'Beautiful summer dress',
    price: '₹899',
    image: 'https://images.meesho.com/images/products/382413739/sqoou_512.webp',
  },
  {
    id: '3',
    name: 'Dress',
    description: 'Beautiful summer dress',
    price: '₹899',
    image: 'https://images.meesho.com/images/products/382413739/sqoou_512.webp',
  },
  {
    id: '3',
    name: 'Dress',
    description: 'Beautiful summer dress',
    price: '₹899',
    image: 'https://images.meesho.com/images/products/382413739/sqoou_512.webp',
  },
];

const Products = () => {
  const { addToCart } = useCart(); 
  const { addToWishlist } = useWishlist();

  return (
    <div className="products-container">
      <div className="all-products">
        <div className="products-header">
          <h3 className="items-header-big">Featured Items</h3>
          <a className="header-small" href="/shop">
            Show all
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
            </svg>
          </a>
        </div>
        <div className="products-header-line"></div>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {featuredProducts.map((product) => (
            <div className="product__card__card" key={product.id}>
              <div className="product__card">
                <div className="product__image">
                  <img src={product.image} alt={product.name} className="product__img" />
                </div>
                <div className="product__card__detail">
                  <div className="product__name">
                    <a href={`/item/${product.id}`}>{product.name}</a>
                  </div>
                  <div className="product__description">
                    <span>{product.description}</span>
                  </div>
                  <div className="product__price">
                    <span>{product.price}</span>
                  </div>
                  <div className="product__card__action">
                    <button type="button" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                    <button type="button" onClick={() => addToWishlist(product)}>
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

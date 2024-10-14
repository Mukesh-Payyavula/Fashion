import React, { useState } from 'react';
import './BestSeller.css'; // 

const products = [
  {
    id: 3274,
    name: "Boat Wave Stride Voice Smart Watch",
    image: "https://www.lotmobiles.com/media/catalog/product/cache/05601561d691db05bc58d209301463ac/b/o/boat_wave_stride_voice_smart_watch.jpg",
    price: "₹2,049",
    oldPrice: "₹7,990",
    discount: "-74%",
    link: "https://www.lotmobiles.com/boat-wave-stride-voice-smart-watch",
  },
  {
    id: 3244,
    name: "Samsung Galaxy M14 5G (6GB/128GB, Berry Blue)",
    image: "https://www.lotmobiles.com/media/catalog/product/cache/05601561d691db05bc58d209301463ac/s/a/samsung_galaxy_m14_5g_berry_blue_.jpg",
    price: "₹10,999",
    oldPrice: "₹17,999",
    discount: "-39%",
    link: "https://www.lotmobiles.com/samsung-galaxy-m14-5g-6gb-128gb-berry-blue",
  },
  // Add more products as needed
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="product-slider">
      <div className="slider-header">
        <div className="title">Best Sellers</div>
        <div className="view-all"><a href="/best-sellers">View All</a></div>
      </div>
      <div className="slider-container">
        <button className="slider-button" onClick={prevSlide}>&lt;</button>
        <div className="slider-content">
          {products.map((product, index) => (
            index === currentIndex && (
              <div className="product-item" key={product.id}>
                <div className="product-item-info">
                  <div className="product-show">
                    <a href={product.link} className="product photo product-item-photo">
                      <span className="main-photo">
                        <span className="product-image-container">
                          <span className="product-image-wrapper">
                            <img className="product-image-photo" src={product.image} alt={product.name} loading="lazy" />
                          </span>
                        </span>
                      </span>
                      <span className="discount-percent">{product.discount}</span>
                    </a>
                  </div>
                  <div className="product-details">
                    <h3 className="product-item-name">
                      <a href={product.link} className="product-item-link">{product.name}</a>
                    </h3>
                    <div className="price-wrap">
                      <div className="price-box price-final_price">
                        <span className="special-price">
                          <span className="price">{product.price}</span>
                        </span>
                        <span className="old-price">
                          <strike>{product.oldPrice}</strike>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
        <button className="slider-button" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default ProductSlider;

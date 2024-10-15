import React from 'react';
import './Brands.css';

const Brands = () => {
  const brands = [
    {
      name: 'Brand A',
      imgSrc: 'https://example.com/logo-a.png',
      link: '/brand-a',
    },
    {
      name: 'Brand B',
      imgSrc: 'https://example.com/logo-b.png',
      link: '/brand-b',
    },
    {
      name: 'Brand C',
      imgSrc: 'https://example.com/logo-c.png',
      link: '/brand-c',
    },
    {
      name: 'Brand D',
      imgSrc: 'https://example.com/logo-d.png',
      link: '/brand-d',
    },
  ];

  return (
    <div className="lifestyle-brands__container">
      <h1 className="lifestyle-brands__header">Featured Lifestyle Brands</h1>
      <div className="lifestyle-brands__card__container">
        {brands.map((brand, index) => (
          <div key={index} className="brand__card">
            <a href={brand.link} className="brand__link">
              <img src={brand.imgSrc} alt={brand.name} className="brand__logo" />
              <span className="brand__name">{brand.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;

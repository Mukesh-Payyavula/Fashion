
import React from 'react';
import './Categories.css'; 

const Categories = () => {
  const categories = [
    {
      name: 'Men',
      imgSrc: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      link: '/category/men',
    },
    {
      name: 'Women',
      imgSrc: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      link: '/category/women',
    },
    {
      name: 'Kids',
      imgSrc: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      link: '/category/kids',
    },
  ];

  return (
    <div className="featured__categories__container">
      <div className="featured__categories">
        <div className="featured__categories__header">
          <h1 className="featured__header__big">Featured Categories</h1>
          <div className="featured__categories__header__line"></div>
        </div>
        <div className="featured__categories__card__container">
          {categories.map((category, index) => (
            <div key={index} className="category__card__card">
              <div className="category__image">
                <img src={category.imgSrc} alt={category.name} className="product__img" />
              </div>
              <div className="category__card__detail">
                <div className="category__name">{category.name}</div>
                <div className="category__card__action">
                  <a href={category.link}>
                    <button className="shop-button">SHOP NOW</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

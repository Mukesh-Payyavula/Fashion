
import React from 'react';
import './Categories.css'; 

const Categories = () => {
  const categories = [
    {
      name: 'Men',
      imgSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/l/r/l-4mss1900-01-snitch-original-imagqkgbnafxj6kn.jpeg?q=70',
      link: '/category/men',
    },
    {
      name: 'Women',
      imgSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/w/t/o/xl-rani-bandage-aliya-cut-kurta-laxmi-fab-tex-original-imah47ucuxztpbhg.jpeg?q=70',
      link: '/category/women',
    },
    {
      name: 'Kids',
      imgSrc: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/t/j/1/12-13-years-chunri-print-vishesta-original-imah2ys3qawfqppy.jpeg?q=70',
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
                <img src={category.imgSrc} alt={category.name} className="product-img" />
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

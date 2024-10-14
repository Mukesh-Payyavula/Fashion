import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Hero.css';

const BootstrapCarousel = () => {
  return (
    <Carousel className='Carousel-Container'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fh260/background/20210908/pngtree-clothing-store-image_827082.jpg"
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Men's Wear</h3>
          <p>Explore wide range of collections</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shutterstock.com/image-photo/messy-clearance-section-clothing-store-260nw-1545976607.jpg"
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Kid's Wear</h3>
          <p>Expole wide range of collections</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1080132360/photo/woman-mannequins-in-store-window.jpg?s=612x612&w=0&k=20&c=A1rsUNSeDzu-JSXfQLxY8j_JqnwcrvJPISO3hzRhFBM="
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Women's Wear</h3>
          <p>Expolre wide range of collections</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;

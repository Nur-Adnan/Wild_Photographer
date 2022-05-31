import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block"
          src="https://images.wallpaperscraft.com/image/single/leopard_muzzle_predator_138645_2048x1152.jpg"
          alt="1st One"
        />
      <Carousel.Caption>
        <h1 style={{color: "white", fontSize:'65px',marginBottom:"250px", fontFamily: "Lato"}}>"You're like this leopard who's pretending to be a house cat."</h1>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block"
          src="https://images.wallpaperscraft.com/image/single/tiger_big_cat_predator_138698_2048x1152.jpg"
          alt="2nd One"
        />
      <Carousel.Caption>
        <h1 style={{color: "white", fontSize:'65px',marginBottom:"250px", fontFamily: "Lato"}}>"I've often felt that the Indian tiger has not been unleashed."</h1>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block" 
          src="https://images.wallpaperscraft.com/image/single/kitten_cute_small_152971_2048x1152.jpg"
          alt="3rd slide"
        />
      <Carousel.Caption>
        <h1 style={{color: "white", fontSize:'65px',marginBottom:"250px", fontFamily: "Lato"}}>“Like all pure creatures, cats are practical.”</h1>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
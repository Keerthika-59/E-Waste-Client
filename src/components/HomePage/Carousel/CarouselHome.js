import React from "react";
import {Button, Carousel, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './CarouselHome.css';
const CarouselHome = () => {

  return (
   <Carousel className="carousel">

    <Carousel.Item>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/hero.jpg`}
        alt="Waste Management"
      />

      <Carousel.Caption>
        <h3>Waste Management</h3>
        <p>
          <Button
          className = "learn-btn"
          variant = "info"
          >
            <Link 
            to = "/Services" 
            style = {{textDecoration : 'none'}}
            >
                Learn More...
            </Link>
          </Button>
        </p>
      </Carousel.Caption>
    </Carousel.Item>

  
  
  </Carousel>
  );
};

export default CarouselHome;
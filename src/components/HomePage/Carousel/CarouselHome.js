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
          ALWAYS WORKING FOR A
        SUSTAINABLE TOMORROW
        </p>
        <ul>
           We Value Safety,
We Value Our Environment,
            We Value Our Customers</ul>
      </Carousel.Caption>
    </Carousel.Item>

  
  
  </Carousel>
  );
};

export default CarouselHome;

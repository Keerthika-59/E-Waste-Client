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
        <h5>
          ALWAYS WORKING FOR A
        SUSTAINABLE TOMORROW
        </h5>
        <br/>
        <ul>
           We Value Safety,</ul>
           <ul>We Value Our Environment,</ul>
            <ul>We Value Our Customers</ul>
      </Carousel.Caption>
    </Carousel.Item>

  
  
  </Carousel>
  );
};

export default CarouselHome;

import React from "react";
import {Carousel, Container} from 'react-bootstrap';
import './CarouselHome.css';
const CarouselHome = () => {
   
  return (
    <Container fluid={true}>
   <Carousel className="car">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}/assets/images/wasteManagement.jpg`}
     // src="https://news.yale.edu/sites/default/files/styles/featured_media/public/garbage-2729608_1280.jpg?itok=YXh5bhas&c=07307e7d6a991172b9f808eb83b18804/800x400"
      alt="Waste Management"
    />
    <Carousel.Caption>
      <h3>Waste Management</h3>
      <p>Making our country clean</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}/assets/images/manageWaste.png`}
      alt="Managing waste"
    />
    <Carousel.Caption>
      <h3>Managing waste</h3>
      <p>Managing the waste upon request from user</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`${process.env.PUBLIC_URL}/assets/images/donate.jpg`}
      alt="Donating useful items"
    />
    <Carousel.Caption>
      <h3>Donating</h3>
      <p>Electronic gadgets, Food, Clothes</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </Container>
  );
};

export default CarouselHome;
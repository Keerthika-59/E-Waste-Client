import React from 'react'
import {Jumbotron,Media,Image} from "react-bootstrap"
import {Button, Carousel, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Information.css'
import './Dispose.css'
import {data} from './Data.js';
const Dispose = () => {
    return (
  //       <div>
  //           <Jumbotron>
  //         <p className="text-center font-italic heading"> {data[1].title}</p>

  // <Media as="li" className="mt-5 Info text-justify">
  //   <Media.Body className="text-large ml-5 mr-5">
  //   <ul>
  //         <li>{data[1].text}</li>
  //         <li>{data[3].text}</li>
  //         <li>{data[4].text}</li>
          
  //     </ul>

  //   </Media.Body>
  //   <Image
  //     className="mr-3 img"roundedCircle
  //     src={`${process.env.PUBLIC_URL}/assets/images/mediaDispose.png`}
  //     alt="Generic placeholder"
  //   />
  // </Media>
  // </Jumbotron>
  //       </div>

<div>
  {/* <Jumbotron style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/recycleRight_copy.jpeg'})` 
}}>
          <p className="text-center font-italic heading"> {data[1].title}</p>

  <Media as="li" className="mt-5 Info text-justify">
    <Media.Body className="text-large ml-5 mr-5">
       <p>
    Disposing of waste will done properly only,
     when yu recycle it in a correct manner.
     We will help you out.
      </p>
    </Media.Body> */}
    {/* <Image
      className="mr-3 img"roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDispose.png`}
      alt="Generic placeholder"
    /> 
  </Media>
  </Jumbotron>*/}
   <section id="team" class="pb-5">
    <div class="container">
   <h5 class="section-title h1">{data[1].title}</h5>
  <div className="text-center">
      <div class="col-lg-12">
        <div  class="text-white  p-5 shadow-sm  rounded back">
         
          <p class="lead">Disposing of waste will done properly only,
     when yu recycle it in a correct manner.
     We will help you out.
     Whether you’re at home or at work, we’ve got the tools
   to set you up for recycling success.</p>
      </div>
    </div>
    </div>

  <Jumbotron>
          <p className="text-center font-italic heading"> Recycle Right....</p>

  <Media as="li" className="mt-5 Info text-justify">
    <Media.Body className="text-large ml-5 mr-5">
    
      {/* <h1>Recycle Right....</h1> */}
    <ul>
      <li>
      We’re here to help you recycle right, answer common recycling questions and provide the information, 
      tools and resources you need to make recycling both simple and convenient.
      </li>
          <li> Whether you’re at home or at work, we’ve got the tools
   to set you up for recycling success. Get started with just
   six easy steps and visit our Resources for toolkits, labels, posters and more.</li>

      </ul>

    </Media.Body>
    <Image
      className="mr-3 img"roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDispose.png`}
      alt="Generic placeholder"
    />
  </Media>
  </Jumbotron>
  <Carousel>
  <Carousel.Item interval={1000}>
  <img  className="d-block w-100"
        src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/step1.jpg`}
        alt="Waste Management"
      />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <img  className="d-block w-100"
        src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/step2.jpg`}
        alt="Waste Management"
      />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
  <img  className="d-block w-100"
        src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/step3.jpg`}
        alt="Waste Management"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
  <img  className="d-block w-100"
        src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/step4.jpg`}
        alt="Waste Management"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
  <img  className="d-block w-100"
        src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/step5.jpg`}
        alt="Waste Management"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
  <img  className="d-block w-100"
        src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/step6.jpg`}
        alt="Waste Management"
    />
    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  {/* <span aria-hidden="true" className="carousel-control-next-icon" /> */}
</Carousel>
</div>
</section>
</div>
     )
}

export default Dispose

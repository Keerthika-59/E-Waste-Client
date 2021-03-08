import React from "react";
import {Jumbotron,Media,Image} from "react-bootstrap"
import './Information.css'
import {data} from './Data.js';

const Information = () => {
  return (
    <>
     <ul className="list-unstyled mt-5">
      <Jumbotron>
      <p className="text-center font-italic heading"> {data[0].title} </p>   
  <Media as="li" className="mt-5 Info text-justify">
       
    <Image
      className="mr-3 img" roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaWaste.jpg`}
      alt="Generic placeholder"
    />
    <Media.Body className="text-large ml-5 mr-5">
      {data[0].text}

    </Media.Body>
  </Media>
  </Jumbotron>
  <Jumbotron>
          <p className="text-center font-italic heading"> {data[1].title}</p>

  <Media as="li" className="mt-5 Info text-justify">
    <Media.Body className="text-large ml-5 mr-5">
      {data[1].text}

    </Media.Body>
    <Image
      className="mr-3 img"roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDispose.png`}
      alt="Generic placeholder"
    />
  </Media>
  </Jumbotron>
  <Jumbotron>
          <p className="text-center font-italic heading"> {data[2].title}</p>
  <Media as="li"  className="mt-5 Info">
    <Image
      className="mr-3 img" roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDonate.jpg`}
     alt="Generic placeholder"
    />
    <Media.Body className="text-large text-justify ml-5 mr-5">
              {data[2].text}

    </Media.Body>
  </Media>
  </Jumbotron>
</ul> 
    </>
  );
};

export default Information;
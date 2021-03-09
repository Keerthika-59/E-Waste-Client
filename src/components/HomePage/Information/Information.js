import React from "react";
import {Jumbotron,Media,Image} from "react-bootstrap"
import './Information.css'
<<<<<<< HEAD
import {data} from './Data';

const Information = () => {
  
=======
import {data} from './Data.js';

const Information = () => {
>>>>>>> c8be5be548d5b3813ea7273f7f5f12f1d0cc72d3
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
<<<<<<< HEAD
        {data[0].text}
=======
      {data[0].text}

>>>>>>> c8be5be548d5b3813ea7273f7f5f12f1d0cc72d3
    </Media.Body>
  </Media>
  </Jumbotron>
  <Jumbotron>
<<<<<<< HEAD
  <p className="text-center font-italic heading"> {data[1].title} </p>

  <Media as="li" className="mt-5 Info text-justify">
    <Media.Body className="text-large ml-5 mr-5">
        {data[1].text}
=======
          <p className="text-center font-italic heading"> {data[1].title}</p>

  <Media as="li" className="mt-5 Info text-justify">
    <Media.Body className="text-large ml-5 mr-5">
      {data[1].text}

>>>>>>> c8be5be548d5b3813ea7273f7f5f12f1d0cc72d3
    </Media.Body>
    <Image
      className="mr-3 img"roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDispose.png`}
      alt="Generic placeholder"
    />
  </Media>
  </Jumbotron>
  <Jumbotron>
<<<<<<< HEAD
  <p className="text-center font-italic heading"> {data[2].title } </p>
=======
          <p className="text-center font-italic heading"> {data[2].title}</p>
>>>>>>> c8be5be548d5b3813ea7273f7f5f12f1d0cc72d3
  <Media as="li"  className="mt-5 Info">
    <Image
      className="mr-3 img" roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDonate.jpg`}
     alt="Generic placeholder"
    />
    <Media.Body className="text-large text-justify ml-5 mr-5">
<<<<<<< HEAD
       {data[2].text}
=======
              {data[2].text}

>>>>>>> c8be5be548d5b3813ea7273f7f5f12f1d0cc72d3
    </Media.Body>
  </Media>
  </Jumbotron>
</ul> 
    </>
  );
};

export default Information;


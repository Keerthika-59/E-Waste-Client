import React from "react";
import {Jumbotron,Media,Image,Button} from "react-bootstrap"
import './Information.css'
import {data} from './Data.js';
import { Link } from "react-router-dom";
const Information = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    
        <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="counter">
                    <div class="counter-icon">
                        <i class="fa fa-globe"></i>
                    </div>
                    <h3>Happy clients</h3>
                    <span class="counter-value">565</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="counter orange">
                    <div class="counter-icon">
                        <i class="fa fa-rocket"></i>
                    </div>
                    <h3>Volunteers</h3>
                    <span class="counter-value">20</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="counter">
                    <div class="counter-icon">
                        <i class="fa fa-globe"></i>
                    </div>
                    <h3>Donation</h3>
                    <span class="counter-value">65</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="counter orange">
                    <div class="counter-icon">
                        <i class="fa fa-rocket"></i>
                    </div>
                    <h3>Projects</h3>
                    <span class="counter-value">87</span>
                </div>
            </div>
        </div>
    </div>
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
      <Button
          // className = "learn-btn"
          variant = "link"
          >
            <Link 
            to = "/Ewaste" 
            style = {{textDecoration : 'none'}}
            >
                Learn More...
            </Link>
          </Button>
    </Media.Body>
  </Media>
  </Jumbotron>
  <Jumbotron>
          <p className="text-center font-italic heading"> {data[1].title}</p>

  <Media as="li" className="mt-5 Info text-justify">
    <Media.Body className="text-large ml-5 mr-5">
      {data[1].text}
      <Button
          // className = "learn-btn"
          variant = "link"
          >
            <Link 
            to = "/Disposing" 
            style = {{textDecoration : 'none'}}
            >
                Learn More...
            </Link>
          </Button>

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
              <Button
          // className = "learn-btn"
          variant = "link"
          >
            <Link 
            to = "/Donating" 
            style = {{textDecoration : 'none'}}
            >
                Learn More...
            </Link>
          </Button>

    </Media.Body>
  </Media>
  </Jumbotron>
</ul> 
    </>
  );
};

export default Information;

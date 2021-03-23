import {React,useEffect} from 'react';
import Cards from '../../Cards/Card'
import {Image,Carousel,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Cards/>

{/*    
    <div className="text-center mt-5 ">
      <div class="col-lg-12 mx-auto">
        <div class="text-white p-2 shadow-sm rounded banner">
          <h1 class="display-6">About Us</h1>
          <p class="lead">What we do for you!</p>
        </div>
      </div>

    </div>

    <div class="container py-3">
 
        <div class="card hov">
          <div class="row ">

            <div class="col-md-7 px-3">
              <div class="card-block px-6 ">
                <h4 class="card-title text-center">Goals</h4>
                <h5 class="card-title font-italic"> "Driven by our commitments, guided by our values"</h5>
            <p class="card-text text-justify para">
          In the simplest terms,
          our values come down to this:
        Do the Right Thing. The Right Way.
              This idea sets the standard for our fundamental commitments and core values and guides our daily actions and decisions.</p>
              
                <Button
                // className = "learn-btn"
                variant = "link"
                >
                  <Link 
                  to = "/Goals" 
                  style = {{textDecoration : 'none'}}
                  >
                      <i className="fas fa-long-arrow-alt-right"></i> 
                          <span className="ml-2">Read More...</span>
                  </Link>
                </Button>
              <br/>
              </div>
            </div>
            

            <div class="col-md-5">
              <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                
                <div class="carousel-inner">
                  <div class="carousel-item active">
                  <img class="d-block imageCar"  style={{height:"300px"}}  src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/goalsYelUp.jpg`}alt=""/>
                  </div>
                
                </div>
              </div>
            </div>
          
          </div>
        </div>


      </div>


      <div class="container py-3">
 
        <div class="card hov">
          <div class="row ">

      
            

            <div class="col-md-5">
              <div id="CarouselTest" class="carousel slide" data-ride="carousel">
               
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block imageCar" src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/achiv.png`} alt=""/>
                  </div>
                   <div class="carousel-item">
                    <img class="d-block" src="https://picsum.photos/450/300?image=855" alt=""/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" src="https://picsum.photos/450/300?image=355" alt=""/>
                  </div>
                   <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
                  <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> 
                </div>
              </div>
            </div>
          
         
          <div class="col-md-7 px-3">
              <div class="card-block px-6 para">
                <h4 class="card-title text-center">Achievements</h4>
                <h5 class="card-title font-italic"> 
                "Going from Waste Collection to Waste Management"</h5>
                <p class="card-text text-justify para">
          In the simplest terms,
          our values come down to this:
        Do the Right Thing. The Right Way.
              This idea sets the standard for our fundamental commitments and core values and guides our daily actions and decisions.</p>
              
                <Button
                // className = "learn-btn"
                variant = "link"
                >
                  <Link 
                  to = "/Achievements" 
                  style = {{textDecoration : 'none'}}
                  >
                      <i className="fas fa-long-arrow-alt-right"></i> 
                          <span className="ml-2">Read More...</span>
                  </Link>
                </Button>
              <br/>
              </div>
            </div>
            </div>
        </div>
      </div>


      <div class="container py-3">
 
        <div class="card hov">
          <div class="row ">

            <div class="col-md-7 px-3">
              <div class="card-block px-6 para">
                <h4 class="card-title text-center">Our Team</h4>
                <h5 class="card-title font-italic"> 
                "Always Working For a Sustainable Tomorrow"</h5>

                <p class="card-text text-justify para">
                Our leadership serves with a focus on maximizing resource value while minimizing — or even eliminating — 
                environmental impact so that both our economy and environment can thrive.
                <br/>
                We will be there on your side for sustainable tomorrow.
                </p>
                <Button
                // className = "learn-btn"
                variant = "link"
                >
                  <Link 
                  to = "/OurTeam" 
                  style = {{textDecoration : 'none'}}
                  >
                      <i className="fas fa-long-arrow-alt-right"></i> 
                          <span className="ml-2">Meet Our Team...</span>
                  </Link>
                </Button>
              <br/>
              </div>
            </div>
            

            <div class="col-md-5">
              <div id="CarouselTest" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#CarouselTest" data-slide-to="0" class="active"></li>
                  <li data-target="#CarouselTest" data-slide-to="1"></li>
                  <li data-target="#CarouselTest" data-slide-to="2"></li>

                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block imageCar"src={`${process.env.PUBLIC_URL}/images/DisposeCarousel/teamG.jpg`}alt=""/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" src="https://picsum.photos/450/300?image=855" alt=""/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block" src="https://picsum.photos/450/300?image=355" alt=""/>
                  </div>
                   <a class="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
                  <a class="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a> 
                </div>
              </div>
            </div>
          
          </div>
        </div>


      </div>

{/* <div class="container">
  <div class="card float-left">
    <div class="row ">

      <div class="col-sm-7">
        <div class="card-block">
           <h4 class="card-title">Small card</h4>
          <p>Wetgple text to build your own card.</p>
          <p>Change around the content for awsomenes</p>
          <a href="#" class="btn btn-primary btn-sm">Read More</a>
        </div>
      </div>

      <div class="col-sm-5">
        <img class="d-block w-100" src="https://picsum.photos/150?image=380" alt=""/>
      </div>
    </div>
  </div>

 
  <div class="card float-right">
      <div class="row">
        <div class="col-sm-5">
          <img class="d-block w-100" src="https://picsum.photos/150?image=641" alt=""/>
        </div>
        <div class="col-sm-7">
          <div class="card-block">
         
            <p>Copy paste the HTML and CSS.</p>
            <p>Change around the content for awsomenes</p>
            <br/>
            <p class="btn btn-primary btn-sm float-right">Read More</p>
          </div>
        </div>
 
      </div>
    </div>
  </div>  */}
 
 
    </>
  );
}

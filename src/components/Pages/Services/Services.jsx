import { React, useEffect } from 'react';
import { Card } from 'react-bootstrap'
import {Jumbotron,Media,Image,Button} from "react-bootstrap"
import { Link } from "react-router-dom";
// import './AboutUs.css'
import './Services.css'
export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])



return(
<>
    <div className="container-fluid mb-5">
    <div className="text-center mt-5 ">
      <div class="col-lg-12 mx-auto">
        <div class="text-white p-2 shadow-sm rounded banner">
          <h1 class="display-6">Our Services</h1>
          <p class="lead">What we Offer!</p>
      </div>
    </div>

    </div>
    <div className="row">
        {/* <div className="col-md-4">
            <div className="box">
                <div className="our-services settings">
                    <div className="icon"> <img src="https://i.imgur.com/6NKPrhO.png"/> </div>
                    <h4>Settings</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div> */}
        
        {/* <div className="col-md-4">
            <div className="box">
                <div className="our-services privacy">
                    <div className="icon"> <img src="https://i.imgur.com/AgyneKA.png"/> </div>
                    <h4>Privacy</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                </div>
            </div>
        </div>
    </div> */}
    {/* <div className="row"> */}
        <div className="col-md-4">
            <div className="box">
                <div className="our-services backups">
                    <div className="icon"> <img src="https://i.imgur.com/vdH9LKi.png"/> </div>
                    <h4>E-Waste</h4>
                    <p className="text-justify text-space">There is no proper system for waste disposal. 
                    Sometimes for more than a week waste will not be collected.
                    </p>  <Button
          className = "learn-btn"
          variant = "link"
          >
            <Link 
            to = "/Ewaste" 
            style = {{textDecoration : 'none'}}
            >
                <i className="fas fa-long-arrow-alt-right"></i> 
                     <span className="ml-2">Learn More...</span>
            </Link>
          </Button>
                  
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services speedup">
                    <div className="icon"> <img src="https://i.imgur.com/KMbnpFF.png"/> </div>
                    <h4>Dispose</h4>
                    <p  className="text-justify  text-space">Some waste disposed be reused for some purpose. Unused waste will be separated and disposed.
                   </p>
                    <Button
           className = "learn-btn"
          variant = "link"
          >
            <Link  className="flex flex-row items-center mt-3 text-blue-600 hover:text-blue-800"
            to = "/Disposing" 
            style = {{textDecoration : 'none'}}
            >
                
                <i className="fas fa-long-arrow-alt-right"></i> 
                     <span className="ml-2">Learn More...</span>
               {/* Learn More... */}
            </Link>
          </Button>
            
                </div>
            </div>
        </div>
        {/* <div className="col-md-4">
            <div className="box">
                <div className="our-services ssl">
                    <div className="icon"> <img src="https://i.imgur.com/v6OnUqu.png"/> </div>
                    <h4>SSL secured</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
        </div> */}
        <div className="col-md-4">
            <div className="box">
                <div className="our-services database">
                    <div className="icon"> <img src="https://i.imgur.com/VzjZw9M.png"/> </div>
                    <h4>Donate</h4>
                    <p  className="text-justify  text-space">Unused good condition items such as old mobiles, electric goods, Clothes, Food can be donated to needy.
                   </p>
                    <Button
          className = "learn-btn"
          variant = "link"
          >
            <Link 
            to = "/Donating" 
            style = {{textDecoration : 'none'}}
            >
                <i className="fas fa-long-arrow-alt-right"></i> 
                     <span className="ml-2">Learn More...</span>
            </Link>
          </Button>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</>
);
}
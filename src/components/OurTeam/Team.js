/* eslint-disable */
import React from 'react';
import "./Team.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team() {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
        },
            {
                breakpoint: 1030,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 1008,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }

          ]
    }
    return (
        <div className="container mt-5 carousel">
      <p className="slider_title font-italic">Our Team</p>
  
        <Slider {...settings} className="wid">
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="/assets/images/img1.jpeg"  alt="image"/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Abhinav Jain <span className="job-title">MERN Stack Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="/assets/images/img2.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Anurag Mishra<span className="job-title">MERN Stack Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="/assets/images/img3.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Keerthika<span className="job-title">MERN Stack Developerr</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="/assets/images/img4.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="www.facebook.com"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Lakshmi<span className="job-title">MERN Stack Developer</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="/assets/images/img3.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Pooja Prasad<span className="job-title">MERN Stack Developerr</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    )
}

export default Team;

/* eslint-disable */
import React,{useEffect} from 'react';
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
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="container mt-5 carousel" style={{marginBottom:"5%"}}>
            <p className="slider_title font-italic">Our Team</p>

            <Slider {...settings} className="wid">
                <div className="teamcard-wrapper">
                    <div className="teamcard">
                        <div className="teamcard-image">
                            <img src="assets/images/Abhinavpro.jpg" alt="image" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-in"><i className='fab fa-twitter' ></i></a></li>
                            <li><a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Abhinav Jain <span className="job-title">MERN Stack Developer</span></h2>
                        </div>
                    </div>
                </div>
                <div className="teamcard-wrapper">
                    <div className="teamcard">
                        <div className="teamcard-image">
                            <img src="assets/images/anuragpro.jpg" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-in"><i className='fab fa-twitter' ></i></a></li>
                            <li><a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Anurag Mishra<span className="job-title">MERN Stack Developer</span></h2>
                        </div>
                    </div>
                </div>
                <div className="teamcard-wrapper">
                    <div className="teamcard">
                        <div className="teamcard-image">
                            <img src="assets/images/keeRthipro.jpg" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-in"><i className='fab fa-twitter' ></i></a></li>
                            <li><a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Keerthika<span className="job-title">MERN Stack Developer</span></h2>
                        </div>
                    </div>
                </div>
                <div className="teamcard-wrapper">
                    <div className="teamcard">
                        <div className="teamcard-image">
                            <img src="assets/images/lakshmipro.jpg" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-in"><i className='fab fa-twitter' ></i></a></li>
                            <li><a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Lakshmi<span className="job-title">MERN Stack Developer</span></h2>
                        </div>
                    </div>
                </div>
                <div className="teamcard-wrapper">
                    <div className="teamcard">
                        <div className="teamcard-image">
                            <img src="assets/images/poojapro.jpg" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-in"><i className='fab fa-twitter' ></i></a></li>
                            <li><a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Pooja Prasad<span className="job-title">MERN Stack Developer</span></h2>
                        </div>
                    </div>
                </div>
                <div className="teamcard-wrapper">
                    <div className="teamcard">
                        <div className="teamcard-image">
                            <img src="assets/images/Akashpro.jpg" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-in"><i className='fab fa-twitter' ></i></a></li>
                            <li><a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Akash Rajasekharan<span className="job-title">Sdet Team</span></h2>
                        </div>
                    </div>
                </div>
                <div className="teamcard-wrapper">
                    <div className="teamcard">
                        <div className="teamcard-image">
                            <img src="assets/images/Deepakpro.jpeg" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-in"><i className='fab fa-twitter' ></i></a></li>
                            <li><a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>T Deepak<span className="job-title">Sdet Team</span></h2>
                        </div>
                    </div>
                </div>
                <div className="teamcard-wrapper">
                    <div className="teamcard">
                        <div className="teamcard-image">
                            <img src="assets/images/Srikarpro.jpeg" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className='fab fa-facebook-f'></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/?lang=en-in"><i className='fab fa-twitter' ></i></a></li>
                            <li><a href="https://www.linkedin.com/login/"><i className='fab fa-linkedin'></i></a></li>
                        </ul>
                        <div className="details">
                            <h2>Srikar Vellala<span className="job-title">Sdet Team</span></h2>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Team;

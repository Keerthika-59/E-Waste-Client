import React from 'react'
import {Link} from 'react-router-dom'
import './Homepage.css'
import Information from '../HomePage/Information/Information';

const Homepage = () => {
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
                <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">

                    <div className="carousel-item active">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Welcome to<span>Waste Management</span></h2>
                            <p className="animate__animated fanimate__adeInUp"> Waste management deals with all types of waste, including industrial, biological and household. We also help in donating of items and make sure it reaches who need it the most.</p>
                            <Link to='/Services'  style={{ textDecoration: "none" }}><a className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                            <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="carousel-container">
                            <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                            <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="false"></span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="false"></span>
                    </a>

                </div>
                <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
                    <defs>
                        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                    </defs>
                        <g className="wave1">
                            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
                         </g>
                            <g className="wave2">
                                <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
                             </g>
                                <g className="wave3">
                                    <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"/>
                                </g>
                </svg>
                

  </section>
  <Information/>
    </div>
    )
}

export default Homepage

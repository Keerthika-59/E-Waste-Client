import React from 'react'
import './Goals.css'
const Goals = () => {
    return (
        <div>
            <section id="team" class="pb-5">
    <div class="container">
        <h5 class="section-title h1">Our Goals</h5>
    
        <div  class="text-white  p-5 shadow-sm  rounded back">
          <h3>DRIVEN BY OUR COMMITMENTS, GUIDED BY OUR VALUES</h3>
          <p class="display-6">In the simplest terms, our values come down to this:</p>
           <p className="font-weight-bold">Do the Right Thing. The Right Way.</p>
<p>
This idea sets the standard for our fundamental commitments and core values
 and guides our daily actions and decisions.</p>
        </div>
      

        <div class="row">
            
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p><img class=" img-fluid" src={`${process.env.PUBLIC_URL}/images/Goals/card1.svg`} alt="card image"/></p>
                                    {/* <p><i class="fas fa-users fa-6x"></i></p> */}
                                    <h4 class="card-title">We’re Committed to Our People First</h4>
                                    <p class="card-text">The proud, resilient members of the Waste Management family</p>
                                    <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">We’re Committed to Our People First</h4>
                                    <p class="card-text">The proud, caring and resilient members of the Waste Management family are the foundation of our success. We commit to taking care of each other, our customers, our communities and the environment. </p>
                                     {/* <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-twitter"></i>
                                           </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" >
                    <div class="mainflip flip-0">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p><img class=" img-fluid" src={`${process.env.PUBLIC_URL}/images/Goals/card2.svg`} alt="card image"/></p>
                                    {/* <p><i class="fas fa-users fa-6x"></i></p> */}
                                    <h4 class="card-title">We’re Committed to Success With Integrity</h4>
                                    <p class="card-text">Our success depends on what we achieve</p>
                                    <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">We’re Committed to Success With Integrity</h4>
                                    <p class="card-text">Our success is based not only on the results we achieve, but how we achieve them. We commit to being accountable, honest, trustworthy, ethical and compliant in all we do.</p>
                                     {/* <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-twitter"></i>
                                           </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-skype"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a class="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                <i class="fa fa-google"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            
           
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p><img class=" img-fluid" src={`${process.env.PUBLIC_URL}/images/Goals/card3.svg`} alt="card image"/></p>
                                    <h4 class="card-title">We Value Inclusion & Diversity</h4>
                                    <p class="card-text">We embrace and cultivate respect, trust, open communications.</p>
                                    <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">We Value Inclusion & Diversity</h4>
                                    <p class="card-text">We embrace and cultivate respect, trust, open communications and diversity of thought and people.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p><img class=" img-fluid" src={`${process.env.PUBLIC_URL}/images/Goals/card4.svg`} alt="card image"/></p>
                                    <h4 class="card-title">We Value Our Customers</h4>
                                    <p class="card-text">We place our customers at the center of what we do and aspire</p>
                                    <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">We Value Our Customers</h4>
                                    <p class="card-text">We place our customers at the center of what we do and aspire to delight them every day.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p><img class=" img-fluid" src={`${process.env.PUBLIC_URL}/images/Goals/card5.svg`} alt="card image"/></p>
                                    <h4 class="card-title">We Value Our Customers Safety</h4>
                                    <p class="card-text">We have zero tolerance for unsafe actions and conditions</p>
                                    <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">We Value Our Customers Safety</h4>
                                    <p class="card-text">We have zero tolerance for unsafe actions and conditions and make safety a core value without compromise.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p><img class=" img-fluid" src={`${process.env.PUBLIC_URL}/images/Goals/card6.svg`} alt="card image"/></p>
                                    <h4 class="card-title">We Value Our Environment</h4>
                                    <p class="card-text">We are responsible stewards of the environment</p>
                                    <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">We Value Our Environment</h4>
                                    <p class="card-text">We are responsible stewards of the environment and champions for sustainability.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    )
}

export default Goals

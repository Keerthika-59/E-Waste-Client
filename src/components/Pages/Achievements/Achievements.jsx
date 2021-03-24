import {React,useEffect} from 'react';
// import './Achievements.css'
const Achievements = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
        <section id="team" class="pb-5">
<div class="container">
<h5 class="section-title h1">Our Achievements</h5>
<div>
    <div  class="text-white  p-5 shadow-sm  rounded back">
      <h3>GOING FROM WASTE COLLECTION
TO WASTE MANAGEMENT</h3>
      <p class="display-6">We’re so used to today’s sanitation standards, it can be easy to forget about how far we've come with waste collection. But it wasn’t that long ago that the handling of trash was inconsistent and resulted in unsightly piles lining city streets and sidewalks.</p>
    </div>
  </div>
  <br/>
  <br/><br/>
    <div class="row">
        
        <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="image-flip" >
                <div class="mainflip flip-0">
                    <div class="frontside">
                        <div class="card">
                            <div class="card-body text-center">
                            <p><img class=" img-fluid" src={`${process.env.PUBLIC_URL}/images/Goals/card1.svg`} alt="card image"/></p>
                                {/* <p><i class="fas fa-users fa-6x"></i></p> */}
                                <h4 class="card-title">Born out of a desire to serve our community</h4>
                                <p class="card-text">We wanted to serve their community by properly managing the waste. </p>
                                <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">Born out of a desire to serve our community</h4>
                                <p class="card-text">They wanted to serve their community by properly managing the waste produced by a rapidly growing population consuming more and more products built for convenience. </p>
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
                                <h4 class="card-title">A commitment to the environment</h4>
                                <p class="card-text">Waste Management was already professionally disposing of waste</p>
                                <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">A commitment to the environment</h4>
                                <p class="card-text">Americans started to embrace a more environmentally friendly mindset. Waste Management was already professionally and responsibly disposing of waste, and we expanded our commitment to the environment by beginning to address complex specialized waste.</p>
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
                                <h4 class="card-title">A passion for reusing the waste</h4>
                                <p class="card-text">We were one of the first truly integrated waste managing companies</p>
                                <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">A passion for reuse</h4>
                                <p class="card-text">We were one of the first truly integrated waste managing companies, not only collecting waste but responsibly managing the landfills it ends up in. And we were also one of the first to recognize the burgeoning recycling movement.</p>
                                
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
                                <h4 class="card-title">Reliable waste collection</h4>
                                <p class="card-text">It is easy being green. When you get residential waste</p>
                                <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">Reliable waste collection</h4>
                                <p class="card-text">It is easy being green. Here’s a glimpse of what’s in store when you get residential waste and recycling pickup services from Waste Management.</p>
                               
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
                                <h4 class="card-title">Fulfilling our promise every day</h4>
                                <p class="card-text">Today, we're changing waste collection, creating alternative fuels.</p>
                                <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">Fulfilling our promise every day</h4>
                                <p class="card-text">Today, we're changing waste collection, creating alternative fuels, and forging a more sustainable tomorrow for all of us.

While this is our story, it’s not the end. We’re writing new chapters every day with our pursuit of solutions for planet-wide issues.</p>
                                
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
                                <h4 class="card-title">Forward thinking from the beginning</h4>
                                <p class="card-text">We’re so used to today’s sanitation standards for waste management</p>
                                <p class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="backside">
                        <div class="card">
                            <div class="card-body text-center mt-4">
                                <h4 class="card-title">Forward thinking from the beginning</h4>
                                <p class="card-text">We’re so used to today’s sanitation standards, it can be easy to forget about how far we've come with waste collection. But it wasn’t that long ago that the handling of trash was inconsistent and resulted in unsightly piles lining city streets and sidewalks.</p>
                               
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

export default Achievements

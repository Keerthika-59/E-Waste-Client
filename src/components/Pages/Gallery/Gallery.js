import {React,useEffect} from "react";
import Footer from "../../Footer/Footer";
import  Navbar from '../../Navbar/Navbar'

import './Gallery.css'
function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div class="container-fluid">
  <div class="px-lg-5">

    <div class="row py-5">
      <div class="col-lg-12 mx-auto">
        <div class="text-white p-5 shadow-sm rounded banner">
          <h1 class="display-4">Waste management photo gallery</h1>
          <p class="lead">Have a look at our gallery!</p>
        </div>
      </div>
    </div>
    

    <div class="row">
    
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g1.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Waste generation</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g2.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Recycle</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g3.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Tree</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>

          </div>
        </div>
      </div>
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g4.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">E-waste</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g5.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Chart</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g6.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Recycling management</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
      
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g7.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Mandala</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g8.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Representatives</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g9.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Process</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
      
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g10.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Garbage collection</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
    
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g11.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Factory</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
    
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src={`${process.env.PUBLIC_URL}/assets/images/g12.jpg`} alt="" class="img-fluid card-img-top"/>
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Donation</a></h5>
            <p class="small text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
    

    </div>
  </div>
</div>
</>
    // <>
    //   <div className="img-container">
    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //       alt=""
    //     />
    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1401&q=80"
    //       alt=""
    //     />
    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1605027538836-ff90581109f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //       alt=""
    //     />
    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1600352705936-cac2d5646bfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //       alt=""
    //     />
    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1600795848739-5c58472a9552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
    //       alt=""
    //     />
    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    //       alt=""
    //     />

    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1612145342813-849b0c3e7f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    //       alt=""
    //     />
    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    //       alt=""
    //     />
    //     <img
    //       className="gal-img"
    //       src="https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
    //       alt=""
    //     />
    //   </div>
    // </>
  );
}

export default Gallery;

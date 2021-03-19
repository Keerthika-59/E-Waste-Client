// import './App.css';
import {React,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselHome from '../HomePage/Carousel/CarouselHome';
import Information from '../HomePage/Information/Information';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Navbar/>
      <CarouselHome/>
      <Information/>
      <Footer/>
    </>
  );
}

export default Home;
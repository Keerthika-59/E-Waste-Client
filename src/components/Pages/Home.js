// import './App.css';
import {React,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselHome from '../HomePage/Carousel/CarouselHome';
import Information from '../HomePage/Information/Information';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CarouselHome/>
      <Information/>
    </>
  );
}

export default Home;
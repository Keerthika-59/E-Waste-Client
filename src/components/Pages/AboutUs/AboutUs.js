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
    </>
  );
}

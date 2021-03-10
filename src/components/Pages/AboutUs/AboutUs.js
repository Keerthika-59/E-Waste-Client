import {React,useEffect} from 'react';
import Cards from '../../Cards/Card'
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

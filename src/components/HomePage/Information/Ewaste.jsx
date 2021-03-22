import {React,useEffect} from 'react';
import {Jumbotron,Media,Image} from "react-bootstrap"
import './Information.css'
import {data} from './Data.js';
const Ewaste = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>
            <Jumbotron>
      <p className="text-center font-italic heading"> {data[0].title} </p>   
  <Media as="li" className="mt-5 Info text-justify">
    
    <Image
      className="mr-3 img" roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaWaste.jpg`}
      alt="Generic placeholder"
    />
    <Media.Body className="text-large ml-5 mr-5">
   {/* <h4> {data[4].name}</h4> */}
      <ul>
      <li>{data[0].text}</li>
          <li>{data[4].text}</li>
          <li>{data[5].text}</li>
      </ul>
    </Media.Body>
  </Media>
  </Jumbotron>
        </div>
    )
}

export default Ewaste

import {React,useEffect} from 'react';
import {Jumbotron,Media,Image} from "react-bootstrap"
import './Information.css'
import {data} from './Data.js';
const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>
             <Jumbotron>
          <p className="text-center font-italic heading"> {data[2].title}</p>
  <Media as="li"  className="mt-5 Info">
    <Image
      className="mr-3 img" roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDonate.jpg`}
     alt="Generic placeholder"
    />
    <Media.Body className="text-large text-justify ml-5 mr-5">
    <ul>
    <li>{data[2].text}</li>
          <li>{data[6].text}</li>
          <li>{data[7].text}</li>
          
      </ul>

    </Media.Body>
  </Media>
  </Jumbotron>
        </div>
    )
}

export default Donate

import React from 'react'
import {Jumbotron,Media,Image} from "react-bootstrap"
import './Information.css'
import {data} from './Data.js';
const Dispose = () => {
    return (
        <div>
            <Jumbotron>
          <p className="text-center font-italic heading"> {data[1].title}</p>

  <Media as="li" className="mt-5 Info text-justify">
    <Media.Body className="text-large ml-5 mr-5">
    <ul>
          <li>{data[1].text}</li>
          <li>{data[3].text}</li>
          <li>{data[4].text}</li>
          
      </ul>

    </Media.Body>
    <Image
      className="mr-3 img"roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDispose.png`}
      alt="Generic placeholder"
    />
  </Media>
  </Jumbotron>
        </div>
    )
}

export default Dispose

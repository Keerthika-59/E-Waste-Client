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
          <section id="team" class="pb-5">
    <div class="container">
    <h5 class="section-title h1">Waste Management</h5>
    
        <div  class="text-white p-5 shadow-sm  rounded back">
          {/* <h3>DRIVEN BY OUR COMMITMENTS, GUIDED BY OUR VALUES</h3> */}
          <p class="lead">There is no proper system for waste disposal.  Sometimes for more than a week waste will not be collected. Waste management includes the activities and actions required  to manage waste from its inception to its final disposal.</p>
        </div>
        </div>
  </section>
            <Jumbotron>
      {/* <p className="text-center font-italic heading"> {data[0].title} </p>    */}
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

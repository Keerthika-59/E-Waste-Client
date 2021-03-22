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
          <section id="team" class="pb-5">
          <div class="container">
          <h5 class="section-title h1">Donate to Needy</h5>
          
              <div  class="text-white p-5 shadow-sm  rounded back">
              
                <p class="lead">Unused good condition items such as old mobile phone, old Clothes, Food can be donated to needy. Donating provides an immediate benefit since the receiver can make use of the donated item within the shortest possible time.</p>
              </div>
          </div>
  </section>
             <Jumbotron>
          {/* <p className="text-center font-italic heading"> {data[2].title}</p> */}
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

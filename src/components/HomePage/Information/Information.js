import React from "react";
import {Jumbotron,Media,Image} from "react-bootstrap"
import './Information.css'
const Information = () => {

  return (
    <>
     <ul className="list-unstyled mt-5">
      <Jumbotron>
      <p className="text-center font-italic heading">Waste Management</p>   
  <Media as="li" className="mt-5 Info text-justify">
       
    <Image
      className="mr-3 img" roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaWaste.jpg`}
      alt="Generic placeholder"
    />
    <Media.Body className="text-large ml-5 mr-5">
        There is no proper system for waste disposal. 
        Sometimes for more than a week waste will not be collected.
        Waste management includes the activities and actions required 
        to manage waste from its inception to its final disposal.
        This includes the collection, transport, disposal of waste, 
        together with monitoring and regulation of the waste management process
         and waste-related technologies, economic mechanisms.
  
    </Media.Body>
  </Media>
  </Jumbotron>
  <Jumbotron>
  <p className="text-center font-italic heading">Disposing the Waste</p>

  <Media as="li" className="mt-5 Info text-justify">
    <Media.Body className="text-large ml-5 mr-5">
 
        Some waste disposed be reused for some purpose. Unused waste will be disposed.
        Waste processing, and recycling or deposition of the waste materials of human society. 
        Waste materials are either liquid or solid in form, and their components may be either hazardous or inert that effects on health and the environment.
        Waste is typically applied to solid waste, sewage, hazardous waste, and electronic waste.

    </Media.Body>
    <Image
      className="mr-3 img"roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDispose.png`}
      alt="Generic placeholder"
    />
  </Media>
  </Jumbotron>
  <Jumbotron>
  <p className="text-center font-italic heading">Donating Old Items</p>
  <Media as="li"  className="mt-5 Info">
    <Image
      className="mr-3 img" roundedCircle
      src={`${process.env.PUBLIC_URL}/assets/images/mediaDonate.jpg`}
     alt="Generic placeholder"
    />
    <Media.Body className="text-large text-justify ml-5 mr-5">
        Unused good condition items such as old mobile phone, old Clothes, Food can be donated to needy.
        Donating provides an immediate benefit since the receiver can make use of the donated item within the shortest possible time.
Leftover food originating from parties, weddings and restaurants will just go waste, unless it is donated in order to satiate the hunger of needy.

    </Media.Body>
  </Media>
  </Jumbotron>
</ul> 
    </>
  );
};

export default Information;
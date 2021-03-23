import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
// import Testimonials from '../testimonials'
import './Card.css'

function Cards() {

    return (
        <div className="aboutus"   style={{marginBottom:"5%"}}>
            {/* <Card className="Aboutcard">
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/logo.jpg`} />
                <Card.Body className="abouttext">
                    <Card.Title>Services</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consect adipiscing elit. Nam tempor molestie elementum.
                        </Card.Text>
                    <Link to='/Services' className="Infocards" >
                        <Button variant="primary">Read More</Button>

                    </Link>
                </Card.Body>
            </Card> */}
            <Card className="Aboutcard hov">
            <Card.Img variant="top" className= "goalImg"/>
                {/* <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/goals2.jpg`} /> */}
                <Card.Body className="abouttext">
                    <Card.Title className="font-weight-bold">Goals</Card.Title>
                    <Card.Text className="text-space">
                    In the simplest terms, our values come down to:
          Do the Right Thing. The Right Way.
This idea sets the standard for our fundamental commitments, values.
                    </Card.Text>
                    <Link to='/Goals' className="Infocards">
                        <Button variant="primary">Read More</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className="Aboutcard hov">
            <Card.Img variant="top" className="achImg"/>
                {/* <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/achievements2.png`} /> */}
                <Card.Body className="abouttext">
                    <Card.Title  className="font-weight-bold">Achievements</Card.Title>
                    <Card.Text className="text-space">
                    We’re so used to today’s sanitation standards,
                     it can be easy to forget about how far we've come with
                      waste collection.
                        </Card.Text>
                    <Link to='Achievements' className="Infocards">
                        <Button variant="primary">Read More</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className="Aboutcard hov">
                <Card.Img variant="top" className="teamImg"/>
                {/* src={`${process.env.PUBLIC_URL}/assets/images/team2.png`}  */}
                <Card.Body className="abouttext">
                    <Card.Title  className="font-weight-bold">Our Team</Card.Title>
                    <Card.Text className="text-space">
                    Our leadership serves with a focus on maximizing 
                    resource value while minimizing or even eliminating 
                environmental impact.
             
                        </Card.Text>
                    <Link to='/OurTeam' className="Infocards">
                        <Button variant="primary">Read More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;
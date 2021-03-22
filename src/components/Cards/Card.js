import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
// import Testimonials from '../testimonials'
import './Card.css'

function Cards() {

    return (
        <div className="aboutus">
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
            <Card className="Aboutcard">
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/goals2.jpg`} />
                <Card.Body className="abouttext">
                    <Card.Title>Goals</Card.Title>
                    <Card.Text>
                    In the simplest terms, our values come down to this:
          Do the Right Thing. The Right Way.
This idea sets the standard for our fundamental commitments and core values
 and guides our daily actions and decisions.
                    </Card.Text>
                    <Link to='/Goals' className="Infocards">
                        <Button variant="primary">Read More</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className="Aboutcard">
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/achievements2.png`} />
                <Card.Body className="abouttext">
                    <Card.Title>Achievements</Card.Title>
                    <Card.Text>
                    We’re so used to today’s sanitation standards, it can be easy to forget about how far we've come with waste collection. But it wasn’t that long ago that the handling of trash was inconsistent.
                        </Card.Text>
                    <Link to='Achievements' className="Infocards">
                        <Button variant="primary">Read More</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card className="Aboutcard">
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/team2.png`} />
                <Card.Body className="abouttext">
                    <Card.Title>Our Team</Card.Title>
                    <Card.Text>
                    Our leadership serves with a focus on maximizing resource value while minimizing — or even eliminating — 
                environmental impact so that both our economy and environment can thrive.
             
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
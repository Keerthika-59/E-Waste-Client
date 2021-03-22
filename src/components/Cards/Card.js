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
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Nam tempor molestie elementum.
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
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Nam tempor molestie elementum.
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
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Nam tempor molestie elementum.
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
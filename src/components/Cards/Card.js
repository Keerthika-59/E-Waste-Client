import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link} from 'react-router-dom'
// import Testimonials from '../testimonials'
import '../Cards/Card.css'

function Cards() {

    return (
            <div className="aboutus" style={{justifyContent:"space-around",display:"flex"}}>
                
                <Card className="card">
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/logo.jpg`} />
                    <Card.Body>
                        <Card.Title>Services</Card.Title>
                        <Card.Text>
                            <p>Our services include</p>
                            <ol>
                                <li>Disposal of bio-digradable waste</li>
                                <li>Disposal of non bio-digradable waste</li>
                                <li>Donation of usable items</li>
                            </ol>
                        </Card.Text>
                        <Link to='/Services' className="Infocards" >
                            <Button variant="primary">Read More</Button>
                                
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/goals2.jpg`} />
                    <Card.Body>
                        <Card.Title>Goals</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to='/Goals' className="Infocards">
                            <Button variant="primary">Read More</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/achievements2.png`} />
                    <Card.Body>
                        <Card.Title>Achievements</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to='Achievements' className="Infocards">
                            <Button variant="primary">Read More</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/team2.png`} />
                    <Card.Body>
                        <Card.Title>Our Team</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
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
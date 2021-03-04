import React from 'react'
import { Card, Button } from "react-bootstrap";
import { Link, Router } from 'react-router-dom'
// import {Route} from 'react-router-dom'
import { BrowserRouter, Route } from "react-router-dom";
import Data from './dummydata';
import './Card.css'

function Cards() {

    return (
        <BrowserRouter>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "10%" }} className="aboutus">
                <Card style={{ width: '18rem' }} className="card">
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
                        <Link to='/Data1' >
                            <Button variant="primary">
                                <Route exact path='/Data1' component={Data}/>Read More</Button>
                                
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/goals2.jpg`} />
                    <Card.Body>
                        <Card.Title>Goals</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to='/Data2'>
                            <Button variant="primary">Read More</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/achievements2.png`} />
                    <Card.Body>
                        <Card.Title>Achievements</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to='/Data3'>
                            <Button variant="primary">Read More</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="card">
                    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/team2.png`} />
                    <Card.Body>
                        <Card.Title>Our Team</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to='/Data4'>
                            <Button variant="primary">Read More</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </BrowserRouter>
    )
}

export default Cards;
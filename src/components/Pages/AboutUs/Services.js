import React from 'react';
import { Card } from 'react-bootstrap'
import '../AboutUs/AboutUs.css'

export default function Services() {
    return (
        <>
            <Card className="card">
                <Card.Img className="cardimg" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/Services.jpg`}/>
                <Card.Body>
                    <Card.Title>Services</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

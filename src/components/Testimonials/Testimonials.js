import React from "react";
import { Carousel, Container, Card } from 'react-bootstrap';
import './Testimonials.css';
const Testimonials = () => {

    return (
        <Container fluid={true}>
            <Carousel className="testimonial">
                <Carousel.Item interval={1000}>
                    <Card className="test1">
                        <div class="testcontainer">
                            <div class="testcarousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> <img src="https://i.imgur.com/lE89Aey.jpg" alt="" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                    </Card>
                </Carousel.Item>
                <Carousel.Item >
                    <Card className="test1">
                        <div class="testcontainer">
                            <div class="testcarousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> <img src="https://i.imgur.com/lE89Aey.jpg" alt="" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                    </Card>
                </Carousel.Item>
                <Carousel.Item >
                    <Card className="test1">
                        <div class="testcontainer">
                            <div class="testcarousel-caption">
                                <p>If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen. </p> <img src="https://i.imgur.com/lE89Aey.jpg" alt="" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Testimonials;
import React,{useEffect} from "react";
import { Carousel, Container, Card } from 'react-bootstrap';
import './Testimonials.css';
const Testimonials = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Container fluid={true}>
            <Carousel className="testimonial">
                <Carousel.Item interval={1000}>
                    <Card className="test1">
                        <div class="testcontainer">
                            <div class="testcarousel-caption">
                                <p>The need of the handling the waste the right way is more important now than never, the waste needs to be properly disposed to prevent further harm to the environment. </p> <img src="assets/images/img3.jpg" style={{height:"100px"}} alt="" />
                                <div id="image-caption">Nick Doe</div>
                            </div>
                        </div>
                    </Card>
                </Carousel.Item>
                <Carousel.Item >
                    <Card className="test1">
                        <div class="testcontainer">
                            <div class="testcarousel-caption">
                                <p> We really need to step up to change the way the waste being handled for our younger generation. And i can say that using this application we are one step close to. </p> <img src="assets/images/img4.jpg" style={{height:"100px"}} alt="" />
                                <div id="image-caption">Robert</div>
                            </div>
                        </div>
                    </Card>
                </Carousel.Item>
                <Carousel.Item >
                    <Card className="test1">
                        <div class="testcontainer">
                            <div class="testcarousel-caption">
                                <p>I am happy that the items that i no longer use or need are able to reach the hands of the people who need them the most giving me an opportunity to serve the society. </p> <img src="assets/images/img1.jpeg" style={{height:"100px"}} alt="" />
                                <div id="image-caption">Chris</div>
                            </div>
                        </div>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Testimonials;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import './Navbar.css';


function NavComponent() {

    return (
        <>
            <Navbar variant="dark">
                <img className="img-fluid"
                    src={`${process.env.PUBLIC_URL}/assets/images/logo.jpg`}
                    width="50"
                    height="50"
                    alt="logo" />
                <Navbar.Brand href="/" style={{ marginLeft: "2%" }}>Waste Management </Navbar.Brand>
                <Nav className="mr-auto" style={{ marginLeft: "2%" }}>
                    <Nav.Link href="/Gallery">Gallery</Nav.Link>
                    <Nav.Link href="/Aboutus">About Us</Nav.Link>
                    <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                </Nav>
                <Nav style={{marginRight:"5%"}}>
                    <Nav.Link href="/SingUp">Sign up</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavComponent;
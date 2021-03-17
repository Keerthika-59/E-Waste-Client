import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faEnvelopeOpen, faSearch, faSignOutAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Row, Col, Nav, Form, Image, Navbar, Dropdown, Container, ListGroup, InputGroup } from '@themesberg/react-bootstrap';
import APIHelper from '../../API/apihelper2';
import Cookies from 'js-cookie'
import { Redirect } from "react-router";
import AuthApi from "../../../authAPI";

const Repicon =  (props) => {

  const Auth = useContext(AuthApi)
  const handleLogout = async (e) => {
    e.preventDefault()
    
    // await APIHelper.logoutUser()
    Auth.setAuth(false)
    Cookies.remove('repr')
    console.log("logged out");
    <Redirect to='/RepresentativeLogIn'/>

  }

  return (
    Auth.auth ?
      (<Navbar expanded className="ps-0 pe-2 pb-0" >
        <Container fluid className="px-0">
          <div className="d-flex justify-content-between w-100" >
            <div className="d-flex align-items-center">

            </div>
            <Nav className="align-items-center" >
              <Dropdown as={Nav.Item} >

              </Dropdown>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                  <div className="media d-flex align-items-center" style={{ backgroundcolor: "red" }}>
                    <Image src={`${process.env.PUBLIC_URL}/assets/images/user.png`} style={{ width: "40px" }} className="user-avatar md-avatar rounded-circle" />
                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold">Representative</span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile
                </Dropdown.Item>
                
                  <Dropdown.Divider/>

                  <Dropdown.Item className="fw-bold" onClick={e => handleLogout(e)} >
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
                </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>) : (<Redirect to='/RepresentativeLogIn' />)
  );
};
export default Repicon
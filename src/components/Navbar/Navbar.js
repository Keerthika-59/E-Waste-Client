import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { NavDropdown,Dropdown, DropdownButton } from "react-bootstrap";
import "./Navbar.css";
import "../Button/Button.css";
import { Button } from "../Button/Button";
import Cookies from 'js-cookie'
import AuthApi from '../../authAPI'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Redirect } from "react-router";

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [userLog, setUser] = useState(false);
  const [repLog, setRep] = useState(false);  


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  function readUserLog() {
    if (Cookies.get('user')) {
      setUser(true)
    }
    else {
      setUser(false)
    }
  }

  function readRepLog() {
    if (Cookies.get('repr')) {
      setRep(true)
    }
    else {
      setRep(false)
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      readUserLog();
      readRepLog()
    }, 1);
    return () => clearInterval(interval);
  }, []);

  
  const Auth = useContext(AuthApi)
  const handleLogoutUser = async (e) => {
    e.preventDefault()


    Auth.setAuth(false)
    Cookies.remove('user')
    console.log("logged out");
    // props.history.push('/UserLogin')
    <Redirect to='/UserLogIn' />
  }

  const handleLogoutRep = async (e) => {
    e.preventDefault()


    Auth.setAuth(false)
    Cookies.remove('repr')
    console.log("logged out");
    <Redirect to='/RepresentativeLogIn' />
  }

  // console.log(userLog)
  useEffect(() => {
    showButton();
  }, []);


  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container mr-auto">
          <Link
            to="/"
            className="navbar-logo ml-auto"
            onClick={closeMobileMenu}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/wm-logo.png`}
              alt=""
              style={{ height: "70px" }}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={
              click ? "nav-menu active my-4 px-4" : "nav-menu my-4 px-4"
            }
          >
            <li className="nav-item">
              <Link
                to="/Gallery"
                style={{ textDecoration: "none" }}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>

      
      <li className="nav-item">
      <NavDropdown title="About Us" className="nav-links" id="basic-nav-dropdown">
      <NavDropdown.Item>
                 <Link
                      to="/AboutUs"
                      // className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none" }}
                    >
                       <div>About Us </div>
                     
                </Link>
                </NavDropdown.Item>
                
              <NavDropdown.Item>
                <Link
                      to="/Goals"
                      // className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none" }}
                    >
                       <div>Goals</div>
                     
                </Link>
              </NavDropdown.Item>
            
              <NavDropdown.Item>
                <Link
                      to="/Achievements"
                      // className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none" }}
                    >
                       <div>Achievements</div>
                      
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                      to="/OurTeam"
                      // className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none" }}
                    >
                     
                      <div>Our Team</div>
                </Link>
              </NavDropdown.Item>

            </NavDropdown>
                
            </li>

            <li className="nav-item">
      <NavDropdown title="Services" className="nav-links" id="basic-nav-dropdown">
             
             <NavDropdown.Item>
                <Link
                      to="/Services"
                      // className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none" }}
                    >
                      
                      <div>Our Services</div>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                      to="/Ewaste"
                      // className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none" }}
                    >
                       <div>E-Waste</div>
                     
                </Link>
              </NavDropdown.Item>
            
              <NavDropdown.Item>
                <Link
                      to="/Disposing"
                      // className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none" }}
                    >
                        <div>Dispose</div>
                      
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                      to="/Donating"
                      // className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none" }}
                    >
                     <div>
                    Donate
                  </div>
                </Link>
              </NavDropdown.Item>

            </NavDropdown>
                
            </li>
            <li className="nav-item">
                <Link
                      to="/ContactUs"
                      className="nav-links"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: "none",width:"130px" }}
                    >
                    Contact Us
                    </Link>
            </li>
            <li>
              <Link
                to="/SignUpoptions"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/LogInoptions"
                className="nav-links-mobile"
                // ref="loginbtn"
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Log In
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="login-navbar mr-auto "> */}
          {button && (!userLog) && (!repLog) && (
            <DropdownButton
              className="mr-auto"
              id="dropdown-basic-button"
              title="LOG IN"
            >
              <Dropdown.Item>
                <Link to="/UserLogIn"
                style={{ textDecoration: "none" }}>
                  <div>
                   User
                  </div>
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Link to="/RepresentativeLogIn"
                 style={{ textDecoration: "none" }}>
                  <div>
                  Representative
                  </div>
                </Link>
              </Dropdown.Item>
            </DropdownButton>
          )}
        {/* </div> */}

        {/* <div className="login-navbar mr-auto "> */}
          {button && (userLog) && (
            <DropdownButton
              className="mr-auto"
              id="dropdown-basic-button"
              title="User"

            >
            

             <Dropdown.Item className="fw-bold">
              <Link to='/MyProfile' 
                style={{ textDecoration: "none" }}
                >
                  <div>
                <FontAwesomeIcon icon={faUserCircle} className="me-2" /> 
                My Profile
                </div>
                </Link>
             </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item className="fw-bold">
              <Link to='/UserDash' 
                style={{ textDecoration: "none" }}
                >
                <div>
                <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Dashboard
                </div>
                </Link>
             </Dropdown.Item>

              {/* <Dropdown.Divider />

              <Dropdown.Item className="fw-bold">
              <Link to='/ActivityDetails' 
                style={{ textDecoration: "none" }}
                >
                <div>
                <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Activity
                </div>
                </Link>
             </Dropdown.Item> */}

              <Dropdown.Divider />
              

              <Dropdown.Item className="fw-bold" onClick={e => handleLogoutUser(e)}>
               <div>
                <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
                </div>
             </Dropdown.Item>
            </DropdownButton>
          )}
        {/* </div> */}

        {/* <div className="login-navbar mr-auto "> */}
          {button && (repLog)&& (
            <DropdownButton
              className="mr-auto"
              id="dropdown-basic-button"
              title="Representative "
            >
              <Dropdown.Item className="fw-bold">
              <Link to='/RepProfile' 
                style={{ textDecoration: "none" }}
                >
                <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile</Link>
             </Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item className="fw-bold">
              <Link to='/RepDash' 
                style={{ textDecoration: "none" }}
                >
                <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Dashboard</Link>
             </Dropdown.Item>



              <Dropdown.Divider />

              <Dropdown.Item className="fw-bold" onClick={e => handleLogoutRep(e)}>
                <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" /> Logout
             </Dropdown.Item>
            </DropdownButton>
          )}
        {/* </div> */}
      </nav>
    </>
  );
}

export default Navbar;

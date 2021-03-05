import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import {Dropdown,DropdownButton} from 'react-bootstrap'
import './Navbar.css';
import '../Button/Button.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/wm-logo.png`} style={{ height: "60px" }}></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} style={{ marginRight: "450px" }}>
            <li className='nav-item'>
              <Link to='/Gallery' className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AboutUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ContactUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='/SignUp'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to='/LogIn'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>
          </ul>
          <div style={{ marginRight: "10px" }}>{button && <DropdownButton buttonStyle='btn--outline' id="dropdown-basic-button" title="SIGN UP">
              <Dropdown.Item ><Link to='/UserSignUp'>User</Link></Dropdown.Item>
              <Dropdown.Item ><Link to='/RepresentativeSignUp'>Pepresentative</Link></Dropdown.Item>
            </DropdownButton>}</div>
            <div>{ button && <DropdownButton  buttonStyle='btn--outline' id="dropdown-basic-button" title="LOG IN">
              <Dropdown.Item ><Link to='/UserLogIn'>User</Link></Dropdown.Item>
              <Dropdown.Item ><Link to='/RepresentativeLogIn'>Representative</Link></Dropdown.Item>
            </DropdownButton>}</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

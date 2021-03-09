import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Dropdown,DropdownButton} from 'react-bootstrap'
import './Navbar.css';
import '../Button/Button.css'
import {Button} from '../Button/Button'

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
        <div className='navbar-container mr-auto'>
          <Link to='/' className='navbar-logo ml-auto' onClick={closeMobileMenu}>
            <img  
            src={`${process.env.PUBLIC_URL}/assets/images/wm-logo.png`} 
            alt="" style={{ height: "70px"}}
            />

          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
              to='/Gallery' 
              style={{textDecoration:"none"}} 
              className='nav-links' 
              onClick={closeMobileMenu} >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AboutUs'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ContactUs'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to='/SignUpoptions'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to='/LogInoptions'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
                style={{ textDecoration: "none" }}
              >
                Log In
              </Link>
            </li>

          </ul>
        </div>
          <div className="login-navbar mr-auto">
            {
              button && <DropdownButton className="mr-auto" id="dropdown-basic-button" title="LOG IN">
                <Dropdown.Item ><Link to='/UserLogIn'  >    <p className="navbar-text"> User </p> </Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/RepresentativeLogIn'>  <p className="navbar-text"> Representative </p> </Link></Dropdown.Item>
              </DropdownButton>
            }

          </div>      
          
        </nav>
    </>
  );
}

export default Navbar;

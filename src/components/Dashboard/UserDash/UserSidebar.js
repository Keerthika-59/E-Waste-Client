<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { SidebarData } from './sidebarData';
import './navbar.css';
import { Redirect } from "react-router";
import * as BsIcons from 'react-icons/bs';

import { IconContext } from 'react-icons';
import Activity from './pages/activity';
import Pending from './pages/pending';
import AuthApi from '../../../authAPI'
import Navbar1 from './../../Navbar/Navbar'
import Footer from '../../Footer/Footer';
import Completed from './pages/completed';

function Navbar() {

  const [sidebar, setSidebar] = useState(true);
  const [show, setShow] = useState(0);

  const showSidebar = () => setSidebar(!sidebar);

  const Auth = useContext(AuthApi);

  return (
    Auth.auth ? (
      <>
        {/* <Navbar1/> */}
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='sidenav'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div class="row">
            <div class="col-md-4 sn">

              <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-menu'}>
                <ul className='sidenav-menu-items' >

                  <li className="  px-3 nav-text" style={{ listStyle: 'none' }}
                    onClick={(e) => setShow(0)}
                  >

                    <h5 style={{ color: 'white' }}>
                      <BsIcons.BsFillPersonPlusFill />  Create Activity
                    </h5>

                  </li>
                  <li className="my-3 px-3 nav-text" style={{ listStyle: 'none' }}
                    onClick={(e) => setShow(1)}
                  >

                    <h5 style={{ color: 'white' }}>
                      <BsIcons.BsFillPersonFill />  Pending Activites
                    </h5>


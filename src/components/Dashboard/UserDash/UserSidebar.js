import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
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
      <Navbar1/>
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
                  
                  <li className=" mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                    onClick={(e) => setShow(0)}
                  >

                    <h6 style={{ color: 'white' }}>
                      <BsIcons.BsFillPersonPlusFill />  Create Activity
                    </h6>

                  </li>
                  <li className=" mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                    onClick={(e) => setShow(1)}
                  >

                    <h6 style={{ color: 'white' }}>
                      <BsIcons.BsFillPersonFill />  Pending Activites
                    </h6>

                  </li>

                  <li className=" mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                    onClick={(e) => setShow(2)}
                  >
                    <h6 style={{ color: 'white' }}>
                      <BsIcons.BsFillPersonCheckFill />  Completed Activites
                    </h6>

                  </li>
                </ul>

              </nav>
            </div>

            <div class="col-md-8 content">
              {
                (show === 0) ? (
                  <Activity/>
                ) : (show === 1) ? (
                  <Pending/>
                ) : (
                  <Completed/>
                )
              }
            </div>
          </div>
        </IconContext.Provider>

        <Footer/>
      </>
    ) : (<Redirect to='/UserLogIn' />)
  );
}

export default Navbar;

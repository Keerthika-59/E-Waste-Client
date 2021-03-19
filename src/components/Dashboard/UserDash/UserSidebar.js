import React, { useState,useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import './navbar.css';
import { Redirect } from "react-router";

import { IconContext } from 'react-icons';
import Activity from './pages/activity';
import Pending from './pages/pending';
import AuthApi from '../../../authAPI'
import Completed from './pages/completed';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const Auth = useContext(AuthApi)

  return (
    Auth.auth ?(
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      <div className='sidenav'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
      <div class="row">
        <div class="col-md-4 sn">
        
        <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-menu'}>
          <ul className='sidenav-menu-items' onClick={showSidebar}>
         
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
         
        </nav>
        </div>
        <div class="col-md-8 content">
            <Activity/>
            {/* <Pending/> */}
           <Completed/>
        </div>
        </div>
      </IconContext.Provider>
      
    </>
):(<Redirect to='/UserLogIn' />) 
  );
}

export default Navbar;

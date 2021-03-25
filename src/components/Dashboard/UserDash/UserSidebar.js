// import React, { useState,useContext } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './sidebarData';
// import './navbar.css';
// import { Redirect } from "react-router";

// import { IconContext } from 'react-icons';
// import Activity from './pages/activity';
// import Pending from './pages/pending';
// import AuthApi from '../../../authAPI'
// import Completed from './pages/completed';

// function Navbar() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);
//   const Auth = useContext(AuthApi)

//   return (
//     Auth.auth ?(
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//       <div className='sidenav'>
//           <Link to='#' className='menu-bars'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//       <div class="row">
//         <div class="col-md-4 sn">
        
//         <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-menu'}>
//           <ul className='sidenav-menu-items' onClick={showSidebar}>
         
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
         
//         </nav>
//         </div>
//         <div class="col-md-8 content">
//             <Activity/>
//             <Pending/>
//            <Completed/>
//         </div>
//         </div>
//       </IconContext.Provider>
      
//     </>
// ):(<Redirect to='/UserLogIn' />) 
//   );
// }

// export default Navbar;

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
import UserCompletedActivities from '../../Admin/UserCompletedActivities'

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
          {/* <div className='sidenav'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div> */}
          <div class="row">
            <div class="col-md-4 sn">

              <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-menu'}>
                <ul className='sidenav-menu-items' >
                  
                  <li className="  px-3 nav-text"  style={{ listStyle: 'none' }}
                    onClick={(e) => setShow(0)}
                  >

                    <h5 style={{ color: 'white'}}>
                      <BsIcons.BsFillPersonPlusFill />  Create Activity
                    </h5>

                  </li>
                  <li className="my-3 px-3 nav-text" style={{ listStyle: 'none' }}
                    onClick={(e) => setShow(1)}
                  >

                    <h5 style={{ color: 'white' }}>
                      <BsIcons.BsFillPersonFill />  Pending Activity
                    </h5>

                  </li>

                  <li className=" my-3 px-3 nav-text" style={{ listStyle: 'none'}}
                    onClick={(e) => setShow(2)}
                  >
                    <h5 style={{ color: 'white' }}>
                      <BsIcons.BsFillPersonCheckFill />  Completed Activites
                    </h5>

                  </li>
                </ul>

              </nav>
            </div>
            <div className="col-md-8 content ">
              {
                (show === 0) ? (
                  <Activity/>
                ) : (show === 1) ? (
                  <Pending/>
                ) : (
                 // <Completed/>
                   <UserCompletedActivities/>
                )
              }
            </div>
          </div>
        </IconContext.Provider>
        
        {/* <Footer/> */}
      </>
    ) : (<Redirect to='/UserLogIn' />)
  );
}

export default Navbar;

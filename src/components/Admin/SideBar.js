import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';

import { IconContext } from 'react-icons';
import {Link, Redirect} from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./style.css"

const SideBar = () => {

    const [sidebar, setSidebar] = useState(true);

    const [show, setShow] = useState(0);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='sidenav'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick = {showSidebar} />
                    </Link>
                </div>
                <div class="row">
                    <div class="col-4 sn">

                        <nav className={sidebar ? 'sidenav-menu active' : 'sidenav-menu'}>
                            <ul className='sidenav-menu-items'>

                               <li className = " mx-3 py-2 px-2" style= {{listStyle : 'none'}}
                               onClick = { (e) => setShow(0)}
                               >
                                   
                                      <h5 style = {{color : 'white'}}>
                                            <BsIcons.BsFillPersonFill />  View Users
                                      </h5>
                               </li>

                                <li className="mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                                    onClick={(e) => setShow(1)}
                                >

                                    <h5 style={{ color: 'white' }}>
                                        <BsIcons.BsFillPersonFill />  View Reps
                                      </h5>
                                </li>

                                <li className="mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                                    onClick={(e) => setShow(2)}
                                >

                                    <h5 style={{ color: 'white' }}>
                                        <BsIcons.BsFillPersonFill />  View Messages
                                      </h5>
                                </li>

                                <li className="mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                                    onClick={(e) => setShow(3)}
                                >

                                    <h5 style={{ color: 'white' }}>
                                        <BsIcons.BsFillPersonFill />  Verify Representatives
                                      </h5>
                                </li>
                            </ul>

                        </nav>
                    </div>
                    <div class="col-8 content">
                        {/* {
                            (show === 0) ? (
                                <ManageUsers/>
                            ) : (
                                (show === 1) ? (
                                        <ManageRepresentatives/>
                                ) : (
                                            <ManageMessages/>
                                )
                            )
                        } */}
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default SideBar
import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';

import { IconContext } from 'react-icons';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../Footer/Footer';
import "./style.css"

import TableRepresentatives from './TableRepresentatives';
import TableVerifiedRep from './TableVerifiedRep';
import TableMessages from './TableMessages';
import TableUsers from './TableUsers';
import AuthApi from '../../authAPI';
import Cookies from 'js-cookie';
import AdminPendingActivities from './AdminPendingActivities'
import AdminCompletedActivities from './AdminCompletedActivities'

const SideBar = () => {

    const Auth = useContext(AuthApi);

    const [sidebar, setSidebar] = useState(true);

    const [show, setShow] = useState(0);

    // const showSidebar = () => setSidebar(!sidebar);

    return (
        (Auth.auth) ? <div className="sidebar1">
            <IconContext.Provider value={{ color: '#fff' }}>
                {/* <div className='sidenav'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick = {showSidebar} />
                    </Link>
                </div> */}
                <div className="row">
                    <div className="col-md-4 sn">

                        <nav className={sidebar ? 'sidenav-menuad active' : 'sidenav-menuad'}>
                            <ul className='sidenav-menu-items'>

                                <li className=" mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                                    onClick={(e) => setShow(0)}
                                >

                                    <h5 style={{ color: 'white' }}>
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
                                        <BsIcons.BsFillPersonFill />  Verify Reps
                                      </h5>
                                </li>
                                <li className="mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                                    onClick={(e) => setShow(4)}
                                >

                                    <h5 style={{ color: 'white' }}>
                                        <BsIcons.BsFillPersonFill />  Pending Activities
                                      </h5>
                                </li>
                                <li className="mx-3 py-2 px-2" style={{ listStyle: 'none' }}
                                    onClick={(e) => setShow(5)}
                                >

                                    <h5 style={{ color: 'white' }}>
                                        <BsIcons.BsFillPersonFill />  Completed Activities
                                      </h5>
                                </li>
                            </ul>

                        </nav>
                    </div>
                    <div className="col-md-8 content">
                        {
                            (show === 0) ? (
                                <TableUsers />
                            ) :
                                (show === 1) ? (
                                    <TableRepresentatives />
                                ) :
                                    (show === 2) ? (
                                        <TableMessages />
                                        ) :
                                        (show === 3) ? (
                                        <TableVerifiedRep />) : 
                                        (show===4)? <AdminPendingActivities /> : <AdminCompletedActivities/>
                        }
                    </div>
                </div>
            </IconContext.Provider>
        </div> : (<Redirect to='/admin/login' />)
    )
}

export default SideBar
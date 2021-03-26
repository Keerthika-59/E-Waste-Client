import React, { useState, useContext, useEffect } from "react";
import { Button, Image } from 'react-bootstrap';
import axios from 'axios';
import { BrowserRouter, Link, Redirect } from "react-router-dom";

import Cookies from 'js-cookie';
import AuthApi from '../../../authAPI';
import './style.css';
import Swal from 'sweetalert2'

const AdminLogin = (props) => {

    const Auth = useContext(AuthApi);
    const readCookies = () => {

        const admin = Cookies.get('admin');

        if (admin) {
            console.log('Admin Logged In');
            Auth.setAuth(true);
            props.history.push('/admin');
        }
    }

    useEffect(() => {
        readCookies();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    const handleAdminLogin = async (e) => {

        e.preventDefault();

        try {

            if (email && password) {

                const login = await axios.post('https://ewaste-dec20-dev-api.azurewebsites.net/admin/login', {
                    email: email,
                    password: password
                });

                console.log(login);

                Auth.setAuth(true);
                Cookies.set("admin", login);
                props.history.push('/admin');
            }

            // await axios.post('')
        } catch (error) {

            Swal.fire('Login failed!','invalid credentials')

        }
    }
    return ((Cookies.get('admin')) ? <Redirect to='/admin' /> : (
        <div>
            <div className="container-fluid">
                <div className="row main-content bg-success text-center">
                    <div className="col-md-4 text-center company__info">
                        <span className="company__logo">
                            <Image
                                src='http://ewaste-dec20-dev.azurewebsites.net/assets/images/wm-logo.png'
                                width={70}
                                height={70}
                            />
                        </span>
                        <h4 className="company_title">Waste Management</h4>
                    </div>
                    <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div className="container-fluid mx-auto">
                            <div className="row">

                                <form control="" className="form-group mx-auto" onSubmit={handleAdminLogin}>
                                    <div className="row">
                                        <input required={true} type="email" name="username" onChange={e => setEmail(e.target.value)} id="username" className="form__input" placeholder="Enter Your Email" />
                                    </div>

                                    <div className="row">
                                        <input required={true} type="password" onChange={e => setPassword(e.target.value)} name="password" id="password" className="form__input" placeholder="Enter Your Password" />
                                    </div>

                                    <div className="row">
                                        <Button disable={show} className="admin" type="submit" variant="info"> Log In </Button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>)
    )
}

export default AdminLogin

import React, { useState, useContext, useEffect } from "react";
import "./userStyle.css";

import Cookies from "js-cookie";
import { BrowserRouter, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import APIHelper from "../Registration/apihelper";
import AuthApi from "../../authAPI";

import toast, { Toaster } from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const notify = () => toast.success('User logged in successfully!');
const notify1 = () => toast.error('Email or password is incorrect!');


export const UserForm = (props) => {
  const Auth = useContext(AuthApi);
  const readCookies = () => {
    const user = Cookies.get("user");
    if (user) {
      console.log(`user true`);
      Auth.setAuth(true);
      props.history.push("/UserDash");
    }
  };

  // const []

  useEffect(() => {
    readCookies();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          if (values.email && values.password) {
            const login = await APIHelper.loginUser({
              email: values.email,
              password: values.password,
            });
            Auth.setAuth(true);
            console.log(`logged in`);
            Cookies.set("user", login);
            props.history.push("/UserDash");
            setTimeout(() => {
              setSubmitting(false);
            }, 1000);
          }
        } catch (err) {
          alert(err.response.data.errorMessage);
        }
    };


    useEffect(() => {
        readCookies();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values, { resetForm, setSubmitting }) => {

                try {
                    if (values.email && values.password) {
                      const login = await APIHelper.loginUser({
                        email: values.email,
                        password: values.password,
                      });
                      Auth.setAuth(true);
                      console.log(`logged in`);
                      Cookies.set("user", login);
                      props.history.push("/UserDash");
                      setTimeout(() => {
                        setSubmitting(false);
                      }, 1000);
                    }
                  } catch (err) {
                    // alert(err.response.data.errorMessage);
                    notify1();
                  }
          
                
                // setTimeout(() => {
                //     setSubmitting(false);
                // }, 1000);

                const login = await APIHelper.loginUser({
                    email: values.email,
                    password: values.password,
                });
                console.log(login);

                if (login) {
                    Auth.setAuth(true);
                    console.log(`logged in`);
                    Cookies.set("user", login);
                    props.history.push("/UserDash");
                    
                } 
                else { 

                    resetForm({});
                    setTimeout(() => {
                        alert('Invalid Username or Password')
                    }, 1000);
                    console.log(`error logging in`);
                }

            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Email is required'),
                password: Yup.string()
                    .required('Password is Required'),
            })}>

            { (formik, isSubmitting, resetForm) => (
                <Form>
                    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                        <div className="card card0 border-0">
                            <div className="row d-flex">
                                <div className="col-lg-6">
                                    <div className="card1 pb-5">

                                        <div className="row px-3 justify-content-center mt-4 mb-5 border-line">

                                            <img
                                                src="https://i.imgur.com/uNGdWHi.png"
                                                alt="" className="images"
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card2 card border-0 px-4 py-5">
                                        <div className="row mb-4 px-3">
                                            <h3 className="heading">User Sign In</h3>
                                        </div>

                                        <div className="row px-3"> <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Email Address</h6>
                                        </label>

                                            <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="invalid-feedback">{formik.errors.email}</div>
                                            ) : null}


                                        </div>
                                        <br />

                                        <div className="row px-3">
                                            <label className="mb-1">
                                                <h6 className="mb-0 text-sm">Password</h6>
                                            </label>

                                            <Field name="password" className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />
                                            {formik.touched.password && formik.errors.password ? (
                                                <div className="invalid-feedback">{formik.errors.password}</div>
                                            ) : null}

                                        </div>

                                        <div className="row px-3 mb-4">
                                            <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="/" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                        </div>

                                        <div className="row mb-3 px-3">
                                            <button type="submit" className="btn btn-blue text-center"> Login </button>

                                            
                                            <Toaster limit={1}/>

                                        </div>

                                        <div className="row mb-4 px-3">
                                            <small className="font-weight-bold">Don't have an account? <a className="text-danger "><Link to="/UserSignUp"> Register </Link></a></small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    <div className="row px-3">
                      {" "}
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Email Address</h6>
                      </label>
                      <Field
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        type="email"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      ) : null}
                    </div>
                    <br />

                    <div className="row px-3">
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Password</h6>
                      </label>

                      <Field
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        type="password"
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="invalid-feedback">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="custom-control custom-checkbox custom-control-inline">
                        {" "}
                        <input
                          id="chk1"
                          type="checkbox"
                          name="chk"
                          className="custom-control-input"
                        />{" "}
                        <label
                          for="chk1"
                          className="custom-control-label text-sm"
                        >
                          Remember me
                        </label>{" "}
                      </div>{" "}
                      <a href="/" className="ml-auto mb-0 text-sm">
                        Forgot Password?
                      </a>
                    </div>

                    <div className="row mb-3 px-3">
                      <button
                        type="submit"
                        className="btn btn-blue text-center"
                      >
                        {" "}
                        Login{" "}
                      </button>
                    </div>

                    <div className="row mb-4 px-3">
                      <small className="font-weight-bold">
                        Don't have an account?{" "}
                        <a className="text-danger ">
                          <Link to="/UserSignUp"> Register </Link>
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;

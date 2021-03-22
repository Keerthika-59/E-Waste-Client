import React, { useState,useEffect } from 'react'
import { Alert, Modal, Button } from 'react-bootstrap';
import APIHelper from '../API/apihelper2';
import '../Registration/style.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
// import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Representative registration successful!',{position: toast.POSITION.TOP_RIGHT}, {autoClose:5000});
const notify1 = () => toast.error('Error in Representative registration !',{position: toast.POSITION.TOP_RIGHT}, {autoClose:5000});
const phoneRegExp = /^[0-9]{10}$/g;
const nameRegExp = /^[a-zA-Z ]{2,30}$/;

const RepresenativeRegister = () => {
    
    useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  return (

    <Formik
      initialValues={{
        name: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        city: '',
        address: '',
        gender: ''
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {

        const data = {
          name: values.name,
          phoneNumber: values.mobileNumber,
          email: values.email,
          gender: values.gender,
          city: values.city,
          address: values.address,
          password: values.password,
        };
        try {

          await APIHelper.registerUsers(data);
          resetForm({});
          setTimeout(() => {
            //   alert("Form Submitted");
            notify();
            setSubmitting(false);
          }, 1000);
        } catch (err) {
          // alert(err.response.data.errorMessage);
          notify1();
        }

      }}

      validationSchema={Yup.object({
        name: Yup.string()
          .required('Name is required')
          .matches(nameRegExp, 'Name is not Valid'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),

        password: Yup.string()
          .required('Password is Required')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .max(16, 'Password is too long - should be 16 chars maximum.')
          .matches(/(?=.*[0-9])/, "Password must contain a number."),

        confirmPassword: Yup.string()
          .required('Confirm Password is Required')
          .min(8, 'Password is too short - should be 8 chars minimum.')
          .max(16, 'Password is too long - should be 16 chars maximum.')
          .oneOf([Yup.ref('password'), 'Password not matching...']),

        mobileNumber: Yup.string()
          .matches(phoneRegExp, 'Mobile Number is not Valid')
          .min(10, "Too short")
          .max(10, "Too long"),

        gender: Yup.string()
          .required('Gender is required'),

        city: Yup.string()
          .required('City Name is required'),

        address: Yup.string()
          .required('Address is Required')

      })}

    >

      { (formik, values, isSubmitting, resetForm) => (

        <Form>
          <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
              <div className="row d-flex">
                <div className="col-lg-6">
                  <div className="card1 pb-5">

                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={`${process.env.PUBLIC_URL}/images/picture.jpg`} alt="image" className="image" /> </div>
                  </div>
                </div>

                <div className="col-lg-6">

                  <div className="card2 card border-0 px-4 py-5">

                    <div className="row mb-4 px-3">
                      <h3 className="heading">Representative Sign Up</h3>
                    </div>

                    <div className="row px-3"> <label className="mb-1">
                      <h6 className="mb-0 text-sm">Name</h6>
                    </label>

                      <Field name="name" placeholder="Enter your Name" className={(formik.touched.name && formik.errors.name) ? 'form-control is-invalid' : 'form-control'} type="name" />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                      ) : null}

                    </div>
                    <br></br>
                    <div className="row px-3">
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Phone number</h6>
                      </label>

                      <Field name="mobileNumber" placeholder="Enter your Mobile Number" className={(formik.touched.mobileNumber && formik.errors.mobileNumber) ? 'form-control is-invalid' : 'form-control'} type="text" />
                      {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                        <div className="invalid-feedback">{formik.errors.mobileNumber}</div>
                      ) : null}

                    </div>
                    <br />
                    <div className="row px-3">

                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Email Address</h6>
                      </label>

                      <Field name="email" placeholder="Enter your Email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                      ) : null}

                    </div>
                    <br />

                    <div>  <h6 className="mb-0 text-sm">Id Proof</h6>
                      <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        name="photo"
                      // onChange={handlePhoto}
                      />
                    </div>
                    <br />


                    <div className="row px-3">
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm"> Password</h6>

                      </label>
                      <Field name="password" placeholder="Enter your Password" className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="invalid-feedback">{formik.errors.password}</div>
                      ) : null}

                    </div>

                    <br />
                    <div className="row px-3">

                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">Confirm Password</h6>
                      </label>

                      <Field name="confirmPassword" placeholder="Enter your Confirm Password" className={(formik.touched.password && formik.errors.password) ? 'form-control is-invalid' : 'form-control'} type="password" />
                      {formik.touched.password && formik.errors.confirmPassword ? (
                        <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                      ) : null}

                      {
                        formik.values.password && formik.values.confirmPassword ? (
                          formik.values.password !== formik.values.confirmPassword ?
                            (<p style={{ color: 'red' }}> Password does not match </p>) : (<p style={{ color: 'green' }} > Password Matched  </p>)
                        ) : ''
                      }

                    </div>
                    <br />
                    <p>
                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Gender</h6>
                        </label>
                        <div role="group" aria-labelledby="my-radio-group">
                          <label className="px-3">
                          <br/>
                            <Field type="radio" name="gender" value="Male" /> Male
                                                        </label>
                          <label className="px-3">
                            <Field type="radio" name="gender" value="Female"/> Female
                          </label>

                          <label className="px-3">
                            <Field type="radio" name="gender" value="Others" /> Others
                                                    </label>
                        </div>
                      </div>
                      <br />

                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">City</h6>
                        </label>

                        <Field name="city" placeholder="Enter your City" className={(formik.touched.city && formik.errors.city) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        {formik.touched.city && formik.errors.city ? (
                          <div className="invalid-feedback">{formik.errors.city}</div>
                        ) : null}

                      </div>
                      <br />

                      <div className="row px-3">
                        <label className="mb-1">
                          <h6 className="mb-0 text-sm">Address</h6>
                        </label>

                        <Field name="address" placeholder="Enter your Address" className={(formik.touched.address && formik.errors.address) ? 'form-control is-invalid' : 'form-control'} type="text" />
                        {formik.touched.address && formik.errors.address ? (
                          <div className="invalid-feedback">{formik.errors.address}</div>
                        ) : null}
                      </div>
                      <br />
                      <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Register</button> </div>
                      <ToastContainer limit={1} />
                      <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account?  <Link to="/RepresentativeLogIn"> Login </Link>   </small> </div>

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Form>

      )}

    </Formik>
  )
}

export default RepresenativeRegister;

import React, { useState } from 'react'

import { Form, Button, FormLabel } from 'react-bootstrap';

export const RepForm = () => {
    const setPassword = useState('')
    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <div className="card1 pb-5">
                        
                        <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" alt="image" className="image"/> </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        <div className="row mb-4 px-3">
                            <h3 className="text-center">Representative Sign In</h3>
                        </div>
                        
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Email Address</h6>
                            </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> </div>
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Password</h6>
                            </label> <input type="password" name="password" placeholder="Enter password"/> </div>
                        <div className="row px-3 mb-4">
                            <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label  className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                        </div>
                        <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Login</button> </div>
                            <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a className="text-danger "> <Link to="/RepresentativeSignUp"> Register </Link> </a></small> </div>
                    </div>
                </div>
            </div>

            <Button disabled={false} type="submit"
                className=" my-4 btn-primary btn-lg btn-block"
            > Submit
            </Button>
        </Form>
    )
}

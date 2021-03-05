import React, { useState } from 'react'
import { Form, Button, FormLabel } from 'react-bootstrap';

const UserRegister = () => {

    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    return (
        <Form className="w-75 mx-auto">
            <h3 className="py-2 px-2"> User Registeration</h3>

            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="form-group">
                        <FormLabel>Name <em style={{ color: 'red' }}> * </em>  </FormLabel>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            required={true}
                        />
                    </div>

                    <div className="form-group">
                        <FormLabel>Phone Number <em style={{ color: 'red' }}> * </em>  </FormLabel>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Mobile Number"
                            required={true}
                            maxLength={10}
                        />
                    </div>


                    <div className="form-group">
                        <FormLabel>Email <em style={{ color: 'red' }}> * </em>  </FormLabel>

                        <input type="email"
                            className="form-control"
                            placeholder="Enter email"
                            required={true}
                        />

                    </div>

                    <div className="form-group px">
                        <FormLabel> Gender <em style={{ color: 'red' }}> * </em>  </FormLabel>
                        <Form.Control as="select">
                            <option value='Male'> Male </option>
                            <option value='Female' > Female </option>
                            <option value='others'> Others </option>
                        </Form.Control>
                    </div>
                    
                </div>

                <div className="col-md-6 col-sm-6 col-xs-12">

                    <div className="form-group">
                        <FormLabel>City <em style={{ color: 'red' }}> * </em>  </FormLabel>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter City"
                            required={true}
                        />
                    </div>

                    <div className="form-group">
                        <FormLabel> Address <em style={{ color: 'red' }}> * </em>  </FormLabel>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Building/Apartment"
                            required={true}
                        />
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <FormLabel> LandMark </FormLabel>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Enter Landmark"
                                />
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group">
                                <FormLabel> Pin Code <em style={{ color: 'red' }}> * </em>  </FormLabel>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Enter Pin Code"
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>



                    <div className="form-group">
                        <FormLabel>Password <em style={{ color: 'red' }}> * </em> </FormLabel>
                        <input
                            type="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="form-control"
                            placeholder="Enter password"
                            required={true}
                        />
                    </div>
                    
                    <div className="form-group">
                        <FormLabel>Confirm Password <em style={{ color: 'red' }}> * </em> </FormLabel>
                        <input onChange={(e) => { setCPassword(e.target.value) }}
                            type="password"
                            className="form-control"
                            placeholder="Enter confirm password"
                            required={true}
                        />
                        <p>
                            {password.length > 0 && cpassword.length > 0 ? (password === cpassword ? 'Password Matched☑️' : 'Password Not Matched yet') : ''}
                        </p>
                    </div>

                </div>
            </div>

            <Button disabled={false} type="submit"
                className=" my-4 btn-primary btn-lg btn-block"
            > Register
            </Button>
        </Form>
    )
}

export default UserRegister

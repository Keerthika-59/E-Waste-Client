import React, {useState} from 'react'

import '../Registration/style.css';

const RepresenativeRegister = () => {

    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    
    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <div className="card1 pb-5">
                        
                        <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={`${process.env.PUBLIC_URL}/images/picture.jpg`} alt="image" className="image"/> </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        <div className="row mb-4 px-3">
                            <h3 className="heading">Representative Sign Up</h3>
                        </div>
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Name</h6>
                            </label> <input className="mb-4" type="text" name="text" placeholder="Enter a valid name"/> </div>
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Phone number</h6>
                            </label> <input className="mb-4" type="text" name="text" placeholder="Enter a valid phone number"/> </div>
                        
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Email Address</h6>
                            </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> </div>
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm"> Password</h6>
                            </label> <input type="password" name="password" placeholder="Enter password " onChange={(e) => { setPassword(e.target.value) }}/> </div> <br/>
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Confirm Password</h6>
                            </label> <input type="password" name="password" placeholder="Enter password again" onChange={(e) => { setCPassword(e.target.value) }}/> </div>
                        <br/>
                        <p>
                             {password.length > 0 && cpassword.length > 0 ? (password === cpassword ? 'Password Matched☑️' : 'Password Not Matched yet') : ''}                       </p> 
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Gender</h6>
                         </label> 
                         <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                        <label class="custom-control-label" for="defaultUnchecked">Male</label>
                        </div>

                        
                        <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" />
                        <label class="custom-control-label" for="defaultChecked">Female</label>
                        </div>

                        <div class="custom-control custom-radio">
                        <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios" />
                        <label class="custom-control-label" for="defaultChecked">Others</label>
                        </div>
                             {/*<select name="gender">
                                <option>Select your gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select> */}
                        </div> <br/>
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">City</h6>
                            </label> <input className="mb-4" type="text" name="city" placeholder="Enter a city name"/> </div>
                        <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Address</h6>
                            </label> <textarea className="mb-4" type="textarea" name="address" placeholder="Enter a valid address"/> </div>
                            <div className="row px-3"> 
                            <label className="mb-1"><h6 className="mb-0 text-sm">Upload file</h6></label>
                            <input type="file" className="mb-4" /> </div> <br/>
                            <div className="row mb-3 px-3"> <button type="submit" className="btn btn-blue text-center">Register</button> </div>
                        <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <a className="text-danger ">Login</a></small> </div>
                 
                        </div>
                        </div>
                </div>
            </div>
       </div>
        )
    }

//     return (
//             <Form className = "w-75 mx-auto">
//                 <h3 className="py-2 px-2">Representative Registeration</h3>
                
//             <div className="row">

//                 <div className="col-md-6 col-sm-6 col-xs-12">
//                     <div className="form-group">
//                         <FormLabel>Name <em style={{ color: 'red' }}> * </em>  </FormLabel>
//                         <input type="text"
//                             className="form-control"
//                             placeholder="Enter Name"
//                             required={true}
//                         />
//                     </div>

//                     <div className="form-group">
//                         <FormLabel>Phone Number <em style={{ color: 'red' }}> * </em>  </FormLabel>
//                         <input type="text"
//                             className="form-control"
//                             placeholder="Enter Mobile Number"
//                             required={true}
//                             maxLength = {10}
//                         />
//                     </div>


//                     <div className="form-group">
//                         <FormLabel>Email <em style={{ color: 'red' }}> * </em>  </FormLabel>
                        
//                         <input type="email"
//                             className="form-control"
//                             placeholder="Enter email"
//                             required={true}
//                         />

//                     </div>

//                     <div className="form-group px">
//                         <FormLabel> Gender <em style={{ color: 'red' }}> * </em>  </FormLabel>
//                         <Form.Control as="select">
//                             <option value = 'Male'> Male </option>
//                             <option value='Female' > Female </option>
//                             <option value='others'> Others </option>
//                         </Form.Control>
//                     </div>


//                     <div className="form-group">
//                         <FormLabel> Upload Identity Proof <em style={{ color: 'red' }}> * </em> </FormLabel>
//                         <input type="file"
//                             className="form-control"
//                             placeholder="Enter Pin Code"
//                             required={true}
//                         />
//                     </div>
//                 </div>

//                 <div className="col-md-6 col-sm-6 col-xs-12">

//                     <div className="form-group">
//                         <FormLabel>City <em style={{ color: 'red' }}> * </em>  </FormLabel>
//                         <input type="text"
//                             className="form-control"
//                             placeholder="Enter City"
//                             required={true}
//                         />
//                     </div>

//                     <div className="form-group">
//                         <FormLabel>Building Name <em style={{ color: 'red' }}> * </em>  </FormLabel>
//                         <input type="text"
//                             className="form-control"
//                             placeholder="Enter Building/Apartment"
//                             required={true}
//                         />
//                     </div>
                   

//                    <div className="row">
                        
//                         <div className="col">
//                             <div className="form-group">
//                                 <FormLabel> LandMark </FormLabel>
//                                 <input type="text"
//                                     className="form-control"
//                                     placeholder="Enter Landmark"
//                                 />
//                             </div>
//                         </div>

//                         <div className = "col">
//                             <div className="form-group">
//                                 <FormLabel> Pin Code <em style={{ color: 'red' }}> * </em>  </FormLabel>
//                                 <input type="text"
//                                     className="form-control"
//                                     placeholder="Enter Pin Code"
//                                     required={true}
//                                 />
//                             </div>
//                         </div>
//                    </div>

                   

//                     <div className="form-group">
//                         <FormLabel>Password <em style={{ color: 'red' }}> * </em> </FormLabel>
//                         <input
//                             type="password"
//                             onChange={(e) => { setPassword(e.target.value) }}
//                             className="form-control"
//                             placeholder="Enter password"
//                             required={true}
//                         />
//                     </div>
                    

//                     <div className="form-group">
//                         <FormLabel>Confirm Password <em style={{ color: 'red' }}> * </em> </FormLabel>
//                         <input onChange={(e) => { setCPassword(e.target.value) }}
//                             type="password"
//                             className="form-control"
//                             placeholder="Enter confirm password"
//                             required={true}
//                         />
//                         <p>
//                             {password.length > 0 && cpassword.length > 0 ? (password === cpassword ? 'Password Matched☑️' : 'Password Not Matched yet') : ''}
//                         </p>
//                     </div>

//                     </div>
//                 </div>

//                 <Button disabled = {false} type="submit"
//                     className=" my-4 btn-primary btn-lg btn-block"
//                 > Register
//             </Button>
//             </Form>
//     )
// }

export default RepresenativeRegister;

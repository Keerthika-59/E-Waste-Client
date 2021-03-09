import React from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function SignUpOptions() {
  return (
    <>
    <h3 style={{marginTop:"10%",marginBottom:"10%"}}>Please choose a Sign Up option</h3>
    <Link to='/UserSignUp'><Button style={{marginTop:"10%",width:"300px"}}>User Sing Up</Button></Link>
    <Link to='/RepresentativeSignUp'><Button style={{marginTop:"10%",width:"300px"}}>Representative Sign Up</Button></Link>
    </>
  );
}

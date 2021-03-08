import React from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function LoginOptions() {
  return (
    <>
    <h3 style={{marginTop:"10%",marginBottom:"10%"}}>Please choose a login option</h3>
    <Link to='/UserLogIn'><Button style={{marginTop:"10%",width:"300px"}}>User Login</Button></Link>
    <Link to='/RepresentativeLogIn'><Button style={{marginTop:"10%",width:"300px"}}>Representative Login</Button></Link>
    </>
  );
}

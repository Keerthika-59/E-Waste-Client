import {React,useEffect} from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function LoginOptions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <h3 style={{marginTop:"10%",marginBottom:"10%",marginLeft:"6%"}}>Please choose a login option</h3>
    <Link to='/UserLogIn'><Button style={{marginTop:"10%",marginLeft:"8%",width:"300px"}}>User Login</Button></Link><br></br>
    <Link to='/RepresentativeLogIn'><Button style={{marginTop:"10%",marginLeft:"8%",width:"300px"}}>Representative Login</Button></Link>
    </>
  );
}

import React,{useContext} from 'react'
import { Redirect } from "react-router";
import AuthApi from "../../../authAPI";

function RepDashboard(){

    const Auth = useContext(AuthApi)

    return(
        Auth.auth ?(
            <>
            <div>Representative</div>
            </>
            ):(<Redirect to='/RepresentativeLogIn' />)
    )
}

export default RepDashboard;

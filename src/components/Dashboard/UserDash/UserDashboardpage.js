import React,{useContext} from 'react'
import { Redirect } from "react-router";
import AuthApi from "../../../authAPI";
import Activity from './pages/activity';
function UserDashboard() {
    
    const Auth = useContext(AuthApi)
    
        return (
            (Auth.auth) ? (
            <>
                <Activity />
            </>):(<Redirect to='/UserLogIn' />)
        )
    }

    export default UserDashboard;
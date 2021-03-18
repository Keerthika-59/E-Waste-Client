import React,{useContext} from 'react'
import UserActivity from './UserActivity'
import { Redirect } from "react-router";
import AuthApi from "../../../authAPI";
function UserDashboard() {

    const Auth = useContext(AuthApi)

        return (
            Auth.auth ?(
            <>
                {/* <Usericon/> */}
                <UserActivity />
            </>):(<Redirect to='/UserLogIn' />)
        )
    }

    export default UserDashboard;
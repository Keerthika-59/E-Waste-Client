import React from 'react'
import Data from '../dummydata'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from '../Pages/AboutUs/AboutUs'
import { InputForm } from '../Contact/InputForm'
import RepresenativeRegister from '../Registration/RepresenativeRegister'
import UserRegister from '../Registration/UserRegister'
import { RepForm } from '../Login/representativeLogin'
import { UserForm } from '../Login/userLogin'
import LoginOptions from '../Pages/LoginPages'
import SignUpOptions from '../Pages/SignUpPages'
import Achievements from '../Pages/AboutUs/AchievementPage'
import Goals from '../Pages/AboutUs/Goals'
import Services from '../Pages/AboutUs/Services'
import Gallery from '../Pages/Gallery/Gallery'
import '../Pages/Gallery/Gallery.css'

function Navigator() {
    return (
        <>
            <Switch>
                <Route path='/Gallery' component={Gallery} />
                <Route path='/AboutUs' component={AboutUs} />
                <Route path='/ContactUs' component={InputForm} />
                <Route path='/UserSignUp' component={UserRegister} />
                <Route path='/RepresentativeSignUp' component={RepresenativeRegister} />
                <Route path='/UserLogIn' component={UserForm} />
                <Route path='/RepresentativeLogIn' component={RepForm} />
                <Route path='/SignUp' component={SignUpOptions} />
                <Route path='/LogIn' component={LoginOptions} />
                <Route path='/Services' component={Services} />
                <Route path='/Goals' component={Goals} />
                <Route path='/Achievements' component={Achievements} />
                <Route path='/OurTeam' component={Data} />
            </Switch>
        </>
    )

}

export default Navigator;
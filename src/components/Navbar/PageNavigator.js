import React from 'react'
import { Route, Switch } from "react-router-dom";
import AboutUs from '../Pages/AboutUs/AboutUs'
import { InputForm } from '../Contact/InputForm'
import RepresenativeRegister from '../Registration/RepresentativeRegister'
import UserRegister from '../Registration/UserRegister'
import { RepForm } from '../Login/representativeLogin'
import { UserForm } from '../Login/userLogin'
import LoginOptions from '../Pages/LoginPages'
import SignUpOptions from '../Pages/SignUpPages'
import Achievements from '../Pages/AboutUs/AchievementPage'
import Goals from '../Pages/AboutUs/Goals'
import Services from '../Pages/AboutUs/Services'
import Gallery from '../Pages/Gallery/Gallery'
import Team from '../OurTeam/Team'
import Testimonials from '../Testimonials/Testimonials'
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
                <Route path='/SignUpoptions' component={SignUpOptions} />
                <Route path='/LogInoptions' component={LoginOptions} />
                <Route path='/Services' component={Services} />
                <Route path='/Goals' component={Goals} />
                <Route path='/Achievements' component={Achievements} />
                <Route path='/OurTeam' component={Team} />
                <Route path='/Testimonials' component={Testimonials} />
            </Switch>
        </>
    )

}

export default Navigator;
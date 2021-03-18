import React from 'react'
import { Route, Switch } from "react-router-dom";
import AboutUs from '../Pages/AboutUs/AboutUs'
import { InputForm } from '../Contact/InputForm'
import RepresenativeRegister from '../Registration/RepresenativeRegister.jsx'
import UserRegister from '../Registration/UserRegister.jsx'
import { RepForm } from '../Login/representativeLogin'
import UserForm from '../Login/userLogin'

import LoginOptions from '../Pages/LoginPages'
import SignUpOptions from '../Pages/SignUpPages'
import Achievements from '../Pages/AboutUs/AchievementPage'
import Goals from '../Pages/AboutUs/Goals'
import Services from '../Pages/AboutUs/Services'
import Gallery from '../Pages/Gallery/Gallery'
import Team from '../OurTeam/Team'
import Testimonials from '../Testimonials/Testimonials'
import UserDashboard from '../Dashboard/UserDash/UserSidebar'
import RepDashboard from '../Dashboard/RepDash/RepDashboardpage'
// import Activity from '../Dashboard/UserDash/pages/activity';
// import Pending from '../Dashboard/UserDash/pages/pending';
// import Completed from '../Dashboard/UserDash/pages/completed';

function Navigator() {
    return (
        <>
            <Switch>
                <Route exact path='/Gallery' component={Gallery} />
                <Route exact path='/AboutUs' component={AboutUs} />
                <Route exact path='/ContactUs' component={InputForm} />
                <Route exact path='/UserSignUp' component={UserRegister} />
                <Route exact path='/RepresentativeSignUp' component={RepresenativeRegister} />
                <Route exact path='/UserLogIn' component={UserForm} />
                <Route exact path='/RepresentativeLogIn' component={RepForm} />
                <Route exact path='/SignUpoptions' component={SignUpOptions} />
                <Route exact path='/LogInoptions' component={LoginOptions} />
                <Route exact path='/Services' component={Services} />
                <Route exact path='/Goals' component={Goals} />
                <Route exact path='/Achievements' component={Achievements} />
                <Route exact path='/OurTeam' component={Team} />
                <Route exact path='/Testimonials' component={Testimonials} />
                <Route exact path='/UserDash' component={UserDashboard } />
                <Route exact path='/RepDash' component={RepDashboard } />
                {/* <Route path='/activity' exact component={Activity} />
                <Route path='/pending' exact component={Pending} />
                <Route path='/completed' exact component={Completed} /> */}
            </Switch>
        </>
    )

}

export default Navigator;
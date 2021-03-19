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
import Services from '../Pages/Services/Services'
import Gallery from '../Pages/Gallery/Gallery'
import Team from '../OurTeam/Team'
import Testimonials from '../Testimonials/Testimonials'
import UserDashboard from '../Dashboard/UserDash/UserSidebar'
import RepDashboard from '../Dashboard/RepDash/RepDashboardpage'
import ManageUsers from '../Admin/DashboardPages/ManageUsers'
import ManageRepresentatives  from '../Admin/DashboardPages/ManageRepresentatives'
import ManageMessages  from '../Admin/DashboardPages/ManageMessages'
import MyProfile from '../Dashboard/UserDash/pages/Profile/userProfile'
import Ewaste from '../HomePage/Information/Ewaste'
import Disposing from '../HomePage/Information/Dispose'
import Donating from '../HomePage/Information/Donate'
import RepProfile from '../Dashboard/RepDash/Profile/repProfile'
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
                <Route exact path='/DisplayUsers' component={ManageUsers } />
                <Route exact path='/DisplayReps' component={ManageRepresentatives} />
                <Route exact path='/DisplayMessages' component={ManageMessages} />
                <Route exact path='/MyProfile' component={MyProfile} />
                <Route exact path='/Ewaste' component={Ewaste} />
                <Route exact path='/Disposing' component={Disposing} />
                <Route exact path='/Donating' component={Donating} />
                <Route exact path='/RepProfile' component={RepProfile} />

            </Switch>
        </> 
    )

}

export default Navigator;

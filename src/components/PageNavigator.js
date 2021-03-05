import React from 'react'
import Data from './dummydata'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import AboutUs from './Pages/AboutUs'


function Navigator(){
return(
    <>
    <Switch>
          <Route path='/Gallery' component={Data} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/ContactUs' component={Data} />
          <Route path='/SignUp' component={Data} />
          <Route path='/LogIn' component={Data} />
          <Route path='/Data1' component={Data} />
          <Route path='/Data2' component={Data} />
          <Route path='/Data3' component={Data} />
          <Route path='/Data4' component={Data} />
        </Switch>
    </>
)

}

export default Navigator;
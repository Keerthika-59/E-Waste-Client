import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SideBar from './SideBar';

const AdminPageNavigator = () => {
    return (
        <>
          <Switch>
            <Route  path = "/admin" component = {SideBar}/>
          </Switch>
        </>
    )
}

export default AdminPageNavigator

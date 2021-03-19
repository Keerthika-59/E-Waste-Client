import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SideBar from './SideBar';
import ManageUsers from '../Admin/DashboardPages/ManageUsers'
import ManageRepresentatives from '../Admin/DashboardPages/ManageRepresentatives'
import ManageMessages from '../Admin/DashboardPages/ManageMessages'

const AdminPageNavigator = () => {
    return (
        <>
          <Switch>
          <Route path="/admin" component={SideBar} />
          <Route exact path='/view/users' component={ManageUsers} />
          <Route exact path='/view/reps' component={ManageRepresentatives} />
          <Route exact path='/view/messages' component={ManageMessages} />

          </Switch>
        </>
    )
}

export default AdminPageNavigator

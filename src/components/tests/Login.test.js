import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserForm from '../Login/userLogin';
import RepForm from '../Login/representativeLogin.js'
import AdminLogin from '../Login/Admin/AdminLogin'

test('renders test NavBar', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<UserForm/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test NavBars', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<RepForm/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test NavBar2', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<AdminLogin/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutUs from '../Pages/AboutUs/AboutUs';
import Achievements from '../Pages/Achievements/Achievements.jsx'
import Gallery from '../Pages/Gallery/Gallery'
import Goals from '../Pages/Goals/Goals.jsx'
import Services from '../Pages/Services/Services.jsx'
import Home from '../Pages/Home.js'
import Homepage from '../Pages/Homepage'
import LoginOptions from '../Pages/LoginPages'
import SignUpOptions from '../Pages/SignUpPages'
test('renders test AboutUs', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<AboutUs/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test Achievements', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Achievements/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test Gallery', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Gallery/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test Goals', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Goals/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
   test('renders test Services', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Services/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test Home', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Home/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test Homepage', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Homepage/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
   test('renders test LoginOptions', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<LoginOptions/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test SignUpOptions', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<SignUpOptions/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
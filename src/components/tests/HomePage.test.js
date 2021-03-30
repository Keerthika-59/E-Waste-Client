import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Data from '../HomePage/Information/Data';
import Dispose from '../HomePage/Information/Dispose.jsx'
import Donate from '../HomePage/Information/Donate.jsx'
import Ewaste from '../HomePage/Information/Ewaste.jsx'
import Information from '../HomePage/Information/Information'

   test('renders test Dispose', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Dispose/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test Donate', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Donate/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test Ewaste', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Ewaste/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   test('renders test Information', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Information/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
   
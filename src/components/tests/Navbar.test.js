import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
// import Navigator from '../Navbar/PageNavigator';

test('renders test NavBar', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Navbar/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });

   
// test('renders test admin home', () => {
//     const div=document.createElement("div");
//     <Route>
//         ReactDom.render(<Navigator/>,div);
//     </Route>
//     ReactDOM.unmountComponentAtNode(div);
//    });
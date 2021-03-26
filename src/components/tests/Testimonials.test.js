import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Testimonials from '../Testimonials/Testimonials';

test('renders testimonials', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Testimonials/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
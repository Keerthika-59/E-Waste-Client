import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'
import Cards from '../Cards/Card';

test('renders cards', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<Cards/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
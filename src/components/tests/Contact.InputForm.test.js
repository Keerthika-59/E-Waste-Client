import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom'
import { InputForm } from '../Contact/InputForm';

test('renders contact form', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<InputForm/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from '../Pages/Gallery/Gallery';

test('Renders Gallery Page', ()=> {
    const div = document.createElement("div");
    <Route>
        ReactDom.render(<Gallery/> ,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
})
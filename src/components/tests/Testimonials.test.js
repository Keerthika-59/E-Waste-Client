import React from 'react';
import { shallow } from 'enzyme';
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
   test('should test Testimonials component', () => {
    const wrapper = shallow(<Testimonials />);
    expect(wrapper).toMatchSnapshot();
   });
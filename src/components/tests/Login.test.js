import React from 'react';
import { shallow } from 'enzyme';
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
   test('should test UserForm component', () => {
    const wrapper = shallow(<UserForm />);
    expect(wrapper).toMatchSnapshot();
   });

   test('renders test NavBars', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<RepForm/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
   test('should test RepForm component', () => {
    const wrapper = shallow(<RepForm />);
    expect(wrapper).toMatchSnapshot();
   });

   test('renders test NavBar2', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<AdminLogin/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
   test('should test AdminLogin component', () => {
    const wrapper = shallow(<AdminLogin />);
    expect(wrapper).toMatchSnapshot();
   });
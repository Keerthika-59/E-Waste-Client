import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserRegister from '../Registration/UserRegister';
import RepresenativeRegister from '../Registration/RepresenativeRegister';

test('renders test NavBar', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<UserRegister/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
   test('should test UserRegister component', () => {
    const wrapper = shallow(<UserRegister />);
    expect(wrapper).toMatchSnapshot();
   });

   
test('renders test admin home', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<RepresenativeRegister/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
   test('should test RepresenativeRegister component', () => {
    const wrapper = shallow(<RepresenativeRegister />);
    expect(wrapper).toMatchSnapshot();
   });
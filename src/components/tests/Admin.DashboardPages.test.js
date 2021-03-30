import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,} from 'react-router-dom'
import ManageMessagaes from '../Admin/DashboardPages/ManageMessages'
import ManageUsers from '../Admin/DashboardPages/ManageUsers';
import PaginationPage from '../Admin/DashboardPages/PaginationPage';

test('renders ManageMessagaes', () => {
    const div=document.createElement("div");
    <Route>
        ReactDom.render(<ManageMessagaes/>,div);
    </Route>
    ReactDOM.unmountComponentAtNode(div);
   });
   test('should test ManageUsers component', () => {
    const wrapper = shallow(<ManageUsers />);
    expect(wrapper).toMatchSnapshot();
   });
   test('should test PaginationPage component', () => {
    const wrapper = shallow(<PaginationPage />);
    expect(wrapper).toMatchSnapshot();
   });
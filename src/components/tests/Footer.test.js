import React from "react";
import { shallow } from 'enzyme';
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import Footer from "../Footer/Footer";

test("renders footer", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <Footer />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
  test('should test Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
   });
import React from "react";
import { shallow } from 'enzyme';
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import PageNotFound from "../404/PageNotFound";

test("renders page not found", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <PageNotFound />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
  test('should test PageNotFound component', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
   });
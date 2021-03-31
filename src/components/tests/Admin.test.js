import React from "react";
import { shallow } from 'enzyme';
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import AdminCompletedActivities from "../Admin/AdminCompletedActivities";
import AdminPendingActivities from "../Admin/AdminPendingActivities";
import RepCompletedActivities from "../Admin/RepCompletedActivities";
import SideBar from "../Admin/SideBar";
import TableMessages from "../Admin/TableMessages";
import TableRepresentatives from "../Admin/TableRepresentatives";
import TableUsers from "../Admin/TableUsers";
import TableVerifiedRep from "../Admin/TableVerifiedRep";
import UserCompletedActivities from "../Admin/UserCompletedActivities";

test("renders all completed activities", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <AdminCompletedActivities />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test AdminCompletedActivities component', () => {
  const wrapper = shallow(<AdminCompletedActivities />);
  expect(wrapper).toMatchSnapshot();
 });
test("renders all pending activities", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <AdminPendingActivities />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test AdminPendingActivities component', () => {
  const wrapper = shallow(<AdminPendingActivities />);
  expect(wrapper).toMatchSnapshot();
 });
test("renders representative completed activities", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <RepCompletedActivities />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test RepCompletedActivities component', () => {
  const wrapper = shallow(<RepCompletedActivities />);
  expect(wrapper).toMatchSnapshot();
 });

test("renders sidebar", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <SideBar />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test SideBar component', () => {
  const wrapper = shallow(<SideBar />);
  expect(wrapper).toMatchSnapshot();
 });
test("renders table messages", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <TableMessages />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test TableMessages component', () => {
  const wrapper = shallow(<TableMessages />);
  expect(wrapper).toMatchSnapshot();
 });
test("renders representatives", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <TableRepresentatives />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test TableRepresentatives component', () => {
  const wrapper = shallow(<TableRepresentatives />);
  expect(wrapper).toMatchSnapshot();
 });
test("renders users", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <TableUsers />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test TableUsers component', () => {
  const wrapper = shallow(<TableUsers />);
  expect(wrapper).toMatchSnapshot();
 });
test("renders verified representatives", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <TableVerifiedRep />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test TableVerifiedRep component', () => {
  const wrapper = shallow(<TableVerifiedRep />);
  expect(wrapper).toMatchSnapshot();
 });
test("renders suser completed activities", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <UserCompletedActivities />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
});
test('should test UserCompletedActivities component', () => {
  const wrapper = shallow(<UserCompletedActivities />);
  expect(wrapper).toMatchSnapshot();
 });

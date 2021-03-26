import React from "react";
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
test("renders all pending activities", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <AdminPendingActivities />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
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

test("renders sidebar", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <SideBar />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
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
test("renders representatives", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <TableRepresentatives />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
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
test("renders verified representatives", () => {
  const div = document.createElement("div");
  <Route>
    ReactDom.render(
    <TableVerifiedRep />
    ,div);
  </Route>;
  ReactDOM.unmountComponentAtNode(div);
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

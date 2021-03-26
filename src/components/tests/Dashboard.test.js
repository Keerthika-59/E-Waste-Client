import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import Completed from "../Dashboard/RepDash/pages/repCompleted";
import Activity from "../Dashboard/UserDash/pages/activity";
import UserCompletedActivities from "../Dashboard/UserDash/pages/completed";
import Pending from "../Dashboard/UserDash/pages/pending";
import UserProfile from "../Dashboard/UserDash/pages/Profile/userProfile";
import UserDashboard from "../Dashboard/UserDash/UserDashboardpage";
import UserDash from "../Dashboard/UserDash/Usericon";
import Navbar from "../Dashboard/UserDash/UserSidebar";
import PendingR from "../Dashboard/RepDash/pages/repPending"
import RepProfile from "../Dashboard/RepDash/Profile/repProfile";
import RepNavbar from "../Dashboard/RepDash/RepSidebar";
import RepDashboard from "../Dashboard/RepDash/RepDashboardpage";

test("renders representative dashboard", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <RepDashboard />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders representative sidebar", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <RepNavbar />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders representative profile", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <RepProfile />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders representative Pending activities", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <PendingR />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders representative's completed activities", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <Completed />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders User sidebar", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <Navbar />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders User Navbar", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <UserDash />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders User Dashboard", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <UserDashboard />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders user Pending activities", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <Pending />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders user completed activities", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <UserCompletedActivities />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders user profile", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <UserProfile />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
test("renders create user activity", () => {
    const div = document.createElement("div");
    <Route>
      ReactDom.render(
      <Activity />
      ,div);
    </Route>;
    ReactDOM.unmountComponentAtNode(div);
  });
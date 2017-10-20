import React from "react";
import { Redirect, Route, Router } from "react-router-dom";

// React Component
import asyncComponent from "./components/AsyncComponent";

const AsyncMainChat = asyncComponent(() =>
  import("./pages/Mainchat/Mainchat.jsx")
);

const AsyncLogin = asyncComponent(() => import("./pages/Login/Login.jsx"));

/* Use components to define routes */
export default () => [
  <Route key="/" exact path="/" render={() => <Redirect to="/chat/main" />} />,
  <Route
    key="/chat/main"
    path="/chat/main"
    render={({ location }) => <AsyncMainChat location={location} />}
  />,
  <Route
    key="/login"
    exact
    path="/login"
    render={({ location }) => <AsyncLogin location={location} />}
  />
];

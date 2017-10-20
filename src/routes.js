import React from "react";
import { Redirect, Route, Router } from "react-router-dom";

// React Component
import asyncComponent from "./components/AsyncComponent";

const AsyncHomepage = asyncComponent(() =>
  import("./pages/Mainchat/Mainchat.jsx")
);

/* Use components to define routes */
export default () => [
  <Route key="/" exact path="/" render={() => <Redirect to="/chat/main" />} />,
  <Route
    key="/chat/main"
    exact
    path="/chat/main"
    render={() => <AsyncHomepage />}
  />
];

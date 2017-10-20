import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
// import Homepage from './pages/Homepage/Homepage.jsx'
// React Component
import asyncComponent from "./components/AsyncComponent";

const history = createBrowserHistory();

const AsyncHomepage = asyncComponent(() =>
  import("./pages/Homepage/Homepage.jsx")
);

/* Use components to define routes */
export default () => (
  <Router history={history}>
    <Route exact path="/" render={() => <AsyncHomepage />} />
  </Router>
);

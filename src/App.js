import React, { Component } from "react";
import Routes from "./routes";

// Firebase
import "./firebase";

// Redux Stuff
import { Provider } from "react-redux";
import store from "./store.js";

// React-router
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

// Components
import Navbar from "./components/Navbar/Navbar.jsx";

import "./styles/dever-chat-theme.css";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="contain-all">
            <Navbar />
            <div className="page-wrap">
              <Routes />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

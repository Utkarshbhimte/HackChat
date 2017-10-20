import React, { Component } from "react";
import Routes from "./routes";

// Firebase
import "./firebase";

// Redux Stuff
import { Provider } from "react-redux";
import store from "./store.js";

// Components
import Navbar from "./components/Navbar/Navbar.jsx";

import "./styles/dever-chat-theme.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="contain-all">
          <Navbar />
          <div className="page-wrap">
            <Routes />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

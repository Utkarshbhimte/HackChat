import React, { Component } from "react";
import Routes from "./routes";

// Redux Stuff
import { Provider } from "react-redux";
import store from "./store.js";

import "./styles/dever-chat-theme.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;

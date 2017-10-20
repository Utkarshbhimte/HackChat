import { createStore, compose, applyMiddleware } from "redux";

// import root reducer
import rootReducer from "./reducers/index";

// Import Redux Middleware
import thunk from "redux-thunk";

// For the Redux devtools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const user = localStorage.getItem("user_data")
  ? JSON.parse(localStorage.getItem("user_data"))
  : {};

// create a object for deafult state
const defaultState = { user: user || {}, messages: {} };

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, defaultState, enhancers);

// Hot reducer hot reloading
if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;

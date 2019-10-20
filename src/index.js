import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { save, load } from "redux-localstorage-simple";
//
const createStoreWithMiddleware = applyMiddleware(
  save({states:["isTimerRunning","laps", "time", "reset_dis"],})
)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
    load({
        states: ["laps", "time"],
        preloadedState: {laps:[],time:0}
    }),
    composeWithDevTools()
);

export default store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

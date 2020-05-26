import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import counter from "./reducers/count";
import { Provider } from "react-redux";
import App from "./containers/App";

const store = createStore(counter);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

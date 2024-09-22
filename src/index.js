import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navigation from "./router/Navigation";
import store from "./redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Navigation>
      <App />
    </Navigation>
  </Provider>
);

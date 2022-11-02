import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// react router dom
import { BrowserRouter } from "react-router-dom";

// redux provider
import { Provider } from "react-redux";
import { store } from "./redux/store";

// scss global style
import "./theme/_global.scss";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// react toastift
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

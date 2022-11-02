import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// react router dom
import { BrowserRouter } from "react-router-dom";

// scss global style
import "./theme/_global.scss";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

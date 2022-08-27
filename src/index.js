import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootswatch/dist/quartz/bootstrap.min.css";
import "react-popper/dist/index.umd.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

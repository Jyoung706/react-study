import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./AppXY.css";
import AppMentors from "./AppMentors";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppMentors />
  </React.StrictMode>
);

reportWebVitals();

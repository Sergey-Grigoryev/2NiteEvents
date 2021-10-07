import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Demo from "./demo";
import reportWebVitals from "./reportWebVitals";
import { ScheduleComponent } from "@syncfusion/ej2-react-schedule";

// let loggedIn = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ScheduleComponent />
    {/* <Demo /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

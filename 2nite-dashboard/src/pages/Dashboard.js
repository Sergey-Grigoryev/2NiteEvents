//import logo from "./logo.png";
import Calendar from "./pages/Calendar";
//import "./App.css";
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

function Dashboard() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default Dashboard;

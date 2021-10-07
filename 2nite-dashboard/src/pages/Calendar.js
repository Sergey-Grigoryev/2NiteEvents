import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

let eventsDB = [
  {
    title: "event 1",
    start: "2021-10-07T03:00:00.000Z",
    end: "2021-10-07T03:00:00.000Z",
  },
  { title: "event 2", date: "2021-10-06" },
];

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={eventsDB}
        dateClick={this.handleDateClick}
        views={("dayGridMonth", "dayGridWeek", "dayGridDay")}
        headerToolbar={{ center: "dayGridMonth,dayGridWeek,dayGridDay" }}
        eventClick={this.handleEventClick}
      />
    );
  }
  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  handleEventClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

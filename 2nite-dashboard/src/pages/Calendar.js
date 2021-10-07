import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

let eventsDB = [
  // DB Query
];

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        eventStartEditable={true}
        events={eventsDB}
        // dateClick={this.handleDateClick}
        views={("dayGridMonth", "dayGridWeek", "dayGridDay")}
        headerToolbar={{ center: "dayGridMonth,dayGridWeek,dayGridDay" }}
        // eventClick={this.handleDateClick}
      />
    );
  }
  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };
}

<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> e0ba37d98804b8eccb80aaee3cebf969a9c0b33d
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

<<<<<<< HEAD
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
=======
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { render } from "react-dom";
import Form from "react-bootstrap/Form";

let eventsDB = [
  // DB Query
];

const Calendar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal class="position-absolute modal" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add new Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Event Title: </Form.Label>
              <Form.Control type="string" placeholder="Enter start time" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Event Start Time: </Form.Label>
              <Form.Control type="string" placeholder="Enter start time" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Event End Time: </Form.Label>
              <Form.Control type="string" placeholder="Enter start time" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        eventStartEditable={true}
        events={eventsDB}
        dateClick={handleShow}
        views={("dayGridMonth", "dayGridWeek", "dayGridDay")}
        headerToolbar={{ center: "dayGridMonth,dayGridWeek,dayGridDay" }}
        eventClick={handleShow}
      />
    </>
  );
};
// handleDateClick = () => {
//   // bind with an arrow function
//   // function Example() {
//   //   const [show, setShow] = useState(false);
//   //   const handleClose = () => setShow(false);
//   //   const handleShow = () => setShow(true);
//   //   return <></>;
//   // render(<Example />);
// };
// handleEventClick = (arg) => {
//   // bind with an arrow function
//   alert(arg.dateStr);
// };

export default Calendar;
>>>>>>> e0ba37d98804b8eccb80aaee3cebf969a9c0b33d

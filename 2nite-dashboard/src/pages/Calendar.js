import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

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
      {/* {" "} */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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

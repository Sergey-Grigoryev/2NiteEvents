import React from "react";
import Image from "../../assets/images/event.png";

function Welcome() {
  return (
    <section>
      <div className="center" id="welcome">
        <h1 className="page-header">Welcome to 2Nite Events</h1>
      </div>
      <div className="center">
        <img
          src={Image}
          className="photo"
          style={{ width: "800px", height: "300px" }}
          alt="event-concert"
        ></img>
      </div>
      <div>
        <p>
          2Nite Events is your premiere app that allows businesses to post
          events they are hosting and keep track of number of attendees and
          average dollar spent.
          <br />
          <br />
          We are always looking to include new businesses on out platform so
          please feel free to create an account and don't hesitate to reach out
          with any questions or concerns!
          <br />
        </p>
      </div>
    </section>
  );
}

export default Welcome;

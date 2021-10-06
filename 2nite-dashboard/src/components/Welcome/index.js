import React from "react";
import Image from "../../assets/images/event.png";

function Welcome() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="center">
        <img
          src={Image}
          className="photo"
          style={{ width: "300px", height: "300px" }}
          alt="about-me"
        ></img>
      </div>
      <div>
        <p>
          Hi, I"m Jessica (or Jess)! Thank you for taking the time to check out
          my portfolio. I am a newly-minted full stack web developer who loves a
          challenge and learning new things. A bit more about me: I am a
          communications professional with work experience in the legal field,
          an avid reader, lover of running and barre workouts, and am a
          shamelessly obsessed cat mom to a furry sweetheart named Cedar! Long
          story short, I wanted to pivot and make a career change, and here I
          am!
          <br />
          <br />
          Please feel free to click around and check out my work! And if you
          have any comments, questions, or just want to say hi, you can find my
          contact information below! Thank you for being here!
          <br />
        </p>
      </div>
    </section>
  );
}

export default Welcome;

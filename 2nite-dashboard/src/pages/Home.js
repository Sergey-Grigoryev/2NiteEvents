import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import Logo from "../assets/images/logo.png";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const thoughts = data?.thoughts || [];
  const { data: userData } = useQuery(QUERY_ME);
  console.log(thoughts);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        <h2>Welcome to 2Nite Events</h2>
        <div class="center">
          <img src={Logo} className="App-logo" alt="logo" />
        </div>
        <p>
          2Nite Events is the app for your business if you host events and are
          searching for a way to keep track of number of attendees and average
          dollar spent. It is a one-stop-shop to post your business events and
          keep track of the details that matter.
        </p>
      </div>
    </main>
  );
};

export default Home;

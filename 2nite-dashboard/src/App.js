import logo from "./logo.png";
import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Header from "./components/Header";
//import Header from "./components/Header";
// import { Auth } from "./utils/auth";
// import { useQuery, useMutation } from "@apollo/client";
// import { QUERY_ME } from "./utils/queries";
// import {
//   ADD_CLIENT_ACCOUNT,
//   ADD_EVENT,
//   UPDATE_EVENT,
//   UPDATE_CLIENT_ACCOUNT,
//   GET_ONE_EVENT,
//   GET_ALL_EVENT,
//   LOGIN,
// } from "./utils/mutations";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Welcome to 2Nite Events</p>
//       </header>
//       <footer>
//         <Footer></Footer>
//       </footer>
//     </div>
//   );
// }
function App() {
  const [currentTab, setCurrentTab] = useState("about");
  return (
    <div>
      <div className="mobile-header">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      </div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {/* <div>
      <main>{renderTab()}</main>
    </div> */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

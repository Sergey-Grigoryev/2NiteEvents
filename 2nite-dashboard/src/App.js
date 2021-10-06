import logo from "./logo.png";
import "./App.css";
import { Auth } from "./utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "./utils/queries";
import {
  ADD_CLIENT_ACCOUNT,
  ADD_EVENT,
  UPDATE_EVENT,
  UPDATE_CLIENT_ACCOUNT,
  GET_ONE_EVENT,
  GET_ALL_EVENT,
  LOGIN,
} from "./utils/mutations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to 2Nite Events</p>
      </header>
    </div>
  );
}

export default App;

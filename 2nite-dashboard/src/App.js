import logo from "./logo.png";
import "./App.css";
import { Auth } from "./utils/auth";
import { useQuery, useMutation } from ('@apollo/client');
import { QUERY_ME } from './utils/query';
import { 
  ADD_CLIENT_ACCOUNT,
  ADD_EVENT,
  UPDATE_EVENT,
  UPDATE_CLIENT_ACCOUNT,
  GET_ONE_EVENT,
  GET_ALL_EVENT,
  LOGIN
} from './utils/mutations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

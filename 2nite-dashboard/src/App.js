import logo from "./logo.png";
import "./App.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";

function App() {
  // let localData = [
  //   {
  //     // Title: "Karaoke - DJ Melie Mel",
  //     EndTime: new Date(2021, 9, 5, 11, 0),
  //     StartTime: new Date(2021, 9, 5, 9, 0),
  //   },
  // ];
  return (
    <div className="App">
      <ScheduleComponent currentView="Month" eventSettings={localData}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}

// let loggedIn = true;
// function App() {
//   if (loggedIn) {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   } else {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <button>Log-in / Sign Up</button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

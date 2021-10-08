// import logo from "./logo.png";
import Calendar from "./pages/Calendar";
import "./App.css";
import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/signup" component={Signup} />
//               {/* <Route exact path="/profile/:username?" component={Profile} /> */}
//               <Route exact path="/dashboard" component={Dashboard} />

//               {/* <Route component={NoMatch} /> */}
//             </Switch>
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;

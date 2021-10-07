import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./AppBar";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";

// Apollo queries
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// //Get login token from localstorage
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink), // combine authlink and httplink objects
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function NotFound() {
//   return <h1>404 Page Not Found</h1>;
// }

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          {/* <Header /> */}
          <AppBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
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

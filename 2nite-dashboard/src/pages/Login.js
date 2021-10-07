import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import Footer from "../components/Footer";

const Login = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...formState } });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({ email: "", password: "" });
  };

  return (
    <main>
      <div className="login-container">
        <h4>Log In</h4>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <label htmlFor="login-email">Email: </label>
          <input
            id="login-email"
            className="form-input"
            placeholder="Email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <label htmlFor="login-password">Password: </label>
          <input
            id="login-password"
            className="form-input"
            placeholder="*******"
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button className="form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;

// import Auth from "../utils/auth";
// import { QUERY_ME, GET_ONE_EVENT, GET_ALL_EVENT } from "../utils/queries";
// import { useMutation, useQuery } from "@apollo/client";
// import {
//   ADD_CLIENT_ACCOUNT,
//   ADD_EVENT,
//   UPDATE_EVENT,
//   UPDATE_CLIENT_ACCOUNT,
//   LOGIN,
// } from "../utils/mutations";

// function Login() {
//   const [login, { error }] = useMutation(LOGIN);
//   const [addClientAccount, { err }] = useMutation(ADD_CLIENT_ACCOUNT);
//   const [addEvent, { er }] = useMutation(ADD_EVENT);
//   const [updateEvent, { e }] = useMutation(UPDATE_EVENT);
//   const [updateClientAccount, { e1 }] = useMutation(UPDATE_CLIENT_ACCOUNT);

//   // const { loading, data } = useQuery(GET_ONE_EVENT, {
//   //   variables: { eventId: "615e9509ea38e0efd3731532" },
//   // });

//   const { loading, data, refetch } = useQuery(GET_ALL_EVENT);
//   if (loading) {
//     refetch();
//   } else if (!loading) {
//     console.log(data);
//   }

//   const handleUpdateClientAccount = async () => {
//     console.log("pp");
//     try {
//       const res = await updateClientAccount({
//         variables: {
//           _id: "615e8f516f20782ea57d5621",
//           name: "casey",
//           businessId: "",
//           username: "caseysmells",
//           password: "hewrong",
//         },
//       });
//       console.log(res.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleUpdateEvent = async () => {
//     try {
//       const res = await updateEvent({
//         variables: {
//           _id: "615e9509ea38e0efd3731532",
//           title: "Strip Club",
//           startDate: Date.now(),
//           endDate: Date.now(),
//           avgSpend: 100,
//           numberVisited: 1,
//         },
//       });
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleAddEvent = async () => {
//     try {
//       const res = await addEvent({
//         variables: {
//           title: "Bar",
//           startDate: Date.now(),
//           endDate: Date.now(),
//           avgSpend: 10,
//           numberVisited: 1,
//         },
//       });
//       console.log(res.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleSignup = async () => {
//     try {
//       const res = await addClientAccount({
//         variables: { name: "bee", username: "thebeeman", password: "password" },
//       });
//       const token = res.data.addClientAccount.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleLogin = async () => {
//     try {
//       const res = await login({
//         variables: { username: "thebeeman", password: "password" },
//       });
//       const token = res.data.login.token;
//       console.log(token);
//       Auth.login(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <button onClick={handleLogin}>Log In</button>
//       <button onClick={handleAddEvent}>Add Event</button>
//       <button onClick={handleUpdateEvent}>Update Event</button>
//       <button onClick={handleUpdateClientAccount}>Update Client Account</button>
//     </div>
//   );
// }

// export default Login;

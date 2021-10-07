// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_CLIENT_ACCOUNT } from "../utils/mutations";
// import Auth from "../utils/auth";

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     username: "",
//     name: "",
//     password: "",
//   });

//   const [addUser, { error }] = useMutation(ADD_CLIENT_ACCOUNT);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // use try/catch instead of promises to handle errors
//     try {
//       // execute addUser mutation and pass in variable data from form
//       const { data } = await addUser({
//         variables: { ...formState },
//       });
//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-md-6">
//         <div className="card">
//           <h4 className="card-header">Sign Up</h4>
//           <div className="card-body">
//             <form onSubmit={handleFormSubmit}>
//               <input
//                 className="form-input"
//                 placeholder="Your username"
//                 name="username"
//                 type="username"
//                 id="username"
//                 value={formState.username}
//                 onChange={handleChange}
//               />
//               <input
//                 className="form-input"
//                 placeholder="Your name"
//                 name="name"
//                 type="name"
//                 id="name"
//                 value={formState.name}
//                 onChange={handleChange}
//               />
//               <input
//                 className="form-input"
//                 placeholder="******"
//                 name="password"
//                 type="password"
//                 id="password"
//                 value={formState.password}
//                 onChange={handleChange}
//               />
//               <button className="btn d-block w-100" type="submit">
//                 Submit
//               </button>
//             </form>
//             {error && <div>Sign up failed</div>}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT_ACCOUNT } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [addClientAccount, { error }] = useMutation(ADD_CLIENT_ACCOUNT);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("test", formState);
    try {
      const { data } = await addClientAccount({ variables: { ...formState } });
      console.log("data", data);
      Auth.login(data.addClientAccount.token);
    } catch (e) {
      console.log(e);
    }

    setFormState({ name: "", username: "", password: "" });
  };

  return (
    <div className="signup-container">
      <h4>Sign Up</h4>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <label for="signup-name">Name: </label>
        <input
          id="signup-name"
          className="form-input"
          placeholder="Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        <label for="signup-username">Username: </label>
        <input
          id="signup-username"
          className="form-input"
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        <label for="signup-password">Password: </label>
        <input
          id="signup-password"
          className="form-input"
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        <button
          className="form-button"
          type="submit"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

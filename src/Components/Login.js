import AmazonLogo from "../pngimg.com - amazon_PNG3.png";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) Navigate("/");
      })

      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        if (userCredential) Navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={AmazonLogo} />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signinButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By Signing in you agree to the Amazon clone page made by kalkdian //
          Mulu, for educational purposes only Terms and Conditions of use & //
          sale. Please see our privacy Norice, our cookies notice and our //
          interest based ads Notice
        </p>

        <button className="login__registerButton" onClick={register}>
          {" "}
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import "./Login.css";

// import AmazonLogo from "../pngimg.com - amazon_PNG3.png";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "./Firebase";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

// function Login() {
//   //  the Navigate helps us programatically change the url
//   const Navigate = useNavigate();
//   const auth = getAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

// const signIn = (e) => {
//   e.preventDefault();
//   auth
//     .signInWithEmailAndPassword(email, password)
//     .then((auth) => {
//       if (auth)
//         // push this new page...redirecting to the new page
//         Navigate('/');
//     })
//     .catch((error) => alert(error.message));
// };

// const signIn = (e) => {
//   e.preventDefault();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       if (userCredential) {Navigate("/")};
//     })

//     .catch((error) => alert(error.message));
// };

// const register = (e) => {
//   e.preventDefault();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log(userCredential)
//       if (userCredential) Navigate("/");
//     })
//     .catch((error) => alert(error.message));
// };

//   const register = (e) => {
//     e.preventDefault();
//     auth
//       .createUserWithEmailAndPassword(email, password)

//       .then((auth) => {
//         // successfully created a user with an email and password
//         // console.log(auth);

//         // if the authentication is not empty
//         if (auth)
//           // push this new page...redirecting to the new page
//           Navigate("/");
//       })
//       .catch((error) => alert(error.message));
//     // firebase register
//   };

//   return (
//     <div className="login">
//       <Link to="/">
//         <img className="login__logo" src={AmazonLogo} />
//       </Link>

//       <div className="login__container">
//         <h1> Sign-in </h1>
//         <form>
//           <h5>E-mail</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onclick={signIn}
//             type="submit"
//             className="login__signinButton"
//           >
//             Sign In
//           </button>
//         </form>
//         <p>
//           By Signing in you agree to the Amazon clone page made by kalkdian
//           Mulu, for educational purposes only Terms and Conditions of use &
//           sale. Please see our privacy Norice, our cookies notice and our
//           interest based ads Notice
//         </p>
//         <button
//           onClick={register}
//           type="submit"
//           className="login__registerButton"
//         >
//           Create Your Amazon Account Here
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;

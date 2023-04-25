import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import React, { useEffect } from "react";
import { auth } from "./Components/Firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";

// Elements components provide a flexible way to securely collect payment information in your React app.
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Components/Orders";
import Order from "./Components/Order";

// Stripe Publishable API key pk_test_51Mf042BH9fDvPpDsu9HGn7NQO5yFo8rAhz5fgHemeargfXKPx7hqjAfQm9VV33cxSGCNkXGSXWPwY5tuiwICZJWT004FMq6fIE
// stripe Secrete API key sk_test_51Mf042BH9fDvPpDsSzs3EdzvGqvB6OAOlnNfhQxALWOUAQdvaeBGFlEHKizkpT3zIJcCpSYIJGrYkdhF2W8WTfgq00yeA5HJan

// To use the Elements provider, call loadStripe from @stripe/stripe-js with your publishable key.
// The loadStripe function asynchronously loads the Stripe.js script and initializes a Stripe object.
//  Pass the returned Promise to Elements.

const promise = loadStripe(
  "pk_test_51Mf042BH9fDvPpDsu9HGn7NQO5yFo8rAhz5fgHemeargfXKPx7hqjAfQm9VV33cxSGCNkXGSXWPwY5tuiwICZJWT004FMq6fIE"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is", authUser);
      if (authUser) {
        // the user is/was loggeed in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user logged out
        // the dispatch is supposed to shot the user credentials up to the data layer(state provider)
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Orders" element={<Orders />} />
          {/* <Route path="/Order" element={<Order  />} /> */}

          <Route
            path="Payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

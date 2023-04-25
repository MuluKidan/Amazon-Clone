import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from './Payment';

function ParentPayment() {
    const promise = loadStripe(
        "pk_test_51Mf042BH9fDvPpDsu9HGn7NQO5yFo8rAhz5fgHemeargfXKPx7hqjAfQm9VV33cxSGCNkXGSXWPwY5tuiwICZJWT004FMq6fIE"
      );
  return (
    <div>
        <Elements stripe={promise}>
                 <Payment />
               </Elements>
    </div>
  )
}
export default ParentPayment

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProducts from "./CheckoutProducts";
import "./Payment.css";
import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import axios from "./axios";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./Firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const elements = useElements();
  const stripe = useStripe();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Generate the special client secret to charge a customer
    // but when ever the basket changes we need a new secret

    // creating payment intent and fetching the client secret when ever the basekt updates
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        // the response should have the client secret
      });
      // the response should have the client secret

      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log(getBasketTotal(basket));
  console.log(clientSecret);
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // the below will prevent the user from hitting the "buy not"
    // button multiple times becuase its not ideal
    setProcessing(true);
    // confirm card paymnet
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // payment intent =payment confirmation (its the response just destructureed)
        // console.log(paymentIntent )
        // question: what is the purpose of setting this true
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        // db.collection("users").doc(user?.uid).collection("Orders").add({
        //   paymentIntentId: paymentIntent.id,
        //   basket: basket,
        //   amount: paymentIntent.amount,
        //   created: paymentIntent.created,
        // });

        db.collection("users")
          .doc(user?.uid)
          .collection("Orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        // this is to replace a new path instead of pushing a new one
        // we dont want the users to go back to the paymnet page
        dispatch({
          type: "EMPTY__BASKET",
        });

        navigate("/Orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          CheckOut <Link to="/Checkout">{basket?.length}item </Link>
        </h1>
        {/* this section is for the delivery address */}
        <div className="payment__Section">
          <div className="payment__title">
            <h3> Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p> Lemlem Tabya, Kebele 01</p>
            <p>Debreseit</p>
          </div>
        </div>
        {/* this section is for the items review */}
        <div className="payment__Section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="paymnet__items">
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* this section is for the payment */}
        <div className="payment__Section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__PriceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

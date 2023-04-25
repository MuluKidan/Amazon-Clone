const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Mf042BH9fDvPpDsSzs3EdzvGqvB6OAOlnNfhQxALWOUAQdvaeBGFlEHKizkpT3zIJcCpSYIJGrYkdhF2W8WTfgq00yeA5HJan"
);
// API
// App config
const app = express();
// Middlewares
// app.use(cors({origin:true }));
app.use(cors({ origin: true }));
// , credentials: true
// snd data and pass it in the json format
app.use(express.json());
// API routes

app.get("/", (request, response) => response.status(200).send("hello World"));
app.get("/zazu", (request, response) =>
  response.status(200).send("Whatsup zazu")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log(
    `payment request recieved BOOHOOOO!!! for this amount >>>`,
    total
  );
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // OK--Created
  // Return client secret
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command===allternative way of listenin to the server
exports.api = functions.https.onRequest(app);

// example endpoint
// what is end point
//  http://127.0.0.1:5001/cleaver-clone/us-central1/api

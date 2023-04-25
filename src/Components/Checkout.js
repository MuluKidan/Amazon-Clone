import React from "react";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{basket, user},dispatch]=useStateValue ();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXNm_uXgE1UIVphw8VMv-NwOjOOWKG7uXSg&usqp=CAU"
        ></img>
        <div className="checkout__title ">
          <h3>Hello {user.email}</h3>
          <h2>Your Shopping Basket</h2>

          {basket.map((item)=>(

            <CheckoutProducts
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  );
}

export default Checkout;

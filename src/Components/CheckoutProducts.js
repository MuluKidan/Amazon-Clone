import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProducts({ image, title, price, rating, hideButton }) {
  const [{ basket }, dispatcher] = useStateValue();

  const removeFromBasket = () => {
    // do the function that will be able to remove the item when the emove from basket buttin is hit
    dispatcher({
      type: "REMOVE_FROM_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkputProduct__title">{title}</p>
        <p className="checkputProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>&#11088;</p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProducts;

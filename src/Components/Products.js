import React from 'react'
import "./Products.css"
import { useStateValue } from './StateProvider';
function Products({title,price,rating, image}) {
  const [{basket}, dispatch]=useStateValue();
  // console.log(basket);
const addToBasket =()=>{
  // dispatches the item being added to basket in to the data layer
dispatch({
  type:'ADD_TO_BASKET',
  item:{
    title:title,
    image:image,
    price:price,
    rating:rating,
  }
})
}
  return (
    <div className='product'>
      <div className='product__info'>
    <p> {title}</p>
    <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
    </p>
    <div className='product__rating'>
{Array(rating)
  .fill()
  .map(()=>(
    <p> &#11088;</p>
  ))}
    </div>
      </div>
      <img src={image}></img>
    <button onClick={addToBasket}> Add to Basket</button>
    </div>
  )
}
export default Products

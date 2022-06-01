import React from 'react'
import './ShoppingCart.css';

const ShoppingCart = (props) => {

const HandleDelete = (event) => {
    props.func(event.target.id) 
    //this 
}
    console.log(props.cart)
  return (
      <>
        <h1>ShoppingCart</h1>
            {props.cart.map((product, id) => (
                <div className='product' key={id} >
                    <img src={product.image} alt={product.name} width="18%" />
                    <h3>{product.name}</h3>
                    <h4>{product.description}</h4>
                    <h4>{product.price}</h4>
                    <button onClick={HandleDelete} id={product.id} >Remove</button> 
                </div>
            ))}
      </>
  )
};

export default ShoppingCart;
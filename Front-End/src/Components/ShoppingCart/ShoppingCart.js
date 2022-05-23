import React from 'react'
import Product from '../Product/Product';

const ShoppingCart = () => {

    // const removeFromBag = (ProductToRemove) => {
    //     SetCart(cart.filter(products => products !== productToRemove))
    // }
  return (
      <>
    <h1>ShoppingCart</h1>
    {/* {{bag.map((product, id) => (
        <div className='product' key={id}>
        <h3>{product.name}</h3>
        <h4>{product.description}</h4>
        <h4>{product.price}</h4>
        <button onClick={()=> removeFromBag(productToRemove)} />
        </div>
    ))}} */}
      </>
  )
}

export default ShoppingCart;
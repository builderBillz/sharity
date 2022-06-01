import React from 'react'
import './ShoppingCart.css';
import { useCart } from "react-use-cart";

const ShoppingCart = (props) => {

const HandleDelete = (event) => {
    props.func(event.target.id) 
}
    console.log(props.cart)

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        emptyCart,
    } = useCart();

// if(isEmpty) return <div>
//     <h1 className='text-center py-5'>ShoppingCart</h1>
//     <h5 className='text-center py-5'>You don't have any items in your cart. Let's get shopping!</h5>

//     </div>

return (
    <div className='container-fluid py-5'>
        <div className='row'>
            <h1 className='text-center'>ShoppingCart ({totalItems})</h1>
            <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4'>
                <div className='d-flex justify-content-center py-3'>
                    <table className='table table-primary-light table-hover m-0'>
                        <tbody>
                            {props.cart.map((product, id) => {
                                return (
                                    <tr className='align-middle' key={id} >
                                    <td><img src={product.image} alt={product.name} width="38%" /></td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>${product.price}</td>
                                    
                                    <td>

                                        <button onClick={HandleDelete} id={product.id} className="btn btn-outline-danger mx-1">Remove</button> 
                                    </td>
                                </tr>

    )
    }
    )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)
};

export default ShoppingCart;
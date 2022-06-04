import React from 'react'
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = (props) => {

const HandleDelete = (event) => {
    props.func(event.target.id) 
}
    console.log(props)

    // const {
    //     isEmpty,
    //     totalUniqueItems,
    //     items,
    //     totalItems,
    //     cartTotal,
    //     updateItemQuantity,
    //     emptyCart,
    // } = useCart();

// if(isEmpty) return <div>
//     <h1 className='text-center py-5'>ShoppingCart</h1>
//     <h5 className='text-center py-5'>You don't have any items in your cart. Let's get shopping!</h5>

//     </div>

if (!props.cart.length) {
    
    return (
        <div className='container-fluid py-5'>
            <div className='row gy-4'>
                <h1 className='text-center'>ShoppingCart</h1>
                <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4'>
                    <div className='d-flex justify-content-center py-3'>
                        <div className='justify-content-center'>                   
                                                Your cart is empty 
                                                <Link  to={`/products`}>
                                                    Click Here
                                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} else {

    const prices = props.cart.map((product) => product.price)
    const subtotal = (prices.reduce((a,b) => a + b ))
    const tax = Number((subtotal * 0.08875).toFixed(2))
    const total = Number((subtotal + tax).toFixed(2))
    console.log(total)

    return (
        <div className='container-fluid py-5'>
            <div className='row gy-4'>
                <h1 className='text-center'>ShoppingCart</h1>
                <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4'>
                    <div className='d-flex justify-content-center py-3'>
                        <div className='justify-content-center'>
    
                            <table className='table table-primary-light table-hover m-0'>
                                <tbody className='justify-content-center'>
                                    {props.cart.map((product, id) => {
                                        return (
                                            <tr className='align-middle' key={id} >
                                            <td>
                                                <Link to={`/products/${product.id}`}>
                                                    <img src={product.image} alt={product.name} width="55%" />
                                                </Link>
                                                </td>
                                            <td className="card-title align-top fw-bolder">
                                                <Link to={`/products/${product.id}`}>
                                                    {product.name}
                                                </Link>
                                                </td>
                                            <td className="text-secondary">{product.description}</td>
                                            <td className="align-top fw-bolder">${product.price}</td>
                                            
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
            <div>
                <p>Subtotal = ${subtotal}</p>
                <p>Tax = ${tax}</p>
                <p>Total = ${total}</p>
            </div>
        </div>
    )
    };  
} 

export default ShoppingCart;
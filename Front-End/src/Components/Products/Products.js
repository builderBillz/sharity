import axios from "axios"
import { useEffect, useState } from "react"
import Product from "../Product/Product"
import {  useNavigate } from "react-router-dom";


function Products(props) {

    const navigate = useNavigate();
    const URL = process.env.REACT_APP_API_URL
    const [products, setProducts] = useState([])
   // const [cart, setCart] = useState([]);

    //console.log(URL)
    useEffect(() => {
        axios
        .get(`${URL}/products`)
        .then((response) =>{
           // console.log(response.data)
            setProducts(response.data);
        })
        .catch((error) => console.log("error fetching products", error))
    },[URL])

    const addToCart = (item) => {
    //console.log('we are in addToCart')
     //   setCart([...cart, item]);
     props.func(item)
    };
    console.log(props.cart);


    return(
        <div className="products">
            <header>
                <button
                 onClick={() => navigate("/shoppingCart")}>Go to Cart ({props.cart.length})</button>
            </header>
            <br></br>
            <br></br>
            
            <article>
                {products.map((product) => {
                    return <Product key={product.id} product={product}  addToCart={addToCart} />
                })};
            </article>

        </div>
    )
}

export default Products